#!/usr/bin/env python3
"""Build the NPDM Explorer data files from the community NPDM metadata dump.

Source: r/switch2hacks #dev-research, "post exploit research" thread,
community-contributed npdm-metadata.json (2026-10-24).
"""

from __future__ import annotations

import argparse
import csv
import json
from datetime import datetime, timezone
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
SRC = REPO_ROOT / "data" / "npdm-metadata.json"
DATA_JS = REPO_ROOT / "site" / "data.js"
CSV_OUT = REPO_ROOT / "exports" / "npdm-modules.csv"
SERVICES_CSV = REPO_ROOT / "exports" / "npdm-services.csv"
FAMILIES_CSV = REPO_ROOT / "exports" / "npdm-service-families.csv"

SNAPSHOT_DATE = "2026-10-24"
REVIEWED_DATE = "2026-10-27"

SOURCE = (
    "Community NPDM metadata dump from r/switch2hacks #dev-research "
    "(community contributor, 2026-10-24); see DATA-PROVENANCE.md."
)

# Curated research priorities and short notes. Notes marked "Community" come
# from the sysmodule map posted in the same thread; "Metadata" notes are
# derived from the NPDM fields themselves.
ANNOTATIONS = {
    "chat": {
        "focus": True,
        "tags": ["app", "network", "gpu"],
        "note": "GameChat: Google WebRTC stack + CUDA/TensorRT inference + StreamPlay remote HID. 17 host services, 38 used services.",
        "noteSource": "Community",
    },
    "lrp": {
        "focus": True,
        "tags": ["app", "network", "streaming"],
        "note": "Local Remote Play / GameShare host: H.264+JPEG game streaming over LDN/IP.",
        "noteSource": "Community",
    },
    "nvkernel": {
        "focus": True,
        "tags": ["gpu", "driver"],
        "note": "GPU kernel-mode server split out of nvservices. 69 syscalls, GPU MMIO at 0x1707_0000+, 20 MiB carveout.",
        "noteSource": "Community",
    },
    "cmptldr": {
        "focus": True,
        "tags": ["compat", "loader"],
        "note": "Switch 1 backwards-compat per-title binary patcher; uses ldr:cmpt.",
        "noteSource": "Community",
    },
    "gsvm": {
        "focus": True,
        "tags": ["codec", "gpu"],
        "note": "Broker/registry for the gsv* multimedia server instances.",
        "noteSource": "Community",
    },
    "gsv1": {
        "focus": True,
        "tags": ["codec", "gpu"],
        "note": "Isolated NVIDIA OpenMAX codec server (H.264/VP9/AV1/JPEG + NVENC); host1x channel + syncpt IRQ.",
        "noteSource": "Community",
    },
    "gsv3": {
        "focus": True,
        "tags": ["codec", "gpu"],
        "note": "Isolated NVIDIA OpenMAX codec server (H.264/VP9/AV1/JPEG + NVENC); host1x channel + syncpt IRQ.",
        "noteSource": "Community",
    },
    "gsv4": {
        "focus": True,
        "tags": ["codec", "gpu"],
        "note": "Isolated NVIDIA OpenMAX codec server (H.264/VP9/AV1/JPEG + NVENC); host1x channel + syncpt IRQ.",
        "noteSource": "Community",
    },
    "speech": {
        "focus": True,
        "tags": ["audio", "tts"],
        "note": "VoiceWare/ReadSpeaker 'VTAPI' text-to-speech engine with an SSML parser; host spch:a.",
        "noteSource": "Community",
    },
    "sdcard": {
        "focus": True,
        "tags": ["storage", "driver"],
        "note": "microSD Express driver: SDMMC1 + PCIe/NVMe; MMIO 0x0340_0000, IRQ 94.",
        "noteSource": "Community",
    },
    "adraw": {
        "focus": True,
        "tags": ["display", "applet"],
        "note": "Applet draw layer/compositor broker for system applets and GameChat video tiles.",
        "noteSource": "Community",
    },
    "imf": {
        "focus": True,
        "tags": ["input", "ime"],
        "note": "Input Method Framework: iWnn IME (JP / zh-CN pinyin / zh-TW bopomofo).",
        "noteSource": "Community",
    },
    "host1x": {
        "focus": True,
        "tags": ["gpu", "driver"],
        "note": "host1x controller + NVDEC/NVENC/VIC firmware & channel manager; MMIO 0x13e0_0000, IRQ 295.",
        "noteSource": "Community",
    },
    "eth": {
        "focus": True,
        "tags": ["network", "driver"],
        "note": "USB-Ethernet (dock) NIC driver, nn::anif; over usb:hs.",
        "noteSource": "Community",
    },
    "camera.autogen": {
        "focus": True,
        "tags": ["camera", "driver"],
        "note": "USB Video Class camera driver + DFU camera firmware updater; over usb:hs.",
        "noteSource": "Community",
    },
    "tsec.autogen": {
        "focus": True,
        "tags": ["crypto", "security"],
        "note": "TSEC co-processor server, HDCP session management; MMIO 0x1550_0000, IRQ 260.",
        "noteSource": "Community",
    },
    "ns": {
        "focus": True,
        "tags": ["system", "fs"],
        "note": "Namespace/service broker; broad FS permission mask 0x000000140c215859 and 46 used services.",
        "noteSource": "Metadata",
    },
    "ro": {
        "focus": True,
        "tags": ["loader", "code"],
        "note": "Maps executable code; only 3 hosts/3 uses, 55 syscalls. Key for code-loading paths.",
        "noteSource": "Metadata",
    },
    "creport": {
        "focus": True,
        "tags": ["crash", "debug"],
        "note": "Crash reporter with forceDebug=true / allowDebug=false; debug-path candidate.",
        "noteSource": "Metadata",
    },
    "pcie": {
        "focus": True,
        "tags": ["pcie", "driver"],
        "note": "PCIe driver with 100+ IRQs and 21 maps; large hardware attack surface.",
        "noteSource": "Metadata",
    },
    "Bus": {
        "focus": True,
        "tags": ["system", "driver"],
        "note": "System bus broker; 30 maps, 20 IRQs, 9 host services.",
        "noteSource": "Metadata",
    },
    "nvservices": {
        "focus": True,
        "tags": ["gpu"],
        "note": "GPU services; 29 maps, 6 host services, 67 syscalls.",
        "noteSource": "Metadata",
    },
    "vi2.autogen": {
        "focus": True,
        "tags": ["display"],
        "note": "Display/compositor; 14 host services, 63 syscalls, 14 maps, 8 IRQs.",
        "noteSource": "Metadata",
    },
    "usb.gen2": {
        "tags": ["usb", "driver"],
        "note": "USB stack; 14 maps, 2 IRQs.",
        "noteSource": "Metadata",
    },
    "bluetooth.gen2": {"tags": ["bluetooth", "driver"]},
    "wlan.autogen": {"tags": ["wifi", "driver"]},
    "hid": {"tags": ["input"]},
    "audio": {"tags": ["audio"]},
    "am": {"tags": ["applet", "system"]},
    "es": {"tags": ["eshop", "system"]},
    "account": {"tags": ["account"]},
    "ssl": {"tags": ["crypto", "network"]},
    "nim": {"tags": ["network", "update"]},
    "bcat": {"tags": ["network", "background"]},
    "nifm": {"tags": ["network"]},
    "ldn": {"tags": ["network", "local"]},
    "bsdsocket": {"tags": ["network"]},
    "friends": {"tags": ["social"]},
    "nfc": {"tags": ["nfc"]},
    "sdb": {"tags": ["debug"]},
    "migration": {"tags": ["transfer"]},
    "jpegdec": {"tags": ["codec"]},
    "olsc": {"tags": ["online"]},
    "ptm.prod": {"tags": ["power", "thermal"]},
    "pcv": {"tags": ["power"]},
    "psc": {"tags": ["power"]},
    "pctl": {"tags": ["parental"]},
    "npns": {"tags": ["notifications"]},
    "fatal": {"tags": ["error"]},
    "erpt": {"tags": ["error"]},
    "eclct": {"tags": ["error"]},
    "capsrv": {"tags": ["capture"]},
    "capsrv2": {"tags": ["capture"]},
    "capmtp": {"tags": ["capture"]},
    "gc": {"tags": ["gamecard"]},
    "boot2.ProdBoot": {"tags": ["boot"]},
    "settings": {"tags": ["settings"]},
    "LogManager.Prod": {"tags": ["logging"]},
}

# Key IPC services. Presence here marks a service as "key" in the explorer and
# attaches a short note. A service with no host in the dump is usually a
# built-in sysmodule/KIP (fs, ldr, sm, pm, spl) rather than a system title.
KEY_SERVICES = {
    "fsp-srv": "Filesystem service broker; 34 system modules use it. No host in this dump - hosted by the built-in fs sysmodule, the target of the current ns2jb chain.",
    "fatal:u": "Fatal error service; 57 users. Hosted by fatal.",
    "set:sys": "System settings; 49 users. Hosted by settings.",
    "lm": "Log manager; 43 users. Hosted by LogManager.Prod.",
    "psc:m": "Power state coordinator; 37 users. Hosted by psc.",
    "srepo:u": "Repository service in this dump; 37 users, hosted by psc. Verify the semantics against the NPDM/ACL data.",
    "erpt:c": "Error report service; 21 users. Hosted by erpt.",
    "pm:bm": "Process manager boot/manager; 13 users. No host in this dump (built-in pm).",
    "pm:info": "Process manager info; 3 users. No host in this dump (built-in pm).",
    "pm:shell": "Process manager shell; 2 users. No host in this dump (built-in pm).",
    "ldr:ro": "Loader service hosted by ro; no users in this dump.",
    "ldr:cmpt": "Loader compat service used by cmptldr; no host in this dump (built-in ldr).",
    "ldr:shel": "Loader shell service used by pgl; no host in this dump (built-in ldr).",
    "ro:1": "ro service; hosted by ro, no users in this dump.",
    "ro:dmnt": "ro debug service; hosted by ro, no users in this dump.",
    "ncm": "Content manager; used by ns, nim, boot2.ProdBoot. No host in this dump.",
    "tsec:m": "TSEC mailbox; hosted by tsec.autogen, used by vi2.autogen.",
    "gpuk:drv": "GPU kernel driver; hosted by nvkernel, used by nvservices.",
    "gpuk:gsv": "GPU kernel codec service; hosted by nvkernel, used by gsv1/gsv3.",
    "nvdrv:s": "GPU driver; hosted by nvservices, used by 6 modules.",
    "host1x": "Host1x channel manager; hosted by host1x, used by 6 modules.",
    "gsv:m": "OpenMAX broker; hosted by gsvm, used by am.",
    "gsv:s3": "OpenMAX codec service; hosted by gsv3, used by chat and adraw.",
    "usb:hs": "USB high-speed; hosted by usb.gen2, used by 6 modules.",
    "pcie": "PCIe service; hosted by pcie, used by sdcard and wlan.autogen.",
    "bsd:s": "BSD sockets; hosted by bsdsocket, used by 15 modules.",
    "nifm:s": "Network interface manager; hosted by nifm, used by 13 modules.",
    "spl:": "Security/SPL service; used by sdcard, ro, am. No host in this dump (built-in spl).",
    "spl:mig": "SPL migration service; used by 5 modules. No host in this dump.",
    "spl:ssl": "SPL SSL service; used by ssl. No host in this dump.",
    "hid:sys": "HID system service; hosted by hid, used by 9 modules.",
    "vi2:m1": "Display service; hosted by vi2.autogen, used by omm and fatal.",
    "es": "eShop/content service; hosted by es, used by 5 modules.",
    "nim": "Network install manager; hosted by nim, used by ns.",
    "set:cal": "Settings calibration service; hosted by settings, used by 12 modules.",
    "ssl:s": "SSL service; hosted by ssl, used by 12 modules.",
}

FAMILY_NOTES = {
    "fsp-srv": "Filesystem broker; no host in this dump (built-in fs).",
    "fs": "Filesystem-related services; fs:stcfg has no host in this dump.",
    "ldr": "Loader services; ldr:ro is hosted by ro; ldr:cmpt and ldr:shel have no host in this dump.",
    "pm": "Process manager services; no hosts in this dump (built-in pm).",
    "spl": "Security/SPL services; no hosts in this dump (built-in spl).",
    "ncm": "Content manager; no host in this dump.",
    "sm": "Service manager family; not used by these system titles.",
    "clkrst": "Clock/reset service; no host in this dump (likely built-in).",
    "dt": "Device tree service; no host in this dump (likely built-in).",
    "csrng": "Randomness service; no host in this dump (likely built-in).",
    "bpmpmr": "BPMP memory-region services; no host in this dump (likely built-in).",
    "lr": "Location resolver; no host in this dump (likely built-in).",
    "bsdcfg": "BSD configuration; no host in this dump.",
    "ethd": "Ethernet daemon services; no host in this dump.",
    "htc": "HTC services; no host in this dump.",
    "nettc": "Network traffic control; no host in this dump.",
    "nvdrv": "NVIDIA driver services; nvdrv:s is hosted by nvservices (6 users).",
    "gpuk": "GPU kernel services; hosted by nvkernel.",
    "gsv": "OpenMAX codec services; hosted by gsv1, gsv3, gsv4, and gsvm.",
    "host1x": "Host1x channel manager; 6 users.",
    "tsec": "TSEC mailbox; hosted by tsec.autogen.",
    "sdcard": "microSD Express driver; uses pcie and hosts no service in this dump.",
    "chat": "GameChat services; 17 hosted by chat.",
    "lrp": "Local Remote Play services; 5 hosted by lrp.",
    "stpl": "StreamPlay services; hosted by chat.",
    "hid": "HID services; hid:sys is used by 9 modules.",
    "imf": "Input method framework; hosted by imf.",
    "vi2": "Display services; hosted by vi2.autogen.",
    "bsd": "BSD socket services; bsd:s is hosted by bsdsocket (15 users).",
    "nifm": "Network interface manager; nifm:s is used by 13 modules.",
    "ssl": "SSL services; ssl:s is used by 12 modules.",
    "usb": "USB services; hosted by usb.gen2.",
    "pcie": "PCIe service; hosted by pcie.",
    "set": "Settings services; set:sys is used by 49 modules.",
    "psc": "Power state coordinator; psc:m is used by 37 modules; srepo:u is also hosted by psc in this dump.",
    "fatal": "Fatal error services; fatal:u is used by 57 modules.",
    "lm": "Log manager; 43 users.",
    "erpt": "Error report services; erpt:c is used by 21 modules.",
}

KNOWN_BUILTIN_FAMILIES = {
    "fsp-srv", "fs", "ldr", "pm", "spl", "ncm", "sm",
    "clkrst", "dt", "csrng", "bpmpmr", "lr", "bsdcfg",
    "ethd", "htc", "htcs", "nettc",
}


def require(module: dict, key: str, typ):
    value = module.get(key)
    if not isinstance(value, typ):
        raise TypeError(f"{module.get('name', '?')}: expected {key} to be {typ.__name__}")
    return value


def build_module(raw: dict, max_surface_raw: float) -> dict:
    name = require(raw, "name", str)
    kernel = raw.get("kernel") or {}
    hosts = list(raw.get("hostsServices") or [])
    uses = list(raw.get("usesServices") or [])
    acid_hosts = list(raw.get("acidHostsServices") or [])
    syscalls = list(kernel.get("syscalls") or [])
    irqs = list(kernel.get("irqs") or [])
    maps = int(kernel.get("maps") or 0)
    handle_table = kernel.get("handleTable")
    debug = kernel.get("debug")
    fs_perm = str(raw.get("fsPermissions") or "0000000000000000")
    fs_nonzero = int(fs_perm, 16) != 0
    ann = ANNOTATIONS.get(name, {})

    surface_raw = (
        len(hosts) * 3.0
        + len(uses) * 1.0
        + len(syscalls) * 0.5
        + maps * 0.5
        + min(len(irqs), 10) * 0.5
        + (5.0 if fs_nonzero else 0.0)
        + (5.0 if debug else 0.0)
    )
    surface = round(surface_raw / max_surface_raw * 100.0, 1) if max_surface_raw else 0.0

    breakdown = [
        {"label": "Host services", "count": len(hosts), "weight": 3.0, "points": len(hosts) * 3.0},
        {"label": "Used services", "count": len(uses), "weight": 1.0, "points": len(uses) * 1.0},
        {"label": "Syscalls", "count": len(syscalls), "weight": 0.5, "points": len(syscalls) * 0.5},
        {"label": "Memory maps", "count": maps, "weight": 0.5, "points": maps * 0.5},
        {"label": "IRQs (capped at 10)", "count": len(irqs), "weight": 0.5, "points": min(len(irqs), 10) * 0.5},
        {"label": "Nonzero FS permissions", "count": 1 if fs_nonzero else 0, "weight": 5.0, "points": 5.0 if fs_nonzero else 0.0},
        {"label": "Debug metadata", "count": 1 if debug else 0, "weight": 5.0, "points": 5.0 if debug else 0.0},
    ]

    return {
        "name": name,
        "programId": str(raw.get("programId") or ""),
        "file": str(raw.get("file") or ""),
        "is64Bit": bool(raw.get("is64Bit")),
        "addressSpace": raw.get("addressSpace"),
        "mainThreadPriority": raw.get("mainThreadPriority"),
        "mainThreadCore": raw.get("mainThreadCore"),
        "mainThreadStackSize": raw.get("mainThreadStackSize"),
        "systemResourceSize": raw.get("systemResourceSize"),
        "version": raw.get("version"),
        "versionHex": f"0x{int(raw.get('version') or 0):08X}",
        "productCode": str(raw.get("productCode") or ""),
        "fsPermissions": fs_perm,
        "fsPermissionsHex": f"0x{fs_perm}",
        "fsPermNonzero": fs_nonzero,
        "hostsServices": hosts,
        "usesServices": uses,
        "acidHostsServices": acid_hosts,
        "kernel": {
            "syscalls": syscalls,
            "maps": maps,
            "irqs": irqs,
            "appletType": kernel.get("appletType"),
            "handleTable": handle_table,
            "debug": debug,
        },
        "hostCount": len(hosts),
        "useCount": len(uses),
        "acidHostCount": len(acid_hosts),
        "syscallCount": len(syscalls),
        "mapCount": maps,
        "irqCount": len(irqs),
        "surfaceRaw": round(surface_raw, 1),
        "surface": surface,
        "surfaceBreakdown": breakdown,
        "focus": bool(ann.get("focus", False)),
        "tags": sorted(set(ann.get("tags", []))),
        "note": ann.get("note", ""),
        "noteSource": ann.get("noteSource", ""),
    }


def module_ref(module: dict) -> dict:
    return {
        "name": module["name"],
        "programId": module["programId"],
        "surface": module["surface"],
        "focus": module["focus"],
        "hostCount": module["hostCount"],
        "useCount": module["useCount"],
    }


def build_services(modules: list[dict]) -> list[dict]:
    table: dict[str, dict] = {}
    for module in modules:
        ref = module_ref(module)
        for name in module["hostsServices"]:
            entry = table.setdefault(name, {"name": name, "hosts": [], "users": [], "acidHosts": []})
            entry["hosts"].append(ref)
        for name in module["usesServices"]:
            entry = table.setdefault(name, {"name": name, "hosts": [], "users": [], "acidHosts": []})
            entry["users"].append(ref)
        for name in module["acidHostsServices"]:
            entry = table.setdefault(name, {"name": name, "hosts": [], "users": [], "acidHosts": []})
            entry["acidHosts"].append(ref)

    services = []
    for name, entry in table.items():
        entry["hostCount"] = len(entry["hosts"])
        entry["useCount"] = len(entry["users"])
        entry["acidHostCount"] = len(entry["acidHosts"])
        entry["totalCount"] = entry["hostCount"] + entry["useCount"]
        entry["family"] = name.split(":", 1)[0] if ":" in name else name
        entry["key"] = name in KEY_SERVICES
        entry["note"] = KEY_SERVICES.get(name, "")
        entry["noHost"] = entry["hostCount"] == 0 and entry["useCount"] > 0
        for list_key in ("hosts", "users", "acidHosts"):
            entry[list_key].sort(key=lambda ref: (-int(ref["focus"]), -ref["surface"], ref["name"]))
        services.append(entry)

    services.sort(key=lambda s: (-s["useCount"], -s["hostCount"], s["name"]))
    return services


def build_families(services: list[dict]) -> list[dict]:
    table: dict[str, dict] = {}
    for service in services:
        family = table.setdefault(
            service["family"],
            {
                "name": service["family"],
                "services": [],
                "hosts": {},
                "users": {},
                "keyCount": 0,
                "noHostCount": 0,
            },
        )
        family["services"].append(service["name"])
        family["keyCount"] += 1 if service["key"] else 0
        family["noHostCount"] += 1 if service["noHost"] else 0
        for ref in service["hosts"]:
            family["hosts"][ref["programId"]] = ref
        for ref in service["users"]:
            family["users"][ref["programId"]] = ref

    families = []
    for name, family in table.items():
        hosts = sorted(
            family["hosts"].values(),
            key=lambda ref: (-int(ref["focus"]), -ref["surface"], ref["name"]),
        )
        users = sorted(
            family["users"].values(),
            key=lambda ref: (-int(ref["focus"]), -ref["surface"], ref["name"]),
        )
        service_count = len(family["services"])
        families.append({
            "name": name,
            "services": sorted(family["services"]),
            "serviceCount": service_count,
            "hostCount": len(hosts),
            "useCount": len(users),
            "totalCount": len(hosts) + len(users),
            "keyCount": family["keyCount"],
            "key": family["keyCount"] > 0,
            "noHostCount": family["noHostCount"],
            "noHost": family["noHostCount"] == service_count,
            "likelyBuiltin": (
                name in KNOWN_BUILTIN_FAMILIES
                and family["noHostCount"] == service_count
            ),
            "note": FAMILY_NOTES.get(name, ""),
            "hosts": hosts,
            "users": users,
        })

    families.sort(key=lambda f: (-f["useCount"], -f["hostCount"], f["name"]))
    return families


def service_ref(service: dict) -> dict:
    return {
        "name": service["name"],
        "family": service["family"],
        "hostCount": service["hostCount"],
        "useCount": service["useCount"],
        "key": service["key"],
        "note": service["note"],
    }


def family_ref(family: dict) -> dict:
    return {
        "name": family["name"],
        "serviceCount": family["serviceCount"],
        "hostCount": family["hostCount"],
        "useCount": family["useCount"],
        "key": family["key"],
        "noHostCount": family["noHostCount"],
        "likelyBuiltin": family["likelyBuiltin"],
        "note": family["note"],
    }


GPU_FAMILIES = {"gpuk", "nvdrv", "host1x", "gsv", "vi2", "vic", "disp", "nv"}
GPU_MODULES = {
    "nvkernel", "nvservices", "host1x", "gsv1", "gsv3", "gsv4",
    "gsvm", "vi2.autogen", "adraw", "vic",
}
FS_FAMILIES = {"fsp-srv", "fs", "ldr", "ro", "ncm", "es", "ns", "sdcard", "gc", "nca"}
FS_MODULES = {"ro", "es", "ns", "sdcard", "gc", "boot2.ProdBoot"}
NET_FAMILIES = {
    "bsd", "nifm", "ldn", "nim", "ssl", "nsd", "sfdnsres", "nettc",
    "htc", "htcs", "ethd", "wlan", "bt", "btm", "nfc", "arp",
}
NET_MODULES = {"bsdsocket", "nifm", "ldn", "nim", "ssl", "nfc", "bluetooth.gen2", "wlan.autogen", "eth", "friends"}
INPUT_FAMILIES = {"hid", "hidc", "hidbus", "imf"}
INPUT_MODULES = {"hid", "imf"}


def build_insights(modules: list[dict], services: list[dict], families: list[dict]) -> dict:
    builtin_gaps = sorted(
        (service for service in services if service["noHost"]),
        key=lambda service: (-service["useCount"], service["name"]),
    )[:12]
    builtin_families = sorted(
        (family for family in families if family["likelyBuiltin"]),
        key=lambda family: (-family["useCount"], family["name"]),
    )[:12]

    by_module: dict[str, dict] = {}
    for service in services:
        for host in service["hosts"]:
            entry = by_module.setdefault(
                host["programId"],
                {"module": host, "services": [], "users": {}},
            )
            entry["services"].append({
                "name": service["name"],
                "family": service["family"],
                "useCount": service["useCount"],
            })
            for user in service["users"]:
                entry["users"][user["programId"]] = user

    host_leverage = []
    for entry in by_module.values():
        entry["services"].sort(key=lambda item: (-item["useCount"], item["name"]))
        host_leverage.append({
            "module": module_ref(entry["module"]),
            "uniqueUsers": len(entry["users"]),
            "serviceCount": len(entry["services"]),
            "topService": entry["services"][0] if entry["services"] else None,
            "services": entry["services"][:10],
        })
    host_leverage.sort(
        key=lambda item: (-item["uniqueUsers"], -item["serviceCount"], item["module"]["name"])
    )
    host_leverage = host_leverage[:12]

    widest_clients = [
        module_ref(module)
        for module in sorted(
            modules,
            key=lambda module: (-module["useCount"], -module["surface"], module["name"]),
        )[:12]
    ]

    def cluster(family_names: set[str], module_names: set[str]) -> dict:
        cluster_modules = []
        for module in modules:
            hosted_families = {
                service.split(":", 1)[0] if ":" in service else service
                for service in module["hostsServices"]
            }
            if module["name"] in module_names or hosted_families & family_names:
                cluster_modules.append(module)
        cluster_modules.sort(key=lambda module: (-module["surface"], module["name"]))
        cluster_services = [service for service in services if service["family"] in family_names]
        cluster_services.sort(key=lambda service: (-service["useCount"], service["name"]))
        return {
            "modules": [module_ref(module) for module in cluster_modules[:12]],
            "services": [service_ref(service) for service in cluster_services[:20]],
        }

    return {
        "builtinGaps": [service_ref(service) for service in builtin_gaps],
        "builtinFamilies": [family_ref(family) for family in builtin_families],
        "hostLeverage": host_leverage,
        "widestClients": widest_clients,
        "clusters": {
            "gpu": cluster(GPU_FAMILIES, GPU_MODULES),
            "filesystem": cluster(FS_FAMILIES, FS_MODULES),
            "network": cluster(NET_FAMILIES, NET_MODULES),
            "input": cluster(INPUT_FAMILIES, INPUT_MODULES),
        },
    }


def write_data_js(
    modules: list[dict],
    services: list[dict],
    families: list[dict],
    insights: dict,
    max_surface_raw: float,
) -> None:
    payload = {
        "generatedAt": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "source": SOURCE,
        "snapshotDate": SNAPSHOT_DATE,
        "reviewedDate": REVIEWED_DATE,
        "moduleCount": len(modules),
        "maxSurfaceRaw": round(max_surface_raw, 1),
        "serviceCount": len(services),
        "keyServiceCount": sum(1 for s in services if s["key"]),
        "noHostServiceCount": sum(1 for s in services if s["noHost"]),
        "maxServiceUse": max((s["useCount"] for s in services), default=0),
        "familyCount": len(families),
        "likelyBuiltinFamilyCount": sum(1 for f in families if f["likelyBuiltin"]),
        "modules": modules,
        "services": services,
        "families": families,
        "insights": insights,
    }
    DATA_JS.write_text(
        "window.NPDM_DATA = "
        + json.dumps(payload, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )


def write_csv(modules: list[dict]) -> None:
    fields = [
        "name", "programId", "focus", "tags", "surface", "surfaceRaw",
        "hostCount", "hostsServices", "useCount", "usesServices",
        "acidHostCount", "acidHostsServices", "syscallCount", "syscalls",
        "mapCount", "irqCount", "irqs", "handleTable", "appletType", "debug",
        "fsPermissions", "fsPermNonzero", "is64Bit", "addressSpace",
        "mainThreadPriority", "mainThreadCore", "mainThreadStackSize",
        "systemResourceSize", "version", "versionHex", "productCode",
        "note", "noteSource", "file",
    ]
    with CSV_OUT.open("w", encoding="utf-8-sig", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fields, extrasaction="ignore")
        writer.writeheader()
        for m in modules:
            row = {
                **m,
                "tags": "; ".join(m["tags"]),
                "hostsServices": "; ".join(m["hostsServices"]),
                "usesServices": "; ".join(m["usesServices"]),
                "acidHostsServices": "; ".join(m["acidHostsServices"]),
                "syscalls": " ".join(str(x) for x in m["kernel"]["syscalls"]),
                "irqs": " ".join(str(x) for x in m["kernel"]["irqs"]),
                "handleTable": "" if m["kernel"]["handleTable"] is None else m["kernel"]["handleTable"],
                "appletType": "" if m["kernel"]["appletType"] is None else m["kernel"]["appletType"],
                "debug": "" if m["kernel"]["debug"] is None else json.dumps(m["kernel"]["debug"]),
            }
            row["focus"] = "yes" if m["focus"] else "no"
            row["fsPermNonzero"] = "yes" if m["fsPermNonzero"] else "no"
            row["is64Bit"] = "yes" if m["is64Bit"] else "no"
            writer.writerow(row)


def write_services_csv(services: list[dict]) -> None:
    fields = [
        "name", "family", "key", "hostCount", "useCount", "totalCount",
        "noHost", "hosts", "users", "acidHosts", "note",
    ]
    with SERVICES_CSV.open("w", encoding="utf-8-sig", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fields, extrasaction="ignore")
        writer.writeheader()
        for s in services:
            writer.writerow({
                "name": s["name"],
                "family": s["family"],
                "key": "yes" if s["key"] else "no",
                "hostCount": s["hostCount"],
                "useCount": s["useCount"],
                "totalCount": s["totalCount"],
                "noHost": "yes" if s["noHost"] else "no",
                "hosts": "; ".join(f"{r['name']} ({r['programId']})" for r in s["hosts"]),
                "users": "; ".join(f"{r['name']} ({r['programId']})" for r in s["users"]),
                "acidHosts": "; ".join(f"{r['name']} ({r['programId']})" for r in s["acidHosts"]),
                "note": s["note"],
            })


def write_families_csv(families: list[dict]) -> None:
    fields = [
        "name", "serviceCount", "hostCount", "useCount", "totalCount",
        "keyCount", "noHostCount", "noHost", "likelyBuiltin",
        "services", "hosts", "users", "note",
    ]
    with FAMILIES_CSV.open("w", encoding="utf-8-sig", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fields, extrasaction="ignore")
        writer.writeheader()
        for family in families:
            writer.writerow({
                "name": family["name"],
                "serviceCount": family["serviceCount"],
                "hostCount": family["hostCount"],
                "useCount": family["useCount"],
                "totalCount": family["totalCount"],
                "keyCount": family["keyCount"],
                "noHostCount": family["noHostCount"],
                "noHost": "yes" if family["noHost"] else "no",
                "likelyBuiltin": "yes" if family["likelyBuiltin"] else "no",
                "services": "; ".join(family["services"]),
                "hosts": "; ".join(f"{r['name']} ({r['programId']})" for r in family["hosts"]),
                "users": "; ".join(f"{r['name']} ({r['programId']})" for r in family["users"]),
                "note": family["note"],
            })


def main() -> None:
    parser = argparse.ArgumentParser(description="Build the NPDM Explorer data files.")
    parser.add_argument("--data", default=str(REPO_ROOT / "data" / "npdm-metadata.json"))
    parser.add_argument("--out", default=str(REPO_ROOT / "site"))
    parser.add_argument("--exports", default=str(REPO_ROOT / "exports"))
    args = parser.parse_args()

    global SRC, DATA_JS, CSV_OUT, SERVICES_CSV, FAMILIES_CSV
    SRC = Path(args.data)
    output_dir = Path(args.out)
    exports_dir = Path(args.exports)
    output_dir.mkdir(parents=True, exist_ok=True)
    exports_dir.mkdir(parents=True, exist_ok=True)
    DATA_JS = output_dir / "data.js"
    CSV_OUT = exports_dir / "npdm-modules.csv"
    SERVICES_CSV = exports_dir / "npdm-services.csv"
    FAMILIES_CSV = exports_dir / "npdm-service-families.csv"

    raw = json.loads(SRC.read_text(encoding="utf-8"))
    if not isinstance(raw, list) or not raw:
        raise ValueError("expected a non-empty JSON array")

    # Two-pass so surface is normalized against the dataset maximum.
    max_surface_raw = 0.0
    for m in raw:
        kernel = m.get("kernel") or {}
        fs_nonzero = int(str(m.get("fsPermissions") or "0"), 16) != 0
        raw_score = (
            len(m.get("hostsServices") or []) * 3.0
            + len(m.get("usesServices") or []) * 1.0
            + len(kernel.get("syscalls") or []) * 0.5
            + int(kernel.get("maps") or 0) * 0.5
            + min(len(kernel.get("irqs") or []), 10) * 0.5
            + (5.0 if fs_nonzero else 0.0)
            + (5.0 if kernel.get("debug") else 0.0)
        )
        max_surface_raw = max(max_surface_raw, raw_score)

    modules = [build_module(m, max_surface_raw) for m in raw]
    modules.sort(key=lambda m: (-int(m["focus"]), -m["surface"], m["name"].lower()))
    services = build_services(modules)
    families = build_families(services)
    insights = build_insights(modules, services, families)

    write_data_js(modules, services, families, insights, max_surface_raw)
    write_csv(modules)
    write_services_csv(services)
    write_families_csv(families)

    print(f"loaded {len(modules)} modules from {SRC}")
    print(f"focus modules: {sum(1 for m in modules if m['focus'])}")
    print(f"nonzero fs permissions: {sum(1 for m in modules if m['fsPermNonzero'])}")
    print(f"host-service providers: {sum(1 for m in modules if m['hostCount'])}")
    print(f"total syscalls: {sum(m['syscallCount'] for m in modules)}")
    print(f"max surface raw: {max_surface_raw:.1f}")
    print(f"services: {len(services)} ({sum(1 for s in services if s['key'])} key, "
          f"{sum(1 for s in services if s['noHost'])} without a host in the dump)")
    print(f"families: {len(families)} ({sum(1 for f in families if f['likelyBuiltin'])} likely built-in)")
    print("\ntop 12 by surface:")
    for m in sorted(modules, key=lambda m: -m["surface"])[:12]:
        print(f"  {m['surface']:5.1f}  {m['name']}")
    print("\ntop 12 services by users:")
    for s in services[:12]:
        print(f"  {s['useCount']:3d} users  {s['name']}")
    print("\ntop 12 families by users:")
    for f in families[:12]:
        print(f"  {f['useCount']:3d} users  {f['name']}")
    print(f"\nwrote {DATA_JS.name}, {CSV_OUT.name}, {SERVICES_CSV.name}, and {FAMILIES_CSV.name}")


if __name__ == "__main__":
    main()
