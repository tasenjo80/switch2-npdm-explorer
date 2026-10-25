window.NPDM_DATA = {
  "generatedAt": "2026-10-25T08:59:17+00:00",
  "source": "Community NPDM metadata dump from r/switch2hacks #dev-research (Miru, 2026-10-24), included provisionally; see DATA-PROVENANCE.md.",
  "moduleCount": 64,
  "maxSurfaceRaw": 121.5,
  "serviceCount": 319,
  "keyServiceCount": 36,
  "noHostServiceCount": 31,
  "maxServiceUse": 57,
  "familyCount": 144,
  "likelyBuiltinFamilyCount": 15,
  "modules": [
    {
      "name": "chat",
      "programId": "040000000000004a",
      "file": "dumps/system-code/040000000000004a/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 58,
      "mainThreadCore": 6,
      "mainThreadStackSize": 32768,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "4000800000100008",
      "fsPermissionsHex": "0x4000800000100008",
      "fsPermNonzero": true,
      "hostsServices": [
        "chat:a",
        "chat:alb",
        "chat:ch",
        "chat:con",
        "chat:dbg",
        "chat:ds",
        "chat:hdr",
        "chat:myp",
        "chat:nxs",
        "chat:sa",
        "chat:set",
        "chat:sp",
        "chat:u",
        "chat:wu",
        "stpl:dbg",
        "stpl:sys",
        "stpl:u"
      ],
      "usesServices": [
        "acc:e:u1",
        "appletAE",
        "arp:r",
        "aud:u",
        "audctl",
        "auddmg:u",
        "audsmx:u",
        "bsd:s",
        "bt:sys",
        "cam:s",
        "chat:ch",
        "csrng",
        "dauth:0",
        "ectx:w",
        "erpt:c",
        "fatal:p",
        "fatal:u",
        "friend:s",
        "fsp-srv",
        "gsv:s3",
        "hid:sys",
        "htcs:sys",
        "lm",
        "lrp:u",
        "nifm:s",
        "npns:s",
        "ns:ro",
        "nsd:u",
        "olsc:s",
        "pctl:s",
        "psc:m",
        "set:sys",
        "sfdnsres",
        "srepo:u",
        "ssl:s",
        "time:u",
        "vi2:m2",
        "vic:u"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69,
          80,
          81,
          82,
          128,
          144,
          145
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": null,
        "debug": null
      },
      "hostCount": 17,
      "useCount": 38,
      "acidHostCount": 0,
      "syscallCount": 55,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 121.5,
      "surface": 100.0,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 17,
          "weight": 3.0,
          "points": 51.0
        },
        {
          "label": "Used services",
          "count": 38,
          "weight": 1.0,
          "points": 38.0
        },
        {
          "label": "Syscalls",
          "count": 55,
          "weight": 0.5,
          "points": 27.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 1,
          "weight": 5.0,
          "points": 5.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": true,
      "tags": [
        "app",
        "gpu",
        "network"
      ],
      "note": "GameChat: Google WebRTC stack + CUDA/TensorRT inference + StreamPlay remote HID. 17 host services, 38 used services.",
      "noteSource": "Miru"
    },
    {
      "name": "ns",
      "programId": "040000000000001f",
      "file": "dumps/system-code/040000000000001f/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 49,
      "mainThreadCore": 63,
      "mainThreadStackSize": 16384,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "000000140c215859",
      "fsPermissionsHex": "0x000000140c215859",
      "fsPermNonzero": true,
      "hostsServices": [
        "acc:su",
        "acc:u0",
        "acc:u1",
        "aoc:u",
        "ns:am2",
        "ns:dev",
        "ns:ec",
        "ns:rid",
        "ns:ro",
        "ns:rt",
        "ns:su",
        "ns:sweb",
        "ns:vm",
        "ns:web"
      ],
      "usesServices": [
        "acc:e",
        "acc:su",
        "arp:r",
        "arp:w",
        "avm",
        "bcat:s",
        "bgtc:t",
        "caps:c",
        "caps:dc",
        "csrng",
        "dauth:0",
        "erpt:c",
        "es",
        "fatal:u",
        "friend:a",
        "fsp-srv",
        "hid:sys",
        "ins:s",
        "ldn:s",
        "lm",
        "lr",
        "ncm",
        "ndrm:la",
        "ndrm:lu",
        "news:m",
        "nifm:s",
        "nim",
        "nim:shp",
        "notif:s",
        "npns:s",
        "ns:am2",
        "ns:su",
        "nsd:u",
        "olsc:s",
        "ovln:snd",
        "pctl:s",
        "pdm:ntfy",
        "pgl",
        "pl:s",
        "pm:bm",
        "pm:info",
        "psc:m",
        "set",
        "set:sys",
        "srepo:u",
        "time:su"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69,
          81,
          82
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": 256,
        "debug": null
      },
      "hostCount": 14,
      "useCount": 46,
      "acidHostCount": 0,
      "syscallCount": 51,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 118.5,
      "surface": 97.5,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 14,
          "weight": 3.0,
          "points": 42.0
        },
        {
          "label": "Used services",
          "count": 46,
          "weight": 1.0,
          "points": 46.0
        },
        {
          "label": "Syscalls",
          "count": 51,
          "weight": 0.5,
          "points": 25.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 1,
          "weight": 5.0,
          "points": 5.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": true,
      "tags": [
        "fs",
        "system"
      ],
      "note": "Namespace/service broker; broad FS permission mask 0x000000140c215859 and 46 used services.",
      "noteSource": "Metadata"
    },
    {
      "name": "vi2.autogen",
      "programId": "0400000000000063",
      "file": "dumps/system-code/0400000000000063/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 16,
      "mainThreadCore": 63,
      "mainThreadStackSize": 57344,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "4000000000100000",
      "fsPermissionsHex": "0x4000000000100000",
      "fsPermNonzero": true,
      "hostsServices": [
        "cec-mgr",
        "disp:ev",
        "disp:omm",
        "disp:s",
        "dp2hdmi",
        "hdcp",
        "lbl",
        "syncpt:s",
        "syncpt:v",
        "vi2:m1",
        "vi2:m2",
        "vi2:nv",
        "vi2:v",
        "vic:u"
      ],
      "usesServices": [
        "clkrst",
        "dt",
        "erpt:c",
        "fatal:u",
        "fsp-srv",
        "gpio",
        "host1x",
        "i2c",
        "lm",
        "nvdrv:s",
        "pl:u",
        "psc:m",
        "pwm",
        "rgltr",
        "set:cal",
        "set:sys",
        "srepo:u",
        "time:u",
        "tsec:m"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69,
          80,
          81,
          82,
          83,
          85,
          86,
          87,
          88,
          89,
          90,
          92,
          93,
          94,
          95
        ],
        "maps": 14,
        "irqs": [
          75,
          1023,
          93,
          226,
          229,
          311,
          392,
          393
        ],
        "appletType": null,
        "handleTable": null,
        "debug": null
      },
      "hostCount": 14,
      "useCount": 19,
      "acidHostCount": 0,
      "syscallCount": 63,
      "mapCount": 14,
      "irqCount": 8,
      "surfaceRaw": 108.5,
      "surface": 89.3,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 14,
          "weight": 3.0,
          "points": 42.0
        },
        {
          "label": "Used services",
          "count": 19,
          "weight": 1.0,
          "points": 19.0
        },
        {
          "label": "Syscalls",
          "count": 63,
          "weight": 0.5,
          "points": 31.5
        },
        {
          "label": "Memory maps",
          "count": 14,
          "weight": 0.5,
          "points": 7.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 8,
          "weight": 0.5,
          "points": 4.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 1,
          "weight": 5.0,
          "points": 5.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": true,
      "tags": [
        "display"
      ],
      "note": "Display/compositor; 14 host services, 63 syscalls, 14 maps, 8 IRQs.",
      "noteSource": "Metadata"
    },
    {
      "name": "Bus",
      "programId": "040000000000000a",
      "file": "dumps/system-code/040000000000000a/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 16,
      "mainThreadCore": 63,
      "mainThreadStackSize": 16384,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000000000",
      "fsPermissionsHex": "0x0000000000000000",
      "fsPermNonzero": false,
      "hostsServices": [
        "gpio",
        "gpio:emu",
        "i2c",
        "led",
        "pinmux",
        "pwm",
        "sasbus",
        "spi",
        "uart"
      ],
      "usesServices": [
        "bpmpmr:i",
        "clkrst",
        "dt",
        "fatal:u",
        "psc:m",
        "set:sys"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69,
          78,
          80,
          81,
          82,
          83,
          85,
          86,
          87,
          88,
          89,
          90,
          92,
          93,
          94,
          95
        ],
        "maps": 30,
        "irqs": [
          58,
          1023,
          59,
          60,
          61,
          62,
          63,
          64,
          68,
          69,
          88,
          107,
          108,
          109,
          110,
          145,
          324,
          332,
          340,
          348
        ],
        "appletType": null,
        "handleTable": null,
        "debug": null
      },
      "hostCount": 9,
      "useCount": 6,
      "acidHostCount": 0,
      "syscallCount": 64,
      "mapCount": 30,
      "irqCount": 20,
      "surfaceRaw": 85.0,
      "surface": 70.0,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 9,
          "weight": 3.0,
          "points": 27.0
        },
        {
          "label": "Used services",
          "count": 6,
          "weight": 1.0,
          "points": 6.0
        },
        {
          "label": "Syscalls",
          "count": 64,
          "weight": 0.5,
          "points": 32.0
        },
        {
          "label": "Memory maps",
          "count": 30,
          "weight": 0.5,
          "points": 15.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 20,
          "weight": 0.5,
          "points": 5.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": true,
      "tags": [
        "driver",
        "system"
      ],
      "note": "System bus broker; 30 maps, 20 IRQs, 9 host services.",
      "noteSource": "Metadata"
    },
    {
      "name": "nvservices",
      "programId": "0400000000000019",
      "file": "dumps/system-code/0400000000000019/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 44,
      "mainThreadCore": 63,
      "mainThreadStackSize": 65536,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000000000",
      "fsPermissionsHex": "0x0000000000000000",
      "fsPermNonzero": false,
      "hostsServices": [
        "nvdrv:s",
        "nvdrv:v",
        "nvdrv:t",
        "nvdrvdbg",
        "nvgem:c",
        "nvgem:cd"
      ],
      "usesServices": [
        "lm",
        "set:sys",
        "gpuk:drv",
        "clkrst",
        "psc:m",
        "fatal:u",
        "erpt:c",
        "host1x",
        "gpuk:drv"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69,
          80,
          81,
          82,
          83,
          85,
          86,
          87,
          88,
          89,
          90,
          92,
          93,
          94,
          95,
          128,
          132,
          133,
          144
        ],
        "maps": 29,
        "irqs": [
          99,
          1023,
          100,
          102,
          103,
          352
        ],
        "appletType": null,
        "handleTable": 512,
        "debug": null
      },
      "hostCount": 6,
      "useCount": 9,
      "acidHostCount": 0,
      "syscallCount": 67,
      "mapCount": 29,
      "irqCount": 6,
      "surfaceRaw": 78.0,
      "surface": 64.2,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 6,
          "weight": 3.0,
          "points": 18.0
        },
        {
          "label": "Used services",
          "count": 9,
          "weight": 1.0,
          "points": 9.0
        },
        {
          "label": "Syscalls",
          "count": 67,
          "weight": 0.5,
          "points": 33.5
        },
        {
          "label": "Memory maps",
          "count": 29,
          "weight": 0.5,
          "points": 14.5
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 6,
          "weight": 0.5,
          "points": 3.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": true,
      "tags": [
        "gpu"
      ],
      "note": "GPU services; 29 maps, 6 host services, 67 syscalls.",
      "noteSource": "Metadata"
    },
    {
      "name": "pcie",
      "programId": "040000000000001d",
      "file": "dumps/system-code/040000000000001d/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 30,
      "mainThreadCore": 63,
      "mainThreadStackSize": 16384,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000000000",
      "fsPermissionsHex": "0x0000000000000000",
      "fsPermNonzero": false,
      "hostsServices": [
        "pcie",
        "pcie:log"
      ],
      "usesServices": [
        "clkrst",
        "dt",
        "fatal:u",
        "gpio",
        "pinmux",
        "psc:m",
        "rgltr",
        "set:sys"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          57,
          58,
          64,
          65,
          66,
          67,
          68,
          69,
          70,
          80,
          81,
          82,
          83,
          85,
          86,
          87,
          88,
          89,
          90,
          92,
          93,
          94,
          95
        ],
        "maps": 21,
        "irqs": [
          77,
          1023,
          79,
          81,
          608,
          609,
          610,
          611,
          612,
          613,
          614,
          615,
          616,
          617,
          618,
          619,
          620,
          621,
          622,
          623,
          624,
          625,
          626,
          627,
          628,
          629,
          630,
          631,
          632,
          633,
          634,
          635,
          636,
          637,
          638,
          639,
          640,
          641,
          642,
          643,
          644,
          645,
          646,
          647,
          648,
          649,
          650,
          651,
          652,
          653,
          654,
          655,
          656,
          657,
          658,
          659,
          660,
          661,
          662,
          663,
          664,
          665,
          666,
          667,
          668,
          669,
          670,
          671,
          672,
          673,
          674,
          675,
          676,
          677,
          678,
          679,
          680,
          681,
          682,
          683,
          684,
          685,
          686,
          687,
          688,
          689,
          690,
          691,
          692,
          693,
          694,
          695,
          696,
          697,
          698,
          699,
          700,
          701,
          702,
          703
        ],
        "appletType": null,
        "handleTable": 128,
        "debug": null
      },
      "hostCount": 2,
      "useCount": 8,
      "acidHostCount": 0,
      "syscallCount": 66,
      "mapCount": 21,
      "irqCount": 100,
      "surfaceRaw": 62.5,
      "surface": 51.4,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 2,
          "weight": 3.0,
          "points": 6.0
        },
        {
          "label": "Used services",
          "count": 8,
          "weight": 1.0,
          "points": 8.0
        },
        {
          "label": "Syscalls",
          "count": 66,
          "weight": 0.5,
          "points": 33.0
        },
        {
          "label": "Memory maps",
          "count": 21,
          "weight": 0.5,
          "points": 10.5
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 100,
          "weight": 0.5,
          "points": 5.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": true,
      "tags": [
        "driver",
        "pcie"
      ],
      "note": "PCIe driver with 100+ IRQs and 21 maps; large hardware attack surface.",
      "noteSource": "Metadata"
    },
    {
      "name": "lrp",
      "programId": "040000000000004d",
      "file": "dumps/system-code/040000000000004d/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 58,
      "mainThreadCore": 6,
      "mainThreadStackSize": 16384,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000000000",
      "fsPermissionsHex": "0x0000000000000000",
      "fsPermNonzero": false,
      "hostsServices": [
        "lcs",
        "lrp:d",
        "lrp:m",
        "lrp:s",
        "lrp:u"
      ],
      "usesServices": [
        "acc:e:u1",
        "appletAE",
        "arp:r",
        "auddmg:u",
        "audsmx:u",
        "bsd:s",
        "fatal:u",
        "friend:u",
        "gsv:s4",
        "hid:sys",
        "ldn:s",
        "lm",
        "ns:am2",
        "ns:su",
        "set:sys",
        "sfdnsres",
        "spl:lrp",
        "srepo:u"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69,
          81,
          82
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": 0,
        "debug": null
      },
      "hostCount": 5,
      "useCount": 18,
      "acidHostCount": 0,
      "syscallCount": 51,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 58.5,
      "surface": 48.1,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 5,
          "weight": 3.0,
          "points": 15.0
        },
        {
          "label": "Used services",
          "count": 18,
          "weight": 1.0,
          "points": 18.0
        },
        {
          "label": "Syscalls",
          "count": 51,
          "weight": 0.5,
          "points": 25.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": true,
      "tags": [
        "app",
        "network",
        "streaming"
      ],
      "note": "Local Remote Play / GameShare host: H.264+JPEG game streaming over LDN/IP.",
      "noteSource": "Miru"
    },
    {
      "name": "gsv3",
      "programId": "0400000000000083",
      "file": "dumps/system-code/0400000000000083/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 21,
      "mainThreadCore": 63,
      "mainThreadStackSize": 16384,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "4000000000000000",
      "fsPermissionsHex": "0x4000000000000000",
      "fsPermNonzero": true,
      "hostsServices": [
        "gsv:s3"
      ],
      "usesServices": [
        "cam:u",
        "fatal:u",
        "gpuk:gsv",
        "gsv:sv",
        "host1x",
        "lm",
        "nvdrv:s",
        "nvdrv:v",
        "psc:m",
        "set:sys",
        "srepo:u",
        "vi2:v"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69,
          80,
          81,
          82,
          83,
          85,
          86,
          87,
          88,
          89,
          90,
          92,
          93,
          94,
          95,
          128
        ],
        "maps": 2,
        "irqs": [
          376,
          1023
        ],
        "appletType": null,
        "handleTable": null,
        "debug": null
      },
      "hostCount": 1,
      "useCount": 12,
      "acidHostCount": 0,
      "syscallCount": 64,
      "mapCount": 2,
      "irqCount": 2,
      "surfaceRaw": 54.0,
      "surface": 44.4,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 1,
          "weight": 3.0,
          "points": 3.0
        },
        {
          "label": "Used services",
          "count": 12,
          "weight": 1.0,
          "points": 12.0
        },
        {
          "label": "Syscalls",
          "count": 64,
          "weight": 0.5,
          "points": 32.0
        },
        {
          "label": "Memory maps",
          "count": 2,
          "weight": 0.5,
          "points": 1.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 2,
          "weight": 0.5,
          "points": 1.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 1,
          "weight": 5.0,
          "points": 5.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": true,
      "tags": [
        "codec",
        "gpu"
      ],
      "note": "Isolated NVIDIA OpenMAX codec server (H.264/VP9/AV1/JPEG + NVENC); host1x channel + syncpt IRQ.",
      "noteSource": "Miru"
    },
    {
      "name": "gsv1",
      "programId": "0400000000000081",
      "file": "dumps/system-code/0400000000000081/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 21,
      "mainThreadCore": 63,
      "mainThreadStackSize": 16384,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "4000000000000000",
      "fsPermissionsHex": "0x4000000000000000",
      "fsPermNonzero": true,
      "hostsServices": [],
      "usesServices": [
        "cam:u",
        "fatal:u",
        "gpuk:gsv",
        "gsv:sv",
        "host1x",
        "lm",
        "nvdrv:s",
        "nvdrv:v",
        "psc:m",
        "set:sys",
        "srepo:u",
        "vi2:v"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69,
          80,
          81,
          82,
          83,
          85,
          86,
          87,
          88,
          89,
          90,
          92,
          93,
          94,
          95,
          128,
          132,
          133,
          135,
          136
        ],
        "maps": 2,
        "irqs": [
          360,
          1023
        ],
        "appletType": null,
        "handleTable": null,
        "debug": null
      },
      "hostCount": 0,
      "useCount": 12,
      "acidHostCount": 0,
      "syscallCount": 68,
      "mapCount": 2,
      "irqCount": 2,
      "surfaceRaw": 53.0,
      "surface": 43.6,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 0,
          "weight": 3.0,
          "points": 0.0
        },
        {
          "label": "Used services",
          "count": 12,
          "weight": 1.0,
          "points": 12.0
        },
        {
          "label": "Syscalls",
          "count": 68,
          "weight": 0.5,
          "points": 34.0
        },
        {
          "label": "Memory maps",
          "count": 2,
          "weight": 0.5,
          "points": 1.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 2,
          "weight": 0.5,
          "points": 1.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 1,
          "weight": 5.0,
          "points": 5.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": true,
      "tags": [
        "codec",
        "gpu"
      ],
      "note": "Isolated NVIDIA OpenMAX codec server (H.264/VP9/AV1/JPEG + NVENC); host1x channel + syncpt IRQ.",
      "noteSource": "Miru"
    },
    {
      "name": "camera.autogen",
      "programId": "0400000000000070",
      "file": "dumps/system-code/0400000000000070/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 22,
      "mainThreadCore": 63,
      "mainThreadStackSize": 16384,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000100000",
      "fsPermissionsHex": "0x0000000000100000",
      "fsPermNonzero": true,
      "hostsServices": [
        "cam:m",
        "cam:s",
        "cam:u"
      ],
      "usesServices": [
        "erpt:c",
        "fatal:u",
        "fsp-srv",
        "lm",
        "nvdrv:s",
        "ovln:snd",
        "psc:m",
        "set:sys",
        "srepo:u",
        "syncpt:s",
        "usb:hs",
        "usb:obsv",
        "vic:u"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69,
          81,
          82
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": 192,
        "debug": null
      },
      "hostCount": 3,
      "useCount": 13,
      "acidHostCount": 0,
      "syscallCount": 51,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 52.5,
      "surface": 43.2,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 3,
          "weight": 3.0,
          "points": 9.0
        },
        {
          "label": "Used services",
          "count": 13,
          "weight": 1.0,
          "points": 13.0
        },
        {
          "label": "Syscalls",
          "count": 51,
          "weight": 0.5,
          "points": 25.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 1,
          "weight": 5.0,
          "points": 5.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": true,
      "tags": [
        "camera",
        "driver"
      ],
      "note": "USB Video Class camera driver + DFU camera firmware updater; over usb:hs.",
      "noteSource": "Miru"
    },
    {
      "name": "nvkernel",
      "programId": "040000000000004f",
      "file": "dumps/system-code/040000000000004f/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 44,
      "mainThreadCore": 63,
      "mainThreadStackSize": 16384,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "4000000000000000",
      "fsPermissionsHex": "0x4000000000000000",
      "fsPermNonzero": true,
      "hostsServices": [
        "gpuk:drv",
        "gpuk:gsv"
      ],
      "usesServices": [
        "fatal:u",
        "lm",
        "set:sys",
        "srepo:u"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69,
          80,
          81,
          82,
          83,
          85,
          86,
          87,
          88,
          89,
          90,
          92,
          93,
          94,
          95,
          128,
          129,
          130,
          132,
          133,
          144
        ],
        "maps": 6,
        "irqs": [],
        "appletType": null,
        "handleTable": 160,
        "debug": null
      },
      "hostCount": 2,
      "useCount": 4,
      "acidHostCount": 0,
      "syscallCount": 69,
      "mapCount": 6,
      "irqCount": 0,
      "surfaceRaw": 52.5,
      "surface": 43.2,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 2,
          "weight": 3.0,
          "points": 6.0
        },
        {
          "label": "Used services",
          "count": 4,
          "weight": 1.0,
          "points": 4.0
        },
        {
          "label": "Syscalls",
          "count": 69,
          "weight": 0.5,
          "points": 34.5
        },
        {
          "label": "Memory maps",
          "count": 6,
          "weight": 0.5,
          "points": 3.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 1,
          "weight": 5.0,
          "points": 5.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": true,
      "tags": [
        "driver",
        "gpu"
      ],
      "note": "GPU kernel-mode server split out of nvservices. 69 syscalls, GPU MMIO at 0x1707_0000+, 20 MiB carveout.",
      "noteSource": "Miru"
    },
    {
      "name": "gsv4",
      "programId": "0400000000000084",
      "file": "dumps/system-code/0400000000000084/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 49,
      "mainThreadCore": 6,
      "mainThreadStackSize": 16384,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "4000000000000000",
      "fsPermissionsHex": "0x4000000000000000",
      "fsPermNonzero": true,
      "hostsServices": [
        "gsv:s4"
      ],
      "usesServices": [
        "cam:u",
        "fatal:u",
        "host1x",
        "lm",
        "nvdrv:s",
        "nvdrv:v",
        "psc:m",
        "set:sys",
        "srepo:u",
        "vi2:v"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69,
          80,
          81,
          82,
          83,
          85,
          86,
          87,
          88,
          89,
          90,
          92,
          93,
          94,
          95
        ],
        "maps": 2,
        "irqs": [
          384,
          1023
        ],
        "appletType": null,
        "handleTable": null,
        "debug": null
      },
      "hostCount": 1,
      "useCount": 10,
      "acidHostCount": 0,
      "syscallCount": 63,
      "mapCount": 2,
      "irqCount": 2,
      "surfaceRaw": 51.5,
      "surface": 42.4,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 1,
          "weight": 3.0,
          "points": 3.0
        },
        {
          "label": "Used services",
          "count": 10,
          "weight": 1.0,
          "points": 10.0
        },
        {
          "label": "Syscalls",
          "count": 63,
          "weight": 0.5,
          "points": 31.5
        },
        {
          "label": "Memory maps",
          "count": 2,
          "weight": 0.5,
          "points": 1.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 2,
          "weight": 0.5,
          "points": 1.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 1,
          "weight": 5.0,
          "points": 5.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": true,
      "tags": [
        "codec",
        "gpu"
      ],
      "note": "Isolated NVIDIA OpenMAX codec server (H.264/VP9/AV1/JPEG + NVENC); host1x channel + syncpt IRQ.",
      "noteSource": "Miru"
    },
    {
      "name": "host1x",
      "programId": "0400000000000065",
      "file": "dumps/system-code/0400000000000065/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 44,
      "mainThreadCore": 63,
      "mainThreadStackSize": 8192,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000000000",
      "fsPermissionsHex": "0x0000000000000000",
      "fsPermNonzero": false,
      "hostsServices": [
        "host1x"
      ],
      "usesServices": [
        "clkrst",
        "fatal:u",
        "psc:m",
        "spl:nv",
        "srepo:u"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69,
          80,
          81,
          82,
          83,
          85,
          86,
          87,
          88,
          89,
          90,
          92,
          93,
          94,
          95
        ],
        "maps": 10,
        "irqs": [
          295,
          1023
        ],
        "appletType": null,
        "handleTable": 256,
        "debug": null
      },
      "hostCount": 1,
      "useCount": 5,
      "acidHostCount": 0,
      "syscallCount": 63,
      "mapCount": 10,
      "irqCount": 2,
      "surfaceRaw": 45.5,
      "surface": 37.4,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 1,
          "weight": 3.0,
          "points": 3.0
        },
        {
          "label": "Used services",
          "count": 5,
          "weight": 1.0,
          "points": 5.0
        },
        {
          "label": "Syscalls",
          "count": 63,
          "weight": 0.5,
          "points": 31.5
        },
        {
          "label": "Memory maps",
          "count": 10,
          "weight": 0.5,
          "points": 5.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 2,
          "weight": 0.5,
          "points": 1.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": true,
      "tags": [
        "driver",
        "gpu"
      ],
      "note": "host1x controller + NVDEC/NVENC/VIC firmware & channel manager; MMIO 0x13e0_0000, IRQ 295.",
      "noteSource": "Miru"
    },
    {
      "name": "sdcard",
      "programId": "0400000000000089",
      "file": "dumps/system-code/0400000000000089/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 45,
      "mainThreadCore": 63,
      "mainThreadStackSize": 16384,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000000000",
      "fsPermissionsHex": "0x0000000000000000",
      "fsPermNonzero": false,
      "hostsServices": [],
      "usesServices": [
        "clkrst",
        "ectx:w",
        "fatal:u",
        "fs:stcfg",
        "gpio",
        "pcie",
        "pinmux",
        "psc:m",
        "spl:"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69,
          70,
          71,
          80,
          81,
          82,
          83,
          85,
          86,
          87,
          88,
          89,
          90,
          92,
          93,
          94,
          95
        ],
        "maps": 3,
        "irqs": [
          94,
          1023
        ],
        "appletType": null,
        "handleTable": null,
        "debug": null
      },
      "hostCount": 0,
      "useCount": 9,
      "acidHostCount": 0,
      "syscallCount": 65,
      "mapCount": 3,
      "irqCount": 2,
      "surfaceRaw": 44.0,
      "surface": 36.2,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 0,
          "weight": 3.0,
          "points": 0.0
        },
        {
          "label": "Used services",
          "count": 9,
          "weight": 1.0,
          "points": 9.0
        },
        {
          "label": "Syscalls",
          "count": 65,
          "weight": 0.5,
          "points": 32.5
        },
        {
          "label": "Memory maps",
          "count": 3,
          "weight": 0.5,
          "points": 1.5
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 2,
          "weight": 0.5,
          "points": 1.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": true,
      "tags": [
        "driver",
        "storage"
      ],
      "note": "microSD Express driver: SDMMC1 + PCIe/NVMe; MMIO 0x0340_0000, IRQ 94.",
      "noteSource": "Miru"
    },
    {
      "name": "imf",
      "programId": "0400000000000047",
      "file": "dumps/system-code/0400000000000047/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 48,
      "mainThreadCore": 63,
      "mainThreadStackSize": 20480,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000100000",
      "fsPermissionsHex": "0x0000000000100000",
      "fsPermNonzero": true,
      "hostsServices": [
        "imf",
        "imf:e",
        "imf:fe"
      ],
      "usesServices": [
        "fsp-srv",
        "hid",
        "hid:sys",
        "set"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69,
          81,
          82
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": 128,
        "debug": null
      },
      "hostCount": 3,
      "useCount": 4,
      "acidHostCount": 0,
      "syscallCount": 51,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 43.5,
      "surface": 35.8,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 3,
          "weight": 3.0,
          "points": 9.0
        },
        {
          "label": "Used services",
          "count": 4,
          "weight": 1.0,
          "points": 4.0
        },
        {
          "label": "Syscalls",
          "count": 51,
          "weight": 0.5,
          "points": 25.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 1,
          "weight": 5.0,
          "points": 5.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": true,
      "tags": [
        "ime",
        "input"
      ],
      "note": "Input Method Framework: iWnn IME (JP / zh-CN pinyin / zh-TW bopomofo).",
      "noteSource": "Miru"
    },
    {
      "name": "tsec.autogen",
      "programId": "040000000000008d",
      "file": "dumps/system-code/040000000000008d/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 13,
      "mainThreadCore": 63,
      "mainThreadStackSize": 8192,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000000000",
      "fsPermissionsHex": "0x0000000000000000",
      "fsPermNonzero": false,
      "hostsServices": [
        "tsec:m"
      ],
      "usesServices": [
        "fatal:u",
        "host1x",
        "lm",
        "psc:m",
        "spl:nv",
        "srepo:u"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69,
          80,
          81,
          82,
          83,
          85,
          86,
          87,
          88,
          89,
          90,
          92,
          93,
          94,
          95
        ],
        "maps": 4,
        "irqs": [
          260,
          1023
        ],
        "appletType": null,
        "handleTable": 256,
        "debug": null
      },
      "hostCount": 1,
      "useCount": 6,
      "acidHostCount": 0,
      "syscallCount": 63,
      "mapCount": 4,
      "irqCount": 2,
      "surfaceRaw": 43.5,
      "surface": 35.8,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 1,
          "weight": 3.0,
          "points": 3.0
        },
        {
          "label": "Used services",
          "count": 6,
          "weight": 1.0,
          "points": 6.0
        },
        {
          "label": "Syscalls",
          "count": 63,
          "weight": 0.5,
          "points": 31.5
        },
        {
          "label": "Memory maps",
          "count": 4,
          "weight": 0.5,
          "points": 2.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 2,
          "weight": 0.5,
          "points": 1.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": true,
      "tags": [
        "crypto",
        "security"
      ],
      "note": "TSEC co-processor server, HDCP session management; MMIO 0x1550_0000, IRQ 260.",
      "noteSource": "Miru"
    },
    {
      "name": "adraw",
      "programId": "0400000000000072",
      "file": "dumps/system-code/0400000000000072/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 27,
      "mainThreadCore": 63,
      "mainThreadStackSize": 32768,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "4000000000000000",
      "fsPermissionsHex": "0x4000000000000000",
      "fsPermNonzero": true,
      "hostsServices": [
        "adraw:a",
        "adraw:m"
      ],
      "usesServices": [
        "fatal:u",
        "gsv:s3",
        "lm",
        "srepo:u",
        "vi2:m2"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": 160,
        "debug": null
      },
      "hostCount": 2,
      "useCount": 5,
      "acidHostCount": 0,
      "syscallCount": 49,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 40.5,
      "surface": 33.3,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 2,
          "weight": 3.0,
          "points": 6.0
        },
        {
          "label": "Used services",
          "count": 5,
          "weight": 1.0,
          "points": 5.0
        },
        {
          "label": "Syscalls",
          "count": 49,
          "weight": 0.5,
          "points": 24.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 1,
          "weight": 5.0,
          "points": 5.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": true,
      "tags": [
        "applet",
        "display"
      ],
      "note": "Applet draw layer/compositor broker for system applets and GameChat video tiles.",
      "noteSource": "Miru"
    },
    {
      "name": "ro",
      "programId": "0400000000000037",
      "file": "dumps/system-code/0400000000000037/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 49,
      "mainThreadCore": 63,
      "mainThreadStackSize": 20480,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000000000",
      "fsPermissionsHex": "0x0000000000000000",
      "fsPermNonzero": false,
      "hostsServices": [
        "ldr:ro",
        "ro:dmnt",
        "ro:1"
      ],
      "usesServices": [
        "fatal:u",
        "spl:",
        "set:sys"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69,
          115,
          116,
          117,
          118,
          119,
          120
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": 0,
        "debug": null
      },
      "hostCount": 3,
      "useCount": 3,
      "acidHostCount": 0,
      "syscallCount": 55,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 39.5,
      "surface": 32.5,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 3,
          "weight": 3.0,
          "points": 9.0
        },
        {
          "label": "Used services",
          "count": 3,
          "weight": 1.0,
          "points": 3.0
        },
        {
          "label": "Syscalls",
          "count": 55,
          "weight": 0.5,
          "points": 27.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": true,
      "tags": [
        "code",
        "loader"
      ],
      "note": "Maps executable code; only 3 hosts/3 uses, 55 syscalls. Key for code-loading paths.",
      "noteSource": "Metadata"
    },
    {
      "name": "gsvm",
      "programId": "0400000000000080",
      "file": "dumps/system-code/0400000000000080/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 21,
      "mainThreadCore": 63,
      "mainThreadStackSize": 16384,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000000000",
      "fsPermissionsHex": "0x0000000000000000",
      "fsPermNonzero": false,
      "hostsServices": [
        "gsv:m",
        "gsv:sv",
        "gsv:t"
      ],
      "usesServices": [
        "fatal:u",
        "srepo:u"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": null,
        "debug": null
      },
      "hostCount": 3,
      "useCount": 2,
      "acidHostCount": 0,
      "syscallCount": 49,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 35.5,
      "surface": 29.2,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 3,
          "weight": 3.0,
          "points": 9.0
        },
        {
          "label": "Used services",
          "count": 2,
          "weight": 1.0,
          "points": 2.0
        },
        {
          "label": "Syscalls",
          "count": 49,
          "weight": 0.5,
          "points": 24.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": true,
      "tags": [
        "codec",
        "gpu"
      ],
      "note": "Broker/registry for the gsv* multimedia server instances.",
      "noteSource": "Miru"
    },
    {
      "name": "creport",
      "programId": "0400000000000036",
      "file": "dumps/system-code/0400000000000036/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 44,
      "mainThreadCore": 63,
      "mainThreadStackSize": 16384,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000000000",
      "fsPermissionsHex": "0x0000000000000000",
      "fsPermNonzero": false,
      "hostsServices": [],
      "usesServices": [
        "caps2:s",
        "csrng",
        "erpt:c",
        "fatal:u",
        "pgl"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          96,
          99,
          103,
          105,
          106,
          109
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": null,
        "debug": {
          "allowDebug": false,
          "forceDebug": true
        }
      },
      "hostCount": 0,
      "useCount": 5,
      "acidHostCount": 0,
      "syscallCount": 49,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 34.5,
      "surface": 28.4,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 0,
          "weight": 3.0,
          "points": 0.0
        },
        {
          "label": "Used services",
          "count": 5,
          "weight": 1.0,
          "points": 5.0
        },
        {
          "label": "Syscalls",
          "count": 49,
          "weight": 0.5,
          "points": 24.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        },
        {
          "label": "Debug metadata",
          "count": 1,
          "weight": 5.0,
          "points": 5.0
        }
      ],
      "focus": true,
      "tags": [
        "crash",
        "debug"
      ],
      "note": "Crash reporter with forceDebug=true / allowDebug=false; debug-path candidate.",
      "noteSource": "Metadata"
    },
    {
      "name": "speech",
      "programId": "0400000000000088",
      "file": "dumps/system-code/0400000000000088/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 49,
      "mainThreadCore": 63,
      "mainThreadStackSize": 327680,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000100000",
      "fsPermissionsHex": "0x0000000000100000",
      "fsPermNonzero": true,
      "hostsServices": [
        "spch:a"
      ],
      "usesServices": [
        "fsp-srv",
        "set:sys"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": 256,
        "debug": null
      },
      "hostCount": 1,
      "useCount": 2,
      "acidHostCount": 0,
      "syscallCount": 49,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 34.5,
      "surface": 28.4,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 1,
          "weight": 3.0,
          "points": 3.0
        },
        {
          "label": "Used services",
          "count": 2,
          "weight": 1.0,
          "points": 2.0
        },
        {
          "label": "Syscalls",
          "count": 49,
          "weight": 0.5,
          "points": 24.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 1,
          "weight": 5.0,
          "points": 5.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": true,
      "tags": [
        "audio",
        "tts"
      ],
      "note": "VoiceWare/ReadSpeaker 'VTAPI' text-to-speech engine with an SSML parser; host spch:a.",
      "noteSource": "Miru"
    },
    {
      "name": "eth",
      "programId": "0400000000000046",
      "file": "dumps/system-code/0400000000000046/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 53,
      "mainThreadCore": 6,
      "mainThreadStackSize": 16384,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000000000",
      "fsPermissionsHex": "0x0000000000000000",
      "fsPermNonzero": false,
      "hostsServices": [
        "eth:nd"
      ],
      "usesServices": [
        "fatal:u",
        "gpio",
        "psc:m",
        "set:sys",
        "srepo:u",
        "usb:hs"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69,
          80
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": 512,
        "debug": null
      },
      "hostCount": 1,
      "useCount": 6,
      "acidHostCount": 0,
      "syscallCount": 50,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 34.0,
      "surface": 28.0,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 1,
          "weight": 3.0,
          "points": 3.0
        },
        {
          "label": "Used services",
          "count": 6,
          "weight": 1.0,
          "points": 6.0
        },
        {
          "label": "Syscalls",
          "count": 50,
          "weight": 0.5,
          "points": 25.0
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": true,
      "tags": [
        "driver",
        "network"
      ],
      "note": "USB-Ethernet (dock) NIC driver, nn::anif; over usb:hs.",
      "noteSource": "Miru"
    },
    {
      "name": "cmptldr",
      "programId": "0400000000000052",
      "file": "dumps/system-code/0400000000000052/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 53,
      "mainThreadCore": 63,
      "mainThreadStackSize": 16384,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000000000",
      "fsPermissionsHex": "0x0000000000000000",
      "fsPermNonzero": false,
      "hostsServices": [],
      "usesServices": [
        "ldr:cmpt"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69,
          116,
          117
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": null,
        "debug": null
      },
      "hostCount": 0,
      "useCount": 1,
      "acidHostCount": 0,
      "syscallCount": 51,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 26.5,
      "surface": 21.8,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 0,
          "weight": 3.0,
          "points": 0.0
        },
        {
          "label": "Used services",
          "count": 1,
          "weight": 1.0,
          "points": 1.0
        },
        {
          "label": "Syscalls",
          "count": 51,
          "weight": 0.5,
          "points": 25.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": true,
      "tags": [
        "compat",
        "loader"
      ],
      "note": "Switch 1 backwards-compat per-title binary patcher; uses ldr:cmpt.",
      "noteSource": "Miru"
    },
    {
      "name": "bcat",
      "programId": "040000000000000c",
      "file": "dumps/system-code/040000000000000c/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 58,
      "mainThreadCore": 63,
      "mainThreadStackSize": 16384,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000000008",
      "fsPermissionsHex": "0x0000000000000008",
      "fsPermNonzero": true,
      "hostsServices": [
        "bcat:a",
        "bcat:m",
        "bcat:s",
        "bcat:u",
        "mnpp:app",
        "mnpp:sys",
        "mnpp:web",
        "news:a",
        "news:c",
        "news:m",
        "news:p",
        "news:v",
        "prepo:a2",
        "prepo:m",
        "prepo:s",
        "prepo:u"
      ],
      "usesServices": [
        "acc:e:u2",
        "arp:r",
        "bgtc:t",
        "bsd:s",
        "dauth:0",
        "erpt:c",
        "fatal:u",
        "fsp-srv",
        "lm",
        "nifm:s",
        "npns:s",
        "nsd:u",
        "ovln:snd",
        "psc:m",
        "set",
        "set:sys",
        "sfdnsres",
        "srepo:a",
        "ssl:s",
        "time:u"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69,
          81,
          82
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": 512,
        "debug": null
      },
      "hostCount": 16,
      "useCount": 20,
      "acidHostCount": 0,
      "syscallCount": 51,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 98.5,
      "surface": 81.1,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 16,
          "weight": 3.0,
          "points": 48.0
        },
        {
          "label": "Used services",
          "count": 20,
          "weight": 1.0,
          "points": 20.0
        },
        {
          "label": "Syscalls",
          "count": 51,
          "weight": 0.5,
          "points": 25.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 1,
          "weight": 5.0,
          "points": 5.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": false,
      "tags": [
        "background",
        "network"
      ],
      "note": "",
      "noteSource": ""
    },
    {
      "name": "am",
      "programId": "0400000000000023",
      "file": "dumps/system-code/0400000000000023/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 27,
      "mainThreadCore": 63,
      "mainThreadStackSize": 16384,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000102040",
      "fsPermissionsHex": "0x0000000000102040",
      "fsPermNonzero": true,
      "hostsServices": [
        "apm",
        "appletAE",
        "appletOE",
        "caps:su"
      ],
      "usesServices": [
        "acc:u1",
        "adraw:m",
        "apm:am",
        "apm:sys",
        "arp:r",
        "arp:w",
        "aud:a",
        "aud:d",
        "audctl",
        "bt:sys",
        "cam:m",
        "caps:c",
        "caps:sc",
        "caps2:r",
        "erpt:c",
        "fatal:p",
        "fatal:u",
        "fsp-srv",
        "grc:c",
        "gsv:m",
        "hid",
        "hid:sys",
        "hidc:s",
        "idle:sys",
        "ins:r",
        "irs:sys",
        "lbl",
        "lm",
        "mnpp:sys",
        "nfc:am",
        "nifm:s",
        "notif:s",
        "ns:am2",
        "ns:su",
        "nvdrv:s",
        "nvgem:c",
        "nvgem:cd",
        "olsc:s",
        "omm",
        "ovln:snd",
        "pdm:ntfy",
        "pdm:qry",
        "pm:bm",
        "prepo:s",
        "set:cal",
        "set:sys",
        "spl:",
        "spsm",
        "srepo:u",
        "vi2:m2"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69,
          72,
          73,
          79,
          81,
          82
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": 512,
        "debug": null
      },
      "hostCount": 4,
      "useCount": 50,
      "acidHostCount": 0,
      "syscallCount": 54,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 94.0,
      "surface": 77.4,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 4,
          "weight": 3.0,
          "points": 12.0
        },
        {
          "label": "Used services",
          "count": 50,
          "weight": 1.0,
          "points": 50.0
        },
        {
          "label": "Syscalls",
          "count": 54,
          "weight": 0.5,
          "points": 27.0
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 1,
          "weight": 5.0,
          "points": 5.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": false,
      "tags": [
        "applet",
        "system"
      ],
      "note": "",
      "noteSource": ""
    },
    {
      "name": "audio",
      "programId": "0400000000000014",
      "file": "dumps/system-code/0400000000000014/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 20,
      "mainThreadCore": 6,
      "mainThreadStackSize": 16384,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000000000",
      "fsPermissionsHex": "0x0000000000000000",
      "fsPermNonzero": false,
      "hostsServices": [
        "aud:a",
        "aud:d",
        "aud:u",
        "audctl",
        "auddev",
        "auddev:s",
        "auddmg:s",
        "auddmg:u",
        "audout:u",
        "audin:u",
        "audren:u",
        "audsmx:s",
        "audsmx:u",
        "hwopus"
      ],
      "usesServices": [
        "arp:r",
        "bt:sys",
        "clkrst",
        "dt",
        "erpt:c",
        "fatal:u",
        "gpio",
        "hid:sys",
        "i2c",
        "ins:s",
        "lm",
        "ovln:snd",
        "psc:m",
        "set:sys",
        "spi",
        "srepo:u",
        "usb:hs",
        "csrng"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69,
          80,
          81,
          82,
          83,
          85,
          86,
          87,
          88,
          89,
          90,
          92,
          93,
          94,
          95
        ],
        "maps": 2,
        "irqs": [
          177,
          1023
        ],
        "appletType": null,
        "handleTable": 512,
        "debug": null
      },
      "hostCount": 14,
      "useCount": 18,
      "acidHostCount": 0,
      "syscallCount": 63,
      "mapCount": 2,
      "irqCount": 2,
      "surfaceRaw": 93.5,
      "surface": 77.0,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 14,
          "weight": 3.0,
          "points": 42.0
        },
        {
          "label": "Used services",
          "count": 18,
          "weight": 1.0,
          "points": 18.0
        },
        {
          "label": "Syscalls",
          "count": 63,
          "weight": 0.5,
          "points": 31.5
        },
        {
          "label": "Memory maps",
          "count": 2,
          "weight": 0.5,
          "points": 1.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 2,
          "weight": 0.5,
          "points": 1.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": false,
      "tags": [
        "audio"
      ],
      "note": "",
      "noteSource": ""
    },
    {
      "name": "ptm.prod",
      "programId": "0400000000000010",
      "file": "dumps/system-code/0400000000000010/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 32,
      "mainThreadCore": 63,
      "mainThreadStackSize": 16384,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000000000",
      "fsPermissionsHex": "0x0000000000000000",
      "fsPermNonzero": false,
      "hostsServices": [
        "apm:am",
        "apm:sys",
        "fan",
        "fgm",
        "fgm:sys",
        "fgm:test",
        "powctl",
        "psm",
        "tc",
        "ts",
        "ts:emu"
      ],
      "usesServices": [
        "bpc",
        "bpmpmr:m",
        "clkrst",
        "dt",
        "erpt:c",
        "fatal:u",
        "gpio",
        "hshl:set",
        "hshl:sys",
        "i2c",
        "ins:r",
        "lm",
        "pinmux",
        "pm:bm",
        "psc:m",
        "psm",
        "pwm",
        "rtc",
        "set:cal",
        "set:sys",
        "srepo:u",
        "time:su",
        "usb:pm"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69,
          80,
          81,
          82,
          83,
          85,
          86,
          87,
          88,
          89,
          90,
          92,
          93,
          94,
          95
        ],
        "maps": 3,
        "irqs": [],
        "appletType": null,
        "handleTable": null,
        "debug": null
      },
      "hostCount": 11,
      "useCount": 23,
      "acidHostCount": 0,
      "syscallCount": 63,
      "mapCount": 3,
      "irqCount": 0,
      "surfaceRaw": 89.0,
      "surface": 73.3,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 11,
          "weight": 3.0,
          "points": 33.0
        },
        {
          "label": "Used services",
          "count": 23,
          "weight": 1.0,
          "points": 23.0
        },
        {
          "label": "Syscalls",
          "count": 63,
          "weight": 0.5,
          "points": 31.5
        },
        {
          "label": "Memory maps",
          "count": 3,
          "weight": 0.5,
          "points": 1.5
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": false,
      "tags": [
        "power",
        "thermal"
      ],
      "note": "",
      "noteSource": ""
    },
    {
      "name": "hid",
      "programId": "0400000000000013",
      "file": "dumps/system-code/0400000000000013/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 18,
      "mainThreadCore": 7,
      "mainThreadStackSize": 12288,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000100008",
      "fsPermissionsHex": "0x0000000000100008",
      "fsPermNonzero": true,
      "hostsServices": [
        "hid",
        "hid:dbg",
        "hid:sys",
        "hidbus",
        "hidc:d",
        "hidc:s",
        "irs",
        "irs:sys",
        "xcd:sys"
      ],
      "usesServices": [
        "bpc",
        "bt:sys",
        "clkrst",
        "dt",
        "erpt:c",
        "fatal:u",
        "fsp-srv",
        "gpio",
        "hshl:sys",
        "i2c",
        "ins:s",
        "lm",
        "ovln:snd",
        "pm:bm",
        "psc:m",
        "rfua:s",
        "sasbus",
        "set:cal",
        "set:sys",
        "srepo:u",
        "time:su",
        "usb:hs",
        "usb:obsv"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69,
          80,
          81,
          82,
          83,
          85,
          86,
          87,
          88,
          89,
          90,
          92,
          93,
          94,
          95
        ],
        "maps": 1,
        "irqs": [
          70,
          1023
        ],
        "appletType": null,
        "handleTable": 512,
        "debug": null
      },
      "hostCount": 9,
      "useCount": 23,
      "acidHostCount": 0,
      "syscallCount": 63,
      "mapCount": 1,
      "irqCount": 2,
      "surfaceRaw": 88.0,
      "surface": 72.4,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 9,
          "weight": 3.0,
          "points": 27.0
        },
        {
          "label": "Used services",
          "count": 23,
          "weight": 1.0,
          "points": 23.0
        },
        {
          "label": "Syscalls",
          "count": 63,
          "weight": 0.5,
          "points": 31.5
        },
        {
          "label": "Memory maps",
          "count": 1,
          "weight": 0.5,
          "points": 0.5
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 2,
          "weight": 0.5,
          "points": 1.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 1,
          "weight": 5.0,
          "points": 5.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": false,
      "tags": [
        "input"
      ],
      "note": "",
      "noteSource": ""
    },
    {
      "name": "glue",
      "programId": "0400000000000031",
      "file": "dumps/system-code/0400000000000031/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 37,
      "mainThreadCore": 63,
      "mainThreadStackSize": 4096,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000004000100408",
      "fsPermissionsHex": "0x0000004000100408",
      "fsPermNonzero": true,
      "hostsServices": [
        "arp:r",
        "arp:w",
        "batlog",
        "bgtc:sc",
        "bgtc:t",
        "ectx:aw",
        "ectx:r",
        "ectx:w",
        "notif:a",
        "notif:s",
        "pl:u",
        "time:a",
        "time:r",
        "time:u"
      ],
      "usesServices": [
        "arp:r",
        "bgtc:t",
        "fatal:u",
        "fsp-srv",
        "hshl:sys",
        "lm",
        "psc:m",
        "rtc",
        "set:cal",
        "set:sys",
        "srepo:u",
        "time:al",
        "time:m",
        "time:u"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69,
          80,
          81,
          82
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": 256,
        "debug": null
      },
      "hostCount": 14,
      "useCount": 14,
      "acidHostCount": 0,
      "syscallCount": 52,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 87.0,
      "surface": 71.6,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 14,
          "weight": 3.0,
          "points": 42.0
        },
        {
          "label": "Used services",
          "count": 14,
          "weight": 1.0,
          "points": 14.0
        },
        {
          "label": "Syscalls",
          "count": 52,
          "weight": 0.5,
          "points": 26.0
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 1,
          "weight": 5.0,
          "points": 5.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": false,
      "tags": [],
      "note": "",
      "noteSource": ""
    },
    {
      "name": "psc",
      "programId": "0400000000000021",
      "file": "dumps/system-code/0400000000000021/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 37,
      "mainThreadCore": 63,
      "mainThreadStackSize": 4096,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000000000",
      "fsPermissionsHex": "0x0000000000000000",
      "fsPermNonzero": false,
      "hostsServices": [
        "hshl:set",
        "hshl:sys",
        "ins:r",
        "ins:s",
        "ovln:rcv",
        "ovln:snd",
        "psc:c",
        "psc:l",
        "psc:m",
        "srepo:a",
        "srepo:u",
        "syslog:u",
        "time:su",
        "time:s",
        "time:al",
        "time:m",
        "time:p"
      ],
      "usesServices": [
        "fatal:u",
        "ovln:snd",
        "psc:l",
        "psc:m"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69,
          80,
          81,
          82,
          83,
          85,
          86,
          87,
          88,
          89,
          90,
          92,
          93,
          94,
          95
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": 512,
        "debug": null
      },
      "hostCount": 17,
      "useCount": 4,
      "acidHostCount": 0,
      "syscallCount": 63,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 86.5,
      "surface": 71.2,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 17,
          "weight": 3.0,
          "points": 51.0
        },
        {
          "label": "Used services",
          "count": 4,
          "weight": 1.0,
          "points": 4.0
        },
        {
          "label": "Syscalls",
          "count": 63,
          "weight": 0.5,
          "points": 31.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": false,
      "tags": [
        "power"
      ],
      "note": "",
      "noteSource": ""
    },
    {
      "name": "omm",
      "programId": "0400000000000045",
      "file": "dumps/system-code/0400000000000045/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 27,
      "mainThreadCore": 63,
      "mainThreadStackSize": 16384,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000080100000",
      "fsPermissionsHex": "0x0000000080100000",
      "fsPermNonzero": true,
      "hostsServices": [
        "idle:sys",
        "omm",
        "omm:s",
        "spsm"
      ],
      "usesServices": [
        "apm:sys",
        "audctl",
        "bgtc:sc",
        "bgtc:t",
        "bpc",
        "bt:sys",
        "cec-mgr",
        "disp:omm",
        "dp2hdmi",
        "erpt:c",
        "fatal:u",
        "fsp-srv",
        "gpio",
        "hdcp",
        "hid",
        "hid:sys",
        "hshl:sys",
        "ins:r",
        "lbl",
        "lm",
        "notif:s",
        "omm",
        "pm:bm",
        "prepo:s",
        "psc:c",
        "psc:m",
        "set:sys",
        "srepo:u",
        "tc",
        "time:al",
        "time:p",
        "usb:dock",
        "usb:hs",
        "usb:obsv",
        "vi2:m1"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69,
          77
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": 512,
        "debug": null
      },
      "hostCount": 4,
      "useCount": 35,
      "acidHostCount": 0,
      "syscallCount": 50,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 77.0,
      "surface": 63.4,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 4,
          "weight": 3.0,
          "points": 12.0
        },
        {
          "label": "Used services",
          "count": 35,
          "weight": 1.0,
          "points": 35.0
        },
        {
          "label": "Syscalls",
          "count": 50,
          "weight": 0.5,
          "points": 25.0
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 1,
          "weight": 5.0,
          "points": 5.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": false,
      "tags": [],
      "note": "",
      "noteSource": ""
    },
    {
      "name": "bsdsocket",
      "programId": "0400000000000012",
      "file": "dumps/system-code/0400000000000012/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 53,
      "mainThreadCore": 7,
      "mainThreadStackSize": 8192,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000000008",
      "fsPermissionsHex": "0x0000000000000008",
      "fsPermNonzero": true,
      "hostsServices": [
        "bsd:a",
        "bsd:nu",
        "bsd:s",
        "bsd:u",
        "dns:priv",
        "ifcfg",
        "nsd:a",
        "nsd:u",
        "sfdnsres"
      ],
      "usesServices": [
        "bsd:s",
        "fatal:u",
        "fsp-srv",
        "lm",
        "nsd:u",
        "psc:l",
        "psc:m",
        "set:sys",
        "srepo:u",
        "time:al",
        "time:su"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69,
          80,
          81,
          82,
          83,
          85,
          86,
          87,
          88,
          89,
          90,
          92,
          93,
          94,
          95
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": 512,
        "debug": null
      },
      "hostCount": 9,
      "useCount": 11,
      "acidHostCount": 0,
      "syscallCount": 63,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 74.5,
      "surface": 61.3,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 9,
          "weight": 3.0,
          "points": 27.0
        },
        {
          "label": "Used services",
          "count": 11,
          "weight": 1.0,
          "points": 11.0
        },
        {
          "label": "Syscalls",
          "count": 63,
          "weight": 0.5,
          "points": 31.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 1,
          "weight": 5.0,
          "points": 5.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": false,
      "tags": [
        "network"
      ],
      "note": "",
      "noteSource": ""
    },
    {
      "name": "account",
      "programId": "040000000000001e",
      "file": "dumps/system-code/040000000000001e/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 58,
      "mainThreadCore": 63,
      "mainThreadStackSize": 65536,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000008020018",
      "fsPermissionsHex": "0x0000000008020018",
      "fsPermNonzero": true,
      "hostsServices": [
        "acc:aa",
        "acc:e",
        "acc:e:su",
        "acc:e:u1",
        "acc:e:u2",
        "dauth:0"
      ],
      "usesServices": [
        "arp:r",
        "bgtc:t",
        "bsd:s",
        "bsdcfg",
        "caps:dc",
        "ectx:w",
        "erpt:c",
        "es",
        "fatal:u",
        "fsp-srv",
        "lm",
        "nifm:s",
        "npns:s",
        "nsd:u",
        "ovln:snd",
        "psc:m",
        "set:sys",
        "sfdnsres",
        "spl:da",
        "srepo:u",
        "ssl:s",
        "time:u"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69,
          81,
          82
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": 512,
        "debug": null
      },
      "hostCount": 6,
      "useCount": 22,
      "acidHostCount": 0,
      "syscallCount": 51,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 70.5,
      "surface": 58.0,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 6,
          "weight": 3.0,
          "points": 18.0
        },
        {
          "label": "Used services",
          "count": 22,
          "weight": 1.0,
          "points": 22.0
        },
        {
          "label": "Syscalls",
          "count": 51,
          "weight": 0.5,
          "points": 25.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 1,
          "weight": 5.0,
          "points": 5.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": false,
      "tags": [
        "account"
      ],
      "note": "",
      "noteSource": ""
    },
    {
      "name": "olsc",
      "programId": "040000000000003e",
      "file": "dumps/system-code/040000000000003e/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 58,
      "mainThreadCore": 63,
      "mainThreadStackSize": 65536,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "4000000200020048",
      "fsPermissionsHex": "0x4000000200020048",
      "fsPermNonzero": true,
      "hostsServices": [
        "olsc:ac",
        "olsc:s",
        "olsc:u",
        "spbg:sp"
      ],
      "usesServices": [
        "acc:aa",
        "acc:e:u1",
        "arp:r",
        "avm",
        "bgtc:t",
        "bsd:s",
        "bsdcfg",
        "caps:a",
        "dauth:0",
        "erpt:c",
        "fatal:u",
        "fsp-srv",
        "hidc:s",
        "lm",
        "mnpp:sys",
        "nifm:s",
        "npns:s",
        "nsd:u",
        "psc:m",
        "set:sys",
        "sfdnsres",
        "sprof:bg",
        "sprof:sp",
        "srepo:u",
        "ssl:s",
        "time:u"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69,
          81,
          82
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": 512,
        "debug": null
      },
      "hostCount": 4,
      "useCount": 26,
      "acidHostCount": 0,
      "syscallCount": 51,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 68.5,
      "surface": 56.4,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 4,
          "weight": 3.0,
          "points": 12.0
        },
        {
          "label": "Used services",
          "count": 26,
          "weight": 1.0,
          "points": 26.0
        },
        {
          "label": "Syscalls",
          "count": 51,
          "weight": 0.5,
          "points": 25.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 1,
          "weight": 5.0,
          "points": 5.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": false,
      "tags": [
        "online"
      ],
      "note": "",
      "noteSource": ""
    },
    {
      "name": "nim",
      "programId": "0400000000000025",
      "file": "dumps/system-code/0400000000000025/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 58,
      "mainThreadCore": 63,
      "mainThreadStackSize": 32768,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "4000000000000009",
      "fsPermissionsHex": "0x4000000000000009",
      "fsPermNonzero": true,
      "hostsServices": [
        "nim",
        "nim:eca",
        "nim:ecas",
        "nim:shp",
        "ntc"
      ],
      "usesServices": [
        "acc:e:u1",
        "arp:r",
        "bsd:s",
        "bsdcfg",
        "dauth:0",
        "es",
        "fatal:u",
        "fsp-srv",
        "lm",
        "ncm",
        "nifm:s",
        "nsd:u",
        "ovln:snd",
        "pm:bm",
        "psc:m",
        "set:cal",
        "set:sys",
        "sfdnsres",
        "srepo:u",
        "ssl:s",
        "time:s"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69,
          81,
          82
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": 256,
        "debug": null
      },
      "hostCount": 5,
      "useCount": 21,
      "acidHostCount": 0,
      "syscallCount": 51,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 66.5,
      "surface": 54.7,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 5,
          "weight": 3.0,
          "points": 15.0
        },
        {
          "label": "Used services",
          "count": 21,
          "weight": 1.0,
          "points": 21.0
        },
        {
          "label": "Syscalls",
          "count": 51,
          "weight": 0.5,
          "points": 25.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 1,
          "weight": 5.0,
          "points": 5.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": false,
      "tags": [
        "network",
        "update"
      ],
      "note": "",
      "noteSource": ""
    },
    {
      "name": "bluetooth.gen2",
      "programId": "040000000000000b",
      "file": "dumps/system-code/040000000000000b/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 17,
      "mainThreadCore": 63,
      "mainThreadStackSize": 16384,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000100008",
      "fsPermissionsHex": "0x0000000000100008",
      "fsPermNonzero": true,
      "hostsServices": [
        "bt",
        "bt:dbg",
        "bt:sys",
        "bt:u",
        "btm:u",
        "btp:dbg",
        "rfua:s"
      ],
      "usesServices": [
        "dt",
        "erpt:c",
        "fatal:u",
        "fsp-srv",
        "gpio",
        "hshl:sys",
        "lm",
        "ovln:snd",
        "pm:bm",
        "psc:m",
        "set:cal",
        "set:sys",
        "srepo:u",
        "usb:hs"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69,
          80,
          81,
          82
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": 0,
        "debug": null
      },
      "hostCount": 7,
      "useCount": 14,
      "acidHostCount": 0,
      "syscallCount": 52,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 66.0,
      "surface": 54.3,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 7,
          "weight": 3.0,
          "points": 21.0
        },
        {
          "label": "Used services",
          "count": 14,
          "weight": 1.0,
          "points": 14.0
        },
        {
          "label": "Syscalls",
          "count": 52,
          "weight": 0.5,
          "points": 26.0
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 1,
          "weight": 5.0,
          "points": 5.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": false,
      "tags": [
        "bluetooth",
        "driver"
      ],
      "note": "",
      "noteSource": ""
    },
    {
      "name": "pctl",
      "programId": "040000000000002e",
      "file": "dumps/system-code/040000000000002e/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 58,
      "mainThreadCore": 63,
      "mainThreadStackSize": 24576,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000000008",
      "fsPermissionsHex": "0x0000000000000008",
      "fsPermNonzero": true,
      "hostsServices": [
        "pctl",
        "pctl:a",
        "pctl:r",
        "pctl:s"
      ],
      "usesServices": [
        "acc:e:u1",
        "arp:r",
        "bgtc:t",
        "bsd:s",
        "bsdcfg",
        "dauth:0",
        "fatal:u",
        "fsp-srv",
        "lm",
        "nifm:s",
        "npns:s",
        "nsd:u",
        "ovln:snd",
        "pdm:qry",
        "pm:bm",
        "psc:m",
        "set",
        "set:cal",
        "set:sys",
        "sfdnsres",
        "spl:mig",
        "srepo:u",
        "ssl:s",
        "time:u"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": 128,
        "debug": null
      },
      "hostCount": 4,
      "useCount": 24,
      "acidHostCount": 0,
      "syscallCount": 49,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 65.5,
      "surface": 53.9,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 4,
          "weight": 3.0,
          "points": 12.0
        },
        {
          "label": "Used services",
          "count": 24,
          "weight": 1.0,
          "points": 24.0
        },
        {
          "label": "Syscalls",
          "count": 49,
          "weight": 0.5,
          "points": 24.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 1,
          "weight": 5.0,
          "points": 5.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": false,
      "tags": [
        "parental"
      ],
      "note": "",
      "noteSource": ""
    },
    {
      "name": "usb.gen2",
      "programId": "0400000000000006",
      "file": "dumps/system-code/0400000000000006/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 16,
      "mainThreadCore": 63,
      "mainThreadStackSize": 16384,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000000000",
      "fsPermissionsHex": "0x0000000000000000",
      "fsPermNonzero": false,
      "hostsServices": [
        "usb:dock",
        "usb:ds",
        "usb:hs",
        "usb:obsv",
        "usb:pm"
      ],
      "usesServices": [
        "bpmpmr:u",
        "clkrst",
        "dt",
        "fatal:u",
        "gpio",
        "hshl:set",
        "i2c",
        "ins:s",
        "psc:m",
        "set:sys",
        "time:al"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69,
          80,
          81,
          82,
          83,
          85,
          86,
          87,
          88,
          89,
          90,
          92,
          93,
          94,
          95
        ],
        "maps": 14,
        "irqs": [
          195,
          198
        ],
        "appletType": null,
        "handleTable": 512,
        "debug": null
      },
      "hostCount": 5,
      "useCount": 11,
      "acidHostCount": 0,
      "syscallCount": 63,
      "mapCount": 14,
      "irqCount": 2,
      "surfaceRaw": 65.5,
      "surface": 53.9,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 5,
          "weight": 3.0,
          "points": 15.0
        },
        {
          "label": "Used services",
          "count": 11,
          "weight": 1.0,
          "points": 11.0
        },
        {
          "label": "Syscalls",
          "count": 63,
          "weight": 0.5,
          "points": 31.5
        },
        {
          "label": "Memory maps",
          "count": 14,
          "weight": 0.5,
          "points": 7.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 2,
          "weight": 0.5,
          "points": 1.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": false,
      "tags": [
        "driver",
        "usb"
      ],
      "note": "USB stack; 14 maps, 2 IRQs.",
      "noteSource": "Metadata"
    },
    {
      "name": "nifm",
      "programId": "040000000000000f",
      "file": "dumps/system-code/040000000000000f/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 58,
      "mainThreadCore": 63,
      "mainThreadStackSize": 32768,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000100000",
      "fsPermissionsHex": "0x0000000000100000",
      "fsPermNonzero": true,
      "hostsServices": [
        "nifm:a",
        "nifm:s",
        "nifm:u"
      ],
      "usesServices": [
        "arp:r",
        "bgtc:sc",
        "bgtc:t",
        "bsd:nu",
        "bsd:s",
        "bt:sys",
        "dns:priv",
        "eth:nd",
        "ethd:nd",
        "fatal:u",
        "fsp-srv",
        "htc:nd",
        "ifcfg",
        "lm",
        "nettc:nd",
        "nettc:nu",
        "nsd:u",
        "pl:s",
        "psc:m",
        "set",
        "set:sys",
        "sfdnsres",
        "srepo:u",
        "ssl:s",
        "wlan",
        "wlan:nd"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": 512,
        "debug": null
      },
      "hostCount": 3,
      "useCount": 26,
      "acidHostCount": 0,
      "syscallCount": 49,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 64.5,
      "surface": 53.1,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 3,
          "weight": 3.0,
          "points": 9.0
        },
        {
          "label": "Used services",
          "count": 26,
          "weight": 1.0,
          "points": 26.0
        },
        {
          "label": "Syscalls",
          "count": 49,
          "weight": 0.5,
          "points": 24.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 1,
          "weight": 5.0,
          "points": 5.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": false,
      "tags": [
        "network"
      ],
      "note": "",
      "noteSource": ""
    },
    {
      "name": "friends",
      "programId": "040000000000000e",
      "file": "dumps/system-code/040000000000000e/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 58,
      "mainThreadCore": 63,
      "mainThreadStackSize": 16384,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000000008",
      "fsPermissionsHex": "0x0000000000000008",
      "fsPermNonzero": true,
      "hostsServices": [
        "friend:a",
        "friend:m",
        "friend:s",
        "friend:u",
        "friend:v"
      ],
      "usesServices": [
        "acc:aa",
        "acc:e:u1",
        "arp:r",
        "bgtc:t",
        "bsd:s",
        "fatal:u",
        "fsp-srv",
        "lm",
        "nifm:s",
        "npns:s",
        "nsd:u",
        "ovln:snd",
        "pdm:qry",
        "psc:m",
        "set:sys",
        "sfdnsres",
        "srepo:u",
        "ssl:s",
        "time:u"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": 512,
        "debug": null
      },
      "hostCount": 5,
      "useCount": 19,
      "acidHostCount": 0,
      "syscallCount": 49,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 63.5,
      "surface": 52.3,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 5,
          "weight": 3.0,
          "points": 15.0
        },
        {
          "label": "Used services",
          "count": 19,
          "weight": 1.0,
          "points": 19.0
        },
        {
          "label": "Syscalls",
          "count": 49,
          "weight": 0.5,
          "points": 24.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 1,
          "weight": 5.0,
          "points": 5.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": false,
      "tags": [
        "social"
      ],
      "note": "",
      "noteSource": ""
    },
    {
      "name": "sdb",
      "programId": "0400000000000039",
      "file": "dumps/system-code/0400000000000039/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 49,
      "mainThreadCore": 63,
      "mainThreadStackSize": 12288,
      "systemResourceSize": 0,
      "version": 1543569664,
      "versionHex": "0x5C010100",
      "productCode": "",
      "fsPermissions": "0000000000100008",
      "fsPermissionsHex": "0x0000000000100008",
      "fsPermNonzero": true,
      "hostsServices": [
        "avm",
        "mii:e",
        "mii:u",
        "miiimg",
        "pdm:ntfy",
        "pdm:qry",
        "pl:s"
      ],
      "usesServices": [
        "acc:e:u1",
        "arp:r",
        "bcat:s",
        "dauth:0",
        "fatal:u",
        "fsp-srv",
        "lm",
        "pm:bm",
        "pm:info",
        "set:sys",
        "srepo:u",
        "time:u"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": 512,
        "debug": null
      },
      "hostCount": 7,
      "useCount": 12,
      "acidHostCount": 0,
      "syscallCount": 49,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 62.5,
      "surface": 51.4,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 7,
          "weight": 3.0,
          "points": 21.0
        },
        {
          "label": "Used services",
          "count": 12,
          "weight": 1.0,
          "points": 12.0
        },
        {
          "label": "Syscalls",
          "count": 49,
          "weight": 0.5,
          "points": 24.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 1,
          "weight": 5.0,
          "points": 5.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": false,
      "tags": [
        "debug"
      ],
      "note": "",
      "noteSource": ""
    },
    {
      "name": "migration",
      "programId": "040000000000003a",
      "file": "dumps/system-code/040000000000003a/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 58,
      "mainThreadCore": 63,
      "mainThreadStackSize": 65536,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000240025048",
      "fsPermissionsHex": "0x0000000240025048",
      "fsPermNonzero": true,
      "hostsServices": [
        "mig:usr"
      ],
      "usesServices": [
        "acc:su",
        "bsd:s",
        "dauth:0",
        "erpt:c",
        "eupld:c",
        "fatal:u",
        "friend:s",
        "fsp-srv",
        "hid",
        "hid:sys",
        "ldn:s",
        "lm",
        "nifm:a",
        "notif:s",
        "npns:s",
        "ns:am2",
        "nsd:u",
        "olsc:s",
        "pctl:s",
        "pdm:ntfy",
        "prepo:u",
        "set",
        "set:sys",
        "sfdnsres",
        "spl:mig",
        "srepo:u",
        "ssl:s",
        "time:s"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69,
          81,
          82
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": 512,
        "debug": null
      },
      "hostCount": 1,
      "useCount": 28,
      "acidHostCount": 0,
      "syscallCount": 51,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 61.5,
      "surface": 50.6,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 1,
          "weight": 3.0,
          "points": 3.0
        },
        {
          "label": "Used services",
          "count": 28,
          "weight": 1.0,
          "points": 28.0
        },
        {
          "label": "Syscalls",
          "count": 51,
          "weight": 0.5,
          "points": 25.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 1,
          "weight": 5.0,
          "points": 5.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": false,
      "tags": [
        "transfer"
      ],
      "note": "",
      "noteSource": ""
    },
    {
      "name": "nfc",
      "programId": "0400000000000020",
      "file": "dumps/system-code/0400000000000020/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 37,
      "mainThreadCore": 63,
      "mainThreadStackSize": 8192,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000000008",
      "fsPermissionsHex": "0x0000000000000008",
      "fsPermNonzero": true,
      "hostsServices": [
        "nfc:am",
        "nfc:mf:u",
        "nfc:sys",
        "nfc:user",
        "nfp:dbg",
        "nfp:sys",
        "nfp:user"
      ],
      "usesServices": [
        "arp:r",
        "fatal:u",
        "fsp-srv",
        "hid",
        "hid:sys",
        "prepo:s",
        "psc:m",
        "set:sys",
        "spl:mig",
        "time:u"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": 256,
        "debug": null
      },
      "hostCount": 7,
      "useCount": 10,
      "acidHostCount": 0,
      "syscallCount": 49,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 60.5,
      "surface": 49.8,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 7,
          "weight": 3.0,
          "points": 21.0
        },
        {
          "label": "Used services",
          "count": 10,
          "weight": 1.0,
          "points": 10.0
        },
        {
          "label": "Syscalls",
          "count": 49,
          "weight": 0.5,
          "points": 24.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 1,
          "weight": 5.0,
          "points": 5.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": false,
      "tags": [
        "nfc"
      ],
      "note": "",
      "noteSource": ""
    },
    {
      "name": "wlan.autogen",
      "programId": "0400000000000016",
      "file": "dumps/system-code/0400000000000016/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 31,
      "mainThreadCore": 63,
      "mainThreadStackSize": 16384,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000100000",
      "fsPermissionsHex": "0x0000000000100000",
      "fsPermNonzero": true,
      "hostsServices": [
        "wlan",
        "wlan:nd",
        "wlan:p"
      ],
      "usesServices": [
        "csrng",
        "dt",
        "erpt:c",
        "fatal:u",
        "fsp-srv",
        "gpio",
        "lm",
        "pcie",
        "rfua:s",
        "set:cal",
        "set:sys",
        "srepo:u"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69,
          70,
          71,
          80,
          81,
          82,
          83,
          85,
          86,
          87,
          88,
          89,
          90,
          92,
          93,
          94,
          95
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": 128,
        "debug": null
      },
      "hostCount": 3,
      "useCount": 12,
      "acidHostCount": 0,
      "syscallCount": 65,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 58.5,
      "surface": 48.1,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 3,
          "weight": 3.0,
          "points": 9.0
        },
        {
          "label": "Used services",
          "count": 12,
          "weight": 1.0,
          "points": 12.0
        },
        {
          "label": "Syscalls",
          "count": 65,
          "weight": 0.5,
          "points": 32.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 1,
          "weight": 5.0,
          "points": 5.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": false,
      "tags": [
        "driver",
        "wifi"
      ],
      "note": "",
      "noteSource": ""
    },
    {
      "name": "capsrv",
      "programId": "0400000000000022",
      "file": "dumps/system-code/0400000000000022/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 49,
      "mainThreadCore": 63,
      "mainThreadStackSize": 8192,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "4000000000001008",
      "fsPermissionsHex": "0x4000000000001008",
      "fsPermNonzero": true,
      "hostsServices": [
        "caps:a",
        "caps:c",
        "caps:sc",
        "caps:ss",
        "caps:u"
      ],
      "usesServices": [
        "acc:e:u1",
        "caps:c",
        "caps:dc",
        "caps2:s",
        "fatal:u",
        "fsp-srv",
        "lm",
        "ovln:snd",
        "set:sys",
        "spl:mig",
        "srepo:u",
        "time:u"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": 128,
        "debug": null
      },
      "hostCount": 5,
      "useCount": 12,
      "acidHostCount": 0,
      "syscallCount": 49,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 56.5,
      "surface": 46.5,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 5,
          "weight": 3.0,
          "points": 15.0
        },
        {
          "label": "Used services",
          "count": 12,
          "weight": 1.0,
          "points": 12.0
        },
        {
          "label": "Syscalls",
          "count": 49,
          "weight": 0.5,
          "points": 24.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 1,
          "weight": 5.0,
          "points": 5.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": false,
      "tags": [
        "capture"
      ],
      "note": "",
      "noteSource": ""
    },
    {
      "name": "ldn",
      "programId": "0400000000000018",
      "file": "dumps/system-code/0400000000000018/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 34,
      "mainThreadCore": 63,
      "mainThreadStackSize": 16384,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000000000",
      "fsPermissionsHex": "0x0000000000000000",
      "fsPermNonzero": false,
      "hostsServices": [
        "ldn:m",
        "ldn:s",
        "ldn:u",
        "lp2p:app",
        "lp2p:m",
        "lp2p:sys"
      ],
      "usesServices": [
        "arp:r",
        "bsd:s",
        "bt:sys",
        "es",
        "fatal:u",
        "ifcfg",
        "lm",
        "nifm:s",
        "pl:s",
        "set:sys",
        "spl:ldn",
        "srepo:u",
        "wlan"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": 0,
        "debug": null
      },
      "hostCount": 6,
      "useCount": 13,
      "acidHostCount": 0,
      "syscallCount": 49,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 55.5,
      "surface": 45.7,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 6,
          "weight": 3.0,
          "points": 18.0
        },
        {
          "label": "Used services",
          "count": 13,
          "weight": 1.0,
          "points": 13.0
        },
        {
          "label": "Syscalls",
          "count": 49,
          "weight": 0.5,
          "points": 24.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": false,
      "tags": [
        "local",
        "network"
      ],
      "note": "",
      "noteSource": ""
    },
    {
      "name": "npns",
      "programId": "040000000000002f",
      "file": "dumps/system-code/040000000000002f/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 58,
      "mainThreadCore": 63,
      "mainThreadStackSize": 16384,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000000008",
      "fsPermissionsHex": "0x0000000000000008",
      "fsPermNonzero": true,
      "hostsServices": [
        "npns:a",
        "npns:s",
        "npns:u"
      ],
      "usesServices": [
        "arp:r",
        "bgtc:t",
        "bsd:s",
        "dauth:0",
        "fatal:u",
        "fsp-srv",
        "lm",
        "nifm:s",
        "nsd:u",
        "pm:bm",
        "psc:m",
        "set",
        "set:sys",
        "sfdnsres",
        "srepo:u",
        "ssl:s"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69,
          81,
          82
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": 256,
        "debug": null
      },
      "hostCount": 3,
      "useCount": 16,
      "acidHostCount": 0,
      "syscallCount": 51,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 55.5,
      "surface": 45.7,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 3,
          "weight": 3.0,
          "points": 9.0
        },
        {
          "label": "Used services",
          "count": 16,
          "weight": 1.0,
          "points": 16.0
        },
        {
          "label": "Syscalls",
          "count": 51,
          "weight": 0.5,
          "points": 25.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 1,
          "weight": 5.0,
          "points": 5.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": false,
      "tags": [
        "notifications"
      ],
      "note": "",
      "noteSource": ""
    },
    {
      "name": "erpt",
      "programId": "040000000000002b",
      "file": "dumps/system-code/040000000000002b/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 49,
      "mainThreadCore": 63,
      "mainThreadStackSize": 8192,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000080000000008",
      "fsPermissionsHex": "0x0000080000000008",
      "fsPermNonzero": true,
      "hostsServices": [
        "erpt:c",
        "erpt:r",
        "sprof:bg",
        "sprof:sp"
      ],
      "usesServices": [
        "csrng",
        "ectx:r",
        "fsp-srv",
        "lm",
        "psc:m",
        "set",
        "set:sys",
        "srepo:a",
        "time:u"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          48,
          52,
          53,
          55,
          64,
          65,
          66,
          67,
          68,
          69
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": 256,
        "debug": null
      },
      "hostCount": 4,
      "useCount": 9,
      "acidHostCount": 0,
      "syscallCount": 51,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 51.5,
      "surface": 42.4,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 4,
          "weight": 3.0,
          "points": 12.0
        },
        {
          "label": "Used services",
          "count": 9,
          "weight": 1.0,
          "points": 9.0
        },
        {
          "label": "Syscalls",
          "count": 51,
          "weight": 0.5,
          "points": 25.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 1,
          "weight": 5.0,
          "points": 5.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": false,
      "tags": [
        "error"
      ],
      "note": "",
      "noteSource": ""
    },
    {
      "name": "eupld",
      "programId": "0400000000000030",
      "file": "dumps/system-code/0400000000000030/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 58,
      "mainThreadCore": 63,
      "mainThreadStackSize": 4096,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000000000",
      "fsPermissionsHex": "0x0000000000000000",
      "fsPermNonzero": false,
      "hostsServices": [
        "eupld:c",
        "eupld:r"
      ],
      "usesServices": [
        "acc:e:u1",
        "bgtc:t",
        "bsd:s",
        "dauth:0",
        "erpt:c",
        "erpt:r",
        "fatal:u",
        "lm",
        "nifm:s",
        "nsd:u",
        "pdm:ntfy",
        "pdm:qry",
        "pm:bm",
        "psc:m",
        "set:sys",
        "sfdnsres",
        "srepo:u",
        "ssl:s"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": 256,
        "debug": null
      },
      "hostCount": 2,
      "useCount": 18,
      "acidHostCount": 0,
      "syscallCount": 49,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 48.5,
      "surface": 39.9,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 2,
          "weight": 3.0,
          "points": 6.0
        },
        {
          "label": "Used services",
          "count": 18,
          "weight": 1.0,
          "points": 18.0
        },
        {
          "label": "Syscalls",
          "count": 49,
          "weight": 0.5,
          "points": 24.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": false,
      "tags": [],
      "note": "",
      "noteSource": ""
    },
    {
      "name": "eclct",
      "programId": "0400000000000032",
      "file": "dumps/system-code/0400000000000032/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 58,
      "mainThreadCore": 63,
      "mainThreadStackSize": 16384,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000100000",
      "fsPermissionsHex": "0x0000000000100000",
      "fsPermNonzero": true,
      "hostsServices": [],
      "usesServices": [
        "acc:e:u1",
        "bgtc:t",
        "clkrst",
        "dauth:0",
        "erpt:c",
        "erpt:r",
        "eupld:c",
        "fatal:u",
        "fsp-srv",
        "lm",
        "nifm:s",
        "pcie:log",
        "pctl:s",
        "pm:bm",
        "psm",
        "rtc",
        "set",
        "set:sys",
        "srepo:a",
        "time:u",
        "usb:obsv"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": 256,
        "debug": null
      },
      "hostCount": 0,
      "useCount": 21,
      "acidHostCount": 0,
      "syscallCount": 43,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 47.5,
      "surface": 39.1,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 0,
          "weight": 3.0,
          "points": 0.0
        },
        {
          "label": "Used services",
          "count": 21,
          "weight": 1.0,
          "points": 21.0
        },
        {
          "label": "Syscalls",
          "count": 43,
          "weight": 0.5,
          "points": 21.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 1,
          "weight": 5.0,
          "points": 5.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": false,
      "tags": [
        "error"
      ],
      "note": "",
      "noteSource": ""
    },
    {
      "name": "es",
      "programId": "0400000000000033",
      "file": "dumps/system-code/0400000000000033/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 49,
      "mainThreadCore": 63,
      "mainThreadStackSize": 20480,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000010000008",
      "fsPermissionsHex": "0x0000000010000008",
      "fsPermNonzero": true,
      "hostsServices": [
        "es",
        "ndrm:la",
        "ndrm:lu"
      ],
      "usesServices": [
        "es",
        "fatal:u",
        "fsp-srv",
        "lm",
        "set:cal",
        "set:sys",
        "spl:es",
        "ssl:s",
        "time:u"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": 0,
        "debug": null
      },
      "hostCount": 3,
      "useCount": 9,
      "acidHostCount": 0,
      "syscallCount": 49,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 47.5,
      "surface": 39.1,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 3,
          "weight": 3.0,
          "points": 9.0
        },
        {
          "label": "Used services",
          "count": 9,
          "weight": 1.0,
          "points": 9.0
        },
        {
          "label": "Syscalls",
          "count": 49,
          "weight": 0.5,
          "points": 24.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 1,
          "weight": 5.0,
          "points": 5.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": false,
      "tags": [
        "eshop",
        "system"
      ],
      "note": "",
      "noteSource": ""
    },
    {
      "name": "fatal",
      "programId": "0400000000000034",
      "file": "dumps/system-code/0400000000000034/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 15,
      "mainThreadCore": 63,
      "mainThreadStackSize": 65536,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000100000",
      "fsPermissionsHex": "0x0000000000100000",
      "fsPermNonzero": true,
      "hostsServices": [
        "fatal:p",
        "fatal:u"
      ],
      "usesServices": [
        "bpc",
        "clkrst",
        "dt",
        "erpt:c",
        "fsp-srv",
        "i2c",
        "lm",
        "pm:info",
        "set",
        "set:sys",
        "spsm",
        "vi2:m1"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": 128,
        "debug": null
      },
      "hostCount": 2,
      "useCount": 12,
      "acidHostCount": 0,
      "syscallCount": 49,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 47.5,
      "surface": 39.1,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 2,
          "weight": 3.0,
          "points": 6.0
        },
        {
          "label": "Used services",
          "count": 12,
          "weight": 1.0,
          "points": 12.0
        },
        {
          "label": "Syscalls",
          "count": 49,
          "weight": 0.5,
          "points": 24.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 1,
          "weight": 5.0,
          "points": 5.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": false,
      "tags": [
        "error"
      ],
      "note": "",
      "noteSource": ""
    },
    {
      "name": "ssl",
      "programId": "0400000000000024",
      "file": "dumps/system-code/0400000000000024/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 57,
      "mainThreadCore": 7,
      "mainThreadStackSize": 131072,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000100000",
      "fsPermissionsHex": "0x0000000000100000",
      "fsPermNonzero": true,
      "hostsServices": [
        "ssl",
        "ssl:s"
      ],
      "usesServices": [
        "fsp-srv",
        "nsd:u",
        "bsd:s",
        "spl:ssl",
        "set:cal",
        "set:sys",
        "time:u",
        "fatal:u",
        "srepo:u",
        "erpt:c",
        "lm",
        "arp:r"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": 512,
        "debug": null
      },
      "hostCount": 2,
      "useCount": 12,
      "acidHostCount": 0,
      "syscallCount": 49,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 47.5,
      "surface": 39.1,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 2,
          "weight": 3.0,
          "points": 6.0
        },
        {
          "label": "Used services",
          "count": 12,
          "weight": 1.0,
          "points": 12.0
        },
        {
          "label": "Syscalls",
          "count": 49,
          "weight": 0.5,
          "points": 24.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 1,
          "weight": 5.0,
          "points": 5.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": false,
      "tags": [
        "crypto",
        "network"
      ],
      "note": "",
      "noteSource": ""
    },
    {
      "name": "pcv",
      "programId": "040000000000001a",
      "file": "dumps/system-code/040000000000001a/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 32,
      "mainThreadCore": 63,
      "mainThreadStackSize": 16384,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000000000",
      "fsPermissionsHex": "0x0000000000000000",
      "fsPermNonzero": false,
      "hostsServices": [
        "bpc",
        "rtc",
        "rgltr"
      ],
      "usesServices": [
        "fatal:u",
        "psc:m",
        "dt",
        "i2c",
        "set:sys"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69,
          80,
          81,
          82,
          83,
          85,
          86,
          87,
          88,
          89,
          90,
          92,
          93,
          94,
          95
        ],
        "maps": 0,
        "irqs": [
          241,
          1023
        ],
        "appletType": null,
        "handleTable": 256,
        "debug": null
      },
      "hostCount": 3,
      "useCount": 5,
      "acidHostCount": 0,
      "syscallCount": 63,
      "mapCount": 0,
      "irqCount": 2,
      "surfaceRaw": 46.5,
      "surface": 38.3,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 3,
          "weight": 3.0,
          "points": 9.0
        },
        {
          "label": "Used services",
          "count": 5,
          "weight": 1.0,
          "points": 5.0
        },
        {
          "label": "Syscalls",
          "count": 63,
          "weight": 0.5,
          "points": 31.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 2,
          "weight": 0.5,
          "points": 1.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": false,
      "tags": [
        "power"
      ],
      "note": "",
      "noteSource": ""
    },
    {
      "name": "settings",
      "programId": "0400000000000009",
      "file": "dumps/system-code/0400000000000009/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 49,
      "mainThreadCore": 63,
      "mainThreadStackSize": 16384,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "000000000000000c",
      "fsPermissionsHex": "0x000000000000000c",
      "fsPermNonzero": true,
      "hostsServices": [
        "set",
        "set:cal",
        "set:fd",
        "set:sys"
      ],
      "usesServices": [
        "fatal:u",
        "fsp-srv",
        "spl:mig"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": 128,
        "debug": null
      },
      "hostCount": 4,
      "useCount": 3,
      "acidHostCount": 0,
      "syscallCount": 49,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 44.5,
      "surface": 36.6,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 4,
          "weight": 3.0,
          "points": 12.0
        },
        {
          "label": "Used services",
          "count": 3,
          "weight": 1.0,
          "points": 3.0
        },
        {
          "label": "Syscalls",
          "count": 49,
          "weight": 0.5,
          "points": 24.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 1,
          "weight": 5.0,
          "points": 5.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": false,
      "tags": [
        "settings"
      ],
      "note": "",
      "noteSource": ""
    },
    {
      "name": "gc",
      "programId": "0400000000000062",
      "file": "dumps/system-code/0400000000000062/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 45,
      "mainThreadCore": 63,
      "mainThreadStackSize": 16384,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000000000",
      "fsPermissionsHex": "0x0000000000000000",
      "fsPermNonzero": false,
      "hostsServices": [],
      "usesServices": [
        "clkrst",
        "dt",
        "fatal:u",
        "fs:stcfg",
        "gpio",
        "lm",
        "psc:m",
        "set:cal",
        "spl:gc"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69,
          80,
          81,
          82,
          83,
          85,
          86,
          87,
          88,
          89,
          90,
          92,
          93,
          94,
          95
        ],
        "maps": 2,
        "irqs": [
          97,
          1023
        ],
        "appletType": null,
        "handleTable": 256,
        "debug": null
      },
      "hostCount": 0,
      "useCount": 9,
      "acidHostCount": 0,
      "syscallCount": 63,
      "mapCount": 2,
      "irqCount": 2,
      "surfaceRaw": 42.5,
      "surface": 35.0,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 0,
          "weight": 3.0,
          "points": 0.0
        },
        {
          "label": "Used services",
          "count": 9,
          "weight": 1.0,
          "points": 9.0
        },
        {
          "label": "Syscalls",
          "count": 63,
          "weight": 0.5,
          "points": 31.5
        },
        {
          "label": "Memory maps",
          "count": 2,
          "weight": 0.5,
          "points": 1.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 2,
          "weight": 0.5,
          "points": 1.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": false,
      "tags": [
        "gamecard"
      ],
      "note": "",
      "noteSource": ""
    },
    {
      "name": "grc",
      "programId": "0400000000000035",
      "file": "dumps/system-code/0400000000000035/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 49,
      "mainThreadCore": 63,
      "mainThreadStackSize": 16384,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000000000",
      "fsPermissionsHex": "0x0000000000000000",
      "fsPermNonzero": false,
      "hostsServices": [
        "grc:c",
        "grc:d"
      ],
      "usesServices": [
        "caps:c",
        "caps:sc",
        "caps2:r",
        "fatal:u",
        "lm",
        "ovln:snd",
        "set:sys",
        "time:su"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69,
          81,
          82
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": 128,
        "debug": null
      },
      "hostCount": 2,
      "useCount": 8,
      "acidHostCount": 0,
      "syscallCount": 51,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 39.5,
      "surface": 32.5,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 2,
          "weight": 3.0,
          "points": 6.0
        },
        {
          "label": "Used services",
          "count": 8,
          "weight": 1.0,
          "points": 8.0
        },
        {
          "label": "Syscalls",
          "count": 51,
          "weight": 0.5,
          "points": 25.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": false,
      "tags": [],
      "note": "",
      "noteSource": ""
    },
    {
      "name": "ngc",
      "programId": "0400000000000050",
      "file": "dumps/system-code/0400000000000050/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 58,
      "mainThreadCore": 63,
      "mainThreadStackSize": 65536,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000100000",
      "fsPermissionsHex": "0x0000000000100000",
      "fsPermNonzero": true,
      "hostsServices": [
        "ngc:u",
        "ngct:u"
      ],
      "usesServices": [
        "fatal:u",
        "fsp-srv",
        "lm"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": 512,
        "debug": null
      },
      "hostCount": 2,
      "useCount": 3,
      "acidHostCount": 0,
      "syscallCount": 49,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 38.5,
      "surface": 31.7,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 2,
          "weight": 3.0,
          "points": 6.0
        },
        {
          "label": "Used services",
          "count": 3,
          "weight": 1.0,
          "points": 3.0
        },
        {
          "label": "Syscalls",
          "count": 49,
          "weight": 0.5,
          "points": 24.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 1,
          "weight": 5.0,
          "points": 5.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": false,
      "tags": [],
      "note": "",
      "noteSource": ""
    },
    {
      "name": "pgl",
      "programId": "0400000000000042",
      "file": "dumps/system-code/0400000000000042/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 49,
      "mainThreadCore": 63,
      "mainThreadStackSize": 16384,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000000001",
      "fsPermissionsHex": "0x0000000000000001",
      "fsPermNonzero": true,
      "hostsServices": [
        "pgl"
      ],
      "usesServices": [
        "fatal:u",
        "fsp-srv",
        "ldr:shel",
        "lr",
        "pm:shell",
        "set:sys"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": 256,
        "debug": null
      },
      "hostCount": 1,
      "useCount": 6,
      "acidHostCount": 0,
      "syscallCount": 49,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 38.5,
      "surface": 31.7,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 1,
          "weight": 3.0,
          "points": 3.0
        },
        {
          "label": "Used services",
          "count": 6,
          "weight": 1.0,
          "points": 6.0
        },
        {
          "label": "Syscalls",
          "count": 49,
          "weight": 0.5,
          "points": 24.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 1,
          "weight": 5.0,
          "points": 5.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": false,
      "tags": [],
      "note": "",
      "noteSource": ""
    },
    {
      "name": "boot2.ProdBoot",
      "programId": "0400000000000008",
      "file": "dumps/system-code/0400000000000008/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 48,
      "mainThreadCore": 63,
      "mainThreadStackSize": 16384,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "4000000000000000",
      "fsPermissionsHex": "0x4000000000000000",
      "fsPermNonzero": true,
      "hostsServices": [],
      "usesServices": [
        "fsp-srv",
        "gpio",
        "htc",
        "lr",
        "ncm",
        "pm:bm",
        "pm:shell",
        "set:sys"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": 128,
        "debug": null
      },
      "hostCount": 0,
      "useCount": 8,
      "acidHostCount": 0,
      "syscallCount": 49,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 37.5,
      "surface": 30.9,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 0,
          "weight": 3.0,
          "points": 0.0
        },
        {
          "label": "Used services",
          "count": 8,
          "weight": 1.0,
          "points": 8.0
        },
        {
          "label": "Syscalls",
          "count": 49,
          "weight": 0.5,
          "points": 24.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 1,
          "weight": 5.0,
          "points": 5.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": false,
      "tags": [
        "boot"
      ],
      "note": "",
      "noteSource": ""
    },
    {
      "name": "capsrv2",
      "programId": "0400000000000071",
      "file": "dumps/system-code/0400000000000071/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 61,
      "mainThreadCore": 6,
      "mainThreadStackSize": 12288,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000000000",
      "fsPermissionsHex": "0x0000000000000000",
      "fsPermNonzero": false,
      "hostsServices": [
        "caps2:r",
        "caps2:s"
      ],
      "usesServices": [
        "auddmg:u",
        "audsmx:u",
        "fatal:u",
        "gsv:s4",
        "srepo:u",
        "time:u"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69,
          81,
          82
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": null,
        "debug": null
      },
      "hostCount": 2,
      "useCount": 6,
      "acidHostCount": 0,
      "syscallCount": 51,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 37.5,
      "surface": 30.9,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 2,
          "weight": 3.0,
          "points": 6.0
        },
        {
          "label": "Used services",
          "count": 6,
          "weight": 1.0,
          "points": 6.0
        },
        {
          "label": "Syscalls",
          "count": 51,
          "weight": 0.5,
          "points": 25.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": false,
      "tags": [
        "capture"
      ],
      "note": "",
      "noteSource": ""
    },
    {
      "name": "capmtp",
      "programId": "040000000000001b",
      "file": "dumps/system-code/040000000000001b/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 49,
      "mainThreadCore": 63,
      "mainThreadStackSize": 4096,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000000000",
      "fsPermissionsHex": "0x0000000000000000",
      "fsPermNonzero": false,
      "hostsServices": [
        "capmtp"
      ],
      "usesServices": [
        "caps:a",
        "fatal:u",
        "ns:ro",
        "set:sys",
        "usb:ds"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69,
          81,
          82
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": 128,
        "debug": null
      },
      "hostCount": 1,
      "useCount": 5,
      "acidHostCount": 0,
      "syscallCount": 51,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 33.5,
      "surface": 27.6,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 1,
          "weight": 3.0,
          "points": 3.0
        },
        {
          "label": "Used services",
          "count": 5,
          "weight": 1.0,
          "points": 5.0
        },
        {
          "label": "Syscalls",
          "count": 51,
          "weight": 0.5,
          "points": 25.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": false,
      "tags": [
        "capture"
      ],
      "note": "",
      "noteSource": ""
    },
    {
      "name": "jpegdec",
      "programId": "040000000000003c",
      "file": "dumps/system-code/040000000000003c/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 49,
      "mainThreadCore": 63,
      "mainThreadStackSize": 16384,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000000000",
      "fsPermissionsHex": "0x0000000000000000",
      "fsPermNonzero": false,
      "hostsServices": [
        "caps:dc"
      ],
      "usesServices": [
        "fatal:u",
        "lm"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": 16,
        "debug": null
      },
      "hostCount": 1,
      "useCount": 2,
      "acidHostCount": 0,
      "syscallCount": 49,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 29.5,
      "surface": 24.3,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 1,
          "weight": 3.0,
          "points": 3.0
        },
        {
          "label": "Used services",
          "count": 2,
          "weight": 1.0,
          "points": 2.0
        },
        {
          "label": "Syscalls",
          "count": 49,
          "weight": 0.5,
          "points": 24.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": false,
      "tags": [
        "codec"
      ],
      "note": "",
      "noteSource": ""
    },
    {
      "name": "LogManager.Prod",
      "programId": "0400000000000015",
      "file": "dumps/system-code/0400000000000015/main.npdm",
      "is64Bit": true,
      "addressSpace": 3,
      "mainThreadPriority": 38,
      "mainThreadCore": 63,
      "mainThreadStackSize": 12288,
      "systemResourceSize": 0,
      "version": 1543504896,
      "versionHex": "0x5C000400",
      "productCode": "",
      "fsPermissions": "0000000000000000",
      "fsPermissionsHex": "0x0000000000000000",
      "fsPermNonzero": false,
      "hostsServices": [
        "lm"
      ],
      "usesServices": [
        "psc:m"
      ],
      "acidHostsServices": [],
      "kernel": {
        "syscalls": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          52,
          53,
          64,
          65,
          66,
          67,
          68,
          69
        ],
        "maps": 0,
        "irqs": [],
        "appletType": null,
        "handleTable": 512,
        "debug": null
      },
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "syscallCount": 49,
      "mapCount": 0,
      "irqCount": 0,
      "surfaceRaw": 28.5,
      "surface": 23.5,
      "surfaceBreakdown": [
        {
          "label": "Host services",
          "count": 1,
          "weight": 3.0,
          "points": 3.0
        },
        {
          "label": "Used services",
          "count": 1,
          "weight": 1.0,
          "points": 1.0
        },
        {
          "label": "Syscalls",
          "count": 49,
          "weight": 0.5,
          "points": 24.5
        },
        {
          "label": "Memory maps",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "IRQs (capped at 10)",
          "count": 0,
          "weight": 0.5,
          "points": 0.0
        },
        {
          "label": "Nonzero FS permissions",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        },
        {
          "label": "Debug metadata",
          "count": 0,
          "weight": 5.0,
          "points": 0.0
        }
      ],
      "focus": false,
      "tags": [
        "logging"
      ],
      "note": "",
      "noteSource": ""
    }
  ],
  "services": [
    {
      "name": "fatal:u",
      "hosts": [
        {
          "name": "fatal",
          "programId": "0400000000000034",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        },
        {
          "name": "Bus",
          "programId": "040000000000000a",
          "surface": 70.0,
          "focus": true,
          "hostCount": 9,
          "useCount": 6
        },
        {
          "name": "nvservices",
          "programId": "0400000000000019",
          "surface": 64.2,
          "focus": true,
          "hostCount": 6,
          "useCount": 9
        },
        {
          "name": "pcie",
          "programId": "040000000000001d",
          "surface": 51.4,
          "focus": true,
          "hostCount": 2,
          "useCount": 8
        },
        {
          "name": "lrp",
          "programId": "040000000000004d",
          "surface": 48.1,
          "focus": true,
          "hostCount": 5,
          "useCount": 18
        },
        {
          "name": "gsv3",
          "programId": "0400000000000083",
          "surface": 44.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 12
        },
        {
          "name": "gsv1",
          "programId": "0400000000000081",
          "surface": 43.6,
          "focus": true,
          "hostCount": 0,
          "useCount": 12
        },
        {
          "name": "camera.autogen",
          "programId": "0400000000000070",
          "surface": 43.2,
          "focus": true,
          "hostCount": 3,
          "useCount": 13
        },
        {
          "name": "nvkernel",
          "programId": "040000000000004f",
          "surface": 43.2,
          "focus": true,
          "hostCount": 2,
          "useCount": 4
        },
        {
          "name": "gsv4",
          "programId": "0400000000000084",
          "surface": 42.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 10
        },
        {
          "name": "host1x",
          "programId": "0400000000000065",
          "surface": 37.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 5
        },
        {
          "name": "sdcard",
          "programId": "0400000000000089",
          "surface": 36.2,
          "focus": true,
          "hostCount": 0,
          "useCount": 9
        },
        {
          "name": "tsec.autogen",
          "programId": "040000000000008d",
          "surface": 35.8,
          "focus": true,
          "hostCount": 1,
          "useCount": 6
        },
        {
          "name": "adraw",
          "programId": "0400000000000072",
          "surface": 33.3,
          "focus": true,
          "hostCount": 2,
          "useCount": 5
        },
        {
          "name": "ro",
          "programId": "0400000000000037",
          "surface": 32.5,
          "focus": true,
          "hostCount": 3,
          "useCount": 3
        },
        {
          "name": "gsvm",
          "programId": "0400000000000080",
          "surface": 29.2,
          "focus": true,
          "hostCount": 3,
          "useCount": 2
        },
        {
          "name": "creport",
          "programId": "0400000000000036",
          "surface": 28.4,
          "focus": true,
          "hostCount": 0,
          "useCount": 5
        },
        {
          "name": "eth",
          "programId": "0400000000000046",
          "surface": 28.0,
          "focus": true,
          "hostCount": 1,
          "useCount": 6
        },
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        },
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        },
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        },
        {
          "name": "psc",
          "programId": "0400000000000021",
          "surface": 71.2,
          "focus": false,
          "hostCount": 17,
          "useCount": 4
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        },
        {
          "name": "bsdsocket",
          "programId": "0400000000000012",
          "surface": 61.3,
          "focus": false,
          "hostCount": 9,
          "useCount": 11
        },
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        },
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        },
        {
          "name": "bluetooth.gen2",
          "programId": "040000000000000b",
          "surface": 54.3,
          "focus": false,
          "hostCount": 7,
          "useCount": 14
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "usb.gen2",
          "programId": "0400000000000006",
          "surface": 53.9,
          "focus": false,
          "hostCount": 5,
          "useCount": 11
        },
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        },
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        },
        {
          "name": "sdb",
          "programId": "0400000000000039",
          "surface": 51.4,
          "focus": false,
          "hostCount": 7,
          "useCount": 12
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        },
        {
          "name": "nfc",
          "programId": "0400000000000020",
          "surface": 49.8,
          "focus": false,
          "hostCount": 7,
          "useCount": 10
        },
        {
          "name": "wlan.autogen",
          "programId": "0400000000000016",
          "surface": 48.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 12
        },
        {
          "name": "capsrv",
          "programId": "0400000000000022",
          "surface": 46.5,
          "focus": false,
          "hostCount": 5,
          "useCount": 12
        },
        {
          "name": "ldn",
          "programId": "0400000000000018",
          "surface": 45.7,
          "focus": false,
          "hostCount": 6,
          "useCount": 13
        },
        {
          "name": "npns",
          "programId": "040000000000002f",
          "surface": 45.7,
          "focus": false,
          "hostCount": 3,
          "useCount": 16
        },
        {
          "name": "eupld",
          "programId": "0400000000000030",
          "surface": 39.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 18
        },
        {
          "name": "eclct",
          "programId": "0400000000000032",
          "surface": 39.1,
          "focus": false,
          "hostCount": 0,
          "useCount": 21
        },
        {
          "name": "es",
          "programId": "0400000000000033",
          "surface": 39.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 9
        },
        {
          "name": "ssl",
          "programId": "0400000000000024",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        },
        {
          "name": "pcv",
          "programId": "040000000000001a",
          "surface": 38.3,
          "focus": false,
          "hostCount": 3,
          "useCount": 5
        },
        {
          "name": "settings",
          "programId": "0400000000000009",
          "surface": 36.6,
          "focus": false,
          "hostCount": 4,
          "useCount": 3
        },
        {
          "name": "gc",
          "programId": "0400000000000062",
          "surface": 35.0,
          "focus": false,
          "hostCount": 0,
          "useCount": 9
        },
        {
          "name": "grc",
          "programId": "0400000000000035",
          "surface": 32.5,
          "focus": false,
          "hostCount": 2,
          "useCount": 8
        },
        {
          "name": "ngc",
          "programId": "0400000000000050",
          "surface": 31.7,
          "focus": false,
          "hostCount": 2,
          "useCount": 3
        },
        {
          "name": "pgl",
          "programId": "0400000000000042",
          "surface": 31.7,
          "focus": false,
          "hostCount": 1,
          "useCount": 6
        },
        {
          "name": "capsrv2",
          "programId": "0400000000000071",
          "surface": 30.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 6
        },
        {
          "name": "capmtp",
          "programId": "040000000000001b",
          "surface": 27.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 5
        },
        {
          "name": "jpegdec",
          "programId": "040000000000003c",
          "surface": 24.3,
          "focus": false,
          "hostCount": 1,
          "useCount": 2
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 57,
      "acidHostCount": 0,
      "totalCount": 58,
      "family": "fatal",
      "key": true,
      "note": "Fatal error service; 57 users. Hosted by fatal.",
      "noHost": false
    },
    {
      "name": "set:sys",
      "hosts": [
        {
          "name": "settings",
          "programId": "0400000000000009",
          "surface": 36.6,
          "focus": false,
          "hostCount": 4,
          "useCount": 3
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        },
        {
          "name": "Bus",
          "programId": "040000000000000a",
          "surface": 70.0,
          "focus": true,
          "hostCount": 9,
          "useCount": 6
        },
        {
          "name": "nvservices",
          "programId": "0400000000000019",
          "surface": 64.2,
          "focus": true,
          "hostCount": 6,
          "useCount": 9
        },
        {
          "name": "pcie",
          "programId": "040000000000001d",
          "surface": 51.4,
          "focus": true,
          "hostCount": 2,
          "useCount": 8
        },
        {
          "name": "lrp",
          "programId": "040000000000004d",
          "surface": 48.1,
          "focus": true,
          "hostCount": 5,
          "useCount": 18
        },
        {
          "name": "gsv3",
          "programId": "0400000000000083",
          "surface": 44.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 12
        },
        {
          "name": "gsv1",
          "programId": "0400000000000081",
          "surface": 43.6,
          "focus": true,
          "hostCount": 0,
          "useCount": 12
        },
        {
          "name": "camera.autogen",
          "programId": "0400000000000070",
          "surface": 43.2,
          "focus": true,
          "hostCount": 3,
          "useCount": 13
        },
        {
          "name": "nvkernel",
          "programId": "040000000000004f",
          "surface": 43.2,
          "focus": true,
          "hostCount": 2,
          "useCount": 4
        },
        {
          "name": "gsv4",
          "programId": "0400000000000084",
          "surface": 42.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 10
        },
        {
          "name": "ro",
          "programId": "0400000000000037",
          "surface": 32.5,
          "focus": true,
          "hostCount": 3,
          "useCount": 3
        },
        {
          "name": "speech",
          "programId": "0400000000000088",
          "surface": 28.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 2
        },
        {
          "name": "eth",
          "programId": "0400000000000046",
          "surface": 28.0,
          "focus": true,
          "hostCount": 1,
          "useCount": 6
        },
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        },
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        },
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        },
        {
          "name": "bsdsocket",
          "programId": "0400000000000012",
          "surface": 61.3,
          "focus": false,
          "hostCount": 9,
          "useCount": 11
        },
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        },
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        },
        {
          "name": "bluetooth.gen2",
          "programId": "040000000000000b",
          "surface": 54.3,
          "focus": false,
          "hostCount": 7,
          "useCount": 14
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "usb.gen2",
          "programId": "0400000000000006",
          "surface": 53.9,
          "focus": false,
          "hostCount": 5,
          "useCount": 11
        },
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        },
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        },
        {
          "name": "sdb",
          "programId": "0400000000000039",
          "surface": 51.4,
          "focus": false,
          "hostCount": 7,
          "useCount": 12
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        },
        {
          "name": "nfc",
          "programId": "0400000000000020",
          "surface": 49.8,
          "focus": false,
          "hostCount": 7,
          "useCount": 10
        },
        {
          "name": "wlan.autogen",
          "programId": "0400000000000016",
          "surface": 48.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 12
        },
        {
          "name": "capsrv",
          "programId": "0400000000000022",
          "surface": 46.5,
          "focus": false,
          "hostCount": 5,
          "useCount": 12
        },
        {
          "name": "ldn",
          "programId": "0400000000000018",
          "surface": 45.7,
          "focus": false,
          "hostCount": 6,
          "useCount": 13
        },
        {
          "name": "npns",
          "programId": "040000000000002f",
          "surface": 45.7,
          "focus": false,
          "hostCount": 3,
          "useCount": 16
        },
        {
          "name": "erpt",
          "programId": "040000000000002b",
          "surface": 42.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 9
        },
        {
          "name": "eupld",
          "programId": "0400000000000030",
          "surface": 39.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 18
        },
        {
          "name": "eclct",
          "programId": "0400000000000032",
          "surface": 39.1,
          "focus": false,
          "hostCount": 0,
          "useCount": 21
        },
        {
          "name": "es",
          "programId": "0400000000000033",
          "surface": 39.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 9
        },
        {
          "name": "fatal",
          "programId": "0400000000000034",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        },
        {
          "name": "ssl",
          "programId": "0400000000000024",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        },
        {
          "name": "pcv",
          "programId": "040000000000001a",
          "surface": 38.3,
          "focus": false,
          "hostCount": 3,
          "useCount": 5
        },
        {
          "name": "grc",
          "programId": "0400000000000035",
          "surface": 32.5,
          "focus": false,
          "hostCount": 2,
          "useCount": 8
        },
        {
          "name": "pgl",
          "programId": "0400000000000042",
          "surface": 31.7,
          "focus": false,
          "hostCount": 1,
          "useCount": 6
        },
        {
          "name": "boot2.ProdBoot",
          "programId": "0400000000000008",
          "surface": 30.9,
          "focus": false,
          "hostCount": 0,
          "useCount": 8
        },
        {
          "name": "capmtp",
          "programId": "040000000000001b",
          "surface": 27.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 5
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 49,
      "acidHostCount": 0,
      "totalCount": 50,
      "family": "set",
      "key": true,
      "note": "System settings; 49 users. Hosted by settings.",
      "noHost": false
    },
    {
      "name": "lm",
      "hosts": [
        {
          "name": "LogManager.Prod",
          "programId": "0400000000000015",
          "surface": 23.5,
          "focus": false,
          "hostCount": 1,
          "useCount": 1
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        },
        {
          "name": "nvservices",
          "programId": "0400000000000019",
          "surface": 64.2,
          "focus": true,
          "hostCount": 6,
          "useCount": 9
        },
        {
          "name": "lrp",
          "programId": "040000000000004d",
          "surface": 48.1,
          "focus": true,
          "hostCount": 5,
          "useCount": 18
        },
        {
          "name": "gsv3",
          "programId": "0400000000000083",
          "surface": 44.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 12
        },
        {
          "name": "gsv1",
          "programId": "0400000000000081",
          "surface": 43.6,
          "focus": true,
          "hostCount": 0,
          "useCount": 12
        },
        {
          "name": "camera.autogen",
          "programId": "0400000000000070",
          "surface": 43.2,
          "focus": true,
          "hostCount": 3,
          "useCount": 13
        },
        {
          "name": "nvkernel",
          "programId": "040000000000004f",
          "surface": 43.2,
          "focus": true,
          "hostCount": 2,
          "useCount": 4
        },
        {
          "name": "gsv4",
          "programId": "0400000000000084",
          "surface": 42.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 10
        },
        {
          "name": "tsec.autogen",
          "programId": "040000000000008d",
          "surface": 35.8,
          "focus": true,
          "hostCount": 1,
          "useCount": 6
        },
        {
          "name": "adraw",
          "programId": "0400000000000072",
          "surface": 33.3,
          "focus": true,
          "hostCount": 2,
          "useCount": 5
        },
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        },
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        },
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        },
        {
          "name": "bsdsocket",
          "programId": "0400000000000012",
          "surface": 61.3,
          "focus": false,
          "hostCount": 9,
          "useCount": 11
        },
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        },
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        },
        {
          "name": "bluetooth.gen2",
          "programId": "040000000000000b",
          "surface": 54.3,
          "focus": false,
          "hostCount": 7,
          "useCount": 14
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        },
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        },
        {
          "name": "sdb",
          "programId": "0400000000000039",
          "surface": 51.4,
          "focus": false,
          "hostCount": 7,
          "useCount": 12
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        },
        {
          "name": "wlan.autogen",
          "programId": "0400000000000016",
          "surface": 48.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 12
        },
        {
          "name": "capsrv",
          "programId": "0400000000000022",
          "surface": 46.5,
          "focus": false,
          "hostCount": 5,
          "useCount": 12
        },
        {
          "name": "ldn",
          "programId": "0400000000000018",
          "surface": 45.7,
          "focus": false,
          "hostCount": 6,
          "useCount": 13
        },
        {
          "name": "npns",
          "programId": "040000000000002f",
          "surface": 45.7,
          "focus": false,
          "hostCount": 3,
          "useCount": 16
        },
        {
          "name": "erpt",
          "programId": "040000000000002b",
          "surface": 42.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 9
        },
        {
          "name": "eupld",
          "programId": "0400000000000030",
          "surface": 39.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 18
        },
        {
          "name": "eclct",
          "programId": "0400000000000032",
          "surface": 39.1,
          "focus": false,
          "hostCount": 0,
          "useCount": 21
        },
        {
          "name": "es",
          "programId": "0400000000000033",
          "surface": 39.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 9
        },
        {
          "name": "fatal",
          "programId": "0400000000000034",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        },
        {
          "name": "ssl",
          "programId": "0400000000000024",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        },
        {
          "name": "gc",
          "programId": "0400000000000062",
          "surface": 35.0,
          "focus": false,
          "hostCount": 0,
          "useCount": 9
        },
        {
          "name": "grc",
          "programId": "0400000000000035",
          "surface": 32.5,
          "focus": false,
          "hostCount": 2,
          "useCount": 8
        },
        {
          "name": "ngc",
          "programId": "0400000000000050",
          "surface": 31.7,
          "focus": false,
          "hostCount": 2,
          "useCount": 3
        },
        {
          "name": "jpegdec",
          "programId": "040000000000003c",
          "surface": 24.3,
          "focus": false,
          "hostCount": 1,
          "useCount": 2
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 43,
      "acidHostCount": 0,
      "totalCount": 44,
      "family": "lm",
      "key": true,
      "note": "Log manager; 43 users. Hosted by LogManager.Prod.",
      "noHost": false
    },
    {
      "name": "psc:m",
      "hosts": [
        {
          "name": "psc",
          "programId": "0400000000000021",
          "surface": 71.2,
          "focus": false,
          "hostCount": 17,
          "useCount": 4
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        },
        {
          "name": "Bus",
          "programId": "040000000000000a",
          "surface": 70.0,
          "focus": true,
          "hostCount": 9,
          "useCount": 6
        },
        {
          "name": "nvservices",
          "programId": "0400000000000019",
          "surface": 64.2,
          "focus": true,
          "hostCount": 6,
          "useCount": 9
        },
        {
          "name": "pcie",
          "programId": "040000000000001d",
          "surface": 51.4,
          "focus": true,
          "hostCount": 2,
          "useCount": 8
        },
        {
          "name": "gsv3",
          "programId": "0400000000000083",
          "surface": 44.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 12
        },
        {
          "name": "gsv1",
          "programId": "0400000000000081",
          "surface": 43.6,
          "focus": true,
          "hostCount": 0,
          "useCount": 12
        },
        {
          "name": "camera.autogen",
          "programId": "0400000000000070",
          "surface": 43.2,
          "focus": true,
          "hostCount": 3,
          "useCount": 13
        },
        {
          "name": "gsv4",
          "programId": "0400000000000084",
          "surface": 42.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 10
        },
        {
          "name": "host1x",
          "programId": "0400000000000065",
          "surface": 37.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 5
        },
        {
          "name": "sdcard",
          "programId": "0400000000000089",
          "surface": 36.2,
          "focus": true,
          "hostCount": 0,
          "useCount": 9
        },
        {
          "name": "tsec.autogen",
          "programId": "040000000000008d",
          "surface": 35.8,
          "focus": true,
          "hostCount": 1,
          "useCount": 6
        },
        {
          "name": "eth",
          "programId": "0400000000000046",
          "surface": 28.0,
          "focus": true,
          "hostCount": 1,
          "useCount": 6
        },
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        },
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        },
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        },
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        },
        {
          "name": "psc",
          "programId": "0400000000000021",
          "surface": 71.2,
          "focus": false,
          "hostCount": 17,
          "useCount": 4
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        },
        {
          "name": "bsdsocket",
          "programId": "0400000000000012",
          "surface": 61.3,
          "focus": false,
          "hostCount": 9,
          "useCount": 11
        },
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        },
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        },
        {
          "name": "bluetooth.gen2",
          "programId": "040000000000000b",
          "surface": 54.3,
          "focus": false,
          "hostCount": 7,
          "useCount": 14
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "usb.gen2",
          "programId": "0400000000000006",
          "surface": 53.9,
          "focus": false,
          "hostCount": 5,
          "useCount": 11
        },
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        },
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        },
        {
          "name": "nfc",
          "programId": "0400000000000020",
          "surface": 49.8,
          "focus": false,
          "hostCount": 7,
          "useCount": 10
        },
        {
          "name": "npns",
          "programId": "040000000000002f",
          "surface": 45.7,
          "focus": false,
          "hostCount": 3,
          "useCount": 16
        },
        {
          "name": "erpt",
          "programId": "040000000000002b",
          "surface": 42.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 9
        },
        {
          "name": "eupld",
          "programId": "0400000000000030",
          "surface": 39.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 18
        },
        {
          "name": "pcv",
          "programId": "040000000000001a",
          "surface": 38.3,
          "focus": false,
          "hostCount": 3,
          "useCount": 5
        },
        {
          "name": "gc",
          "programId": "0400000000000062",
          "surface": 35.0,
          "focus": false,
          "hostCount": 0,
          "useCount": 9
        },
        {
          "name": "LogManager.Prod",
          "programId": "0400000000000015",
          "surface": 23.5,
          "focus": false,
          "hostCount": 1,
          "useCount": 1
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 37,
      "acidHostCount": 0,
      "totalCount": 38,
      "family": "psc",
      "key": true,
      "note": "Power state coordinator; 37 users. Hosted by psc.",
      "noHost": false
    },
    {
      "name": "srepo:u",
      "hosts": [
        {
          "name": "psc",
          "programId": "0400000000000021",
          "surface": 71.2,
          "focus": false,
          "hostCount": 17,
          "useCount": 4
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        },
        {
          "name": "lrp",
          "programId": "040000000000004d",
          "surface": 48.1,
          "focus": true,
          "hostCount": 5,
          "useCount": 18
        },
        {
          "name": "gsv3",
          "programId": "0400000000000083",
          "surface": 44.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 12
        },
        {
          "name": "gsv1",
          "programId": "0400000000000081",
          "surface": 43.6,
          "focus": true,
          "hostCount": 0,
          "useCount": 12
        },
        {
          "name": "camera.autogen",
          "programId": "0400000000000070",
          "surface": 43.2,
          "focus": true,
          "hostCount": 3,
          "useCount": 13
        },
        {
          "name": "nvkernel",
          "programId": "040000000000004f",
          "surface": 43.2,
          "focus": true,
          "hostCount": 2,
          "useCount": 4
        },
        {
          "name": "gsv4",
          "programId": "0400000000000084",
          "surface": 42.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 10
        },
        {
          "name": "host1x",
          "programId": "0400000000000065",
          "surface": 37.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 5
        },
        {
          "name": "tsec.autogen",
          "programId": "040000000000008d",
          "surface": 35.8,
          "focus": true,
          "hostCount": 1,
          "useCount": 6
        },
        {
          "name": "adraw",
          "programId": "0400000000000072",
          "surface": 33.3,
          "focus": true,
          "hostCount": 2,
          "useCount": 5
        },
        {
          "name": "gsvm",
          "programId": "0400000000000080",
          "surface": 29.2,
          "focus": true,
          "hostCount": 3,
          "useCount": 2
        },
        {
          "name": "eth",
          "programId": "0400000000000046",
          "surface": 28.0,
          "focus": true,
          "hostCount": 1,
          "useCount": 6
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        },
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        },
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        },
        {
          "name": "bsdsocket",
          "programId": "0400000000000012",
          "surface": 61.3,
          "focus": false,
          "hostCount": 9,
          "useCount": 11
        },
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        },
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        },
        {
          "name": "bluetooth.gen2",
          "programId": "040000000000000b",
          "surface": 54.3,
          "focus": false,
          "hostCount": 7,
          "useCount": 14
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        },
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        },
        {
          "name": "sdb",
          "programId": "0400000000000039",
          "surface": 51.4,
          "focus": false,
          "hostCount": 7,
          "useCount": 12
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        },
        {
          "name": "wlan.autogen",
          "programId": "0400000000000016",
          "surface": 48.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 12
        },
        {
          "name": "capsrv",
          "programId": "0400000000000022",
          "surface": 46.5,
          "focus": false,
          "hostCount": 5,
          "useCount": 12
        },
        {
          "name": "ldn",
          "programId": "0400000000000018",
          "surface": 45.7,
          "focus": false,
          "hostCount": 6,
          "useCount": 13
        },
        {
          "name": "npns",
          "programId": "040000000000002f",
          "surface": 45.7,
          "focus": false,
          "hostCount": 3,
          "useCount": 16
        },
        {
          "name": "eupld",
          "programId": "0400000000000030",
          "surface": 39.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 18
        },
        {
          "name": "ssl",
          "programId": "0400000000000024",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        },
        {
          "name": "capsrv2",
          "programId": "0400000000000071",
          "surface": 30.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 6
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 37,
      "acidHostCount": 0,
      "totalCount": 38,
      "family": "srepo",
      "key": true,
      "note": "Repository service in this dump; 37 users, hosted by psc. Verify the semantics against the NPDM/ACL data.",
      "noHost": false
    },
    {
      "name": "fsp-srv",
      "hosts": [],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        },
        {
          "name": "camera.autogen",
          "programId": "0400000000000070",
          "surface": 43.2,
          "focus": true,
          "hostCount": 3,
          "useCount": 13
        },
        {
          "name": "imf",
          "programId": "0400000000000047",
          "surface": 35.8,
          "focus": true,
          "hostCount": 3,
          "useCount": 4
        },
        {
          "name": "speech",
          "programId": "0400000000000088",
          "surface": 28.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 2
        },
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        },
        {
          "name": "bsdsocket",
          "programId": "0400000000000012",
          "surface": 61.3,
          "focus": false,
          "hostCount": 9,
          "useCount": 11
        },
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        },
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        },
        {
          "name": "bluetooth.gen2",
          "programId": "040000000000000b",
          "surface": 54.3,
          "focus": false,
          "hostCount": 7,
          "useCount": 14
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        },
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        },
        {
          "name": "sdb",
          "programId": "0400000000000039",
          "surface": 51.4,
          "focus": false,
          "hostCount": 7,
          "useCount": 12
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        },
        {
          "name": "nfc",
          "programId": "0400000000000020",
          "surface": 49.8,
          "focus": false,
          "hostCount": 7,
          "useCount": 10
        },
        {
          "name": "wlan.autogen",
          "programId": "0400000000000016",
          "surface": 48.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 12
        },
        {
          "name": "capsrv",
          "programId": "0400000000000022",
          "surface": 46.5,
          "focus": false,
          "hostCount": 5,
          "useCount": 12
        },
        {
          "name": "npns",
          "programId": "040000000000002f",
          "surface": 45.7,
          "focus": false,
          "hostCount": 3,
          "useCount": 16
        },
        {
          "name": "erpt",
          "programId": "040000000000002b",
          "surface": 42.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 9
        },
        {
          "name": "eclct",
          "programId": "0400000000000032",
          "surface": 39.1,
          "focus": false,
          "hostCount": 0,
          "useCount": 21
        },
        {
          "name": "es",
          "programId": "0400000000000033",
          "surface": 39.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 9
        },
        {
          "name": "fatal",
          "programId": "0400000000000034",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        },
        {
          "name": "ssl",
          "programId": "0400000000000024",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        },
        {
          "name": "settings",
          "programId": "0400000000000009",
          "surface": 36.6,
          "focus": false,
          "hostCount": 4,
          "useCount": 3
        },
        {
          "name": "ngc",
          "programId": "0400000000000050",
          "surface": 31.7,
          "focus": false,
          "hostCount": 2,
          "useCount": 3
        },
        {
          "name": "pgl",
          "programId": "0400000000000042",
          "surface": 31.7,
          "focus": false,
          "hostCount": 1,
          "useCount": 6
        },
        {
          "name": "boot2.ProdBoot",
          "programId": "0400000000000008",
          "surface": 30.9,
          "focus": false,
          "hostCount": 0,
          "useCount": 8
        }
      ],
      "acidHosts": [],
      "hostCount": 0,
      "useCount": 34,
      "acidHostCount": 0,
      "totalCount": 34,
      "family": "fsp-srv",
      "key": true,
      "note": "Filesystem service broker; 34 system modules use it. No host in this dump - hosted by the built-in fs sysmodule, the target of the current ns2jb chain.",
      "noHost": true
    },
    {
      "name": "erpt:c",
      "hosts": [
        {
          "name": "erpt",
          "programId": "040000000000002b",
          "surface": 42.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 9
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        },
        {
          "name": "nvservices",
          "programId": "0400000000000019",
          "surface": 64.2,
          "focus": true,
          "hostCount": 6,
          "useCount": 9
        },
        {
          "name": "camera.autogen",
          "programId": "0400000000000070",
          "surface": 43.2,
          "focus": true,
          "hostCount": 3,
          "useCount": 13
        },
        {
          "name": "creport",
          "programId": "0400000000000036",
          "surface": 28.4,
          "focus": true,
          "hostCount": 0,
          "useCount": 5
        },
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        },
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        },
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        },
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        },
        {
          "name": "bluetooth.gen2",
          "programId": "040000000000000b",
          "surface": 54.3,
          "focus": false,
          "hostCount": 7,
          "useCount": 14
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        },
        {
          "name": "wlan.autogen",
          "programId": "0400000000000016",
          "surface": 48.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 12
        },
        {
          "name": "eupld",
          "programId": "0400000000000030",
          "surface": 39.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 18
        },
        {
          "name": "eclct",
          "programId": "0400000000000032",
          "surface": 39.1,
          "focus": false,
          "hostCount": 0,
          "useCount": 21
        },
        {
          "name": "fatal",
          "programId": "0400000000000034",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        },
        {
          "name": "ssl",
          "programId": "0400000000000024",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 21,
      "acidHostCount": 0,
      "totalCount": 22,
      "family": "erpt",
      "key": true,
      "note": "Error report service; 21 users. Hosted by erpt.",
      "noHost": false
    },
    {
      "name": "arp:r",
      "hosts": [
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "lrp",
          "programId": "040000000000004d",
          "surface": 48.1,
          "focus": true,
          "hostCount": 5,
          "useCount": 18
        },
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        },
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        },
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        },
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        },
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        },
        {
          "name": "sdb",
          "programId": "0400000000000039",
          "surface": 51.4,
          "focus": false,
          "hostCount": 7,
          "useCount": 12
        },
        {
          "name": "nfc",
          "programId": "0400000000000020",
          "surface": 49.8,
          "focus": false,
          "hostCount": 7,
          "useCount": 10
        },
        {
          "name": "ldn",
          "programId": "0400000000000018",
          "surface": 45.7,
          "focus": false,
          "hostCount": 6,
          "useCount": 13
        },
        {
          "name": "npns",
          "programId": "040000000000002f",
          "surface": 45.7,
          "focus": false,
          "hostCount": 3,
          "useCount": 16
        },
        {
          "name": "ssl",
          "programId": "0400000000000024",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 18,
      "acidHostCount": 0,
      "totalCount": 19,
      "family": "arp",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "time:u",
      "hosts": [
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        },
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        },
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        },
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        },
        {
          "name": "sdb",
          "programId": "0400000000000039",
          "surface": 51.4,
          "focus": false,
          "hostCount": 7,
          "useCount": 12
        },
        {
          "name": "nfc",
          "programId": "0400000000000020",
          "surface": 49.8,
          "focus": false,
          "hostCount": 7,
          "useCount": 10
        },
        {
          "name": "capsrv",
          "programId": "0400000000000022",
          "surface": 46.5,
          "focus": false,
          "hostCount": 5,
          "useCount": 12
        },
        {
          "name": "erpt",
          "programId": "040000000000002b",
          "surface": 42.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 9
        },
        {
          "name": "eclct",
          "programId": "0400000000000032",
          "surface": 39.1,
          "focus": false,
          "hostCount": 0,
          "useCount": 21
        },
        {
          "name": "es",
          "programId": "0400000000000033",
          "surface": 39.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 9
        },
        {
          "name": "ssl",
          "programId": "0400000000000024",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        },
        {
          "name": "capsrv2",
          "programId": "0400000000000071",
          "surface": 30.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 6
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 16,
      "acidHostCount": 0,
      "totalCount": 17,
      "family": "time",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "bsd:s",
      "hosts": [
        {
          "name": "bsdsocket",
          "programId": "0400000000000012",
          "surface": 61.3,
          "focus": false,
          "hostCount": 9,
          "useCount": 11
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "lrp",
          "programId": "040000000000004d",
          "surface": 48.1,
          "focus": true,
          "hostCount": 5,
          "useCount": 18
        },
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        },
        {
          "name": "bsdsocket",
          "programId": "0400000000000012",
          "surface": 61.3,
          "focus": false,
          "hostCount": 9,
          "useCount": 11
        },
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        },
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        },
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        },
        {
          "name": "ldn",
          "programId": "0400000000000018",
          "surface": 45.7,
          "focus": false,
          "hostCount": 6,
          "useCount": 13
        },
        {
          "name": "npns",
          "programId": "040000000000002f",
          "surface": 45.7,
          "focus": false,
          "hostCount": 3,
          "useCount": 16
        },
        {
          "name": "eupld",
          "programId": "0400000000000030",
          "surface": 39.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 18
        },
        {
          "name": "ssl",
          "programId": "0400000000000024",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 15,
      "acidHostCount": 0,
      "totalCount": 16,
      "family": "bsd",
      "key": true,
      "note": "BSD sockets; hosted by bsdsocket, used by 15 modules.",
      "noHost": false
    },
    {
      "name": "nsd:u",
      "hosts": [
        {
          "name": "bsdsocket",
          "programId": "0400000000000012",
          "surface": 61.3,
          "focus": false,
          "hostCount": 9,
          "useCount": 11
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        },
        {
          "name": "bsdsocket",
          "programId": "0400000000000012",
          "surface": 61.3,
          "focus": false,
          "hostCount": 9,
          "useCount": 11
        },
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        },
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        },
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        },
        {
          "name": "npns",
          "programId": "040000000000002f",
          "surface": 45.7,
          "focus": false,
          "hostCount": 3,
          "useCount": 16
        },
        {
          "name": "eupld",
          "programId": "0400000000000030",
          "surface": 39.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 18
        },
        {
          "name": "ssl",
          "programId": "0400000000000024",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 14,
      "acidHostCount": 0,
      "totalCount": 15,
      "family": "nsd",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "ovln:snd",
      "hosts": [
        {
          "name": "psc",
          "programId": "0400000000000021",
          "surface": 71.2,
          "focus": false,
          "hostCount": 17,
          "useCount": 4
        }
      ],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "camera.autogen",
          "programId": "0400000000000070",
          "surface": 43.2,
          "focus": true,
          "hostCount": 3,
          "useCount": 13
        },
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        },
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        {
          "name": "psc",
          "programId": "0400000000000021",
          "surface": 71.2,
          "focus": false,
          "hostCount": 17,
          "useCount": 4
        },
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        },
        {
          "name": "bluetooth.gen2",
          "programId": "040000000000000b",
          "surface": 54.3,
          "focus": false,
          "hostCount": 7,
          "useCount": 14
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        },
        {
          "name": "capsrv",
          "programId": "0400000000000022",
          "surface": 46.5,
          "focus": false,
          "hostCount": 5,
          "useCount": 12
        },
        {
          "name": "grc",
          "programId": "0400000000000035",
          "surface": 32.5,
          "focus": false,
          "hostCount": 2,
          "useCount": 8
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 14,
      "acidHostCount": 0,
      "totalCount": 15,
      "family": "ovln",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "gpio",
      "hosts": [
        {
          "name": "Bus",
          "programId": "040000000000000a",
          "surface": 70.0,
          "focus": true,
          "hostCount": 9,
          "useCount": 6
        }
      ],
      "users": [
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        },
        {
          "name": "pcie",
          "programId": "040000000000001d",
          "surface": 51.4,
          "focus": true,
          "hostCount": 2,
          "useCount": 8
        },
        {
          "name": "sdcard",
          "programId": "0400000000000089",
          "surface": 36.2,
          "focus": true,
          "hostCount": 0,
          "useCount": 9
        },
        {
          "name": "eth",
          "programId": "0400000000000046",
          "surface": 28.0,
          "focus": true,
          "hostCount": 1,
          "useCount": 6
        },
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        },
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        },
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        },
        {
          "name": "bluetooth.gen2",
          "programId": "040000000000000b",
          "surface": 54.3,
          "focus": false,
          "hostCount": 7,
          "useCount": 14
        },
        {
          "name": "usb.gen2",
          "programId": "0400000000000006",
          "surface": 53.9,
          "focus": false,
          "hostCount": 5,
          "useCount": 11
        },
        {
          "name": "wlan.autogen",
          "programId": "0400000000000016",
          "surface": 48.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 12
        },
        {
          "name": "gc",
          "programId": "0400000000000062",
          "surface": 35.0,
          "focus": false,
          "hostCount": 0,
          "useCount": 9
        },
        {
          "name": "boot2.ProdBoot",
          "programId": "0400000000000008",
          "surface": 30.9,
          "focus": false,
          "hostCount": 0,
          "useCount": 8
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 13,
      "acidHostCount": 0,
      "totalCount": 14,
      "family": "gpio",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "nifm:s",
      "hosts": [
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        },
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        },
        {
          "name": "ldn",
          "programId": "0400000000000018",
          "surface": 45.7,
          "focus": false,
          "hostCount": 6,
          "useCount": 13
        },
        {
          "name": "npns",
          "programId": "040000000000002f",
          "surface": 45.7,
          "focus": false,
          "hostCount": 3,
          "useCount": 16
        },
        {
          "name": "eupld",
          "programId": "0400000000000030",
          "surface": 39.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 18
        },
        {
          "name": "eclct",
          "programId": "0400000000000032",
          "surface": 39.1,
          "focus": false,
          "hostCount": 0,
          "useCount": 21
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 13,
      "acidHostCount": 0,
      "totalCount": 14,
      "family": "nifm",
      "key": true,
      "note": "Network interface manager; hosted by nifm, used by 13 modules.",
      "noHost": false
    },
    {
      "name": "clkrst",
      "hosts": [],
      "users": [
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        },
        {
          "name": "Bus",
          "programId": "040000000000000a",
          "surface": 70.0,
          "focus": true,
          "hostCount": 9,
          "useCount": 6
        },
        {
          "name": "nvservices",
          "programId": "0400000000000019",
          "surface": 64.2,
          "focus": true,
          "hostCount": 6,
          "useCount": 9
        },
        {
          "name": "pcie",
          "programId": "040000000000001d",
          "surface": 51.4,
          "focus": true,
          "hostCount": 2,
          "useCount": 8
        },
        {
          "name": "host1x",
          "programId": "0400000000000065",
          "surface": 37.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 5
        },
        {
          "name": "sdcard",
          "programId": "0400000000000089",
          "surface": 36.2,
          "focus": true,
          "hostCount": 0,
          "useCount": 9
        },
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        },
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        },
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        {
          "name": "usb.gen2",
          "programId": "0400000000000006",
          "surface": 53.9,
          "focus": false,
          "hostCount": 5,
          "useCount": 11
        },
        {
          "name": "eclct",
          "programId": "0400000000000032",
          "surface": 39.1,
          "focus": false,
          "hostCount": 0,
          "useCount": 21
        },
        {
          "name": "fatal",
          "programId": "0400000000000034",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        },
        {
          "name": "gc",
          "programId": "0400000000000062",
          "surface": 35.0,
          "focus": false,
          "hostCount": 0,
          "useCount": 9
        }
      ],
      "acidHosts": [],
      "hostCount": 0,
      "useCount": 13,
      "acidHostCount": 0,
      "totalCount": 13,
      "family": "clkrst",
      "key": false,
      "note": "",
      "noHost": true
    },
    {
      "name": "pm:bm",
      "hosts": [],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        },
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        },
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        },
        {
          "name": "bluetooth.gen2",
          "programId": "040000000000000b",
          "surface": 54.3,
          "focus": false,
          "hostCount": 7,
          "useCount": 14
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "sdb",
          "programId": "0400000000000039",
          "surface": 51.4,
          "focus": false,
          "hostCount": 7,
          "useCount": 12
        },
        {
          "name": "npns",
          "programId": "040000000000002f",
          "surface": 45.7,
          "focus": false,
          "hostCount": 3,
          "useCount": 16
        },
        {
          "name": "eupld",
          "programId": "0400000000000030",
          "surface": 39.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 18
        },
        {
          "name": "eclct",
          "programId": "0400000000000032",
          "surface": 39.1,
          "focus": false,
          "hostCount": 0,
          "useCount": 21
        },
        {
          "name": "boot2.ProdBoot",
          "programId": "0400000000000008",
          "surface": 30.9,
          "focus": false,
          "hostCount": 0,
          "useCount": 8
        }
      ],
      "acidHosts": [],
      "hostCount": 0,
      "useCount": 13,
      "acidHostCount": 0,
      "totalCount": 13,
      "family": "pm",
      "key": true,
      "note": "Process manager boot/manager; 13 users. No host in this dump (built-in pm).",
      "noHost": true
    },
    {
      "name": "bgtc:t",
      "hosts": [
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        }
      ],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        },
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        },
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        },
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        },
        {
          "name": "npns",
          "programId": "040000000000002f",
          "surface": 45.7,
          "focus": false,
          "hostCount": 3,
          "useCount": 16
        },
        {
          "name": "eupld",
          "programId": "0400000000000030",
          "surface": 39.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 18
        },
        {
          "name": "eclct",
          "programId": "0400000000000032",
          "surface": 39.1,
          "focus": false,
          "hostCount": 0,
          "useCount": 21
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 12,
      "acidHostCount": 0,
      "totalCount": 13,
      "family": "bgtc",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "set:cal",
      "hosts": [
        {
          "name": "settings",
          "programId": "0400000000000009",
          "surface": 36.6,
          "focus": false,
          "hostCount": 4,
          "useCount": 3
        }
      ],
      "users": [
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        },
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        },
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        },
        {
          "name": "bluetooth.gen2",
          "programId": "040000000000000b",
          "surface": 54.3,
          "focus": false,
          "hostCount": 7,
          "useCount": 14
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "wlan.autogen",
          "programId": "0400000000000016",
          "surface": 48.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 12
        },
        {
          "name": "es",
          "programId": "0400000000000033",
          "surface": 39.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 9
        },
        {
          "name": "ssl",
          "programId": "0400000000000024",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        },
        {
          "name": "gc",
          "programId": "0400000000000062",
          "surface": 35.0,
          "focus": false,
          "hostCount": 0,
          "useCount": 9
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 12,
      "acidHostCount": 0,
      "totalCount": 13,
      "family": "set",
      "key": true,
      "note": "Settings calibration service; hosted by settings, used by 12 modules.",
      "noHost": false
    },
    {
      "name": "sfdnsres",
      "hosts": [
        {
          "name": "bsdsocket",
          "programId": "0400000000000012",
          "surface": 61.3,
          "focus": false,
          "hostCount": 9,
          "useCount": 11
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "lrp",
          "programId": "040000000000004d",
          "surface": 48.1,
          "focus": true,
          "hostCount": 5,
          "useCount": 18
        },
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        },
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        },
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        },
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        },
        {
          "name": "npns",
          "programId": "040000000000002f",
          "surface": 45.7,
          "focus": false,
          "hostCount": 3,
          "useCount": 16
        },
        {
          "name": "eupld",
          "programId": "0400000000000030",
          "surface": 39.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 18
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 12,
      "acidHostCount": 0,
      "totalCount": 13,
      "family": "sfdnsres",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "ssl:s",
      "hosts": [
        {
          "name": "ssl",
          "programId": "0400000000000024",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        },
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        },
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        },
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        },
        {
          "name": "npns",
          "programId": "040000000000002f",
          "surface": 45.7,
          "focus": false,
          "hostCount": 3,
          "useCount": 16
        },
        {
          "name": "eupld",
          "programId": "0400000000000030",
          "surface": 39.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 18
        },
        {
          "name": "es",
          "programId": "0400000000000033",
          "surface": 39.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 9
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 12,
      "acidHostCount": 0,
      "totalCount": 13,
      "family": "ssl",
      "key": true,
      "note": "SSL service; hosted by ssl, used by 12 modules.",
      "noHost": false
    },
    {
      "name": "dt",
      "hosts": [],
      "users": [
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        },
        {
          "name": "Bus",
          "programId": "040000000000000a",
          "surface": 70.0,
          "focus": true,
          "hostCount": 9,
          "useCount": 6
        },
        {
          "name": "pcie",
          "programId": "040000000000001d",
          "surface": 51.4,
          "focus": true,
          "hostCount": 2,
          "useCount": 8
        },
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        },
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        },
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        {
          "name": "bluetooth.gen2",
          "programId": "040000000000000b",
          "surface": 54.3,
          "focus": false,
          "hostCount": 7,
          "useCount": 14
        },
        {
          "name": "usb.gen2",
          "programId": "0400000000000006",
          "surface": 53.9,
          "focus": false,
          "hostCount": 5,
          "useCount": 11
        },
        {
          "name": "wlan.autogen",
          "programId": "0400000000000016",
          "surface": 48.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 12
        },
        {
          "name": "fatal",
          "programId": "0400000000000034",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        },
        {
          "name": "pcv",
          "programId": "040000000000001a",
          "surface": 38.3,
          "focus": false,
          "hostCount": 3,
          "useCount": 5
        },
        {
          "name": "gc",
          "programId": "0400000000000062",
          "surface": 35.0,
          "focus": false,
          "hostCount": 0,
          "useCount": 9
        }
      ],
      "acidHosts": [],
      "hostCount": 0,
      "useCount": 12,
      "acidHostCount": 0,
      "totalCount": 12,
      "family": "dt",
      "key": false,
      "note": "",
      "noHost": true
    },
    {
      "name": "dauth:0",
      "hosts": [
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        },
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "sdb",
          "programId": "0400000000000039",
          "surface": 51.4,
          "focus": false,
          "hostCount": 7,
          "useCount": 12
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        },
        {
          "name": "npns",
          "programId": "040000000000002f",
          "surface": 45.7,
          "focus": false,
          "hostCount": 3,
          "useCount": 16
        },
        {
          "name": "eupld",
          "programId": "0400000000000030",
          "surface": 39.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 18
        },
        {
          "name": "eclct",
          "programId": "0400000000000032",
          "surface": 39.1,
          "focus": false,
          "hostCount": 0,
          "useCount": 21
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 11,
      "acidHostCount": 0,
      "totalCount": 12,
      "family": "dauth",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "acc:e:u1",
      "hosts": [
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "lrp",
          "programId": "040000000000004d",
          "surface": 48.1,
          "focus": true,
          "hostCount": 5,
          "useCount": 18
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        },
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        },
        {
          "name": "sdb",
          "programId": "0400000000000039",
          "surface": 51.4,
          "focus": false,
          "hostCount": 7,
          "useCount": 12
        },
        {
          "name": "capsrv",
          "programId": "0400000000000022",
          "surface": 46.5,
          "focus": false,
          "hostCount": 5,
          "useCount": 12
        },
        {
          "name": "eupld",
          "programId": "0400000000000030",
          "surface": 39.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 18
        },
        {
          "name": "eclct",
          "programId": "0400000000000032",
          "surface": 39.1,
          "focus": false,
          "hostCount": 0,
          "useCount": 21
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 10,
      "acidHostCount": 0,
      "totalCount": 11,
      "family": "acc",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "set",
      "hosts": [
        {
          "name": "settings",
          "programId": "0400000000000009",
          "surface": 36.6,
          "focus": false,
          "hostCount": 4,
          "useCount": 3
        }
      ],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "imf",
          "programId": "0400000000000047",
          "surface": 35.8,
          "focus": true,
          "hostCount": 3,
          "useCount": 4
        },
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        },
        {
          "name": "npns",
          "programId": "040000000000002f",
          "surface": 45.7,
          "focus": false,
          "hostCount": 3,
          "useCount": 16
        },
        {
          "name": "erpt",
          "programId": "040000000000002b",
          "surface": 42.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 9
        },
        {
          "name": "eclct",
          "programId": "0400000000000032",
          "surface": 39.1,
          "focus": false,
          "hostCount": 0,
          "useCount": 21
        },
        {
          "name": "fatal",
          "programId": "0400000000000034",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 10,
      "acidHostCount": 0,
      "totalCount": 11,
      "family": "set",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "hid:sys",
      "hosts": [
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "lrp",
          "programId": "040000000000004d",
          "surface": 48.1,
          "focus": true,
          "hostCount": 5,
          "useCount": 18
        },
        {
          "name": "imf",
          "programId": "0400000000000047",
          "surface": 35.8,
          "focus": true,
          "hostCount": 3,
          "useCount": 4
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        },
        {
          "name": "nfc",
          "programId": "0400000000000020",
          "surface": 49.8,
          "focus": false,
          "hostCount": 7,
          "useCount": 10
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 9,
      "acidHostCount": 0,
      "totalCount": 10,
      "family": "hid",
      "key": true,
      "note": "HID system service; hosted by hid, used by 9 modules.",
      "noHost": false
    },
    {
      "name": "npns:s",
      "hosts": [
        {
          "name": "npns",
          "programId": "040000000000002f",
          "surface": 45.7,
          "focus": false,
          "hostCount": 3,
          "useCount": 16
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        },
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 8,
      "acidHostCount": 0,
      "totalCount": 9,
      "family": "npns",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "bt:sys",
      "hosts": [
        {
          "name": "bluetooth.gen2",
          "programId": "040000000000000b",
          "surface": 54.3,
          "focus": false,
          "hostCount": 7,
          "useCount": 14
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        },
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        },
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        },
        {
          "name": "ldn",
          "programId": "0400000000000018",
          "surface": 45.7,
          "focus": false,
          "hostCount": 6,
          "useCount": 13
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 7,
      "acidHostCount": 0,
      "totalCount": 8,
      "family": "bt",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "i2c",
      "hosts": [
        {
          "name": "Bus",
          "programId": "040000000000000a",
          "surface": 70.0,
          "focus": true,
          "hostCount": 9,
          "useCount": 6
        }
      ],
      "users": [
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        },
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        },
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        },
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        {
          "name": "usb.gen2",
          "programId": "0400000000000006",
          "surface": 53.9,
          "focus": false,
          "hostCount": 5,
          "useCount": 11
        },
        {
          "name": "fatal",
          "programId": "0400000000000034",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        },
        {
          "name": "pcv",
          "programId": "040000000000001a",
          "surface": 38.3,
          "focus": false,
          "hostCount": 3,
          "useCount": 5
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 7,
      "acidHostCount": 0,
      "totalCount": 8,
      "family": "i2c",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "host1x",
      "hosts": [
        {
          "name": "host1x",
          "programId": "0400000000000065",
          "surface": 37.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 5
        }
      ],
      "users": [
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        },
        {
          "name": "nvservices",
          "programId": "0400000000000019",
          "surface": 64.2,
          "focus": true,
          "hostCount": 6,
          "useCount": 9
        },
        {
          "name": "gsv3",
          "programId": "0400000000000083",
          "surface": 44.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 12
        },
        {
          "name": "gsv1",
          "programId": "0400000000000081",
          "surface": 43.6,
          "focus": true,
          "hostCount": 0,
          "useCount": 12
        },
        {
          "name": "gsv4",
          "programId": "0400000000000084",
          "surface": 42.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 10
        },
        {
          "name": "tsec.autogen",
          "programId": "040000000000008d",
          "surface": 35.8,
          "focus": true,
          "hostCount": 1,
          "useCount": 6
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 6,
      "acidHostCount": 0,
      "totalCount": 7,
      "family": "host1x",
      "key": true,
      "note": "Host1x channel manager; hosted by host1x, used by 6 modules.",
      "noHost": false
    },
    {
      "name": "nvdrv:s",
      "hosts": [
        {
          "name": "nvservices",
          "programId": "0400000000000019",
          "surface": 64.2,
          "focus": true,
          "hostCount": 6,
          "useCount": 9
        }
      ],
      "users": [
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        },
        {
          "name": "gsv3",
          "programId": "0400000000000083",
          "surface": 44.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 12
        },
        {
          "name": "gsv1",
          "programId": "0400000000000081",
          "surface": 43.6,
          "focus": true,
          "hostCount": 0,
          "useCount": 12
        },
        {
          "name": "camera.autogen",
          "programId": "0400000000000070",
          "surface": 43.2,
          "focus": true,
          "hostCount": 3,
          "useCount": 13
        },
        {
          "name": "gsv4",
          "programId": "0400000000000084",
          "surface": 42.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 10
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 6,
      "acidHostCount": 0,
      "totalCount": 7,
      "family": "nvdrv",
      "key": true,
      "note": "GPU driver; hosted by nvservices, used by 6 modules.",
      "noHost": false
    },
    {
      "name": "usb:hs",
      "hosts": [
        {
          "name": "usb.gen2",
          "programId": "0400000000000006",
          "surface": 53.9,
          "focus": false,
          "hostCount": 5,
          "useCount": 11
        }
      ],
      "users": [
        {
          "name": "camera.autogen",
          "programId": "0400000000000070",
          "surface": 43.2,
          "focus": true,
          "hostCount": 3,
          "useCount": 13
        },
        {
          "name": "eth",
          "programId": "0400000000000046",
          "surface": 28.0,
          "focus": true,
          "hostCount": 1,
          "useCount": 6
        },
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        },
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        },
        {
          "name": "bluetooth.gen2",
          "programId": "040000000000000b",
          "surface": 54.3,
          "focus": false,
          "hostCount": 7,
          "useCount": 14
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 6,
      "acidHostCount": 0,
      "totalCount": 7,
      "family": "usb",
      "key": true,
      "note": "USB high-speed; hosted by usb.gen2, used by 6 modules.",
      "noHost": false
    },
    {
      "name": "csrng",
      "hosts": [],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "creport",
          "programId": "0400000000000036",
          "surface": 28.4,
          "focus": true,
          "hostCount": 0,
          "useCount": 5
        },
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        },
        {
          "name": "wlan.autogen",
          "programId": "0400000000000016",
          "surface": 48.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 12
        },
        {
          "name": "erpt",
          "programId": "040000000000002b",
          "surface": 42.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 9
        }
      ],
      "acidHosts": [],
      "hostCount": 0,
      "useCount": 6,
      "acidHostCount": 0,
      "totalCount": 6,
      "family": "csrng",
      "key": false,
      "note": "",
      "noHost": true
    },
    {
      "name": "es",
      "hosts": [
        {
          "name": "es",
          "programId": "0400000000000033",
          "surface": 39.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 9
        }
      ],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        },
        {
          "name": "ldn",
          "programId": "0400000000000018",
          "surface": 45.7,
          "focus": false,
          "hostCount": 6,
          "useCount": 13
        },
        {
          "name": "es",
          "programId": "0400000000000033",
          "surface": 39.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 9
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 5,
      "acidHostCount": 0,
      "totalCount": 6,
      "family": "es",
      "key": true,
      "note": "eShop/content service; hosted by es, used by 5 modules.",
      "noHost": false
    },
    {
      "name": "hid",
      "hosts": [
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        }
      ],
      "users": [
        {
          "name": "imf",
          "programId": "0400000000000047",
          "surface": 35.8,
          "focus": true,
          "hostCount": 3,
          "useCount": 4
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        },
        {
          "name": "nfc",
          "programId": "0400000000000020",
          "surface": 49.8,
          "focus": false,
          "hostCount": 7,
          "useCount": 10
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 5,
      "acidHostCount": 0,
      "totalCount": 6,
      "family": "hid",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "hshl:sys",
      "hosts": [
        {
          "name": "psc",
          "programId": "0400000000000021",
          "surface": 71.2,
          "focus": false,
          "hostCount": 17,
          "useCount": 4
        }
      ],
      "users": [
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        },
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        },
        {
          "name": "bluetooth.gen2",
          "programId": "040000000000000b",
          "surface": 54.3,
          "focus": false,
          "hostCount": 7,
          "useCount": 14
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 5,
      "acidHostCount": 0,
      "totalCount": 6,
      "family": "hshl",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "time:su",
      "hosts": [
        {
          "name": "psc",
          "programId": "0400000000000021",
          "surface": 71.2,
          "focus": false,
          "hostCount": 17,
          "useCount": 4
        }
      ],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        },
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        {
          "name": "bsdsocket",
          "programId": "0400000000000012",
          "surface": 61.3,
          "focus": false,
          "hostCount": 9,
          "useCount": 11
        },
        {
          "name": "grc",
          "programId": "0400000000000035",
          "surface": 32.5,
          "focus": false,
          "hostCount": 2,
          "useCount": 8
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 5,
      "acidHostCount": 0,
      "totalCount": 6,
      "family": "time",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "spl:mig",
      "hosts": [],
      "users": [
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        },
        {
          "name": "nfc",
          "programId": "0400000000000020",
          "surface": 49.8,
          "focus": false,
          "hostCount": 7,
          "useCount": 10
        },
        {
          "name": "capsrv",
          "programId": "0400000000000022",
          "surface": 46.5,
          "focus": false,
          "hostCount": 5,
          "useCount": 12
        },
        {
          "name": "settings",
          "programId": "0400000000000009",
          "surface": 36.6,
          "focus": false,
          "hostCount": 4,
          "useCount": 3
        }
      ],
      "acidHosts": [],
      "hostCount": 0,
      "useCount": 5,
      "acidHostCount": 0,
      "totalCount": 5,
      "family": "spl",
      "key": true,
      "note": "SPL migration service; used by 5 modules. No host in this dump.",
      "noHost": true
    },
    {
      "name": "bpc",
      "hosts": [
        {
          "name": "pcv",
          "programId": "040000000000001a",
          "surface": 38.3,
          "focus": false,
          "hostCount": 3,
          "useCount": 5
        }
      ],
      "users": [
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        },
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        },
        {
          "name": "fatal",
          "programId": "0400000000000034",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 4,
      "acidHostCount": 0,
      "totalCount": 5,
      "family": "bpc",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "caps:c",
      "hosts": [
        {
          "name": "capsrv",
          "programId": "0400000000000022",
          "surface": 46.5,
          "focus": false,
          "hostCount": 5,
          "useCount": 12
        }
      ],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "capsrv",
          "programId": "0400000000000022",
          "surface": 46.5,
          "focus": false,
          "hostCount": 5,
          "useCount": 12
        },
        {
          "name": "grc",
          "programId": "0400000000000035",
          "surface": 32.5,
          "focus": false,
          "hostCount": 2,
          "useCount": 8
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 4,
      "acidHostCount": 0,
      "totalCount": 5,
      "family": "caps",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "ins:s",
      "hosts": [
        {
          "name": "psc",
          "programId": "0400000000000021",
          "surface": 71.2,
          "focus": false,
          "hostCount": 17,
          "useCount": 4
        }
      ],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        },
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        {
          "name": "usb.gen2",
          "programId": "0400000000000006",
          "surface": 53.9,
          "focus": false,
          "hostCount": 5,
          "useCount": 11
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 4,
      "acidHostCount": 0,
      "totalCount": 5,
      "family": "ins",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "notif:s",
      "hosts": [
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        }
      ],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 4,
      "acidHostCount": 0,
      "totalCount": 5,
      "family": "notif",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "ns:am2",
      "hosts": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        }
      ],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "lrp",
          "programId": "040000000000004d",
          "surface": 48.1,
          "focus": true,
          "hostCount": 5,
          "useCount": 18
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 4,
      "acidHostCount": 0,
      "totalCount": 5,
      "family": "ns",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "olsc:s",
      "hosts": [
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 4,
      "acidHostCount": 0,
      "totalCount": 5,
      "family": "olsc",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "pctl:s",
      "hosts": [
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        },
        {
          "name": "eclct",
          "programId": "0400000000000032",
          "surface": 39.1,
          "focus": false,
          "hostCount": 0,
          "useCount": 21
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 4,
      "acidHostCount": 0,
      "totalCount": 5,
      "family": "pctl",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "pdm:ntfy",
      "hosts": [
        {
          "name": "sdb",
          "programId": "0400000000000039",
          "surface": 51.4,
          "focus": false,
          "hostCount": 7,
          "useCount": 12
        }
      ],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        },
        {
          "name": "eupld",
          "programId": "0400000000000030",
          "surface": 39.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 18
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 4,
      "acidHostCount": 0,
      "totalCount": 5,
      "family": "pdm",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "pdm:qry",
      "hosts": [
        {
          "name": "sdb",
          "programId": "0400000000000039",
          "surface": 51.4,
          "focus": false,
          "hostCount": 7,
          "useCount": 12
        }
      ],
      "users": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        },
        {
          "name": "eupld",
          "programId": "0400000000000030",
          "surface": 39.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 18
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 4,
      "acidHostCount": 0,
      "totalCount": 5,
      "family": "pdm",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "time:al",
      "hosts": [
        {
          "name": "psc",
          "programId": "0400000000000021",
          "surface": 71.2,
          "focus": false,
          "hostCount": 17,
          "useCount": 4
        }
      ],
      "users": [
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        },
        {
          "name": "bsdsocket",
          "programId": "0400000000000012",
          "surface": 61.3,
          "focus": false,
          "hostCount": 9,
          "useCount": 11
        },
        {
          "name": "usb.gen2",
          "programId": "0400000000000006",
          "surface": 53.9,
          "focus": false,
          "hostCount": 5,
          "useCount": 11
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 4,
      "acidHostCount": 0,
      "totalCount": 5,
      "family": "time",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "usb:obsv",
      "hosts": [
        {
          "name": "usb.gen2",
          "programId": "0400000000000006",
          "surface": 53.9,
          "focus": false,
          "hostCount": 5,
          "useCount": 11
        }
      ],
      "users": [
        {
          "name": "camera.autogen",
          "programId": "0400000000000070",
          "surface": 43.2,
          "focus": true,
          "hostCount": 3,
          "useCount": 13
        },
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        },
        {
          "name": "eclct",
          "programId": "0400000000000032",
          "surface": 39.1,
          "focus": false,
          "hostCount": 0,
          "useCount": 21
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 4,
      "acidHostCount": 0,
      "totalCount": 5,
      "family": "usb",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "bsdcfg",
      "hosts": [],
      "users": [
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        },
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        }
      ],
      "acidHosts": [],
      "hostCount": 0,
      "useCount": 4,
      "acidHostCount": 0,
      "totalCount": 4,
      "family": "bsdcfg",
      "key": false,
      "note": "",
      "noHost": true
    },
    {
      "name": "audctl",
      "hosts": [
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 3,
      "acidHostCount": 0,
      "totalCount": 4,
      "family": "audctl",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "auddmg:u",
      "hosts": [
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "lrp",
          "programId": "040000000000004d",
          "surface": 48.1,
          "focus": true,
          "hostCount": 5,
          "useCount": 18
        },
        {
          "name": "capsrv2",
          "programId": "0400000000000071",
          "surface": 30.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 6
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 3,
      "acidHostCount": 0,
      "totalCount": 4,
      "family": "auddmg",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "audsmx:u",
      "hosts": [
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "lrp",
          "programId": "040000000000004d",
          "surface": 48.1,
          "focus": true,
          "hostCount": 5,
          "useCount": 18
        },
        {
          "name": "capsrv2",
          "programId": "0400000000000071",
          "surface": 30.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 6
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 3,
      "acidHostCount": 0,
      "totalCount": 4,
      "family": "audsmx",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "cam:u",
      "hosts": [
        {
          "name": "camera.autogen",
          "programId": "0400000000000070",
          "surface": 43.2,
          "focus": true,
          "hostCount": 3,
          "useCount": 13
        }
      ],
      "users": [
        {
          "name": "gsv3",
          "programId": "0400000000000083",
          "surface": 44.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 12
        },
        {
          "name": "gsv1",
          "programId": "0400000000000081",
          "surface": 43.6,
          "focus": true,
          "hostCount": 0,
          "useCount": 12
        },
        {
          "name": "gsv4",
          "programId": "0400000000000084",
          "surface": 42.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 10
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 3,
      "acidHostCount": 0,
      "totalCount": 4,
      "family": "cam",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "caps:dc",
      "hosts": [
        {
          "name": "jpegdec",
          "programId": "040000000000003c",
          "surface": 24.3,
          "focus": false,
          "hostCount": 1,
          "useCount": 2
        }
      ],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        {
          "name": "capsrv",
          "programId": "0400000000000022",
          "surface": 46.5,
          "focus": false,
          "hostCount": 5,
          "useCount": 12
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 3,
      "acidHostCount": 0,
      "totalCount": 4,
      "family": "caps",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "ectx:w",
      "hosts": [
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "sdcard",
          "programId": "0400000000000089",
          "surface": 36.2,
          "focus": true,
          "hostCount": 0,
          "useCount": 9
        },
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 3,
      "acidHostCount": 0,
      "totalCount": 4,
      "family": "ectx",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "ins:r",
      "hosts": [
        {
          "name": "psc",
          "programId": "0400000000000021",
          "surface": 71.2,
          "focus": false,
          "hostCount": 17,
          "useCount": 4
        }
      ],
      "users": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 3,
      "acidHostCount": 0,
      "totalCount": 4,
      "family": "ins",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "ldn:s",
      "hosts": [
        {
          "name": "ldn",
          "programId": "0400000000000018",
          "surface": 45.7,
          "focus": false,
          "hostCount": 6,
          "useCount": 13
        }
      ],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "lrp",
          "programId": "040000000000004d",
          "surface": 48.1,
          "focus": true,
          "hostCount": 5,
          "useCount": 18
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 3,
      "acidHostCount": 0,
      "totalCount": 4,
      "family": "ldn",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "ns:su",
      "hosts": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        }
      ],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "lrp",
          "programId": "040000000000004d",
          "surface": 48.1,
          "focus": true,
          "hostCount": 5,
          "useCount": 18
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 3,
      "acidHostCount": 0,
      "totalCount": 4,
      "family": "ns",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "nvdrv:v",
      "hosts": [
        {
          "name": "nvservices",
          "programId": "0400000000000019",
          "surface": 64.2,
          "focus": true,
          "hostCount": 6,
          "useCount": 9
        }
      ],
      "users": [
        {
          "name": "gsv3",
          "programId": "0400000000000083",
          "surface": 44.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 12
        },
        {
          "name": "gsv1",
          "programId": "0400000000000081",
          "surface": 43.6,
          "focus": true,
          "hostCount": 0,
          "useCount": 12
        },
        {
          "name": "gsv4",
          "programId": "0400000000000084",
          "surface": 42.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 10
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 3,
      "acidHostCount": 0,
      "totalCount": 4,
      "family": "nvdrv",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "pinmux",
      "hosts": [
        {
          "name": "Bus",
          "programId": "040000000000000a",
          "surface": 70.0,
          "focus": true,
          "hostCount": 9,
          "useCount": 6
        }
      ],
      "users": [
        {
          "name": "pcie",
          "programId": "040000000000001d",
          "surface": 51.4,
          "focus": true,
          "hostCount": 2,
          "useCount": 8
        },
        {
          "name": "sdcard",
          "programId": "0400000000000089",
          "surface": 36.2,
          "focus": true,
          "hostCount": 0,
          "useCount": 9
        },
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 3,
      "acidHostCount": 0,
      "totalCount": 4,
      "family": "pinmux",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "pl:s",
      "hosts": [
        {
          "name": "sdb",
          "programId": "0400000000000039",
          "surface": 51.4,
          "focus": false,
          "hostCount": 7,
          "useCount": 12
        }
      ],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        },
        {
          "name": "ldn",
          "programId": "0400000000000018",
          "surface": 45.7,
          "focus": false,
          "hostCount": 6,
          "useCount": 13
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 3,
      "acidHostCount": 0,
      "totalCount": 4,
      "family": "pl",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "prepo:s",
      "hosts": [
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        }
      ],
      "users": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        },
        {
          "name": "nfc",
          "programId": "0400000000000020",
          "surface": 49.8,
          "focus": false,
          "hostCount": 7,
          "useCount": 10
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 3,
      "acidHostCount": 0,
      "totalCount": 4,
      "family": "prepo",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "rtc",
      "hosts": [
        {
          "name": "pcv",
          "programId": "040000000000001a",
          "surface": 38.3,
          "focus": false,
          "hostCount": 3,
          "useCount": 5
        }
      ],
      "users": [
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        },
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        },
        {
          "name": "eclct",
          "programId": "0400000000000032",
          "surface": 39.1,
          "focus": false,
          "hostCount": 0,
          "useCount": 21
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 3,
      "acidHostCount": 0,
      "totalCount": 4,
      "family": "rtc",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "srepo:a",
      "hosts": [
        {
          "name": "psc",
          "programId": "0400000000000021",
          "surface": 71.2,
          "focus": false,
          "hostCount": 17,
          "useCount": 4
        }
      ],
      "users": [
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        },
        {
          "name": "erpt",
          "programId": "040000000000002b",
          "surface": 42.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 9
        },
        {
          "name": "eclct",
          "programId": "0400000000000032",
          "surface": 39.1,
          "focus": false,
          "hostCount": 0,
          "useCount": 21
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 3,
      "acidHostCount": 0,
      "totalCount": 4,
      "family": "srepo",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "vi2:m2",
      "hosts": [
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "adraw",
          "programId": "0400000000000072",
          "surface": 33.3,
          "focus": true,
          "hostCount": 2,
          "useCount": 5
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 3,
      "acidHostCount": 0,
      "totalCount": 4,
      "family": "vi2",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "vi2:v",
      "hosts": [
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        }
      ],
      "users": [
        {
          "name": "gsv3",
          "programId": "0400000000000083",
          "surface": 44.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 12
        },
        {
          "name": "gsv1",
          "programId": "0400000000000081",
          "surface": 43.6,
          "focus": true,
          "hostCount": 0,
          "useCount": 12
        },
        {
          "name": "gsv4",
          "programId": "0400000000000084",
          "surface": 42.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 10
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 3,
      "acidHostCount": 0,
      "totalCount": 4,
      "family": "vi2",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "lr",
      "hosts": [],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "pgl",
          "programId": "0400000000000042",
          "surface": 31.7,
          "focus": false,
          "hostCount": 1,
          "useCount": 6
        },
        {
          "name": "boot2.ProdBoot",
          "programId": "0400000000000008",
          "surface": 30.9,
          "focus": false,
          "hostCount": 0,
          "useCount": 8
        }
      ],
      "acidHosts": [],
      "hostCount": 0,
      "useCount": 3,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "lr",
      "key": false,
      "note": "",
      "noHost": true
    },
    {
      "name": "ncm",
      "hosts": [],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        },
        {
          "name": "boot2.ProdBoot",
          "programId": "0400000000000008",
          "surface": 30.9,
          "focus": false,
          "hostCount": 0,
          "useCount": 8
        }
      ],
      "acidHosts": [],
      "hostCount": 0,
      "useCount": 3,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "ncm",
      "key": true,
      "note": "Content manager; used by ns, nim, boot2.ProdBoot. No host in this dump.",
      "noHost": true
    },
    {
      "name": "pm:info",
      "hosts": [],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "sdb",
          "programId": "0400000000000039",
          "surface": 51.4,
          "focus": false,
          "hostCount": 7,
          "useCount": 12
        },
        {
          "name": "fatal",
          "programId": "0400000000000034",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        }
      ],
      "acidHosts": [],
      "hostCount": 0,
      "useCount": 3,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "pm",
      "key": true,
      "note": "Process manager info; 3 users. No host in this dump (built-in pm).",
      "noHost": true
    },
    {
      "name": "spl:",
      "hosts": [],
      "users": [
        {
          "name": "sdcard",
          "programId": "0400000000000089",
          "surface": 36.2,
          "focus": true,
          "hostCount": 0,
          "useCount": 9
        },
        {
          "name": "ro",
          "programId": "0400000000000037",
          "surface": 32.5,
          "focus": true,
          "hostCount": 3,
          "useCount": 3
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        }
      ],
      "acidHosts": [],
      "hostCount": 0,
      "useCount": 3,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "spl",
      "key": true,
      "note": "Security/SPL service; used by sdcard, ro, am. No host in this dump (built-in spl).",
      "noHost": true
    },
    {
      "name": "acc:aa",
      "hosts": [
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        }
      ],
      "users": [
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        },
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "acc",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "acc:su",
      "hosts": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        }
      ],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "acc",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "apm:sys",
      "hosts": [
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        }
      ],
      "users": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "apm",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "appletAE",
      "hosts": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "lrp",
          "programId": "040000000000004d",
          "surface": 48.1,
          "focus": true,
          "hostCount": 5,
          "useCount": 18
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "appletAE",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "arp:w",
      "hosts": [
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        }
      ],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "arp",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "avm",
      "hosts": [
        {
          "name": "sdb",
          "programId": "0400000000000039",
          "surface": 51.4,
          "focus": false,
          "hostCount": 7,
          "useCount": 12
        }
      ],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "avm",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "bcat:s",
      "hosts": [
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        }
      ],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "sdb",
          "programId": "0400000000000039",
          "surface": 51.4,
          "focus": false,
          "hostCount": 7,
          "useCount": 12
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "bcat",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "bgtc:sc",
      "hosts": [
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        }
      ],
      "users": [
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        },
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "bgtc",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "caps2:r",
      "hosts": [
        {
          "name": "capsrv2",
          "programId": "0400000000000071",
          "surface": 30.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 6
        }
      ],
      "users": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "grc",
          "programId": "0400000000000035",
          "surface": 32.5,
          "focus": false,
          "hostCount": 2,
          "useCount": 8
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "caps2",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "caps2:s",
      "hosts": [
        {
          "name": "capsrv2",
          "programId": "0400000000000071",
          "surface": 30.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 6
        }
      ],
      "users": [
        {
          "name": "creport",
          "programId": "0400000000000036",
          "surface": 28.4,
          "focus": true,
          "hostCount": 0,
          "useCount": 5
        },
        {
          "name": "capsrv",
          "programId": "0400000000000022",
          "surface": 46.5,
          "focus": false,
          "hostCount": 5,
          "useCount": 12
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "caps2",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "caps:a",
      "hosts": [
        {
          "name": "capsrv",
          "programId": "0400000000000022",
          "surface": 46.5,
          "focus": false,
          "hostCount": 5,
          "useCount": 12
        }
      ],
      "users": [
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        },
        {
          "name": "capmtp",
          "programId": "040000000000001b",
          "surface": 27.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 5
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "caps",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "caps:sc",
      "hosts": [
        {
          "name": "capsrv",
          "programId": "0400000000000022",
          "surface": 46.5,
          "focus": false,
          "hostCount": 5,
          "useCount": 12
        }
      ],
      "users": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "grc",
          "programId": "0400000000000035",
          "surface": 32.5,
          "focus": false,
          "hostCount": 2,
          "useCount": 8
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "caps",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "erpt:r",
      "hosts": [
        {
          "name": "erpt",
          "programId": "040000000000002b",
          "surface": 42.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 9
        }
      ],
      "users": [
        {
          "name": "eupld",
          "programId": "0400000000000030",
          "surface": 39.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 18
        },
        {
          "name": "eclct",
          "programId": "0400000000000032",
          "surface": 39.1,
          "focus": false,
          "hostCount": 0,
          "useCount": 21
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "erpt",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "eupld:c",
      "hosts": [
        {
          "name": "eupld",
          "programId": "0400000000000030",
          "surface": 39.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 18
        }
      ],
      "users": [
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        },
        {
          "name": "eclct",
          "programId": "0400000000000032",
          "surface": 39.1,
          "focus": false,
          "hostCount": 0,
          "useCount": 21
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "eupld",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "fatal:p",
      "hosts": [
        {
          "name": "fatal",
          "programId": "0400000000000034",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "fatal",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "friend:s",
      "hosts": [
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "friend",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "gpuk:drv",
      "hosts": [
        {
          "name": "nvkernel",
          "programId": "040000000000004f",
          "surface": 43.2,
          "focus": true,
          "hostCount": 2,
          "useCount": 4
        }
      ],
      "users": [
        {
          "name": "nvservices",
          "programId": "0400000000000019",
          "surface": 64.2,
          "focus": true,
          "hostCount": 6,
          "useCount": 9
        },
        {
          "name": "nvservices",
          "programId": "0400000000000019",
          "surface": 64.2,
          "focus": true,
          "hostCount": 6,
          "useCount": 9
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "gpuk",
      "key": true,
      "note": "GPU kernel driver; hosted by nvkernel, used by nvservices.",
      "noHost": false
    },
    {
      "name": "gpuk:gsv",
      "hosts": [
        {
          "name": "nvkernel",
          "programId": "040000000000004f",
          "surface": 43.2,
          "focus": true,
          "hostCount": 2,
          "useCount": 4
        }
      ],
      "users": [
        {
          "name": "gsv3",
          "programId": "0400000000000083",
          "surface": 44.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 12
        },
        {
          "name": "gsv1",
          "programId": "0400000000000081",
          "surface": 43.6,
          "focus": true,
          "hostCount": 0,
          "useCount": 12
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "gpuk",
      "key": true,
      "note": "GPU kernel codec service; hosted by nvkernel, used by gsv1/gsv3.",
      "noHost": false
    },
    {
      "name": "gsv:s3",
      "hosts": [
        {
          "name": "gsv3",
          "programId": "0400000000000083",
          "surface": 44.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 12
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "adraw",
          "programId": "0400000000000072",
          "surface": 33.3,
          "focus": true,
          "hostCount": 2,
          "useCount": 5
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "gsv",
      "key": true,
      "note": "OpenMAX codec service; hosted by gsv3, used by chat and adraw.",
      "noHost": false
    },
    {
      "name": "gsv:s4",
      "hosts": [
        {
          "name": "gsv4",
          "programId": "0400000000000084",
          "surface": 42.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 10
        }
      ],
      "users": [
        {
          "name": "lrp",
          "programId": "040000000000004d",
          "surface": 48.1,
          "focus": true,
          "hostCount": 5,
          "useCount": 18
        },
        {
          "name": "capsrv2",
          "programId": "0400000000000071",
          "surface": 30.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 6
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "gsv",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "gsv:sv",
      "hosts": [
        {
          "name": "gsvm",
          "programId": "0400000000000080",
          "surface": 29.2,
          "focus": true,
          "hostCount": 3,
          "useCount": 2
        }
      ],
      "users": [
        {
          "name": "gsv3",
          "programId": "0400000000000083",
          "surface": 44.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 12
        },
        {
          "name": "gsv1",
          "programId": "0400000000000081",
          "surface": 43.6,
          "focus": true,
          "hostCount": 0,
          "useCount": 12
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "gsv",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "hidc:s",
      "hosts": [
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        }
      ],
      "users": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "hidc",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "hshl:set",
      "hosts": [
        {
          "name": "psc",
          "programId": "0400000000000021",
          "surface": 71.2,
          "focus": false,
          "hostCount": 17,
          "useCount": 4
        }
      ],
      "users": [
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        },
        {
          "name": "usb.gen2",
          "programId": "0400000000000006",
          "surface": 53.9,
          "focus": false,
          "hostCount": 5,
          "useCount": 11
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "hshl",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "ifcfg",
      "hosts": [
        {
          "name": "bsdsocket",
          "programId": "0400000000000012",
          "surface": 61.3,
          "focus": false,
          "hostCount": 9,
          "useCount": 11
        }
      ],
      "users": [
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        },
        {
          "name": "ldn",
          "programId": "0400000000000018",
          "surface": 45.7,
          "focus": false,
          "hostCount": 6,
          "useCount": 13
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "ifcfg",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "lbl",
      "hosts": [
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        }
      ],
      "users": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "lbl",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "mnpp:sys",
      "hosts": [
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        }
      ],
      "users": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "mnpp",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "ns:ro",
      "hosts": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "capmtp",
          "programId": "040000000000001b",
          "surface": 27.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 5
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "ns",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "omm",
      "hosts": [
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        }
      ],
      "users": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "omm",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "pcie",
      "hosts": [
        {
          "name": "pcie",
          "programId": "040000000000001d",
          "surface": 51.4,
          "focus": true,
          "hostCount": 2,
          "useCount": 8
        }
      ],
      "users": [
        {
          "name": "sdcard",
          "programId": "0400000000000089",
          "surface": 36.2,
          "focus": true,
          "hostCount": 0,
          "useCount": 9
        },
        {
          "name": "wlan.autogen",
          "programId": "0400000000000016",
          "surface": 48.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 12
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "pcie",
      "key": true,
      "note": "PCIe service; hosted by pcie, used by sdcard and wlan.autogen.",
      "noHost": false
    },
    {
      "name": "pgl",
      "hosts": [
        {
          "name": "pgl",
          "programId": "0400000000000042",
          "surface": 31.7,
          "focus": false,
          "hostCount": 1,
          "useCount": 6
        }
      ],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "creport",
          "programId": "0400000000000036",
          "surface": 28.4,
          "focus": true,
          "hostCount": 0,
          "useCount": 5
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "pgl",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "psc:l",
      "hosts": [
        {
          "name": "psc",
          "programId": "0400000000000021",
          "surface": 71.2,
          "focus": false,
          "hostCount": 17,
          "useCount": 4
        }
      ],
      "users": [
        {
          "name": "psc",
          "programId": "0400000000000021",
          "surface": 71.2,
          "focus": false,
          "hostCount": 17,
          "useCount": 4
        },
        {
          "name": "bsdsocket",
          "programId": "0400000000000012",
          "surface": 61.3,
          "focus": false,
          "hostCount": 9,
          "useCount": 11
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "psc",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "psm",
      "hosts": [
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        }
      ],
      "users": [
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        },
        {
          "name": "eclct",
          "programId": "0400000000000032",
          "surface": 39.1,
          "focus": false,
          "hostCount": 0,
          "useCount": 21
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "psm",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "pwm",
      "hosts": [
        {
          "name": "Bus",
          "programId": "040000000000000a",
          "surface": 70.0,
          "focus": true,
          "hostCount": 9,
          "useCount": 6
        }
      ],
      "users": [
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        },
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "pwm",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "rfua:s",
      "hosts": [
        {
          "name": "bluetooth.gen2",
          "programId": "040000000000000b",
          "surface": 54.3,
          "focus": false,
          "hostCount": 7,
          "useCount": 14
        }
      ],
      "users": [
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        {
          "name": "wlan.autogen",
          "programId": "0400000000000016",
          "surface": 48.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 12
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "rfua",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "rgltr",
      "hosts": [
        {
          "name": "pcv",
          "programId": "040000000000001a",
          "surface": 38.3,
          "focus": false,
          "hostCount": 3,
          "useCount": 5
        }
      ],
      "users": [
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        },
        {
          "name": "pcie",
          "programId": "040000000000001d",
          "surface": 51.4,
          "focus": true,
          "hostCount": 2,
          "useCount": 8
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "rgltr",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "spsm",
      "hosts": [
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        }
      ],
      "users": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "fatal",
          "programId": "0400000000000034",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "spsm",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "time:s",
      "hosts": [
        {
          "name": "psc",
          "programId": "0400000000000021",
          "surface": 71.2,
          "focus": false,
          "hostCount": 17,
          "useCount": 4
        }
      ],
      "users": [
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "time",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "vi2:m1",
      "hosts": [
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        }
      ],
      "users": [
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        },
        {
          "name": "fatal",
          "programId": "0400000000000034",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "vi2",
      "key": true,
      "note": "Display service; hosted by vi2.autogen, used by omm and fatal.",
      "noHost": false
    },
    {
      "name": "vic:u",
      "hosts": [
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "camera.autogen",
          "programId": "0400000000000070",
          "surface": 43.2,
          "focus": true,
          "hostCount": 3,
          "useCount": 13
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "vic",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "wlan",
      "hosts": [
        {
          "name": "wlan.autogen",
          "programId": "0400000000000016",
          "surface": 48.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 12
        }
      ],
      "users": [
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        },
        {
          "name": "ldn",
          "programId": "0400000000000018",
          "surface": 45.7,
          "focus": false,
          "hostCount": 6,
          "useCount": 13
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 3,
      "family": "wlan",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "fs:stcfg",
      "hosts": [],
      "users": [
        {
          "name": "sdcard",
          "programId": "0400000000000089",
          "surface": 36.2,
          "focus": true,
          "hostCount": 0,
          "useCount": 9
        },
        {
          "name": "gc",
          "programId": "0400000000000062",
          "surface": 35.0,
          "focus": false,
          "hostCount": 0,
          "useCount": 9
        }
      ],
      "acidHosts": [],
      "hostCount": 0,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "fs",
      "key": false,
      "note": "",
      "noHost": true
    },
    {
      "name": "pm:shell",
      "hosts": [],
      "users": [
        {
          "name": "pgl",
          "programId": "0400000000000042",
          "surface": 31.7,
          "focus": false,
          "hostCount": 1,
          "useCount": 6
        },
        {
          "name": "boot2.ProdBoot",
          "programId": "0400000000000008",
          "surface": 30.9,
          "focus": false,
          "hostCount": 0,
          "useCount": 8
        }
      ],
      "acidHosts": [],
      "hostCount": 0,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "pm",
      "key": true,
      "note": "Process manager shell; 2 users. No host in this dump (built-in pm).",
      "noHost": true
    },
    {
      "name": "spl:nv",
      "hosts": [],
      "users": [
        {
          "name": "host1x",
          "programId": "0400000000000065",
          "surface": 37.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 5
        },
        {
          "name": "tsec.autogen",
          "programId": "040000000000008d",
          "surface": 35.8,
          "focus": true,
          "hostCount": 1,
          "useCount": 6
        }
      ],
      "acidHosts": [],
      "hostCount": 0,
      "useCount": 2,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "spl",
      "key": false,
      "note": "",
      "noHost": true
    },
    {
      "name": "acc:e",
      "hosts": [
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        }
      ],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "acc",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "acc:e:u2",
      "hosts": [
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        }
      ],
      "users": [
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "acc",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "acc:u1",
      "hosts": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        }
      ],
      "users": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "acc",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "adraw:m",
      "hosts": [
        {
          "name": "adraw",
          "programId": "0400000000000072",
          "surface": 33.3,
          "focus": true,
          "hostCount": 2,
          "useCount": 5
        }
      ],
      "users": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "adraw",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "apm:am",
      "hosts": [
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        }
      ],
      "users": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "apm",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "aud:a",
      "hosts": [
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        }
      ],
      "users": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "aud",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "aud:d",
      "hosts": [
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        }
      ],
      "users": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "aud",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "aud:u",
      "hosts": [
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "aud",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "bsd:nu",
      "hosts": [
        {
          "name": "bsdsocket",
          "programId": "0400000000000012",
          "surface": 61.3,
          "focus": false,
          "hostCount": 9,
          "useCount": 11
        }
      ],
      "users": [
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "bsd",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "cam:m",
      "hosts": [
        {
          "name": "camera.autogen",
          "programId": "0400000000000070",
          "surface": 43.2,
          "focus": true,
          "hostCount": 3,
          "useCount": 13
        }
      ],
      "users": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "cam",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "cam:s",
      "hosts": [
        {
          "name": "camera.autogen",
          "programId": "0400000000000070",
          "surface": 43.2,
          "focus": true,
          "hostCount": 3,
          "useCount": 13
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "cam",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "cec-mgr",
      "hosts": [
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        }
      ],
      "users": [
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "cec-mgr",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "chat:ch",
      "hosts": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "chat",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "disp:omm",
      "hosts": [
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        }
      ],
      "users": [
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "disp",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "dns:priv",
      "hosts": [
        {
          "name": "bsdsocket",
          "programId": "0400000000000012",
          "surface": 61.3,
          "focus": false,
          "hostCount": 9,
          "useCount": 11
        }
      ],
      "users": [
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "dns",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "dp2hdmi",
      "hosts": [
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        }
      ],
      "users": [
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "dp2hdmi",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "ectx:r",
      "hosts": [
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        }
      ],
      "users": [
        {
          "name": "erpt",
          "programId": "040000000000002b",
          "surface": 42.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 9
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "ectx",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "eth:nd",
      "hosts": [
        {
          "name": "eth",
          "programId": "0400000000000046",
          "surface": 28.0,
          "focus": true,
          "hostCount": 1,
          "useCount": 6
        }
      ],
      "users": [
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "eth",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "friend:a",
      "hosts": [
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        }
      ],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "friend",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "friend:u",
      "hosts": [
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        }
      ],
      "users": [
        {
          "name": "lrp",
          "programId": "040000000000004d",
          "surface": 48.1,
          "focus": true,
          "hostCount": 5,
          "useCount": 18
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "friend",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "grc:c",
      "hosts": [
        {
          "name": "grc",
          "programId": "0400000000000035",
          "surface": 32.5,
          "focus": false,
          "hostCount": 2,
          "useCount": 8
        }
      ],
      "users": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "grc",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "gsv:m",
      "hosts": [
        {
          "name": "gsvm",
          "programId": "0400000000000080",
          "surface": 29.2,
          "focus": true,
          "hostCount": 3,
          "useCount": 2
        }
      ],
      "users": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "gsv",
      "key": true,
      "note": "OpenMAX broker; hosted by gsvm, used by am.",
      "noHost": false
    },
    {
      "name": "hdcp",
      "hosts": [
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        }
      ],
      "users": [
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "hdcp",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "idle:sys",
      "hosts": [
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        }
      ],
      "users": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "idle",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "irs:sys",
      "hosts": [
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        }
      ],
      "users": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "irs",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "lrp:u",
      "hosts": [
        {
          "name": "lrp",
          "programId": "040000000000004d",
          "surface": 48.1,
          "focus": true,
          "hostCount": 5,
          "useCount": 18
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "lrp",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "ndrm:la",
      "hosts": [
        {
          "name": "es",
          "programId": "0400000000000033",
          "surface": 39.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 9
        }
      ],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "ndrm",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "ndrm:lu",
      "hosts": [
        {
          "name": "es",
          "programId": "0400000000000033",
          "surface": 39.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 9
        }
      ],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "ndrm",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "news:m",
      "hosts": [
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        }
      ],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "news",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "nfc:am",
      "hosts": [
        {
          "name": "nfc",
          "programId": "0400000000000020",
          "surface": 49.8,
          "focus": false,
          "hostCount": 7,
          "useCount": 10
        }
      ],
      "users": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "nfc",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "nifm:a",
      "hosts": [
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        }
      ],
      "users": [
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "nifm",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "nim",
      "hosts": [
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        }
      ],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "nim",
      "key": true,
      "note": "Network install manager; hosted by nim, used by ns.",
      "noHost": false
    },
    {
      "name": "nim:shp",
      "hosts": [
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        }
      ],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "nim",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "nvgem:c",
      "hosts": [
        {
          "name": "nvservices",
          "programId": "0400000000000019",
          "surface": 64.2,
          "focus": true,
          "hostCount": 6,
          "useCount": 9
        }
      ],
      "users": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "nvgem",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "nvgem:cd",
      "hosts": [
        {
          "name": "nvservices",
          "programId": "0400000000000019",
          "surface": 64.2,
          "focus": true,
          "hostCount": 6,
          "useCount": 9
        }
      ],
      "users": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "nvgem",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "pcie:log",
      "hosts": [
        {
          "name": "pcie",
          "programId": "040000000000001d",
          "surface": 51.4,
          "focus": true,
          "hostCount": 2,
          "useCount": 8
        }
      ],
      "users": [
        {
          "name": "eclct",
          "programId": "0400000000000032",
          "surface": 39.1,
          "focus": false,
          "hostCount": 0,
          "useCount": 21
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "pcie",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "pl:u",
      "hosts": [
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        }
      ],
      "users": [
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "pl",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "prepo:u",
      "hosts": [
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        }
      ],
      "users": [
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "prepo",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "psc:c",
      "hosts": [
        {
          "name": "psc",
          "programId": "0400000000000021",
          "surface": 71.2,
          "focus": false,
          "hostCount": 17,
          "useCount": 4
        }
      ],
      "users": [
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "psc",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "sasbus",
      "hosts": [
        {
          "name": "Bus",
          "programId": "040000000000000a",
          "surface": 70.0,
          "focus": true,
          "hostCount": 9,
          "useCount": 6
        }
      ],
      "users": [
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "sasbus",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "spi",
      "hosts": [
        {
          "name": "Bus",
          "programId": "040000000000000a",
          "surface": 70.0,
          "focus": true,
          "hostCount": 9,
          "useCount": 6
        }
      ],
      "users": [
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "spi",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "sprof:bg",
      "hosts": [
        {
          "name": "erpt",
          "programId": "040000000000002b",
          "surface": 42.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 9
        }
      ],
      "users": [
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "sprof",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "sprof:sp",
      "hosts": [
        {
          "name": "erpt",
          "programId": "040000000000002b",
          "surface": 42.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 9
        }
      ],
      "users": [
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "sprof",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "syncpt:s",
      "hosts": [
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        }
      ],
      "users": [
        {
          "name": "camera.autogen",
          "programId": "0400000000000070",
          "surface": 43.2,
          "focus": true,
          "hostCount": 3,
          "useCount": 13
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "syncpt",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "tc",
      "hosts": [
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        }
      ],
      "users": [
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "tc",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "time:m",
      "hosts": [
        {
          "name": "psc",
          "programId": "0400000000000021",
          "surface": 71.2,
          "focus": false,
          "hostCount": 17,
          "useCount": 4
        }
      ],
      "users": [
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "time",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "time:p",
      "hosts": [
        {
          "name": "psc",
          "programId": "0400000000000021",
          "surface": 71.2,
          "focus": false,
          "hostCount": 17,
          "useCount": 4
        }
      ],
      "users": [
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "time",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "tsec:m",
      "hosts": [
        {
          "name": "tsec.autogen",
          "programId": "040000000000008d",
          "surface": 35.8,
          "focus": true,
          "hostCount": 1,
          "useCount": 6
        }
      ],
      "users": [
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "tsec",
      "key": true,
      "note": "TSEC mailbox; hosted by tsec.autogen, used by vi2.autogen.",
      "noHost": false
    },
    {
      "name": "usb:dock",
      "hosts": [
        {
          "name": "usb.gen2",
          "programId": "0400000000000006",
          "surface": 53.9,
          "focus": false,
          "hostCount": 5,
          "useCount": 11
        }
      ],
      "users": [
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "usb",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "usb:ds",
      "hosts": [
        {
          "name": "usb.gen2",
          "programId": "0400000000000006",
          "surface": 53.9,
          "focus": false,
          "hostCount": 5,
          "useCount": 11
        }
      ],
      "users": [
        {
          "name": "capmtp",
          "programId": "040000000000001b",
          "surface": 27.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 5
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "usb",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "usb:pm",
      "hosts": [
        {
          "name": "usb.gen2",
          "programId": "0400000000000006",
          "surface": 53.9,
          "focus": false,
          "hostCount": 5,
          "useCount": 11
        }
      ],
      "users": [
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "usb",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "wlan:nd",
      "hosts": [
        {
          "name": "wlan.autogen",
          "programId": "0400000000000016",
          "surface": 48.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 12
        }
      ],
      "users": [
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        }
      ],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 2,
      "family": "wlan",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "bpmpmr:i",
      "hosts": [],
      "users": [
        {
          "name": "Bus",
          "programId": "040000000000000a",
          "surface": 70.0,
          "focus": true,
          "hostCount": 9,
          "useCount": 6
        }
      ],
      "acidHosts": [],
      "hostCount": 0,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "bpmpmr",
      "key": false,
      "note": "",
      "noHost": true
    },
    {
      "name": "bpmpmr:m",
      "hosts": [],
      "users": [
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        }
      ],
      "acidHosts": [],
      "hostCount": 0,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "bpmpmr",
      "key": false,
      "note": "",
      "noHost": true
    },
    {
      "name": "bpmpmr:u",
      "hosts": [],
      "users": [
        {
          "name": "usb.gen2",
          "programId": "0400000000000006",
          "surface": 53.9,
          "focus": false,
          "hostCount": 5,
          "useCount": 11
        }
      ],
      "acidHosts": [],
      "hostCount": 0,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "bpmpmr",
      "key": false,
      "note": "",
      "noHost": true
    },
    {
      "name": "ethd:nd",
      "hosts": [],
      "users": [
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        }
      ],
      "acidHosts": [],
      "hostCount": 0,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "ethd",
      "key": false,
      "note": "",
      "noHost": true
    },
    {
      "name": "htc",
      "hosts": [],
      "users": [
        {
          "name": "boot2.ProdBoot",
          "programId": "0400000000000008",
          "surface": 30.9,
          "focus": false,
          "hostCount": 0,
          "useCount": 8
        }
      ],
      "acidHosts": [],
      "hostCount": 0,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "htc",
      "key": false,
      "note": "",
      "noHost": true
    },
    {
      "name": "htc:nd",
      "hosts": [],
      "users": [
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        }
      ],
      "acidHosts": [],
      "hostCount": 0,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "htc",
      "key": false,
      "note": "",
      "noHost": true
    },
    {
      "name": "htcs:sys",
      "hosts": [],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        }
      ],
      "acidHosts": [],
      "hostCount": 0,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "htcs",
      "key": false,
      "note": "",
      "noHost": true
    },
    {
      "name": "ldr:cmpt",
      "hosts": [],
      "users": [
        {
          "name": "cmptldr",
          "programId": "0400000000000052",
          "surface": 21.8,
          "focus": true,
          "hostCount": 0,
          "useCount": 1
        }
      ],
      "acidHosts": [],
      "hostCount": 0,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "ldr",
      "key": true,
      "note": "Loader compat service used by cmptldr; no host in this dump (built-in ldr).",
      "noHost": true
    },
    {
      "name": "ldr:shel",
      "hosts": [],
      "users": [
        {
          "name": "pgl",
          "programId": "0400000000000042",
          "surface": 31.7,
          "focus": false,
          "hostCount": 1,
          "useCount": 6
        }
      ],
      "acidHosts": [],
      "hostCount": 0,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "ldr",
      "key": true,
      "note": "Loader shell service used by pgl; no host in this dump (built-in ldr).",
      "noHost": true
    },
    {
      "name": "nettc:nd",
      "hosts": [],
      "users": [
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        }
      ],
      "acidHosts": [],
      "hostCount": 0,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "nettc",
      "key": false,
      "note": "",
      "noHost": true
    },
    {
      "name": "nettc:nu",
      "hosts": [],
      "users": [
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        }
      ],
      "acidHosts": [],
      "hostCount": 0,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "nettc",
      "key": false,
      "note": "",
      "noHost": true
    },
    {
      "name": "spl:da",
      "hosts": [],
      "users": [
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        }
      ],
      "acidHosts": [],
      "hostCount": 0,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "spl",
      "key": false,
      "note": "",
      "noHost": true
    },
    {
      "name": "spl:es",
      "hosts": [],
      "users": [
        {
          "name": "es",
          "programId": "0400000000000033",
          "surface": 39.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 9
        }
      ],
      "acidHosts": [],
      "hostCount": 0,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "spl",
      "key": false,
      "note": "",
      "noHost": true
    },
    {
      "name": "spl:gc",
      "hosts": [],
      "users": [
        {
          "name": "gc",
          "programId": "0400000000000062",
          "surface": 35.0,
          "focus": false,
          "hostCount": 0,
          "useCount": 9
        }
      ],
      "acidHosts": [],
      "hostCount": 0,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "spl",
      "key": false,
      "note": "",
      "noHost": true
    },
    {
      "name": "spl:ldn",
      "hosts": [],
      "users": [
        {
          "name": "ldn",
          "programId": "0400000000000018",
          "surface": 45.7,
          "focus": false,
          "hostCount": 6,
          "useCount": 13
        }
      ],
      "acidHosts": [],
      "hostCount": 0,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "spl",
      "key": false,
      "note": "",
      "noHost": true
    },
    {
      "name": "spl:lrp",
      "hosts": [],
      "users": [
        {
          "name": "lrp",
          "programId": "040000000000004d",
          "surface": 48.1,
          "focus": true,
          "hostCount": 5,
          "useCount": 18
        }
      ],
      "acidHosts": [],
      "hostCount": 0,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "spl",
      "key": false,
      "note": "",
      "noHost": true
    },
    {
      "name": "spl:ssl",
      "hosts": [],
      "users": [
        {
          "name": "ssl",
          "programId": "0400000000000024",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        }
      ],
      "acidHosts": [],
      "hostCount": 0,
      "useCount": 1,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "spl",
      "key": true,
      "note": "SPL SSL service; used by ssl. No host in this dump.",
      "noHost": true
    },
    {
      "name": "acc:e:su",
      "hosts": [
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "acc",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "acc:u0",
      "hosts": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "acc",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "adraw:a",
      "hosts": [
        {
          "name": "adraw",
          "programId": "0400000000000072",
          "surface": 33.3,
          "focus": true,
          "hostCount": 2,
          "useCount": 5
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "adraw",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "aoc:u",
      "hosts": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "aoc",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "apm",
      "hosts": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "apm",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "appletOE",
      "hosts": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "appletOE",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "auddev",
      "hosts": [
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "auddev",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "auddev:s",
      "hosts": [
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "auddev",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "auddmg:s",
      "hosts": [
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "auddmg",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "audin:u",
      "hosts": [
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "audin",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "audout:u",
      "hosts": [
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "audout",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "audren:u",
      "hosts": [
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "audren",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "audsmx:s",
      "hosts": [
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "audsmx",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "batlog",
      "hosts": [
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "batlog",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "bcat:a",
      "hosts": [
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "bcat",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "bcat:m",
      "hosts": [
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "bcat",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "bcat:u",
      "hosts": [
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "bcat",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "bsd:a",
      "hosts": [
        {
          "name": "bsdsocket",
          "programId": "0400000000000012",
          "surface": 61.3,
          "focus": false,
          "hostCount": 9,
          "useCount": 11
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "bsd",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "bsd:u",
      "hosts": [
        {
          "name": "bsdsocket",
          "programId": "0400000000000012",
          "surface": 61.3,
          "focus": false,
          "hostCount": 9,
          "useCount": 11
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "bsd",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "bt",
      "hosts": [
        {
          "name": "bluetooth.gen2",
          "programId": "040000000000000b",
          "surface": 54.3,
          "focus": false,
          "hostCount": 7,
          "useCount": 14
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "bt",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "bt:dbg",
      "hosts": [
        {
          "name": "bluetooth.gen2",
          "programId": "040000000000000b",
          "surface": 54.3,
          "focus": false,
          "hostCount": 7,
          "useCount": 14
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "bt",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "bt:u",
      "hosts": [
        {
          "name": "bluetooth.gen2",
          "programId": "040000000000000b",
          "surface": 54.3,
          "focus": false,
          "hostCount": 7,
          "useCount": 14
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "bt",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "btm:u",
      "hosts": [
        {
          "name": "bluetooth.gen2",
          "programId": "040000000000000b",
          "surface": 54.3,
          "focus": false,
          "hostCount": 7,
          "useCount": 14
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "btm",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "btp:dbg",
      "hosts": [
        {
          "name": "bluetooth.gen2",
          "programId": "040000000000000b",
          "surface": 54.3,
          "focus": false,
          "hostCount": 7,
          "useCount": 14
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "btp",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "capmtp",
      "hosts": [
        {
          "name": "capmtp",
          "programId": "040000000000001b",
          "surface": 27.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 5
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "capmtp",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "caps:ss",
      "hosts": [
        {
          "name": "capsrv",
          "programId": "0400000000000022",
          "surface": 46.5,
          "focus": false,
          "hostCount": 5,
          "useCount": 12
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "caps",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "caps:su",
      "hosts": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "caps",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "caps:u",
      "hosts": [
        {
          "name": "capsrv",
          "programId": "0400000000000022",
          "surface": 46.5,
          "focus": false,
          "hostCount": 5,
          "useCount": 12
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "caps",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "chat:a",
      "hosts": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "chat",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "chat:alb",
      "hosts": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "chat",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "chat:con",
      "hosts": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "chat",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "chat:dbg",
      "hosts": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "chat",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "chat:ds",
      "hosts": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "chat",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "chat:hdr",
      "hosts": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "chat",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "chat:myp",
      "hosts": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "chat",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "chat:nxs",
      "hosts": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "chat",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "chat:sa",
      "hosts": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "chat",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "chat:set",
      "hosts": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "chat",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "chat:sp",
      "hosts": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "chat",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "chat:u",
      "hosts": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "chat",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "chat:wu",
      "hosts": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "chat",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "disp:ev",
      "hosts": [
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "disp",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "disp:s",
      "hosts": [
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "disp",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "ectx:aw",
      "hosts": [
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "ectx",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "eupld:r",
      "hosts": [
        {
          "name": "eupld",
          "programId": "0400000000000030",
          "surface": 39.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 18
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "eupld",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "fan",
      "hosts": [
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "fan",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "fgm",
      "hosts": [
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "fgm",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "fgm:sys",
      "hosts": [
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "fgm",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "fgm:test",
      "hosts": [
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "fgm",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "friend:m",
      "hosts": [
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "friend",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "friend:v",
      "hosts": [
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "friend",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "gpio:emu",
      "hosts": [
        {
          "name": "Bus",
          "programId": "040000000000000a",
          "surface": 70.0,
          "focus": true,
          "hostCount": 9,
          "useCount": 6
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "gpio",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "grc:d",
      "hosts": [
        {
          "name": "grc",
          "programId": "0400000000000035",
          "surface": 32.5,
          "focus": false,
          "hostCount": 2,
          "useCount": 8
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "grc",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "gsv:t",
      "hosts": [
        {
          "name": "gsvm",
          "programId": "0400000000000080",
          "surface": 29.2,
          "focus": true,
          "hostCount": 3,
          "useCount": 2
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "gsv",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "hid:dbg",
      "hosts": [
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "hid",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "hidbus",
      "hosts": [
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "hidbus",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "hidc:d",
      "hosts": [
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "hidc",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "hwopus",
      "hosts": [
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "hwopus",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "imf",
      "hosts": [
        {
          "name": "imf",
          "programId": "0400000000000047",
          "surface": 35.8,
          "focus": true,
          "hostCount": 3,
          "useCount": 4
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "imf",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "imf:e",
      "hosts": [
        {
          "name": "imf",
          "programId": "0400000000000047",
          "surface": 35.8,
          "focus": true,
          "hostCount": 3,
          "useCount": 4
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "imf",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "imf:fe",
      "hosts": [
        {
          "name": "imf",
          "programId": "0400000000000047",
          "surface": 35.8,
          "focus": true,
          "hostCount": 3,
          "useCount": 4
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "imf",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "irs",
      "hosts": [
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "irs",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "lcs",
      "hosts": [
        {
          "name": "lrp",
          "programId": "040000000000004d",
          "surface": 48.1,
          "focus": true,
          "hostCount": 5,
          "useCount": 18
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "lcs",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "ldn:m",
      "hosts": [
        {
          "name": "ldn",
          "programId": "0400000000000018",
          "surface": 45.7,
          "focus": false,
          "hostCount": 6,
          "useCount": 13
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "ldn",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "ldn:u",
      "hosts": [
        {
          "name": "ldn",
          "programId": "0400000000000018",
          "surface": 45.7,
          "focus": false,
          "hostCount": 6,
          "useCount": 13
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "ldn",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "ldr:ro",
      "hosts": [
        {
          "name": "ro",
          "programId": "0400000000000037",
          "surface": 32.5,
          "focus": true,
          "hostCount": 3,
          "useCount": 3
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "ldr",
      "key": true,
      "note": "Loader service hosted by ro; no users in this dump.",
      "noHost": false
    },
    {
      "name": "led",
      "hosts": [
        {
          "name": "Bus",
          "programId": "040000000000000a",
          "surface": 70.0,
          "focus": true,
          "hostCount": 9,
          "useCount": 6
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "led",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "lp2p:app",
      "hosts": [
        {
          "name": "ldn",
          "programId": "0400000000000018",
          "surface": 45.7,
          "focus": false,
          "hostCount": 6,
          "useCount": 13
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "lp2p",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "lp2p:m",
      "hosts": [
        {
          "name": "ldn",
          "programId": "0400000000000018",
          "surface": 45.7,
          "focus": false,
          "hostCount": 6,
          "useCount": 13
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "lp2p",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "lp2p:sys",
      "hosts": [
        {
          "name": "ldn",
          "programId": "0400000000000018",
          "surface": 45.7,
          "focus": false,
          "hostCount": 6,
          "useCount": 13
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "lp2p",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "lrp:d",
      "hosts": [
        {
          "name": "lrp",
          "programId": "040000000000004d",
          "surface": 48.1,
          "focus": true,
          "hostCount": 5,
          "useCount": 18
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "lrp",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "lrp:m",
      "hosts": [
        {
          "name": "lrp",
          "programId": "040000000000004d",
          "surface": 48.1,
          "focus": true,
          "hostCount": 5,
          "useCount": 18
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "lrp",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "lrp:s",
      "hosts": [
        {
          "name": "lrp",
          "programId": "040000000000004d",
          "surface": 48.1,
          "focus": true,
          "hostCount": 5,
          "useCount": 18
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "lrp",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "mig:usr",
      "hosts": [
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "mig",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "mii:e",
      "hosts": [
        {
          "name": "sdb",
          "programId": "0400000000000039",
          "surface": 51.4,
          "focus": false,
          "hostCount": 7,
          "useCount": 12
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "mii",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "mii:u",
      "hosts": [
        {
          "name": "sdb",
          "programId": "0400000000000039",
          "surface": 51.4,
          "focus": false,
          "hostCount": 7,
          "useCount": 12
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "mii",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "miiimg",
      "hosts": [
        {
          "name": "sdb",
          "programId": "0400000000000039",
          "surface": 51.4,
          "focus": false,
          "hostCount": 7,
          "useCount": 12
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "miiimg",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "mnpp:app",
      "hosts": [
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "mnpp",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "mnpp:web",
      "hosts": [
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "mnpp",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "news:a",
      "hosts": [
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "news",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "news:c",
      "hosts": [
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "news",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "news:p",
      "hosts": [
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "news",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "news:v",
      "hosts": [
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "news",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "nfc:mf:u",
      "hosts": [
        {
          "name": "nfc",
          "programId": "0400000000000020",
          "surface": 49.8,
          "focus": false,
          "hostCount": 7,
          "useCount": 10
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "nfc",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "nfc:sys",
      "hosts": [
        {
          "name": "nfc",
          "programId": "0400000000000020",
          "surface": 49.8,
          "focus": false,
          "hostCount": 7,
          "useCount": 10
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "nfc",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "nfc:user",
      "hosts": [
        {
          "name": "nfc",
          "programId": "0400000000000020",
          "surface": 49.8,
          "focus": false,
          "hostCount": 7,
          "useCount": 10
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "nfc",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "nfp:dbg",
      "hosts": [
        {
          "name": "nfc",
          "programId": "0400000000000020",
          "surface": 49.8,
          "focus": false,
          "hostCount": 7,
          "useCount": 10
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "nfp",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "nfp:sys",
      "hosts": [
        {
          "name": "nfc",
          "programId": "0400000000000020",
          "surface": 49.8,
          "focus": false,
          "hostCount": 7,
          "useCount": 10
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "nfp",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "nfp:user",
      "hosts": [
        {
          "name": "nfc",
          "programId": "0400000000000020",
          "surface": 49.8,
          "focus": false,
          "hostCount": 7,
          "useCount": 10
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "nfp",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "ngc:u",
      "hosts": [
        {
          "name": "ngc",
          "programId": "0400000000000050",
          "surface": 31.7,
          "focus": false,
          "hostCount": 2,
          "useCount": 3
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "ngc",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "ngct:u",
      "hosts": [
        {
          "name": "ngc",
          "programId": "0400000000000050",
          "surface": 31.7,
          "focus": false,
          "hostCount": 2,
          "useCount": 3
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "ngct",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "nifm:u",
      "hosts": [
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "nifm",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "nim:eca",
      "hosts": [
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "nim",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "nim:ecas",
      "hosts": [
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "nim",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "notif:a",
      "hosts": [
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "notif",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "npns:a",
      "hosts": [
        {
          "name": "npns",
          "programId": "040000000000002f",
          "surface": 45.7,
          "focus": false,
          "hostCount": 3,
          "useCount": 16
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "npns",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "npns:u",
      "hosts": [
        {
          "name": "npns",
          "programId": "040000000000002f",
          "surface": 45.7,
          "focus": false,
          "hostCount": 3,
          "useCount": 16
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "npns",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "ns:dev",
      "hosts": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "ns",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "ns:ec",
      "hosts": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "ns",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "ns:rid",
      "hosts": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "ns",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "ns:rt",
      "hosts": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "ns",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "ns:sweb",
      "hosts": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "ns",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "ns:vm",
      "hosts": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "ns",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "ns:web",
      "hosts": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "ns",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "nsd:a",
      "hosts": [
        {
          "name": "bsdsocket",
          "programId": "0400000000000012",
          "surface": 61.3,
          "focus": false,
          "hostCount": 9,
          "useCount": 11
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "nsd",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "ntc",
      "hosts": [
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "ntc",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "nvdrv:t",
      "hosts": [
        {
          "name": "nvservices",
          "programId": "0400000000000019",
          "surface": 64.2,
          "focus": true,
          "hostCount": 6,
          "useCount": 9
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "nvdrv",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "nvdrvdbg",
      "hosts": [
        {
          "name": "nvservices",
          "programId": "0400000000000019",
          "surface": 64.2,
          "focus": true,
          "hostCount": 6,
          "useCount": 9
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "nvdrvdbg",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "olsc:ac",
      "hosts": [
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "olsc",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "olsc:u",
      "hosts": [
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "olsc",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "omm:s",
      "hosts": [
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "omm",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "ovln:rcv",
      "hosts": [
        {
          "name": "psc",
          "programId": "0400000000000021",
          "surface": 71.2,
          "focus": false,
          "hostCount": 17,
          "useCount": 4
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "ovln",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "pctl",
      "hosts": [
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "pctl",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "pctl:a",
      "hosts": [
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "pctl",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "pctl:r",
      "hosts": [
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "pctl",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "powctl",
      "hosts": [
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "powctl",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "prepo:a2",
      "hosts": [
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "prepo",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "prepo:m",
      "hosts": [
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "prepo",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "ro:1",
      "hosts": [
        {
          "name": "ro",
          "programId": "0400000000000037",
          "surface": 32.5,
          "focus": true,
          "hostCount": 3,
          "useCount": 3
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "ro",
      "key": true,
      "note": "ro service; hosted by ro, no users in this dump.",
      "noHost": false
    },
    {
      "name": "ro:dmnt",
      "hosts": [
        {
          "name": "ro",
          "programId": "0400000000000037",
          "surface": 32.5,
          "focus": true,
          "hostCount": 3,
          "useCount": 3
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "ro",
      "key": true,
      "note": "ro debug service; hosted by ro, no users in this dump.",
      "noHost": false
    },
    {
      "name": "set:fd",
      "hosts": [
        {
          "name": "settings",
          "programId": "0400000000000009",
          "surface": 36.6,
          "focus": false,
          "hostCount": 4,
          "useCount": 3
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "set",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "spbg:sp",
      "hosts": [
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "spbg",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "spch:a",
      "hosts": [
        {
          "name": "speech",
          "programId": "0400000000000088",
          "surface": 28.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 2
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "spch",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "ssl",
      "hosts": [
        {
          "name": "ssl",
          "programId": "0400000000000024",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "ssl",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "stpl:dbg",
      "hosts": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "stpl",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "stpl:sys",
      "hosts": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "stpl",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "stpl:u",
      "hosts": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "stpl",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "syncpt:v",
      "hosts": [
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "syncpt",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "syslog:u",
      "hosts": [
        {
          "name": "psc",
          "programId": "0400000000000021",
          "surface": 71.2,
          "focus": false,
          "hostCount": 17,
          "useCount": 4
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "syslog",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "time:a",
      "hosts": [
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "time",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "time:r",
      "hosts": [
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "time",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "ts",
      "hosts": [
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "ts",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "ts:emu",
      "hosts": [
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "ts",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "uart",
      "hosts": [
        {
          "name": "Bus",
          "programId": "040000000000000a",
          "surface": 70.0,
          "focus": true,
          "hostCount": 9,
          "useCount": 6
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "uart",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "vi2:nv",
      "hosts": [
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "vi2",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "wlan:p",
      "hosts": [
        {
          "name": "wlan.autogen",
          "programId": "0400000000000016",
          "surface": 48.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 12
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "wlan",
      "key": false,
      "note": "",
      "noHost": false
    },
    {
      "name": "xcd:sys",
      "hosts": [
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        }
      ],
      "users": [],
      "acidHosts": [],
      "hostCount": 1,
      "useCount": 0,
      "acidHostCount": 0,
      "totalCount": 1,
      "family": "xcd",
      "key": false,
      "note": "",
      "noHost": false
    }
  ],
  "families": [
    {
      "name": "fatal",
      "services": [
        "fatal:p",
        "fatal:u"
      ],
      "serviceCount": 2,
      "hostCount": 1,
      "useCount": 57,
      "totalCount": 58,
      "keyCount": 1,
      "key": true,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "Fatal error services; fatal:u is used by 57 modules.",
      "hosts": [
        {
          "name": "fatal",
          "programId": "0400000000000034",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        },
        {
          "name": "Bus",
          "programId": "040000000000000a",
          "surface": 70.0,
          "focus": true,
          "hostCount": 9,
          "useCount": 6
        },
        {
          "name": "nvservices",
          "programId": "0400000000000019",
          "surface": 64.2,
          "focus": true,
          "hostCount": 6,
          "useCount": 9
        },
        {
          "name": "pcie",
          "programId": "040000000000001d",
          "surface": 51.4,
          "focus": true,
          "hostCount": 2,
          "useCount": 8
        },
        {
          "name": "lrp",
          "programId": "040000000000004d",
          "surface": 48.1,
          "focus": true,
          "hostCount": 5,
          "useCount": 18
        },
        {
          "name": "gsv3",
          "programId": "0400000000000083",
          "surface": 44.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 12
        },
        {
          "name": "gsv1",
          "programId": "0400000000000081",
          "surface": 43.6,
          "focus": true,
          "hostCount": 0,
          "useCount": 12
        },
        {
          "name": "camera.autogen",
          "programId": "0400000000000070",
          "surface": 43.2,
          "focus": true,
          "hostCount": 3,
          "useCount": 13
        },
        {
          "name": "nvkernel",
          "programId": "040000000000004f",
          "surface": 43.2,
          "focus": true,
          "hostCount": 2,
          "useCount": 4
        },
        {
          "name": "gsv4",
          "programId": "0400000000000084",
          "surface": 42.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 10
        },
        {
          "name": "host1x",
          "programId": "0400000000000065",
          "surface": 37.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 5
        },
        {
          "name": "sdcard",
          "programId": "0400000000000089",
          "surface": 36.2,
          "focus": true,
          "hostCount": 0,
          "useCount": 9
        },
        {
          "name": "tsec.autogen",
          "programId": "040000000000008d",
          "surface": 35.8,
          "focus": true,
          "hostCount": 1,
          "useCount": 6
        },
        {
          "name": "adraw",
          "programId": "0400000000000072",
          "surface": 33.3,
          "focus": true,
          "hostCount": 2,
          "useCount": 5
        },
        {
          "name": "ro",
          "programId": "0400000000000037",
          "surface": 32.5,
          "focus": true,
          "hostCount": 3,
          "useCount": 3
        },
        {
          "name": "gsvm",
          "programId": "0400000000000080",
          "surface": 29.2,
          "focus": true,
          "hostCount": 3,
          "useCount": 2
        },
        {
          "name": "creport",
          "programId": "0400000000000036",
          "surface": 28.4,
          "focus": true,
          "hostCount": 0,
          "useCount": 5
        },
        {
          "name": "eth",
          "programId": "0400000000000046",
          "surface": 28.0,
          "focus": true,
          "hostCount": 1,
          "useCount": 6
        },
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        },
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        },
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        },
        {
          "name": "psc",
          "programId": "0400000000000021",
          "surface": 71.2,
          "focus": false,
          "hostCount": 17,
          "useCount": 4
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        },
        {
          "name": "bsdsocket",
          "programId": "0400000000000012",
          "surface": 61.3,
          "focus": false,
          "hostCount": 9,
          "useCount": 11
        },
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        },
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        },
        {
          "name": "bluetooth.gen2",
          "programId": "040000000000000b",
          "surface": 54.3,
          "focus": false,
          "hostCount": 7,
          "useCount": 14
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "usb.gen2",
          "programId": "0400000000000006",
          "surface": 53.9,
          "focus": false,
          "hostCount": 5,
          "useCount": 11
        },
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        },
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        },
        {
          "name": "sdb",
          "programId": "0400000000000039",
          "surface": 51.4,
          "focus": false,
          "hostCount": 7,
          "useCount": 12
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        },
        {
          "name": "nfc",
          "programId": "0400000000000020",
          "surface": 49.8,
          "focus": false,
          "hostCount": 7,
          "useCount": 10
        },
        {
          "name": "wlan.autogen",
          "programId": "0400000000000016",
          "surface": 48.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 12
        },
        {
          "name": "capsrv",
          "programId": "0400000000000022",
          "surface": 46.5,
          "focus": false,
          "hostCount": 5,
          "useCount": 12
        },
        {
          "name": "ldn",
          "programId": "0400000000000018",
          "surface": 45.7,
          "focus": false,
          "hostCount": 6,
          "useCount": 13
        },
        {
          "name": "npns",
          "programId": "040000000000002f",
          "surface": 45.7,
          "focus": false,
          "hostCount": 3,
          "useCount": 16
        },
        {
          "name": "eupld",
          "programId": "0400000000000030",
          "surface": 39.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 18
        },
        {
          "name": "eclct",
          "programId": "0400000000000032",
          "surface": 39.1,
          "focus": false,
          "hostCount": 0,
          "useCount": 21
        },
        {
          "name": "es",
          "programId": "0400000000000033",
          "surface": 39.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 9
        },
        {
          "name": "ssl",
          "programId": "0400000000000024",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        },
        {
          "name": "pcv",
          "programId": "040000000000001a",
          "surface": 38.3,
          "focus": false,
          "hostCount": 3,
          "useCount": 5
        },
        {
          "name": "settings",
          "programId": "0400000000000009",
          "surface": 36.6,
          "focus": false,
          "hostCount": 4,
          "useCount": 3
        },
        {
          "name": "gc",
          "programId": "0400000000000062",
          "surface": 35.0,
          "focus": false,
          "hostCount": 0,
          "useCount": 9
        },
        {
          "name": "grc",
          "programId": "0400000000000035",
          "surface": 32.5,
          "focus": false,
          "hostCount": 2,
          "useCount": 8
        },
        {
          "name": "ngc",
          "programId": "0400000000000050",
          "surface": 31.7,
          "focus": false,
          "hostCount": 2,
          "useCount": 3
        },
        {
          "name": "pgl",
          "programId": "0400000000000042",
          "surface": 31.7,
          "focus": false,
          "hostCount": 1,
          "useCount": 6
        },
        {
          "name": "capsrv2",
          "programId": "0400000000000071",
          "surface": 30.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 6
        },
        {
          "name": "capmtp",
          "programId": "040000000000001b",
          "surface": 27.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 5
        },
        {
          "name": "jpegdec",
          "programId": "040000000000003c",
          "surface": 24.3,
          "focus": false,
          "hostCount": 1,
          "useCount": 2
        }
      ]
    },
    {
      "name": "set",
      "services": [
        "set",
        "set:cal",
        "set:fd",
        "set:sys"
      ],
      "serviceCount": 4,
      "hostCount": 1,
      "useCount": 51,
      "totalCount": 52,
      "keyCount": 2,
      "key": true,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "Settings services; set:sys is used by 49 modules.",
      "hosts": [
        {
          "name": "settings",
          "programId": "0400000000000009",
          "surface": 36.6,
          "focus": false,
          "hostCount": 4,
          "useCount": 3
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        },
        {
          "name": "Bus",
          "programId": "040000000000000a",
          "surface": 70.0,
          "focus": true,
          "hostCount": 9,
          "useCount": 6
        },
        {
          "name": "nvservices",
          "programId": "0400000000000019",
          "surface": 64.2,
          "focus": true,
          "hostCount": 6,
          "useCount": 9
        },
        {
          "name": "pcie",
          "programId": "040000000000001d",
          "surface": 51.4,
          "focus": true,
          "hostCount": 2,
          "useCount": 8
        },
        {
          "name": "lrp",
          "programId": "040000000000004d",
          "surface": 48.1,
          "focus": true,
          "hostCount": 5,
          "useCount": 18
        },
        {
          "name": "gsv3",
          "programId": "0400000000000083",
          "surface": 44.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 12
        },
        {
          "name": "gsv1",
          "programId": "0400000000000081",
          "surface": 43.6,
          "focus": true,
          "hostCount": 0,
          "useCount": 12
        },
        {
          "name": "camera.autogen",
          "programId": "0400000000000070",
          "surface": 43.2,
          "focus": true,
          "hostCount": 3,
          "useCount": 13
        },
        {
          "name": "nvkernel",
          "programId": "040000000000004f",
          "surface": 43.2,
          "focus": true,
          "hostCount": 2,
          "useCount": 4
        },
        {
          "name": "gsv4",
          "programId": "0400000000000084",
          "surface": 42.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 10
        },
        {
          "name": "imf",
          "programId": "0400000000000047",
          "surface": 35.8,
          "focus": true,
          "hostCount": 3,
          "useCount": 4
        },
        {
          "name": "ro",
          "programId": "0400000000000037",
          "surface": 32.5,
          "focus": true,
          "hostCount": 3,
          "useCount": 3
        },
        {
          "name": "speech",
          "programId": "0400000000000088",
          "surface": 28.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 2
        },
        {
          "name": "eth",
          "programId": "0400000000000046",
          "surface": 28.0,
          "focus": true,
          "hostCount": 1,
          "useCount": 6
        },
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        },
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        },
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        },
        {
          "name": "bsdsocket",
          "programId": "0400000000000012",
          "surface": 61.3,
          "focus": false,
          "hostCount": 9,
          "useCount": 11
        },
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        },
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        },
        {
          "name": "bluetooth.gen2",
          "programId": "040000000000000b",
          "surface": 54.3,
          "focus": false,
          "hostCount": 7,
          "useCount": 14
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "usb.gen2",
          "programId": "0400000000000006",
          "surface": 53.9,
          "focus": false,
          "hostCount": 5,
          "useCount": 11
        },
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        },
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        },
        {
          "name": "sdb",
          "programId": "0400000000000039",
          "surface": 51.4,
          "focus": false,
          "hostCount": 7,
          "useCount": 12
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        },
        {
          "name": "nfc",
          "programId": "0400000000000020",
          "surface": 49.8,
          "focus": false,
          "hostCount": 7,
          "useCount": 10
        },
        {
          "name": "wlan.autogen",
          "programId": "0400000000000016",
          "surface": 48.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 12
        },
        {
          "name": "capsrv",
          "programId": "0400000000000022",
          "surface": 46.5,
          "focus": false,
          "hostCount": 5,
          "useCount": 12
        },
        {
          "name": "ldn",
          "programId": "0400000000000018",
          "surface": 45.7,
          "focus": false,
          "hostCount": 6,
          "useCount": 13
        },
        {
          "name": "npns",
          "programId": "040000000000002f",
          "surface": 45.7,
          "focus": false,
          "hostCount": 3,
          "useCount": 16
        },
        {
          "name": "erpt",
          "programId": "040000000000002b",
          "surface": 42.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 9
        },
        {
          "name": "eupld",
          "programId": "0400000000000030",
          "surface": 39.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 18
        },
        {
          "name": "eclct",
          "programId": "0400000000000032",
          "surface": 39.1,
          "focus": false,
          "hostCount": 0,
          "useCount": 21
        },
        {
          "name": "es",
          "programId": "0400000000000033",
          "surface": 39.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 9
        },
        {
          "name": "fatal",
          "programId": "0400000000000034",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        },
        {
          "name": "ssl",
          "programId": "0400000000000024",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        },
        {
          "name": "pcv",
          "programId": "040000000000001a",
          "surface": 38.3,
          "focus": false,
          "hostCount": 3,
          "useCount": 5
        },
        {
          "name": "gc",
          "programId": "0400000000000062",
          "surface": 35.0,
          "focus": false,
          "hostCount": 0,
          "useCount": 9
        },
        {
          "name": "grc",
          "programId": "0400000000000035",
          "surface": 32.5,
          "focus": false,
          "hostCount": 2,
          "useCount": 8
        },
        {
          "name": "pgl",
          "programId": "0400000000000042",
          "surface": 31.7,
          "focus": false,
          "hostCount": 1,
          "useCount": 6
        },
        {
          "name": "boot2.ProdBoot",
          "programId": "0400000000000008",
          "surface": 30.9,
          "focus": false,
          "hostCount": 0,
          "useCount": 8
        },
        {
          "name": "capmtp",
          "programId": "040000000000001b",
          "surface": 27.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 5
        }
      ]
    },
    {
      "name": "lm",
      "services": [
        "lm"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 43,
      "totalCount": 44,
      "keyCount": 1,
      "key": true,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "Log manager; 43 users.",
      "hosts": [
        {
          "name": "LogManager.Prod",
          "programId": "0400000000000015",
          "surface": 23.5,
          "focus": false,
          "hostCount": 1,
          "useCount": 1
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        },
        {
          "name": "nvservices",
          "programId": "0400000000000019",
          "surface": 64.2,
          "focus": true,
          "hostCount": 6,
          "useCount": 9
        },
        {
          "name": "lrp",
          "programId": "040000000000004d",
          "surface": 48.1,
          "focus": true,
          "hostCount": 5,
          "useCount": 18
        },
        {
          "name": "gsv3",
          "programId": "0400000000000083",
          "surface": 44.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 12
        },
        {
          "name": "gsv1",
          "programId": "0400000000000081",
          "surface": 43.6,
          "focus": true,
          "hostCount": 0,
          "useCount": 12
        },
        {
          "name": "camera.autogen",
          "programId": "0400000000000070",
          "surface": 43.2,
          "focus": true,
          "hostCount": 3,
          "useCount": 13
        },
        {
          "name": "nvkernel",
          "programId": "040000000000004f",
          "surface": 43.2,
          "focus": true,
          "hostCount": 2,
          "useCount": 4
        },
        {
          "name": "gsv4",
          "programId": "0400000000000084",
          "surface": 42.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 10
        },
        {
          "name": "tsec.autogen",
          "programId": "040000000000008d",
          "surface": 35.8,
          "focus": true,
          "hostCount": 1,
          "useCount": 6
        },
        {
          "name": "adraw",
          "programId": "0400000000000072",
          "surface": 33.3,
          "focus": true,
          "hostCount": 2,
          "useCount": 5
        },
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        },
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        },
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        },
        {
          "name": "bsdsocket",
          "programId": "0400000000000012",
          "surface": 61.3,
          "focus": false,
          "hostCount": 9,
          "useCount": 11
        },
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        },
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        },
        {
          "name": "bluetooth.gen2",
          "programId": "040000000000000b",
          "surface": 54.3,
          "focus": false,
          "hostCount": 7,
          "useCount": 14
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        },
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        },
        {
          "name": "sdb",
          "programId": "0400000000000039",
          "surface": 51.4,
          "focus": false,
          "hostCount": 7,
          "useCount": 12
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        },
        {
          "name": "wlan.autogen",
          "programId": "0400000000000016",
          "surface": 48.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 12
        },
        {
          "name": "capsrv",
          "programId": "0400000000000022",
          "surface": 46.5,
          "focus": false,
          "hostCount": 5,
          "useCount": 12
        },
        {
          "name": "ldn",
          "programId": "0400000000000018",
          "surface": 45.7,
          "focus": false,
          "hostCount": 6,
          "useCount": 13
        },
        {
          "name": "npns",
          "programId": "040000000000002f",
          "surface": 45.7,
          "focus": false,
          "hostCount": 3,
          "useCount": 16
        },
        {
          "name": "erpt",
          "programId": "040000000000002b",
          "surface": 42.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 9
        },
        {
          "name": "eupld",
          "programId": "0400000000000030",
          "surface": 39.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 18
        },
        {
          "name": "eclct",
          "programId": "0400000000000032",
          "surface": 39.1,
          "focus": false,
          "hostCount": 0,
          "useCount": 21
        },
        {
          "name": "es",
          "programId": "0400000000000033",
          "surface": 39.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 9
        },
        {
          "name": "fatal",
          "programId": "0400000000000034",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        },
        {
          "name": "ssl",
          "programId": "0400000000000024",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        },
        {
          "name": "gc",
          "programId": "0400000000000062",
          "surface": 35.0,
          "focus": false,
          "hostCount": 0,
          "useCount": 9
        },
        {
          "name": "grc",
          "programId": "0400000000000035",
          "surface": 32.5,
          "focus": false,
          "hostCount": 2,
          "useCount": 8
        },
        {
          "name": "ngc",
          "programId": "0400000000000050",
          "surface": 31.7,
          "focus": false,
          "hostCount": 2,
          "useCount": 3
        },
        {
          "name": "jpegdec",
          "programId": "040000000000003c",
          "surface": 24.3,
          "focus": false,
          "hostCount": 1,
          "useCount": 2
        }
      ]
    },
    {
      "name": "srepo",
      "services": [
        "srepo:a",
        "srepo:u"
      ],
      "serviceCount": 2,
      "hostCount": 1,
      "useCount": 40,
      "totalCount": 41,
      "keyCount": 1,
      "key": true,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "psc",
          "programId": "0400000000000021",
          "surface": 71.2,
          "focus": false,
          "hostCount": 17,
          "useCount": 4
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        },
        {
          "name": "lrp",
          "programId": "040000000000004d",
          "surface": 48.1,
          "focus": true,
          "hostCount": 5,
          "useCount": 18
        },
        {
          "name": "gsv3",
          "programId": "0400000000000083",
          "surface": 44.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 12
        },
        {
          "name": "gsv1",
          "programId": "0400000000000081",
          "surface": 43.6,
          "focus": true,
          "hostCount": 0,
          "useCount": 12
        },
        {
          "name": "camera.autogen",
          "programId": "0400000000000070",
          "surface": 43.2,
          "focus": true,
          "hostCount": 3,
          "useCount": 13
        },
        {
          "name": "nvkernel",
          "programId": "040000000000004f",
          "surface": 43.2,
          "focus": true,
          "hostCount": 2,
          "useCount": 4
        },
        {
          "name": "gsv4",
          "programId": "0400000000000084",
          "surface": 42.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 10
        },
        {
          "name": "host1x",
          "programId": "0400000000000065",
          "surface": 37.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 5
        },
        {
          "name": "tsec.autogen",
          "programId": "040000000000008d",
          "surface": 35.8,
          "focus": true,
          "hostCount": 1,
          "useCount": 6
        },
        {
          "name": "adraw",
          "programId": "0400000000000072",
          "surface": 33.3,
          "focus": true,
          "hostCount": 2,
          "useCount": 5
        },
        {
          "name": "gsvm",
          "programId": "0400000000000080",
          "surface": 29.2,
          "focus": true,
          "hostCount": 3,
          "useCount": 2
        },
        {
          "name": "eth",
          "programId": "0400000000000046",
          "surface": 28.0,
          "focus": true,
          "hostCount": 1,
          "useCount": 6
        },
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        },
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        },
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        },
        {
          "name": "bsdsocket",
          "programId": "0400000000000012",
          "surface": 61.3,
          "focus": false,
          "hostCount": 9,
          "useCount": 11
        },
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        },
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        },
        {
          "name": "bluetooth.gen2",
          "programId": "040000000000000b",
          "surface": 54.3,
          "focus": false,
          "hostCount": 7,
          "useCount": 14
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        },
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        },
        {
          "name": "sdb",
          "programId": "0400000000000039",
          "surface": 51.4,
          "focus": false,
          "hostCount": 7,
          "useCount": 12
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        },
        {
          "name": "wlan.autogen",
          "programId": "0400000000000016",
          "surface": 48.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 12
        },
        {
          "name": "capsrv",
          "programId": "0400000000000022",
          "surface": 46.5,
          "focus": false,
          "hostCount": 5,
          "useCount": 12
        },
        {
          "name": "ldn",
          "programId": "0400000000000018",
          "surface": 45.7,
          "focus": false,
          "hostCount": 6,
          "useCount": 13
        },
        {
          "name": "npns",
          "programId": "040000000000002f",
          "surface": 45.7,
          "focus": false,
          "hostCount": 3,
          "useCount": 16
        },
        {
          "name": "erpt",
          "programId": "040000000000002b",
          "surface": 42.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 9
        },
        {
          "name": "eupld",
          "programId": "0400000000000030",
          "surface": 39.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 18
        },
        {
          "name": "eclct",
          "programId": "0400000000000032",
          "surface": 39.1,
          "focus": false,
          "hostCount": 0,
          "useCount": 21
        },
        {
          "name": "ssl",
          "programId": "0400000000000024",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        },
        {
          "name": "capsrv2",
          "programId": "0400000000000071",
          "surface": 30.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 6
        }
      ]
    },
    {
      "name": "psc",
      "services": [
        "psc:c",
        "psc:l",
        "psc:m"
      ],
      "serviceCount": 3,
      "hostCount": 1,
      "useCount": 37,
      "totalCount": 38,
      "keyCount": 1,
      "key": true,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "Power state coordinator; psc:m is used by 37 modules; srepo:u is also hosted by psc in this dump.",
      "hosts": [
        {
          "name": "psc",
          "programId": "0400000000000021",
          "surface": 71.2,
          "focus": false,
          "hostCount": 17,
          "useCount": 4
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        },
        {
          "name": "Bus",
          "programId": "040000000000000a",
          "surface": 70.0,
          "focus": true,
          "hostCount": 9,
          "useCount": 6
        },
        {
          "name": "nvservices",
          "programId": "0400000000000019",
          "surface": 64.2,
          "focus": true,
          "hostCount": 6,
          "useCount": 9
        },
        {
          "name": "pcie",
          "programId": "040000000000001d",
          "surface": 51.4,
          "focus": true,
          "hostCount": 2,
          "useCount": 8
        },
        {
          "name": "gsv3",
          "programId": "0400000000000083",
          "surface": 44.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 12
        },
        {
          "name": "gsv1",
          "programId": "0400000000000081",
          "surface": 43.6,
          "focus": true,
          "hostCount": 0,
          "useCount": 12
        },
        {
          "name": "camera.autogen",
          "programId": "0400000000000070",
          "surface": 43.2,
          "focus": true,
          "hostCount": 3,
          "useCount": 13
        },
        {
          "name": "gsv4",
          "programId": "0400000000000084",
          "surface": 42.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 10
        },
        {
          "name": "host1x",
          "programId": "0400000000000065",
          "surface": 37.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 5
        },
        {
          "name": "sdcard",
          "programId": "0400000000000089",
          "surface": 36.2,
          "focus": true,
          "hostCount": 0,
          "useCount": 9
        },
        {
          "name": "tsec.autogen",
          "programId": "040000000000008d",
          "surface": 35.8,
          "focus": true,
          "hostCount": 1,
          "useCount": 6
        },
        {
          "name": "eth",
          "programId": "0400000000000046",
          "surface": 28.0,
          "focus": true,
          "hostCount": 1,
          "useCount": 6
        },
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        },
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        },
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        },
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        },
        {
          "name": "psc",
          "programId": "0400000000000021",
          "surface": 71.2,
          "focus": false,
          "hostCount": 17,
          "useCount": 4
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        },
        {
          "name": "bsdsocket",
          "programId": "0400000000000012",
          "surface": 61.3,
          "focus": false,
          "hostCount": 9,
          "useCount": 11
        },
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        },
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        },
        {
          "name": "bluetooth.gen2",
          "programId": "040000000000000b",
          "surface": 54.3,
          "focus": false,
          "hostCount": 7,
          "useCount": 14
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "usb.gen2",
          "programId": "0400000000000006",
          "surface": 53.9,
          "focus": false,
          "hostCount": 5,
          "useCount": 11
        },
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        },
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        },
        {
          "name": "nfc",
          "programId": "0400000000000020",
          "surface": 49.8,
          "focus": false,
          "hostCount": 7,
          "useCount": 10
        },
        {
          "name": "npns",
          "programId": "040000000000002f",
          "surface": 45.7,
          "focus": false,
          "hostCount": 3,
          "useCount": 16
        },
        {
          "name": "erpt",
          "programId": "040000000000002b",
          "surface": 42.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 9
        },
        {
          "name": "eupld",
          "programId": "0400000000000030",
          "surface": 39.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 18
        },
        {
          "name": "pcv",
          "programId": "040000000000001a",
          "surface": 38.3,
          "focus": false,
          "hostCount": 3,
          "useCount": 5
        },
        {
          "name": "gc",
          "programId": "0400000000000062",
          "surface": 35.0,
          "focus": false,
          "hostCount": 0,
          "useCount": 9
        },
        {
          "name": "LogManager.Prod",
          "programId": "0400000000000015",
          "surface": 23.5,
          "focus": false,
          "hostCount": 1,
          "useCount": 1
        }
      ]
    },
    {
      "name": "fsp-srv",
      "services": [
        "fsp-srv"
      ],
      "serviceCount": 1,
      "hostCount": 0,
      "useCount": 34,
      "totalCount": 34,
      "keyCount": 1,
      "key": true,
      "noHostCount": 1,
      "noHost": true,
      "likelyBuiltin": true,
      "note": "Filesystem broker; no host in this dump (built-in fs).",
      "hosts": [],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        },
        {
          "name": "camera.autogen",
          "programId": "0400000000000070",
          "surface": 43.2,
          "focus": true,
          "hostCount": 3,
          "useCount": 13
        },
        {
          "name": "imf",
          "programId": "0400000000000047",
          "surface": 35.8,
          "focus": true,
          "hostCount": 3,
          "useCount": 4
        },
        {
          "name": "speech",
          "programId": "0400000000000088",
          "surface": 28.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 2
        },
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        },
        {
          "name": "bsdsocket",
          "programId": "0400000000000012",
          "surface": 61.3,
          "focus": false,
          "hostCount": 9,
          "useCount": 11
        },
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        },
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        },
        {
          "name": "bluetooth.gen2",
          "programId": "040000000000000b",
          "surface": 54.3,
          "focus": false,
          "hostCount": 7,
          "useCount": 14
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        },
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        },
        {
          "name": "sdb",
          "programId": "0400000000000039",
          "surface": 51.4,
          "focus": false,
          "hostCount": 7,
          "useCount": 12
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        },
        {
          "name": "nfc",
          "programId": "0400000000000020",
          "surface": 49.8,
          "focus": false,
          "hostCount": 7,
          "useCount": 10
        },
        {
          "name": "wlan.autogen",
          "programId": "0400000000000016",
          "surface": 48.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 12
        },
        {
          "name": "capsrv",
          "programId": "0400000000000022",
          "surface": 46.5,
          "focus": false,
          "hostCount": 5,
          "useCount": 12
        },
        {
          "name": "npns",
          "programId": "040000000000002f",
          "surface": 45.7,
          "focus": false,
          "hostCount": 3,
          "useCount": 16
        },
        {
          "name": "erpt",
          "programId": "040000000000002b",
          "surface": 42.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 9
        },
        {
          "name": "eclct",
          "programId": "0400000000000032",
          "surface": 39.1,
          "focus": false,
          "hostCount": 0,
          "useCount": 21
        },
        {
          "name": "es",
          "programId": "0400000000000033",
          "surface": 39.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 9
        },
        {
          "name": "fatal",
          "programId": "0400000000000034",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        },
        {
          "name": "ssl",
          "programId": "0400000000000024",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        },
        {
          "name": "settings",
          "programId": "0400000000000009",
          "surface": 36.6,
          "focus": false,
          "hostCount": 4,
          "useCount": 3
        },
        {
          "name": "ngc",
          "programId": "0400000000000050",
          "surface": 31.7,
          "focus": false,
          "hostCount": 2,
          "useCount": 3
        },
        {
          "name": "pgl",
          "programId": "0400000000000042",
          "surface": 31.7,
          "focus": false,
          "hostCount": 1,
          "useCount": 6
        },
        {
          "name": "boot2.ProdBoot",
          "programId": "0400000000000008",
          "surface": 30.9,
          "focus": false,
          "hostCount": 0,
          "useCount": 8
        }
      ]
    },
    {
      "name": "time",
      "services": [
        "time:a",
        "time:al",
        "time:m",
        "time:p",
        "time:r",
        "time:s",
        "time:su",
        "time:u"
      ],
      "serviceCount": 8,
      "hostCount": 2,
      "useCount": 25,
      "totalCount": 27,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        },
        {
          "name": "psc",
          "programId": "0400000000000021",
          "surface": 71.2,
          "focus": false,
          "hostCount": 17,
          "useCount": 4
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        },
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        },
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        },
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        },
        {
          "name": "bsdsocket",
          "programId": "0400000000000012",
          "surface": 61.3,
          "focus": false,
          "hostCount": 9,
          "useCount": 11
        },
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        },
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "usb.gen2",
          "programId": "0400000000000006",
          "surface": 53.9,
          "focus": false,
          "hostCount": 5,
          "useCount": 11
        },
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        },
        {
          "name": "sdb",
          "programId": "0400000000000039",
          "surface": 51.4,
          "focus": false,
          "hostCount": 7,
          "useCount": 12
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        },
        {
          "name": "nfc",
          "programId": "0400000000000020",
          "surface": 49.8,
          "focus": false,
          "hostCount": 7,
          "useCount": 10
        },
        {
          "name": "capsrv",
          "programId": "0400000000000022",
          "surface": 46.5,
          "focus": false,
          "hostCount": 5,
          "useCount": 12
        },
        {
          "name": "erpt",
          "programId": "040000000000002b",
          "surface": 42.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 9
        },
        {
          "name": "eclct",
          "programId": "0400000000000032",
          "surface": 39.1,
          "focus": false,
          "hostCount": 0,
          "useCount": 21
        },
        {
          "name": "es",
          "programId": "0400000000000033",
          "surface": 39.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 9
        },
        {
          "name": "ssl",
          "programId": "0400000000000024",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        },
        {
          "name": "grc",
          "programId": "0400000000000035",
          "surface": 32.5,
          "focus": false,
          "hostCount": 2,
          "useCount": 8
        },
        {
          "name": "capsrv2",
          "programId": "0400000000000071",
          "surface": 30.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 6
        }
      ]
    },
    {
      "name": "erpt",
      "services": [
        "erpt:c",
        "erpt:r"
      ],
      "serviceCount": 2,
      "hostCount": 1,
      "useCount": 21,
      "totalCount": 22,
      "keyCount": 1,
      "key": true,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "Error report services; erpt:c is used by 21 modules.",
      "hosts": [
        {
          "name": "erpt",
          "programId": "040000000000002b",
          "surface": 42.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 9
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        },
        {
          "name": "nvservices",
          "programId": "0400000000000019",
          "surface": 64.2,
          "focus": true,
          "hostCount": 6,
          "useCount": 9
        },
        {
          "name": "camera.autogen",
          "programId": "0400000000000070",
          "surface": 43.2,
          "focus": true,
          "hostCount": 3,
          "useCount": 13
        },
        {
          "name": "creport",
          "programId": "0400000000000036",
          "surface": 28.4,
          "focus": true,
          "hostCount": 0,
          "useCount": 5
        },
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        },
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        },
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        },
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        },
        {
          "name": "bluetooth.gen2",
          "programId": "040000000000000b",
          "surface": 54.3,
          "focus": false,
          "hostCount": 7,
          "useCount": 14
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        },
        {
          "name": "wlan.autogen",
          "programId": "0400000000000016",
          "surface": 48.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 12
        },
        {
          "name": "eupld",
          "programId": "0400000000000030",
          "surface": 39.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 18
        },
        {
          "name": "eclct",
          "programId": "0400000000000032",
          "surface": 39.1,
          "focus": false,
          "hostCount": 0,
          "useCount": 21
        },
        {
          "name": "fatal",
          "programId": "0400000000000034",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        },
        {
          "name": "ssl",
          "programId": "0400000000000024",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        }
      ]
    },
    {
      "name": "arp",
      "services": [
        "arp:r",
        "arp:w"
      ],
      "serviceCount": 2,
      "hostCount": 1,
      "useCount": 18,
      "totalCount": 19,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "lrp",
          "programId": "040000000000004d",
          "surface": 48.1,
          "focus": true,
          "hostCount": 5,
          "useCount": 18
        },
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        },
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        },
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        },
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        },
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        },
        {
          "name": "sdb",
          "programId": "0400000000000039",
          "surface": 51.4,
          "focus": false,
          "hostCount": 7,
          "useCount": 12
        },
        {
          "name": "nfc",
          "programId": "0400000000000020",
          "surface": 49.8,
          "focus": false,
          "hostCount": 7,
          "useCount": 10
        },
        {
          "name": "ldn",
          "programId": "0400000000000018",
          "surface": 45.7,
          "focus": false,
          "hostCount": 6,
          "useCount": 13
        },
        {
          "name": "npns",
          "programId": "040000000000002f",
          "surface": 45.7,
          "focus": false,
          "hostCount": 3,
          "useCount": 16
        },
        {
          "name": "ssl",
          "programId": "0400000000000024",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        }
      ]
    },
    {
      "name": "spl",
      "services": [
        "spl:",
        "spl:da",
        "spl:es",
        "spl:gc",
        "spl:ldn",
        "spl:lrp",
        "spl:mig",
        "spl:nv",
        "spl:ssl"
      ],
      "serviceCount": 9,
      "hostCount": 0,
      "useCount": 16,
      "totalCount": 16,
      "keyCount": 3,
      "key": true,
      "noHostCount": 9,
      "noHost": true,
      "likelyBuiltin": true,
      "note": "Security/SPL services; no hosts in this dump (built-in spl).",
      "hosts": [],
      "users": [
        {
          "name": "lrp",
          "programId": "040000000000004d",
          "surface": 48.1,
          "focus": true,
          "hostCount": 5,
          "useCount": 18
        },
        {
          "name": "host1x",
          "programId": "0400000000000065",
          "surface": 37.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 5
        },
        {
          "name": "sdcard",
          "programId": "0400000000000089",
          "surface": 36.2,
          "focus": true,
          "hostCount": 0,
          "useCount": 9
        },
        {
          "name": "tsec.autogen",
          "programId": "040000000000008d",
          "surface": 35.8,
          "focus": true,
          "hostCount": 1,
          "useCount": 6
        },
        {
          "name": "ro",
          "programId": "0400000000000037",
          "surface": 32.5,
          "focus": true,
          "hostCount": 3,
          "useCount": 3
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        },
        {
          "name": "nfc",
          "programId": "0400000000000020",
          "surface": 49.8,
          "focus": false,
          "hostCount": 7,
          "useCount": 10
        },
        {
          "name": "capsrv",
          "programId": "0400000000000022",
          "surface": 46.5,
          "focus": false,
          "hostCount": 5,
          "useCount": 12
        },
        {
          "name": "ldn",
          "programId": "0400000000000018",
          "surface": 45.7,
          "focus": false,
          "hostCount": 6,
          "useCount": 13
        },
        {
          "name": "es",
          "programId": "0400000000000033",
          "surface": 39.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 9
        },
        {
          "name": "ssl",
          "programId": "0400000000000024",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        },
        {
          "name": "settings",
          "programId": "0400000000000009",
          "surface": 36.6,
          "focus": false,
          "hostCount": 4,
          "useCount": 3
        },
        {
          "name": "gc",
          "programId": "0400000000000062",
          "surface": 35.0,
          "focus": false,
          "hostCount": 0,
          "useCount": 9
        }
      ]
    },
    {
      "name": "bsd",
      "services": [
        "bsd:a",
        "bsd:nu",
        "bsd:s",
        "bsd:u"
      ],
      "serviceCount": 4,
      "hostCount": 1,
      "useCount": 15,
      "totalCount": 16,
      "keyCount": 1,
      "key": true,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "BSD socket services; bsd:s is hosted by bsdsocket (15 users).",
      "hosts": [
        {
          "name": "bsdsocket",
          "programId": "0400000000000012",
          "surface": 61.3,
          "focus": false,
          "hostCount": 9,
          "useCount": 11
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "lrp",
          "programId": "040000000000004d",
          "surface": 48.1,
          "focus": true,
          "hostCount": 5,
          "useCount": 18
        },
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        },
        {
          "name": "bsdsocket",
          "programId": "0400000000000012",
          "surface": 61.3,
          "focus": false,
          "hostCount": 9,
          "useCount": 11
        },
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        },
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        },
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        },
        {
          "name": "ldn",
          "programId": "0400000000000018",
          "surface": 45.7,
          "focus": false,
          "hostCount": 6,
          "useCount": 13
        },
        {
          "name": "npns",
          "programId": "040000000000002f",
          "surface": 45.7,
          "focus": false,
          "hostCount": 3,
          "useCount": 16
        },
        {
          "name": "eupld",
          "programId": "0400000000000030",
          "surface": 39.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 18
        },
        {
          "name": "ssl",
          "programId": "0400000000000024",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        }
      ]
    },
    {
      "name": "pm",
      "services": [
        "pm:bm",
        "pm:info",
        "pm:shell"
      ],
      "serviceCount": 3,
      "hostCount": 0,
      "useCount": 15,
      "totalCount": 15,
      "keyCount": 3,
      "key": true,
      "noHostCount": 3,
      "noHost": true,
      "likelyBuiltin": true,
      "note": "Process manager services; no hosts in this dump (built-in pm).",
      "hosts": [],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        },
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        },
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        },
        {
          "name": "bluetooth.gen2",
          "programId": "040000000000000b",
          "surface": 54.3,
          "focus": false,
          "hostCount": 7,
          "useCount": 14
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "sdb",
          "programId": "0400000000000039",
          "surface": 51.4,
          "focus": false,
          "hostCount": 7,
          "useCount": 12
        },
        {
          "name": "npns",
          "programId": "040000000000002f",
          "surface": 45.7,
          "focus": false,
          "hostCount": 3,
          "useCount": 16
        },
        {
          "name": "eupld",
          "programId": "0400000000000030",
          "surface": 39.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 18
        },
        {
          "name": "eclct",
          "programId": "0400000000000032",
          "surface": 39.1,
          "focus": false,
          "hostCount": 0,
          "useCount": 21
        },
        {
          "name": "fatal",
          "programId": "0400000000000034",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        },
        {
          "name": "pgl",
          "programId": "0400000000000042",
          "surface": 31.7,
          "focus": false,
          "hostCount": 1,
          "useCount": 6
        },
        {
          "name": "boot2.ProdBoot",
          "programId": "0400000000000008",
          "surface": 30.9,
          "focus": false,
          "hostCount": 0,
          "useCount": 8
        }
      ]
    },
    {
      "name": "acc",
      "services": [
        "acc:aa",
        "acc:e",
        "acc:e:su",
        "acc:e:u1",
        "acc:e:u2",
        "acc:su",
        "acc:u0",
        "acc:u1"
      ],
      "serviceCount": 8,
      "hostCount": 2,
      "useCount": 14,
      "totalCount": 16,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "lrp",
          "programId": "040000000000004d",
          "surface": 48.1,
          "focus": true,
          "hostCount": 5,
          "useCount": 18
        },
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        },
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        },
        {
          "name": "sdb",
          "programId": "0400000000000039",
          "surface": 51.4,
          "focus": false,
          "hostCount": 7,
          "useCount": 12
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        },
        {
          "name": "capsrv",
          "programId": "0400000000000022",
          "surface": 46.5,
          "focus": false,
          "hostCount": 5,
          "useCount": 12
        },
        {
          "name": "eupld",
          "programId": "0400000000000030",
          "surface": 39.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 18
        },
        {
          "name": "eclct",
          "programId": "0400000000000032",
          "surface": 39.1,
          "focus": false,
          "hostCount": 0,
          "useCount": 21
        }
      ]
    },
    {
      "name": "nifm",
      "services": [
        "nifm:a",
        "nifm:s",
        "nifm:u"
      ],
      "serviceCount": 3,
      "hostCount": 1,
      "useCount": 14,
      "totalCount": 15,
      "keyCount": 1,
      "key": true,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "Network interface manager; nifm:s is used by 13 modules.",
      "hosts": [
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        },
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        },
        {
          "name": "ldn",
          "programId": "0400000000000018",
          "surface": 45.7,
          "focus": false,
          "hostCount": 6,
          "useCount": 13
        },
        {
          "name": "npns",
          "programId": "040000000000002f",
          "surface": 45.7,
          "focus": false,
          "hostCount": 3,
          "useCount": 16
        },
        {
          "name": "eupld",
          "programId": "0400000000000030",
          "surface": 39.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 18
        },
        {
          "name": "eclct",
          "programId": "0400000000000032",
          "surface": 39.1,
          "focus": false,
          "hostCount": 0,
          "useCount": 21
        }
      ]
    },
    {
      "name": "nsd",
      "services": [
        "nsd:a",
        "nsd:u"
      ],
      "serviceCount": 2,
      "hostCount": 1,
      "useCount": 14,
      "totalCount": 15,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "bsdsocket",
          "programId": "0400000000000012",
          "surface": 61.3,
          "focus": false,
          "hostCount": 9,
          "useCount": 11
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        },
        {
          "name": "bsdsocket",
          "programId": "0400000000000012",
          "surface": 61.3,
          "focus": false,
          "hostCount": 9,
          "useCount": 11
        },
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        },
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        },
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        },
        {
          "name": "npns",
          "programId": "040000000000002f",
          "surface": 45.7,
          "focus": false,
          "hostCount": 3,
          "useCount": 16
        },
        {
          "name": "eupld",
          "programId": "0400000000000030",
          "surface": 39.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 18
        },
        {
          "name": "ssl",
          "programId": "0400000000000024",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        }
      ]
    },
    {
      "name": "ovln",
      "services": [
        "ovln:rcv",
        "ovln:snd"
      ],
      "serviceCount": 2,
      "hostCount": 1,
      "useCount": 14,
      "totalCount": 15,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "psc",
          "programId": "0400000000000021",
          "surface": 71.2,
          "focus": false,
          "hostCount": 17,
          "useCount": 4
        }
      ],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "camera.autogen",
          "programId": "0400000000000070",
          "surface": 43.2,
          "focus": true,
          "hostCount": 3,
          "useCount": 13
        },
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        },
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        {
          "name": "psc",
          "programId": "0400000000000021",
          "surface": 71.2,
          "focus": false,
          "hostCount": 17,
          "useCount": 4
        },
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        },
        {
          "name": "bluetooth.gen2",
          "programId": "040000000000000b",
          "surface": 54.3,
          "focus": false,
          "hostCount": 7,
          "useCount": 14
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        },
        {
          "name": "capsrv",
          "programId": "0400000000000022",
          "surface": 46.5,
          "focus": false,
          "hostCount": 5,
          "useCount": 12
        },
        {
          "name": "grc",
          "programId": "0400000000000035",
          "surface": 32.5,
          "focus": false,
          "hostCount": 2,
          "useCount": 8
        }
      ]
    },
    {
      "name": "gpio",
      "services": [
        "gpio",
        "gpio:emu"
      ],
      "serviceCount": 2,
      "hostCount": 1,
      "useCount": 13,
      "totalCount": 14,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "Bus",
          "programId": "040000000000000a",
          "surface": 70.0,
          "focus": true,
          "hostCount": 9,
          "useCount": 6
        }
      ],
      "users": [
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        },
        {
          "name": "pcie",
          "programId": "040000000000001d",
          "surface": 51.4,
          "focus": true,
          "hostCount": 2,
          "useCount": 8
        },
        {
          "name": "sdcard",
          "programId": "0400000000000089",
          "surface": 36.2,
          "focus": true,
          "hostCount": 0,
          "useCount": 9
        },
        {
          "name": "eth",
          "programId": "0400000000000046",
          "surface": 28.0,
          "focus": true,
          "hostCount": 1,
          "useCount": 6
        },
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        },
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        },
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        },
        {
          "name": "bluetooth.gen2",
          "programId": "040000000000000b",
          "surface": 54.3,
          "focus": false,
          "hostCount": 7,
          "useCount": 14
        },
        {
          "name": "usb.gen2",
          "programId": "0400000000000006",
          "surface": 53.9,
          "focus": false,
          "hostCount": 5,
          "useCount": 11
        },
        {
          "name": "wlan.autogen",
          "programId": "0400000000000016",
          "surface": 48.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 12
        },
        {
          "name": "gc",
          "programId": "0400000000000062",
          "surface": 35.0,
          "focus": false,
          "hostCount": 0,
          "useCount": 9
        },
        {
          "name": "boot2.ProdBoot",
          "programId": "0400000000000008",
          "surface": 30.9,
          "focus": false,
          "hostCount": 0,
          "useCount": 8
        }
      ]
    },
    {
      "name": "clkrst",
      "services": [
        "clkrst"
      ],
      "serviceCount": 1,
      "hostCount": 0,
      "useCount": 13,
      "totalCount": 13,
      "keyCount": 0,
      "key": false,
      "noHostCount": 1,
      "noHost": true,
      "likelyBuiltin": true,
      "note": "Clock/reset service; no host in this dump (likely built-in).",
      "hosts": [],
      "users": [
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        },
        {
          "name": "Bus",
          "programId": "040000000000000a",
          "surface": 70.0,
          "focus": true,
          "hostCount": 9,
          "useCount": 6
        },
        {
          "name": "nvservices",
          "programId": "0400000000000019",
          "surface": 64.2,
          "focus": true,
          "hostCount": 6,
          "useCount": 9
        },
        {
          "name": "pcie",
          "programId": "040000000000001d",
          "surface": 51.4,
          "focus": true,
          "hostCount": 2,
          "useCount": 8
        },
        {
          "name": "host1x",
          "programId": "0400000000000065",
          "surface": 37.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 5
        },
        {
          "name": "sdcard",
          "programId": "0400000000000089",
          "surface": 36.2,
          "focus": true,
          "hostCount": 0,
          "useCount": 9
        },
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        },
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        },
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        {
          "name": "usb.gen2",
          "programId": "0400000000000006",
          "surface": 53.9,
          "focus": false,
          "hostCount": 5,
          "useCount": 11
        },
        {
          "name": "eclct",
          "programId": "0400000000000032",
          "surface": 39.1,
          "focus": false,
          "hostCount": 0,
          "useCount": 21
        },
        {
          "name": "fatal",
          "programId": "0400000000000034",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        },
        {
          "name": "gc",
          "programId": "0400000000000062",
          "surface": 35.0,
          "focus": false,
          "hostCount": 0,
          "useCount": 9
        }
      ]
    },
    {
      "name": "bgtc",
      "services": [
        "bgtc:sc",
        "bgtc:t"
      ],
      "serviceCount": 2,
      "hostCount": 1,
      "useCount": 12,
      "totalCount": 13,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        }
      ],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        },
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        },
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        },
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        },
        {
          "name": "npns",
          "programId": "040000000000002f",
          "surface": 45.7,
          "focus": false,
          "hostCount": 3,
          "useCount": 16
        },
        {
          "name": "eupld",
          "programId": "0400000000000030",
          "surface": 39.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 18
        },
        {
          "name": "eclct",
          "programId": "0400000000000032",
          "surface": 39.1,
          "focus": false,
          "hostCount": 0,
          "useCount": 21
        }
      ]
    },
    {
      "name": "sfdnsres",
      "services": [
        "sfdnsres"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 12,
      "totalCount": 13,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "bsdsocket",
          "programId": "0400000000000012",
          "surface": 61.3,
          "focus": false,
          "hostCount": 9,
          "useCount": 11
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "lrp",
          "programId": "040000000000004d",
          "surface": 48.1,
          "focus": true,
          "hostCount": 5,
          "useCount": 18
        },
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        },
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        },
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        },
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        },
        {
          "name": "npns",
          "programId": "040000000000002f",
          "surface": 45.7,
          "focus": false,
          "hostCount": 3,
          "useCount": 16
        },
        {
          "name": "eupld",
          "programId": "0400000000000030",
          "surface": 39.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 18
        }
      ]
    },
    {
      "name": "ssl",
      "services": [
        "ssl",
        "ssl:s"
      ],
      "serviceCount": 2,
      "hostCount": 1,
      "useCount": 12,
      "totalCount": 13,
      "keyCount": 1,
      "key": true,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "SSL services; ssl:s is used by 12 modules.",
      "hosts": [
        {
          "name": "ssl",
          "programId": "0400000000000024",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        },
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        },
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        },
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        },
        {
          "name": "npns",
          "programId": "040000000000002f",
          "surface": 45.7,
          "focus": false,
          "hostCount": 3,
          "useCount": 16
        },
        {
          "name": "eupld",
          "programId": "0400000000000030",
          "surface": 39.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 18
        },
        {
          "name": "es",
          "programId": "0400000000000033",
          "surface": 39.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 9
        }
      ]
    },
    {
      "name": "dt",
      "services": [
        "dt"
      ],
      "serviceCount": 1,
      "hostCount": 0,
      "useCount": 12,
      "totalCount": 12,
      "keyCount": 0,
      "key": false,
      "noHostCount": 1,
      "noHost": true,
      "likelyBuiltin": true,
      "note": "Device tree service; no host in this dump (likely built-in).",
      "hosts": [],
      "users": [
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        },
        {
          "name": "Bus",
          "programId": "040000000000000a",
          "surface": 70.0,
          "focus": true,
          "hostCount": 9,
          "useCount": 6
        },
        {
          "name": "pcie",
          "programId": "040000000000001d",
          "surface": 51.4,
          "focus": true,
          "hostCount": 2,
          "useCount": 8
        },
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        },
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        },
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        {
          "name": "bluetooth.gen2",
          "programId": "040000000000000b",
          "surface": 54.3,
          "focus": false,
          "hostCount": 7,
          "useCount": 14
        },
        {
          "name": "usb.gen2",
          "programId": "0400000000000006",
          "surface": 53.9,
          "focus": false,
          "hostCount": 5,
          "useCount": 11
        },
        {
          "name": "wlan.autogen",
          "programId": "0400000000000016",
          "surface": 48.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 12
        },
        {
          "name": "fatal",
          "programId": "0400000000000034",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        },
        {
          "name": "pcv",
          "programId": "040000000000001a",
          "surface": 38.3,
          "focus": false,
          "hostCount": 3,
          "useCount": 5
        },
        {
          "name": "gc",
          "programId": "0400000000000062",
          "surface": 35.0,
          "focus": false,
          "hostCount": 0,
          "useCount": 9
        }
      ]
    },
    {
      "name": "dauth",
      "services": [
        "dauth:0"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 11,
      "totalCount": 12,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        },
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "sdb",
          "programId": "0400000000000039",
          "surface": 51.4,
          "focus": false,
          "hostCount": 7,
          "useCount": 12
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        },
        {
          "name": "npns",
          "programId": "040000000000002f",
          "surface": 45.7,
          "focus": false,
          "hostCount": 3,
          "useCount": 16
        },
        {
          "name": "eupld",
          "programId": "0400000000000030",
          "surface": 39.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 18
        },
        {
          "name": "eclct",
          "programId": "0400000000000032",
          "surface": 39.1,
          "focus": false,
          "hostCount": 0,
          "useCount": 21
        }
      ]
    },
    {
      "name": "hid",
      "services": [
        "hid",
        "hid:dbg",
        "hid:sys"
      ],
      "serviceCount": 3,
      "hostCount": 1,
      "useCount": 9,
      "totalCount": 10,
      "keyCount": 1,
      "key": true,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "HID services; hid:sys is used by 9 modules.",
      "hosts": [
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "lrp",
          "programId": "040000000000004d",
          "surface": 48.1,
          "focus": true,
          "hostCount": 5,
          "useCount": 18
        },
        {
          "name": "imf",
          "programId": "0400000000000047",
          "surface": 35.8,
          "focus": true,
          "hostCount": 3,
          "useCount": 4
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        },
        {
          "name": "nfc",
          "programId": "0400000000000020",
          "surface": 49.8,
          "focus": false,
          "hostCount": 7,
          "useCount": 10
        }
      ]
    },
    {
      "name": "usb",
      "services": [
        "usb:dock",
        "usb:ds",
        "usb:hs",
        "usb:obsv",
        "usb:pm"
      ],
      "serviceCount": 5,
      "hostCount": 1,
      "useCount": 9,
      "totalCount": 10,
      "keyCount": 1,
      "key": true,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "USB services; hosted by usb.gen2.",
      "hosts": [
        {
          "name": "usb.gen2",
          "programId": "0400000000000006",
          "surface": 53.9,
          "focus": false,
          "hostCount": 5,
          "useCount": 11
        }
      ],
      "users": [
        {
          "name": "camera.autogen",
          "programId": "0400000000000070",
          "surface": 43.2,
          "focus": true,
          "hostCount": 3,
          "useCount": 13
        },
        {
          "name": "eth",
          "programId": "0400000000000046",
          "surface": 28.0,
          "focus": true,
          "hostCount": 1,
          "useCount": 6
        },
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        },
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        },
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        },
        {
          "name": "bluetooth.gen2",
          "programId": "040000000000000b",
          "surface": 54.3,
          "focus": false,
          "hostCount": 7,
          "useCount": 14
        },
        {
          "name": "eclct",
          "programId": "0400000000000032",
          "surface": 39.1,
          "focus": false,
          "hostCount": 0,
          "useCount": 21
        },
        {
          "name": "capmtp",
          "programId": "040000000000001b",
          "surface": 27.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 5
        }
      ]
    },
    {
      "name": "npns",
      "services": [
        "npns:a",
        "npns:s",
        "npns:u"
      ],
      "serviceCount": 3,
      "hostCount": 1,
      "useCount": 8,
      "totalCount": 9,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "npns",
          "programId": "040000000000002f",
          "surface": 45.7,
          "focus": false,
          "hostCount": 3,
          "useCount": 16
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        },
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        }
      ]
    },
    {
      "name": "vi2",
      "services": [
        "vi2:m1",
        "vi2:m2",
        "vi2:nv",
        "vi2:v"
      ],
      "serviceCount": 4,
      "hostCount": 1,
      "useCount": 8,
      "totalCount": 9,
      "keyCount": 1,
      "key": true,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "Display services; hosted by vi2.autogen.",
      "hosts": [
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "gsv3",
          "programId": "0400000000000083",
          "surface": 44.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 12
        },
        {
          "name": "gsv1",
          "programId": "0400000000000081",
          "surface": 43.6,
          "focus": true,
          "hostCount": 0,
          "useCount": 12
        },
        {
          "name": "gsv4",
          "programId": "0400000000000084",
          "surface": 42.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 10
        },
        {
          "name": "adraw",
          "programId": "0400000000000072",
          "surface": 33.3,
          "focus": true,
          "hostCount": 2,
          "useCount": 5
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        },
        {
          "name": "fatal",
          "programId": "0400000000000034",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        }
      ]
    },
    {
      "name": "caps",
      "services": [
        "caps:a",
        "caps:c",
        "caps:dc",
        "caps:sc",
        "caps:ss",
        "caps:su",
        "caps:u"
      ],
      "serviceCount": 7,
      "hostCount": 3,
      "useCount": 7,
      "totalCount": 10,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "capsrv",
          "programId": "0400000000000022",
          "surface": 46.5,
          "focus": false,
          "hostCount": 5,
          "useCount": 12
        },
        {
          "name": "jpegdec",
          "programId": "040000000000003c",
          "surface": 24.3,
          "focus": false,
          "hostCount": 1,
          "useCount": 2
        }
      ],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        },
        {
          "name": "capsrv",
          "programId": "0400000000000022",
          "surface": 46.5,
          "focus": false,
          "hostCount": 5,
          "useCount": 12
        },
        {
          "name": "grc",
          "programId": "0400000000000035",
          "surface": 32.5,
          "focus": false,
          "hostCount": 2,
          "useCount": 8
        },
        {
          "name": "capmtp",
          "programId": "040000000000001b",
          "surface": 27.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 5
        }
      ]
    },
    {
      "name": "gsv",
      "services": [
        "gsv:m",
        "gsv:s3",
        "gsv:s4",
        "gsv:sv",
        "gsv:t"
      ],
      "serviceCount": 5,
      "hostCount": 3,
      "useCount": 7,
      "totalCount": 10,
      "keyCount": 2,
      "key": true,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "OpenMAX codec services; hosted by gsv1, gsv3, gsv4, and gsvm.",
      "hosts": [
        {
          "name": "gsv3",
          "programId": "0400000000000083",
          "surface": 44.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 12
        },
        {
          "name": "gsv4",
          "programId": "0400000000000084",
          "surface": 42.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 10
        },
        {
          "name": "gsvm",
          "programId": "0400000000000080",
          "surface": 29.2,
          "focus": true,
          "hostCount": 3,
          "useCount": 2
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "lrp",
          "programId": "040000000000004d",
          "surface": 48.1,
          "focus": true,
          "hostCount": 5,
          "useCount": 18
        },
        {
          "name": "gsv3",
          "programId": "0400000000000083",
          "surface": 44.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 12
        },
        {
          "name": "gsv1",
          "programId": "0400000000000081",
          "surface": 43.6,
          "focus": true,
          "hostCount": 0,
          "useCount": 12
        },
        {
          "name": "adraw",
          "programId": "0400000000000072",
          "surface": 33.3,
          "focus": true,
          "hostCount": 2,
          "useCount": 5
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "capsrv2",
          "programId": "0400000000000071",
          "surface": 30.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 6
        }
      ]
    },
    {
      "name": "bt",
      "services": [
        "bt",
        "bt:dbg",
        "bt:sys",
        "bt:u"
      ],
      "serviceCount": 4,
      "hostCount": 1,
      "useCount": 7,
      "totalCount": 8,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "bluetooth.gen2",
          "programId": "040000000000000b",
          "surface": 54.3,
          "focus": false,
          "hostCount": 7,
          "useCount": 14
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        },
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        },
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        },
        {
          "name": "ldn",
          "programId": "0400000000000018",
          "surface": 45.7,
          "focus": false,
          "hostCount": 6,
          "useCount": 13
        }
      ]
    },
    {
      "name": "i2c",
      "services": [
        "i2c"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 7,
      "totalCount": 8,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "Bus",
          "programId": "040000000000000a",
          "surface": 70.0,
          "focus": true,
          "hostCount": 9,
          "useCount": 6
        }
      ],
      "users": [
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        },
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        },
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        },
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        {
          "name": "usb.gen2",
          "programId": "0400000000000006",
          "surface": 53.9,
          "focus": false,
          "hostCount": 5,
          "useCount": 11
        },
        {
          "name": "fatal",
          "programId": "0400000000000034",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        },
        {
          "name": "pcv",
          "programId": "040000000000001a",
          "surface": 38.3,
          "focus": false,
          "hostCount": 3,
          "useCount": 5
        }
      ]
    },
    {
      "name": "ins",
      "services": [
        "ins:r",
        "ins:s"
      ],
      "serviceCount": 2,
      "hostCount": 1,
      "useCount": 7,
      "totalCount": 8,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "psc",
          "programId": "0400000000000021",
          "surface": 71.2,
          "focus": false,
          "hostCount": 17,
          "useCount": 4
        }
      ],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        },
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        },
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        },
        {
          "name": "usb.gen2",
          "programId": "0400000000000006",
          "surface": 53.9,
          "focus": false,
          "hostCount": 5,
          "useCount": 11
        }
      ]
    },
    {
      "name": "host1x",
      "services": [
        "host1x"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 6,
      "totalCount": 7,
      "keyCount": 1,
      "key": true,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "Host1x channel manager; 6 users.",
      "hosts": [
        {
          "name": "host1x",
          "programId": "0400000000000065",
          "surface": 37.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 5
        }
      ],
      "users": [
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        },
        {
          "name": "nvservices",
          "programId": "0400000000000019",
          "surface": 64.2,
          "focus": true,
          "hostCount": 6,
          "useCount": 9
        },
        {
          "name": "gsv3",
          "programId": "0400000000000083",
          "surface": 44.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 12
        },
        {
          "name": "gsv1",
          "programId": "0400000000000081",
          "surface": 43.6,
          "focus": true,
          "hostCount": 0,
          "useCount": 12
        },
        {
          "name": "gsv4",
          "programId": "0400000000000084",
          "surface": 42.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 10
        },
        {
          "name": "tsec.autogen",
          "programId": "040000000000008d",
          "surface": 35.8,
          "focus": true,
          "hostCount": 1,
          "useCount": 6
        }
      ]
    },
    {
      "name": "hshl",
      "services": [
        "hshl:set",
        "hshl:sys"
      ],
      "serviceCount": 2,
      "hostCount": 1,
      "useCount": 6,
      "totalCount": 7,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "psc",
          "programId": "0400000000000021",
          "surface": 71.2,
          "focus": false,
          "hostCount": 17,
          "useCount": 4
        }
      ],
      "users": [
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        },
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        },
        {
          "name": "bluetooth.gen2",
          "programId": "040000000000000b",
          "surface": 54.3,
          "focus": false,
          "hostCount": 7,
          "useCount": 14
        },
        {
          "name": "usb.gen2",
          "programId": "0400000000000006",
          "surface": 53.9,
          "focus": false,
          "hostCount": 5,
          "useCount": 11
        }
      ]
    },
    {
      "name": "ns",
      "services": [
        "ns:am2",
        "ns:dev",
        "ns:ec",
        "ns:rid",
        "ns:ro",
        "ns:rt",
        "ns:su",
        "ns:sweb",
        "ns:vm",
        "ns:web"
      ],
      "serviceCount": 10,
      "hostCount": 1,
      "useCount": 6,
      "totalCount": 7,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "lrp",
          "programId": "040000000000004d",
          "surface": 48.1,
          "focus": true,
          "hostCount": 5,
          "useCount": 18
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        },
        {
          "name": "capmtp",
          "programId": "040000000000001b",
          "surface": 27.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 5
        }
      ]
    },
    {
      "name": "nvdrv",
      "services": [
        "nvdrv:s",
        "nvdrv:t",
        "nvdrv:v"
      ],
      "serviceCount": 3,
      "hostCount": 1,
      "useCount": 6,
      "totalCount": 7,
      "keyCount": 1,
      "key": true,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "NVIDIA driver services; nvdrv:s is hosted by nvservices (6 users).",
      "hosts": [
        {
          "name": "nvservices",
          "programId": "0400000000000019",
          "surface": 64.2,
          "focus": true,
          "hostCount": 6,
          "useCount": 9
        }
      ],
      "users": [
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        },
        {
          "name": "gsv3",
          "programId": "0400000000000083",
          "surface": 44.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 12
        },
        {
          "name": "gsv1",
          "programId": "0400000000000081",
          "surface": 43.6,
          "focus": true,
          "hostCount": 0,
          "useCount": 12
        },
        {
          "name": "camera.autogen",
          "programId": "0400000000000070",
          "surface": 43.2,
          "focus": true,
          "hostCount": 3,
          "useCount": 13
        },
        {
          "name": "gsv4",
          "programId": "0400000000000084",
          "surface": 42.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 10
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        }
      ]
    },
    {
      "name": "pdm",
      "services": [
        "pdm:ntfy",
        "pdm:qry"
      ],
      "serviceCount": 2,
      "hostCount": 1,
      "useCount": 6,
      "totalCount": 7,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "sdb",
          "programId": "0400000000000039",
          "surface": 51.4,
          "focus": false,
          "hostCount": 7,
          "useCount": 12
        }
      ],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        },
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        },
        {
          "name": "eupld",
          "programId": "0400000000000030",
          "surface": 39.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 18
        }
      ]
    },
    {
      "name": "csrng",
      "services": [
        "csrng"
      ],
      "serviceCount": 1,
      "hostCount": 0,
      "useCount": 6,
      "totalCount": 6,
      "keyCount": 0,
      "key": false,
      "noHostCount": 1,
      "noHost": true,
      "likelyBuiltin": true,
      "note": "Randomness service; no host in this dump (likely built-in).",
      "hosts": [],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "creport",
          "programId": "0400000000000036",
          "surface": 28.4,
          "focus": true,
          "hostCount": 0,
          "useCount": 5
        },
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        },
        {
          "name": "wlan.autogen",
          "programId": "0400000000000016",
          "surface": 48.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 12
        },
        {
          "name": "erpt",
          "programId": "040000000000002b",
          "surface": 42.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 9
        }
      ]
    },
    {
      "name": "cam",
      "services": [
        "cam:m",
        "cam:s",
        "cam:u"
      ],
      "serviceCount": 3,
      "hostCount": 1,
      "useCount": 5,
      "totalCount": 6,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "camera.autogen",
          "programId": "0400000000000070",
          "surface": 43.2,
          "focus": true,
          "hostCount": 3,
          "useCount": 13
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "gsv3",
          "programId": "0400000000000083",
          "surface": 44.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 12
        },
        {
          "name": "gsv1",
          "programId": "0400000000000081",
          "surface": 43.6,
          "focus": true,
          "hostCount": 0,
          "useCount": 12
        },
        {
          "name": "gsv4",
          "programId": "0400000000000084",
          "surface": 42.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 10
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        }
      ]
    },
    {
      "name": "es",
      "services": [
        "es"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 5,
      "totalCount": 6,
      "keyCount": 1,
      "key": true,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "es",
          "programId": "0400000000000033",
          "surface": 39.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 9
        }
      ],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        },
        {
          "name": "ldn",
          "programId": "0400000000000018",
          "surface": 45.7,
          "focus": false,
          "hostCount": 6,
          "useCount": 13
        },
        {
          "name": "es",
          "programId": "0400000000000033",
          "surface": 39.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 9
        }
      ]
    },
    {
      "name": "pl",
      "services": [
        "pl:s",
        "pl:u"
      ],
      "serviceCount": 2,
      "hostCount": 2,
      "useCount": 4,
      "totalCount": 6,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        },
        {
          "name": "sdb",
          "programId": "0400000000000039",
          "surface": 51.4,
          "focus": false,
          "hostCount": 7,
          "useCount": 12
        }
      ],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        },
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        },
        {
          "name": "ldn",
          "programId": "0400000000000018",
          "surface": 45.7,
          "focus": false,
          "hostCount": 6,
          "useCount": 13
        }
      ]
    },
    {
      "name": "bpc",
      "services": [
        "bpc"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 4,
      "totalCount": 5,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "pcv",
          "programId": "040000000000001a",
          "surface": 38.3,
          "focus": false,
          "hostCount": 3,
          "useCount": 5
        }
      ],
      "users": [
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        },
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        },
        {
          "name": "fatal",
          "programId": "0400000000000034",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        }
      ]
    },
    {
      "name": "caps2",
      "services": [
        "caps2:r",
        "caps2:s"
      ],
      "serviceCount": 2,
      "hostCount": 1,
      "useCount": 4,
      "totalCount": 5,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "capsrv2",
          "programId": "0400000000000071",
          "surface": 30.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 6
        }
      ],
      "users": [
        {
          "name": "creport",
          "programId": "0400000000000036",
          "surface": 28.4,
          "focus": true,
          "hostCount": 0,
          "useCount": 5
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "capsrv",
          "programId": "0400000000000022",
          "surface": 46.5,
          "focus": false,
          "hostCount": 5,
          "useCount": 12
        },
        {
          "name": "grc",
          "programId": "0400000000000035",
          "surface": 32.5,
          "focus": false,
          "hostCount": 2,
          "useCount": 8
        }
      ]
    },
    {
      "name": "ectx",
      "services": [
        "ectx:aw",
        "ectx:r",
        "ectx:w"
      ],
      "serviceCount": 3,
      "hostCount": 1,
      "useCount": 4,
      "totalCount": 5,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "sdcard",
          "programId": "0400000000000089",
          "surface": 36.2,
          "focus": true,
          "hostCount": 0,
          "useCount": 9
        },
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        {
          "name": "erpt",
          "programId": "040000000000002b",
          "surface": 42.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 9
        }
      ]
    },
    {
      "name": "friend",
      "services": [
        "friend:a",
        "friend:m",
        "friend:s",
        "friend:u",
        "friend:v"
      ],
      "serviceCount": 5,
      "hostCount": 1,
      "useCount": 4,
      "totalCount": 5,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "friends",
          "programId": "040000000000000e",
          "surface": 52.3,
          "focus": false,
          "hostCount": 5,
          "useCount": 19
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "lrp",
          "programId": "040000000000004d",
          "surface": 48.1,
          "focus": true,
          "hostCount": 5,
          "useCount": 18
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        }
      ]
    },
    {
      "name": "notif",
      "services": [
        "notif:a",
        "notif:s"
      ],
      "serviceCount": 2,
      "hostCount": 1,
      "useCount": 4,
      "totalCount": 5,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        }
      ],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        }
      ]
    },
    {
      "name": "olsc",
      "services": [
        "olsc:ac",
        "olsc:s",
        "olsc:u"
      ],
      "serviceCount": 3,
      "hostCount": 1,
      "useCount": 4,
      "totalCount": 5,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        }
      ]
    },
    {
      "name": "pctl",
      "services": [
        "pctl",
        "pctl:a",
        "pctl:r",
        "pctl:s"
      ],
      "serviceCount": 4,
      "hostCount": 1,
      "useCount": 4,
      "totalCount": 5,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        },
        {
          "name": "eclct",
          "programId": "0400000000000032",
          "surface": 39.1,
          "focus": false,
          "hostCount": 0,
          "useCount": 21
        }
      ]
    },
    {
      "name": "prepo",
      "services": [
        "prepo:a2",
        "prepo:m",
        "prepo:s",
        "prepo:u"
      ],
      "serviceCount": 4,
      "hostCount": 1,
      "useCount": 4,
      "totalCount": 5,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        }
      ],
      "users": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        },
        {
          "name": "nfc",
          "programId": "0400000000000020",
          "surface": 49.8,
          "focus": false,
          "hostCount": 7,
          "useCount": 10
        }
      ]
    },
    {
      "name": "bsdcfg",
      "services": [
        "bsdcfg"
      ],
      "serviceCount": 1,
      "hostCount": 0,
      "useCount": 4,
      "totalCount": 4,
      "keyCount": 0,
      "key": false,
      "noHostCount": 1,
      "noHost": true,
      "likelyBuiltin": true,
      "note": "BSD configuration; no host in this dump.",
      "hosts": [],
      "users": [
        {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        },
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        },
        {
          "name": "pctl",
          "programId": "040000000000002e",
          "surface": 53.9,
          "focus": false,
          "hostCount": 4,
          "useCount": 24
        }
      ]
    },
    {
      "name": "audctl",
      "services": [
        "audctl"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 3,
      "totalCount": 4,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        }
      ]
    },
    {
      "name": "auddmg",
      "services": [
        "auddmg:s",
        "auddmg:u"
      ],
      "serviceCount": 2,
      "hostCount": 1,
      "useCount": 3,
      "totalCount": 4,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "lrp",
          "programId": "040000000000004d",
          "surface": 48.1,
          "focus": true,
          "hostCount": 5,
          "useCount": 18
        },
        {
          "name": "capsrv2",
          "programId": "0400000000000071",
          "surface": 30.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 6
        }
      ]
    },
    {
      "name": "audsmx",
      "services": [
        "audsmx:s",
        "audsmx:u"
      ],
      "serviceCount": 2,
      "hostCount": 1,
      "useCount": 3,
      "totalCount": 4,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "lrp",
          "programId": "040000000000004d",
          "surface": 48.1,
          "focus": true,
          "hostCount": 5,
          "useCount": 18
        },
        {
          "name": "capsrv2",
          "programId": "0400000000000071",
          "surface": 30.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 6
        }
      ]
    },
    {
      "name": "gpuk",
      "services": [
        "gpuk:drv",
        "gpuk:gsv"
      ],
      "serviceCount": 2,
      "hostCount": 1,
      "useCount": 3,
      "totalCount": 4,
      "keyCount": 2,
      "key": true,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "GPU kernel services; hosted by nvkernel.",
      "hosts": [
        {
          "name": "nvkernel",
          "programId": "040000000000004f",
          "surface": 43.2,
          "focus": true,
          "hostCount": 2,
          "useCount": 4
        }
      ],
      "users": [
        {
          "name": "nvservices",
          "programId": "0400000000000019",
          "surface": 64.2,
          "focus": true,
          "hostCount": 6,
          "useCount": 9
        },
        {
          "name": "gsv3",
          "programId": "0400000000000083",
          "surface": 44.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 12
        },
        {
          "name": "gsv1",
          "programId": "0400000000000081",
          "surface": 43.6,
          "focus": true,
          "hostCount": 0,
          "useCount": 12
        }
      ]
    },
    {
      "name": "ldn",
      "services": [
        "ldn:m",
        "ldn:s",
        "ldn:u"
      ],
      "serviceCount": 3,
      "hostCount": 1,
      "useCount": 3,
      "totalCount": 4,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "ldn",
          "programId": "0400000000000018",
          "surface": 45.7,
          "focus": false,
          "hostCount": 6,
          "useCount": 13
        }
      ],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "lrp",
          "programId": "040000000000004d",
          "surface": 48.1,
          "focus": true,
          "hostCount": 5,
          "useCount": 18
        },
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        }
      ]
    },
    {
      "name": "pcie",
      "services": [
        "pcie",
        "pcie:log"
      ],
      "serviceCount": 2,
      "hostCount": 1,
      "useCount": 3,
      "totalCount": 4,
      "keyCount": 1,
      "key": true,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "PCIe service; hosted by pcie.",
      "hosts": [
        {
          "name": "pcie",
          "programId": "040000000000001d",
          "surface": 51.4,
          "focus": true,
          "hostCount": 2,
          "useCount": 8
        }
      ],
      "users": [
        {
          "name": "sdcard",
          "programId": "0400000000000089",
          "surface": 36.2,
          "focus": true,
          "hostCount": 0,
          "useCount": 9
        },
        {
          "name": "wlan.autogen",
          "programId": "0400000000000016",
          "surface": 48.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 12
        },
        {
          "name": "eclct",
          "programId": "0400000000000032",
          "surface": 39.1,
          "focus": false,
          "hostCount": 0,
          "useCount": 21
        }
      ]
    },
    {
      "name": "pinmux",
      "services": [
        "pinmux"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 3,
      "totalCount": 4,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "Bus",
          "programId": "040000000000000a",
          "surface": 70.0,
          "focus": true,
          "hostCount": 9,
          "useCount": 6
        }
      ],
      "users": [
        {
          "name": "pcie",
          "programId": "040000000000001d",
          "surface": 51.4,
          "focus": true,
          "hostCount": 2,
          "useCount": 8
        },
        {
          "name": "sdcard",
          "programId": "0400000000000089",
          "surface": 36.2,
          "focus": true,
          "hostCount": 0,
          "useCount": 9
        },
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        }
      ]
    },
    {
      "name": "rtc",
      "services": [
        "rtc"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 3,
      "totalCount": 4,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "pcv",
          "programId": "040000000000001a",
          "surface": 38.3,
          "focus": false,
          "hostCount": 3,
          "useCount": 5
        }
      ],
      "users": [
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        },
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        },
        {
          "name": "eclct",
          "programId": "0400000000000032",
          "surface": 39.1,
          "focus": false,
          "hostCount": 0,
          "useCount": 21
        }
      ]
    },
    {
      "name": "bpmpmr",
      "services": [
        "bpmpmr:i",
        "bpmpmr:m",
        "bpmpmr:u"
      ],
      "serviceCount": 3,
      "hostCount": 0,
      "useCount": 3,
      "totalCount": 3,
      "keyCount": 0,
      "key": false,
      "noHostCount": 3,
      "noHost": true,
      "likelyBuiltin": true,
      "note": "BPMP memory-region services; no host in this dump (likely built-in).",
      "hosts": [],
      "users": [
        {
          "name": "Bus",
          "programId": "040000000000000a",
          "surface": 70.0,
          "focus": true,
          "hostCount": 9,
          "useCount": 6
        },
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        },
        {
          "name": "usb.gen2",
          "programId": "0400000000000006",
          "surface": 53.9,
          "focus": false,
          "hostCount": 5,
          "useCount": 11
        }
      ]
    },
    {
      "name": "lr",
      "services": [
        "lr"
      ],
      "serviceCount": 1,
      "hostCount": 0,
      "useCount": 3,
      "totalCount": 3,
      "keyCount": 0,
      "key": false,
      "noHostCount": 1,
      "noHost": true,
      "likelyBuiltin": true,
      "note": "Location resolver; no host in this dump (likely built-in).",
      "hosts": [],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "pgl",
          "programId": "0400000000000042",
          "surface": 31.7,
          "focus": false,
          "hostCount": 1,
          "useCount": 6
        },
        {
          "name": "boot2.ProdBoot",
          "programId": "0400000000000008",
          "surface": 30.9,
          "focus": false,
          "hostCount": 0,
          "useCount": 8
        }
      ]
    },
    {
      "name": "ncm",
      "services": [
        "ncm"
      ],
      "serviceCount": 1,
      "hostCount": 0,
      "useCount": 3,
      "totalCount": 3,
      "keyCount": 1,
      "key": true,
      "noHostCount": 1,
      "noHost": true,
      "likelyBuiltin": true,
      "note": "Content manager; no host in this dump.",
      "hosts": [],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        },
        {
          "name": "boot2.ProdBoot",
          "programId": "0400000000000008",
          "surface": 30.9,
          "focus": false,
          "hostCount": 0,
          "useCount": 8
        }
      ]
    },
    {
      "name": "apm",
      "services": [
        "apm",
        "apm:am",
        "apm:sys"
      ],
      "serviceCount": 3,
      "hostCount": 2,
      "useCount": 2,
      "totalCount": 4,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        }
      ],
      "users": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        }
      ]
    },
    {
      "name": "appletAE",
      "services": [
        "appletAE"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 2,
      "totalCount": 3,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "lrp",
          "programId": "040000000000004d",
          "surface": 48.1,
          "focus": true,
          "hostCount": 5,
          "useCount": 18
        }
      ]
    },
    {
      "name": "aud",
      "services": [
        "aud:a",
        "aud:d",
        "aud:u"
      ],
      "serviceCount": 3,
      "hostCount": 1,
      "useCount": 2,
      "totalCount": 3,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        }
      ]
    },
    {
      "name": "avm",
      "services": [
        "avm"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 2,
      "totalCount": 3,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "sdb",
          "programId": "0400000000000039",
          "surface": 51.4,
          "focus": false,
          "hostCount": 7,
          "useCount": 12
        }
      ],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        }
      ]
    },
    {
      "name": "bcat",
      "services": [
        "bcat:a",
        "bcat:m",
        "bcat:s",
        "bcat:u"
      ],
      "serviceCount": 4,
      "hostCount": 1,
      "useCount": 2,
      "totalCount": 3,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        }
      ],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "sdb",
          "programId": "0400000000000039",
          "surface": 51.4,
          "focus": false,
          "hostCount": 7,
          "useCount": 12
        }
      ]
    },
    {
      "name": "eupld",
      "services": [
        "eupld:c",
        "eupld:r"
      ],
      "serviceCount": 2,
      "hostCount": 1,
      "useCount": 2,
      "totalCount": 3,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "eupld",
          "programId": "0400000000000030",
          "surface": 39.9,
          "focus": false,
          "hostCount": 2,
          "useCount": 18
        }
      ],
      "users": [
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        },
        {
          "name": "eclct",
          "programId": "0400000000000032",
          "surface": 39.1,
          "focus": false,
          "hostCount": 0,
          "useCount": 21
        }
      ]
    },
    {
      "name": "hidc",
      "services": [
        "hidc:d",
        "hidc:s"
      ],
      "serviceCount": 2,
      "hostCount": 1,
      "useCount": 2,
      "totalCount": 3,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        }
      ],
      "users": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        }
      ]
    },
    {
      "name": "ifcfg",
      "services": [
        "ifcfg"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 2,
      "totalCount": 3,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "bsdsocket",
          "programId": "0400000000000012",
          "surface": 61.3,
          "focus": false,
          "hostCount": 9,
          "useCount": 11
        }
      ],
      "users": [
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        },
        {
          "name": "ldn",
          "programId": "0400000000000018",
          "surface": 45.7,
          "focus": false,
          "hostCount": 6,
          "useCount": 13
        }
      ]
    },
    {
      "name": "lbl",
      "services": [
        "lbl"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 2,
      "totalCount": 3,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        }
      ],
      "users": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        }
      ]
    },
    {
      "name": "ldr",
      "services": [
        "ldr:cmpt",
        "ldr:ro",
        "ldr:shel"
      ],
      "serviceCount": 3,
      "hostCount": 1,
      "useCount": 2,
      "totalCount": 3,
      "keyCount": 3,
      "key": true,
      "noHostCount": 2,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "Loader services; ldr:ro is hosted by ro; ldr:cmpt and ldr:shel have no host in this dump.",
      "hosts": [
        {
          "name": "ro",
          "programId": "0400000000000037",
          "surface": 32.5,
          "focus": true,
          "hostCount": 3,
          "useCount": 3
        }
      ],
      "users": [
        {
          "name": "cmptldr",
          "programId": "0400000000000052",
          "surface": 21.8,
          "focus": true,
          "hostCount": 0,
          "useCount": 1
        },
        {
          "name": "pgl",
          "programId": "0400000000000042",
          "surface": 31.7,
          "focus": false,
          "hostCount": 1,
          "useCount": 6
        }
      ]
    },
    {
      "name": "mnpp",
      "services": [
        "mnpp:app",
        "mnpp:sys",
        "mnpp:web"
      ],
      "serviceCount": 3,
      "hostCount": 1,
      "useCount": 2,
      "totalCount": 3,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        }
      ],
      "users": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        }
      ]
    },
    {
      "name": "omm",
      "services": [
        "omm",
        "omm:s"
      ],
      "serviceCount": 2,
      "hostCount": 1,
      "useCount": 2,
      "totalCount": 3,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        }
      ],
      "users": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        }
      ]
    },
    {
      "name": "pgl",
      "services": [
        "pgl"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 2,
      "totalCount": 3,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "pgl",
          "programId": "0400000000000042",
          "surface": 31.7,
          "focus": false,
          "hostCount": 1,
          "useCount": 6
        }
      ],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        },
        {
          "name": "creport",
          "programId": "0400000000000036",
          "surface": 28.4,
          "focus": true,
          "hostCount": 0,
          "useCount": 5
        }
      ]
    },
    {
      "name": "psm",
      "services": [
        "psm"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 2,
      "totalCount": 3,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        }
      ],
      "users": [
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        },
        {
          "name": "eclct",
          "programId": "0400000000000032",
          "surface": 39.1,
          "focus": false,
          "hostCount": 0,
          "useCount": 21
        }
      ]
    },
    {
      "name": "pwm",
      "services": [
        "pwm"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 2,
      "totalCount": 3,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "Bus",
          "programId": "040000000000000a",
          "surface": 70.0,
          "focus": true,
          "hostCount": 9,
          "useCount": 6
        }
      ],
      "users": [
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        },
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        }
      ]
    },
    {
      "name": "rfua",
      "services": [
        "rfua:s"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 2,
      "totalCount": 3,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "bluetooth.gen2",
          "programId": "040000000000000b",
          "surface": 54.3,
          "focus": false,
          "hostCount": 7,
          "useCount": 14
        }
      ],
      "users": [
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        {
          "name": "wlan.autogen",
          "programId": "0400000000000016",
          "surface": 48.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 12
        }
      ]
    },
    {
      "name": "rgltr",
      "services": [
        "rgltr"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 2,
      "totalCount": 3,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "pcv",
          "programId": "040000000000001a",
          "surface": 38.3,
          "focus": false,
          "hostCount": 3,
          "useCount": 5
        }
      ],
      "users": [
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        },
        {
          "name": "pcie",
          "programId": "040000000000001d",
          "surface": 51.4,
          "focus": true,
          "hostCount": 2,
          "useCount": 8
        }
      ]
    },
    {
      "name": "spsm",
      "services": [
        "spsm"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 2,
      "totalCount": 3,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        }
      ],
      "users": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        },
        {
          "name": "fatal",
          "programId": "0400000000000034",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        }
      ]
    },
    {
      "name": "vic",
      "services": [
        "vic:u"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 2,
      "totalCount": 3,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        },
        {
          "name": "camera.autogen",
          "programId": "0400000000000070",
          "surface": 43.2,
          "focus": true,
          "hostCount": 3,
          "useCount": 13
        }
      ]
    },
    {
      "name": "wlan",
      "services": [
        "wlan",
        "wlan:nd",
        "wlan:p"
      ],
      "serviceCount": 3,
      "hostCount": 1,
      "useCount": 2,
      "totalCount": 3,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "wlan.autogen",
          "programId": "0400000000000016",
          "surface": 48.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 12
        }
      ],
      "users": [
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        },
        {
          "name": "ldn",
          "programId": "0400000000000018",
          "surface": 45.7,
          "focus": false,
          "hostCount": 6,
          "useCount": 13
        }
      ]
    },
    {
      "name": "fs",
      "services": [
        "fs:stcfg"
      ],
      "serviceCount": 1,
      "hostCount": 0,
      "useCount": 2,
      "totalCount": 2,
      "keyCount": 0,
      "key": false,
      "noHostCount": 1,
      "noHost": true,
      "likelyBuiltin": true,
      "note": "Filesystem-related services; fs:stcfg has no host in this dump.",
      "hosts": [],
      "users": [
        {
          "name": "sdcard",
          "programId": "0400000000000089",
          "surface": 36.2,
          "focus": true,
          "hostCount": 0,
          "useCount": 9
        },
        {
          "name": "gc",
          "programId": "0400000000000062",
          "surface": 35.0,
          "focus": false,
          "hostCount": 0,
          "useCount": 9
        }
      ]
    },
    {
      "name": "htc",
      "services": [
        "htc",
        "htc:nd"
      ],
      "serviceCount": 2,
      "hostCount": 0,
      "useCount": 2,
      "totalCount": 2,
      "keyCount": 0,
      "key": false,
      "noHostCount": 2,
      "noHost": true,
      "likelyBuiltin": true,
      "note": "HTC services; no host in this dump.",
      "hosts": [],
      "users": [
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        },
        {
          "name": "boot2.ProdBoot",
          "programId": "0400000000000008",
          "surface": 30.9,
          "focus": false,
          "hostCount": 0,
          "useCount": 8
        }
      ]
    },
    {
      "name": "adraw",
      "services": [
        "adraw:a",
        "adraw:m"
      ],
      "serviceCount": 2,
      "hostCount": 1,
      "useCount": 1,
      "totalCount": 2,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "adraw",
          "programId": "0400000000000072",
          "surface": 33.3,
          "focus": true,
          "hostCount": 2,
          "useCount": 5
        }
      ],
      "users": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        }
      ]
    },
    {
      "name": "cec-mgr",
      "services": [
        "cec-mgr"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 1,
      "totalCount": 2,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        }
      ],
      "users": [
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        }
      ]
    },
    {
      "name": "chat",
      "services": [
        "chat:a",
        "chat:alb",
        "chat:ch",
        "chat:con",
        "chat:dbg",
        "chat:ds",
        "chat:hdr",
        "chat:myp",
        "chat:nxs",
        "chat:sa",
        "chat:set",
        "chat:sp",
        "chat:u",
        "chat:wu"
      ],
      "serviceCount": 14,
      "hostCount": 1,
      "useCount": 1,
      "totalCount": 2,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "GameChat services; 17 hosted by chat.",
      "hosts": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        }
      ]
    },
    {
      "name": "disp",
      "services": [
        "disp:ev",
        "disp:omm",
        "disp:s"
      ],
      "serviceCount": 3,
      "hostCount": 1,
      "useCount": 1,
      "totalCount": 2,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        }
      ],
      "users": [
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        }
      ]
    },
    {
      "name": "dns",
      "services": [
        "dns:priv"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 1,
      "totalCount": 2,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "bsdsocket",
          "programId": "0400000000000012",
          "surface": 61.3,
          "focus": false,
          "hostCount": 9,
          "useCount": 11
        }
      ],
      "users": [
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        }
      ]
    },
    {
      "name": "dp2hdmi",
      "services": [
        "dp2hdmi"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 1,
      "totalCount": 2,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        }
      ],
      "users": [
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        }
      ]
    },
    {
      "name": "eth",
      "services": [
        "eth:nd"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 1,
      "totalCount": 2,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "eth",
          "programId": "0400000000000046",
          "surface": 28.0,
          "focus": true,
          "hostCount": 1,
          "useCount": 6
        }
      ],
      "users": [
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        }
      ]
    },
    {
      "name": "grc",
      "services": [
        "grc:c",
        "grc:d"
      ],
      "serviceCount": 2,
      "hostCount": 1,
      "useCount": 1,
      "totalCount": 2,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "grc",
          "programId": "0400000000000035",
          "surface": 32.5,
          "focus": false,
          "hostCount": 2,
          "useCount": 8
        }
      ],
      "users": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        }
      ]
    },
    {
      "name": "hdcp",
      "services": [
        "hdcp"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 1,
      "totalCount": 2,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        }
      ],
      "users": [
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        }
      ]
    },
    {
      "name": "idle",
      "services": [
        "idle:sys"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 1,
      "totalCount": 2,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        }
      ],
      "users": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        }
      ]
    },
    {
      "name": "irs",
      "services": [
        "irs",
        "irs:sys"
      ],
      "serviceCount": 2,
      "hostCount": 1,
      "useCount": 1,
      "totalCount": 2,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        }
      ],
      "users": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        }
      ]
    },
    {
      "name": "lrp",
      "services": [
        "lrp:d",
        "lrp:m",
        "lrp:s",
        "lrp:u"
      ],
      "serviceCount": 4,
      "hostCount": 1,
      "useCount": 1,
      "totalCount": 2,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "Local Remote Play services; 5 hosted by lrp.",
      "hosts": [
        {
          "name": "lrp",
          "programId": "040000000000004d",
          "surface": 48.1,
          "focus": true,
          "hostCount": 5,
          "useCount": 18
        }
      ],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        }
      ]
    },
    {
      "name": "ndrm",
      "services": [
        "ndrm:la",
        "ndrm:lu"
      ],
      "serviceCount": 2,
      "hostCount": 1,
      "useCount": 1,
      "totalCount": 2,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "es",
          "programId": "0400000000000033",
          "surface": 39.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 9
        }
      ],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        }
      ]
    },
    {
      "name": "news",
      "services": [
        "news:a",
        "news:c",
        "news:m",
        "news:p",
        "news:v"
      ],
      "serviceCount": 5,
      "hostCount": 1,
      "useCount": 1,
      "totalCount": 2,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "bcat",
          "programId": "040000000000000c",
          "surface": 81.1,
          "focus": false,
          "hostCount": 16,
          "useCount": 20
        }
      ],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        }
      ]
    },
    {
      "name": "nfc",
      "services": [
        "nfc:am",
        "nfc:mf:u",
        "nfc:sys",
        "nfc:user"
      ],
      "serviceCount": 4,
      "hostCount": 1,
      "useCount": 1,
      "totalCount": 2,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "nfc",
          "programId": "0400000000000020",
          "surface": 49.8,
          "focus": false,
          "hostCount": 7,
          "useCount": 10
        }
      ],
      "users": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        }
      ]
    },
    {
      "name": "nim",
      "services": [
        "nim",
        "nim:eca",
        "nim:ecas",
        "nim:shp"
      ],
      "serviceCount": 4,
      "hostCount": 1,
      "useCount": 1,
      "totalCount": 2,
      "keyCount": 1,
      "key": true,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        }
      ],
      "users": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        }
      ]
    },
    {
      "name": "nvgem",
      "services": [
        "nvgem:c",
        "nvgem:cd"
      ],
      "serviceCount": 2,
      "hostCount": 1,
      "useCount": 1,
      "totalCount": 2,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "nvservices",
          "programId": "0400000000000019",
          "surface": 64.2,
          "focus": true,
          "hostCount": 6,
          "useCount": 9
        }
      ],
      "users": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        }
      ]
    },
    {
      "name": "sasbus",
      "services": [
        "sasbus"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 1,
      "totalCount": 2,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "Bus",
          "programId": "040000000000000a",
          "surface": 70.0,
          "focus": true,
          "hostCount": 9,
          "useCount": 6
        }
      ],
      "users": [
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        }
      ]
    },
    {
      "name": "spi",
      "services": [
        "spi"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 1,
      "totalCount": 2,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "Bus",
          "programId": "040000000000000a",
          "surface": 70.0,
          "focus": true,
          "hostCount": 9,
          "useCount": 6
        }
      ],
      "users": [
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        }
      ]
    },
    {
      "name": "sprof",
      "services": [
        "sprof:bg",
        "sprof:sp"
      ],
      "serviceCount": 2,
      "hostCount": 1,
      "useCount": 1,
      "totalCount": 2,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "erpt",
          "programId": "040000000000002b",
          "surface": 42.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 9
        }
      ],
      "users": [
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        }
      ]
    },
    {
      "name": "syncpt",
      "services": [
        "syncpt:s",
        "syncpt:v"
      ],
      "serviceCount": 2,
      "hostCount": 1,
      "useCount": 1,
      "totalCount": 2,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        }
      ],
      "users": [
        {
          "name": "camera.autogen",
          "programId": "0400000000000070",
          "surface": 43.2,
          "focus": true,
          "hostCount": 3,
          "useCount": 13
        }
      ]
    },
    {
      "name": "tc",
      "services": [
        "tc"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 1,
      "totalCount": 2,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        }
      ],
      "users": [
        {
          "name": "omm",
          "programId": "0400000000000045",
          "surface": 63.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 35
        }
      ]
    },
    {
      "name": "tsec",
      "services": [
        "tsec:m"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 1,
      "totalCount": 2,
      "keyCount": 1,
      "key": true,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "TSEC mailbox; hosted by tsec.autogen.",
      "hosts": [
        {
          "name": "tsec.autogen",
          "programId": "040000000000008d",
          "surface": 35.8,
          "focus": true,
          "hostCount": 1,
          "useCount": 6
        }
      ],
      "users": [
        {
          "name": "vi2.autogen",
          "programId": "0400000000000063",
          "surface": 89.3,
          "focus": true,
          "hostCount": 14,
          "useCount": 19
        }
      ]
    },
    {
      "name": "ethd",
      "services": [
        "ethd:nd"
      ],
      "serviceCount": 1,
      "hostCount": 0,
      "useCount": 1,
      "totalCount": 1,
      "keyCount": 0,
      "key": false,
      "noHostCount": 1,
      "noHost": true,
      "likelyBuiltin": true,
      "note": "Ethernet daemon services; no host in this dump.",
      "hosts": [],
      "users": [
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        }
      ]
    },
    {
      "name": "htcs",
      "services": [
        "htcs:sys"
      ],
      "serviceCount": 1,
      "hostCount": 0,
      "useCount": 1,
      "totalCount": 1,
      "keyCount": 0,
      "key": false,
      "noHostCount": 1,
      "noHost": true,
      "likelyBuiltin": true,
      "note": "",
      "hosts": [],
      "users": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        }
      ]
    },
    {
      "name": "nettc",
      "services": [
        "nettc:nd",
        "nettc:nu"
      ],
      "serviceCount": 2,
      "hostCount": 0,
      "useCount": 1,
      "totalCount": 1,
      "keyCount": 0,
      "key": false,
      "noHostCount": 2,
      "noHost": true,
      "likelyBuiltin": true,
      "note": "Network traffic control; no host in this dump.",
      "hosts": [],
      "users": [
        {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        }
      ]
    },
    {
      "name": "aoc",
      "services": [
        "aoc:u"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 0,
      "totalCount": 1,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "ns",
          "programId": "040000000000001f",
          "surface": 97.5,
          "focus": true,
          "hostCount": 14,
          "useCount": 46
        }
      ],
      "users": []
    },
    {
      "name": "appletOE",
      "services": [
        "appletOE"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 0,
      "totalCount": 1,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "am",
          "programId": "0400000000000023",
          "surface": 77.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 50
        }
      ],
      "users": []
    },
    {
      "name": "auddev",
      "services": [
        "auddev",
        "auddev:s"
      ],
      "serviceCount": 2,
      "hostCount": 1,
      "useCount": 0,
      "totalCount": 1,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        }
      ],
      "users": []
    },
    {
      "name": "audin",
      "services": [
        "audin:u"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 0,
      "totalCount": 1,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        }
      ],
      "users": []
    },
    {
      "name": "audout",
      "services": [
        "audout:u"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 0,
      "totalCount": 1,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        }
      ],
      "users": []
    },
    {
      "name": "audren",
      "services": [
        "audren:u"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 0,
      "totalCount": 1,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        }
      ],
      "users": []
    },
    {
      "name": "batlog",
      "services": [
        "batlog"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 0,
      "totalCount": 1,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        }
      ],
      "users": []
    },
    {
      "name": "btm",
      "services": [
        "btm:u"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 0,
      "totalCount": 1,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "bluetooth.gen2",
          "programId": "040000000000000b",
          "surface": 54.3,
          "focus": false,
          "hostCount": 7,
          "useCount": 14
        }
      ],
      "users": []
    },
    {
      "name": "btp",
      "services": [
        "btp:dbg"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 0,
      "totalCount": 1,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "bluetooth.gen2",
          "programId": "040000000000000b",
          "surface": 54.3,
          "focus": false,
          "hostCount": 7,
          "useCount": 14
        }
      ],
      "users": []
    },
    {
      "name": "capmtp",
      "services": [
        "capmtp"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 0,
      "totalCount": 1,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "capmtp",
          "programId": "040000000000001b",
          "surface": 27.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 5
        }
      ],
      "users": []
    },
    {
      "name": "fan",
      "services": [
        "fan"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 0,
      "totalCount": 1,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        }
      ],
      "users": []
    },
    {
      "name": "fgm",
      "services": [
        "fgm",
        "fgm:sys",
        "fgm:test"
      ],
      "serviceCount": 3,
      "hostCount": 1,
      "useCount": 0,
      "totalCount": 1,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        }
      ],
      "users": []
    },
    {
      "name": "hidbus",
      "services": [
        "hidbus"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 0,
      "totalCount": 1,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        }
      ],
      "users": []
    },
    {
      "name": "hwopus",
      "services": [
        "hwopus"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 0,
      "totalCount": 1,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "audio",
          "programId": "0400000000000014",
          "surface": 77.0,
          "focus": false,
          "hostCount": 14,
          "useCount": 18
        }
      ],
      "users": []
    },
    {
      "name": "imf",
      "services": [
        "imf",
        "imf:e",
        "imf:fe"
      ],
      "serviceCount": 3,
      "hostCount": 1,
      "useCount": 0,
      "totalCount": 1,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "Input method framework; hosted by imf.",
      "hosts": [
        {
          "name": "imf",
          "programId": "0400000000000047",
          "surface": 35.8,
          "focus": true,
          "hostCount": 3,
          "useCount": 4
        }
      ],
      "users": []
    },
    {
      "name": "lcs",
      "services": [
        "lcs"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 0,
      "totalCount": 1,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "lrp",
          "programId": "040000000000004d",
          "surface": 48.1,
          "focus": true,
          "hostCount": 5,
          "useCount": 18
        }
      ],
      "users": []
    },
    {
      "name": "led",
      "services": [
        "led"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 0,
      "totalCount": 1,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "Bus",
          "programId": "040000000000000a",
          "surface": 70.0,
          "focus": true,
          "hostCount": 9,
          "useCount": 6
        }
      ],
      "users": []
    },
    {
      "name": "lp2p",
      "services": [
        "lp2p:app",
        "lp2p:m",
        "lp2p:sys"
      ],
      "serviceCount": 3,
      "hostCount": 1,
      "useCount": 0,
      "totalCount": 1,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "ldn",
          "programId": "0400000000000018",
          "surface": 45.7,
          "focus": false,
          "hostCount": 6,
          "useCount": 13
        }
      ],
      "users": []
    },
    {
      "name": "mig",
      "services": [
        "mig:usr"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 0,
      "totalCount": 1,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "migration",
          "programId": "040000000000003a",
          "surface": 50.6,
          "focus": false,
          "hostCount": 1,
          "useCount": 28
        }
      ],
      "users": []
    },
    {
      "name": "mii",
      "services": [
        "mii:e",
        "mii:u"
      ],
      "serviceCount": 2,
      "hostCount": 1,
      "useCount": 0,
      "totalCount": 1,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "sdb",
          "programId": "0400000000000039",
          "surface": 51.4,
          "focus": false,
          "hostCount": 7,
          "useCount": 12
        }
      ],
      "users": []
    },
    {
      "name": "miiimg",
      "services": [
        "miiimg"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 0,
      "totalCount": 1,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "sdb",
          "programId": "0400000000000039",
          "surface": 51.4,
          "focus": false,
          "hostCount": 7,
          "useCount": 12
        }
      ],
      "users": []
    },
    {
      "name": "nfp",
      "services": [
        "nfp:dbg",
        "nfp:sys",
        "nfp:user"
      ],
      "serviceCount": 3,
      "hostCount": 1,
      "useCount": 0,
      "totalCount": 1,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "nfc",
          "programId": "0400000000000020",
          "surface": 49.8,
          "focus": false,
          "hostCount": 7,
          "useCount": 10
        }
      ],
      "users": []
    },
    {
      "name": "ngc",
      "services": [
        "ngc:u"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 0,
      "totalCount": 1,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "ngc",
          "programId": "0400000000000050",
          "surface": 31.7,
          "focus": false,
          "hostCount": 2,
          "useCount": 3
        }
      ],
      "users": []
    },
    {
      "name": "ngct",
      "services": [
        "ngct:u"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 0,
      "totalCount": 1,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "ngc",
          "programId": "0400000000000050",
          "surface": 31.7,
          "focus": false,
          "hostCount": 2,
          "useCount": 3
        }
      ],
      "users": []
    },
    {
      "name": "ntc",
      "services": [
        "ntc"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 0,
      "totalCount": 1,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "nim",
          "programId": "0400000000000025",
          "surface": 54.7,
          "focus": false,
          "hostCount": 5,
          "useCount": 21
        }
      ],
      "users": []
    },
    {
      "name": "nvdrvdbg",
      "services": [
        "nvdrvdbg"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 0,
      "totalCount": 1,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "nvservices",
          "programId": "0400000000000019",
          "surface": 64.2,
          "focus": true,
          "hostCount": 6,
          "useCount": 9
        }
      ],
      "users": []
    },
    {
      "name": "powctl",
      "services": [
        "powctl"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 0,
      "totalCount": 1,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        }
      ],
      "users": []
    },
    {
      "name": "ro",
      "services": [
        "ro:1",
        "ro:dmnt"
      ],
      "serviceCount": 2,
      "hostCount": 1,
      "useCount": 0,
      "totalCount": 1,
      "keyCount": 2,
      "key": true,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "ro",
          "programId": "0400000000000037",
          "surface": 32.5,
          "focus": true,
          "hostCount": 3,
          "useCount": 3
        }
      ],
      "users": []
    },
    {
      "name": "spbg",
      "services": [
        "spbg:sp"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 0,
      "totalCount": 1,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "olsc",
          "programId": "040000000000003e",
          "surface": 56.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 26
        }
      ],
      "users": []
    },
    {
      "name": "spch",
      "services": [
        "spch:a"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 0,
      "totalCount": 1,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "speech",
          "programId": "0400000000000088",
          "surface": 28.4,
          "focus": true,
          "hostCount": 1,
          "useCount": 2
        }
      ],
      "users": []
    },
    {
      "name": "stpl",
      "services": [
        "stpl:dbg",
        "stpl:sys",
        "stpl:u"
      ],
      "serviceCount": 3,
      "hostCount": 1,
      "useCount": 0,
      "totalCount": 1,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "StreamPlay services; hosted by chat.",
      "hosts": [
        {
          "name": "chat",
          "programId": "040000000000004a",
          "surface": 100.0,
          "focus": true,
          "hostCount": 17,
          "useCount": 38
        }
      ],
      "users": []
    },
    {
      "name": "syslog",
      "services": [
        "syslog:u"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 0,
      "totalCount": 1,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "psc",
          "programId": "0400000000000021",
          "surface": 71.2,
          "focus": false,
          "hostCount": 17,
          "useCount": 4
        }
      ],
      "users": []
    },
    {
      "name": "ts",
      "services": [
        "ts",
        "ts:emu"
      ],
      "serviceCount": 2,
      "hostCount": 1,
      "useCount": 0,
      "totalCount": 1,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "ptm.prod",
          "programId": "0400000000000010",
          "surface": 73.3,
          "focus": false,
          "hostCount": 11,
          "useCount": 23
        }
      ],
      "users": []
    },
    {
      "name": "uart",
      "services": [
        "uart"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 0,
      "totalCount": 1,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "Bus",
          "programId": "040000000000000a",
          "surface": 70.0,
          "focus": true,
          "hostCount": 9,
          "useCount": 6
        }
      ],
      "users": []
    },
    {
      "name": "xcd",
      "services": [
        "xcd:sys"
      ],
      "serviceCount": 1,
      "hostCount": 1,
      "useCount": 0,
      "totalCount": 1,
      "keyCount": 0,
      "key": false,
      "noHostCount": 0,
      "noHost": false,
      "likelyBuiltin": false,
      "note": "",
      "hosts": [
        {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        }
      ],
      "users": []
    }
  ],
  "insights": {
    "builtinGaps": [
      {
        "name": "fsp-srv",
        "family": "fsp-srv",
        "hostCount": 0,
        "useCount": 34,
        "key": true,
        "note": "Filesystem service broker; 34 system modules use it. No host in this dump - hosted by the built-in fs sysmodule, the target of the current ns2jb chain."
      },
      {
        "name": "clkrst",
        "family": "clkrst",
        "hostCount": 0,
        "useCount": 13,
        "key": false,
        "note": ""
      },
      {
        "name": "pm:bm",
        "family": "pm",
        "hostCount": 0,
        "useCount": 13,
        "key": true,
        "note": "Process manager boot/manager; 13 users. No host in this dump (built-in pm)."
      },
      {
        "name": "dt",
        "family": "dt",
        "hostCount": 0,
        "useCount": 12,
        "key": false,
        "note": ""
      },
      {
        "name": "csrng",
        "family": "csrng",
        "hostCount": 0,
        "useCount": 6,
        "key": false,
        "note": ""
      },
      {
        "name": "spl:mig",
        "family": "spl",
        "hostCount": 0,
        "useCount": 5,
        "key": true,
        "note": "SPL migration service; used by 5 modules. No host in this dump."
      },
      {
        "name": "bsdcfg",
        "family": "bsdcfg",
        "hostCount": 0,
        "useCount": 4,
        "key": false,
        "note": ""
      },
      {
        "name": "lr",
        "family": "lr",
        "hostCount": 0,
        "useCount": 3,
        "key": false,
        "note": ""
      },
      {
        "name": "ncm",
        "family": "ncm",
        "hostCount": 0,
        "useCount": 3,
        "key": true,
        "note": "Content manager; used by ns, nim, boot2.ProdBoot. No host in this dump."
      },
      {
        "name": "pm:info",
        "family": "pm",
        "hostCount": 0,
        "useCount": 3,
        "key": true,
        "note": "Process manager info; 3 users. No host in this dump (built-in pm)."
      },
      {
        "name": "spl:",
        "family": "spl",
        "hostCount": 0,
        "useCount": 3,
        "key": true,
        "note": "Security/SPL service; used by sdcard, ro, am. No host in this dump (built-in spl)."
      },
      {
        "name": "fs:stcfg",
        "family": "fs",
        "hostCount": 0,
        "useCount": 2,
        "key": false,
        "note": ""
      }
    ],
    "builtinFamilies": [
      {
        "name": "fsp-srv",
        "serviceCount": 1,
        "hostCount": 0,
        "useCount": 34,
        "key": true,
        "noHostCount": 1,
        "likelyBuiltin": true,
        "note": "Filesystem broker; no host in this dump (built-in fs)."
      },
      {
        "name": "spl",
        "serviceCount": 9,
        "hostCount": 0,
        "useCount": 16,
        "key": true,
        "noHostCount": 9,
        "likelyBuiltin": true,
        "note": "Security/SPL services; no hosts in this dump (built-in spl)."
      },
      {
        "name": "pm",
        "serviceCount": 3,
        "hostCount": 0,
        "useCount": 15,
        "key": true,
        "noHostCount": 3,
        "likelyBuiltin": true,
        "note": "Process manager services; no hosts in this dump (built-in pm)."
      },
      {
        "name": "clkrst",
        "serviceCount": 1,
        "hostCount": 0,
        "useCount": 13,
        "key": false,
        "noHostCount": 1,
        "likelyBuiltin": true,
        "note": "Clock/reset service; no host in this dump (likely built-in)."
      },
      {
        "name": "dt",
        "serviceCount": 1,
        "hostCount": 0,
        "useCount": 12,
        "key": false,
        "noHostCount": 1,
        "likelyBuiltin": true,
        "note": "Device tree service; no host in this dump (likely built-in)."
      },
      {
        "name": "csrng",
        "serviceCount": 1,
        "hostCount": 0,
        "useCount": 6,
        "key": false,
        "noHostCount": 1,
        "likelyBuiltin": true,
        "note": "Randomness service; no host in this dump (likely built-in)."
      },
      {
        "name": "bsdcfg",
        "serviceCount": 1,
        "hostCount": 0,
        "useCount": 4,
        "key": false,
        "noHostCount": 1,
        "likelyBuiltin": true,
        "note": "BSD configuration; no host in this dump."
      },
      {
        "name": "bpmpmr",
        "serviceCount": 3,
        "hostCount": 0,
        "useCount": 3,
        "key": false,
        "noHostCount": 3,
        "likelyBuiltin": true,
        "note": "BPMP memory-region services; no host in this dump (likely built-in)."
      },
      {
        "name": "lr",
        "serviceCount": 1,
        "hostCount": 0,
        "useCount": 3,
        "key": false,
        "noHostCount": 1,
        "likelyBuiltin": true,
        "note": "Location resolver; no host in this dump (likely built-in)."
      },
      {
        "name": "ncm",
        "serviceCount": 1,
        "hostCount": 0,
        "useCount": 3,
        "key": true,
        "noHostCount": 1,
        "likelyBuiltin": true,
        "note": "Content manager; no host in this dump."
      },
      {
        "name": "fs",
        "serviceCount": 1,
        "hostCount": 0,
        "useCount": 2,
        "key": false,
        "noHostCount": 1,
        "likelyBuiltin": true,
        "note": "Filesystem-related services; fs:stcfg has no host in this dump."
      },
      {
        "name": "htc",
        "serviceCount": 2,
        "hostCount": 0,
        "useCount": 2,
        "key": false,
        "noHostCount": 2,
        "likelyBuiltin": true,
        "note": "HTC services; no host in this dump."
      }
    ],
    "hostLeverage": [
      {
        "module": {
          "name": "fatal",
          "programId": "0400000000000034",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        },
        "uniqueUsers": 57,
        "serviceCount": 2,
        "topService": {
          "name": "fatal:u",
          "family": "fatal",
          "useCount": 57
        },
        "services": [
          {
            "name": "fatal:u",
            "family": "fatal",
            "useCount": 57
          },
          {
            "name": "fatal:p",
            "family": "fatal",
            "useCount": 2
          }
        ]
      },
      {
        "module": {
          "name": "psc",
          "programId": "0400000000000021",
          "surface": 71.2,
          "focus": false,
          "hostCount": 17,
          "useCount": 4
        },
        "uniqueUsers": 51,
        "serviceCount": 17,
        "topService": {
          "name": "psc:m",
          "family": "psc",
          "useCount": 37
        },
        "services": [
          {
            "name": "psc:m",
            "family": "psc",
            "useCount": 37
          },
          {
            "name": "srepo:u",
            "family": "srepo",
            "useCount": 37
          },
          {
            "name": "ovln:snd",
            "family": "ovln",
            "useCount": 14
          },
          {
            "name": "hshl:sys",
            "family": "hshl",
            "useCount": 5
          },
          {
            "name": "time:su",
            "family": "time",
            "useCount": 5
          },
          {
            "name": "ins:s",
            "family": "ins",
            "useCount": 4
          },
          {
            "name": "time:al",
            "family": "time",
            "useCount": 4
          },
          {
            "name": "ins:r",
            "family": "ins",
            "useCount": 3
          },
          {
            "name": "srepo:a",
            "family": "srepo",
            "useCount": 3
          },
          {
            "name": "hshl:set",
            "family": "hshl",
            "useCount": 2
          }
        ]
      },
      {
        "module": {
          "name": "settings",
          "programId": "0400000000000009",
          "surface": 36.6,
          "focus": false,
          "hostCount": 4,
          "useCount": 3
        },
        "uniqueUsers": 51,
        "serviceCount": 4,
        "topService": {
          "name": "set:sys",
          "family": "set",
          "useCount": 49
        },
        "services": [
          {
            "name": "set:sys",
            "family": "set",
            "useCount": 49
          },
          {
            "name": "set:cal",
            "family": "set",
            "useCount": 12
          },
          {
            "name": "set",
            "family": "set",
            "useCount": 10
          },
          {
            "name": "set:fd",
            "family": "set",
            "useCount": 0
          }
        ]
      },
      {
        "module": {
          "name": "LogManager.Prod",
          "programId": "0400000000000015",
          "surface": 23.5,
          "focus": false,
          "hostCount": 1,
          "useCount": 1
        },
        "uniqueUsers": 43,
        "serviceCount": 1,
        "topService": {
          "name": "lm",
          "family": "lm",
          "useCount": 43
        },
        "services": [
          {
            "name": "lm",
            "family": "lm",
            "useCount": 43
          }
        ]
      },
      {
        "module": {
          "name": "glue",
          "programId": "0400000000000031",
          "surface": 71.6,
          "focus": false,
          "hostCount": 14,
          "useCount": 14
        },
        "uniqueUsers": 28,
        "serviceCount": 14,
        "topService": {
          "name": "arp:r",
          "family": "arp",
          "useCount": 18
        },
        "services": [
          {
            "name": "arp:r",
            "family": "arp",
            "useCount": 18
          },
          {
            "name": "time:u",
            "family": "time",
            "useCount": 16
          },
          {
            "name": "bgtc:t",
            "family": "bgtc",
            "useCount": 12
          },
          {
            "name": "notif:s",
            "family": "notif",
            "useCount": 4
          },
          {
            "name": "ectx:w",
            "family": "ectx",
            "useCount": 3
          },
          {
            "name": "arp:w",
            "family": "arp",
            "useCount": 2
          },
          {
            "name": "bgtc:sc",
            "family": "bgtc",
            "useCount": 2
          },
          {
            "name": "ectx:r",
            "family": "ectx",
            "useCount": 1
          },
          {
            "name": "pl:u",
            "family": "pl",
            "useCount": 1
          },
          {
            "name": "batlog",
            "family": "batlog",
            "useCount": 0
          }
        ]
      },
      {
        "module": {
          "name": "erpt",
          "programId": "040000000000002b",
          "surface": 42.4,
          "focus": false,
          "hostCount": 4,
          "useCount": 9
        },
        "uniqueUsers": 21,
        "serviceCount": 4,
        "topService": {
          "name": "erpt:c",
          "family": "erpt",
          "useCount": 21
        },
        "services": [
          {
            "name": "erpt:c",
            "family": "erpt",
            "useCount": 21
          },
          {
            "name": "erpt:r",
            "family": "erpt",
            "useCount": 2
          },
          {
            "name": "sprof:bg",
            "family": "sprof",
            "useCount": 1
          },
          {
            "name": "sprof:sp",
            "family": "sprof",
            "useCount": 1
          }
        ]
      },
      {
        "module": {
          "name": "bsdsocket",
          "programId": "0400000000000012",
          "surface": 61.3,
          "focus": false,
          "hostCount": 9,
          "useCount": 11
        },
        "uniqueUsers": 16,
        "serviceCount": 9,
        "topService": {
          "name": "bsd:s",
          "family": "bsd",
          "useCount": 15
        },
        "services": [
          {
            "name": "bsd:s",
            "family": "bsd",
            "useCount": 15
          },
          {
            "name": "nsd:u",
            "family": "nsd",
            "useCount": 14
          },
          {
            "name": "sfdnsres",
            "family": "sfdnsres",
            "useCount": 12
          },
          {
            "name": "ifcfg",
            "family": "ifcfg",
            "useCount": 2
          },
          {
            "name": "bsd:nu",
            "family": "bsd",
            "useCount": 1
          },
          {
            "name": "dns:priv",
            "family": "dns",
            "useCount": 1
          },
          {
            "name": "bsd:a",
            "family": "bsd",
            "useCount": 0
          },
          {
            "name": "bsd:u",
            "family": "bsd",
            "useCount": 0
          },
          {
            "name": "nsd:a",
            "family": "nsd",
            "useCount": 0
          }
        ]
      },
      {
        "module": {
          "name": "Bus",
          "programId": "040000000000000a",
          "surface": 70.0,
          "focus": true,
          "hostCount": 9,
          "useCount": 6
        },
        "uniqueUsers": 15,
        "serviceCount": 9,
        "topService": {
          "name": "gpio",
          "family": "gpio",
          "useCount": 13
        },
        "services": [
          {
            "name": "gpio",
            "family": "gpio",
            "useCount": 13
          },
          {
            "name": "i2c",
            "family": "i2c",
            "useCount": 7
          },
          {
            "name": "pinmux",
            "family": "pinmux",
            "useCount": 3
          },
          {
            "name": "pwm",
            "family": "pwm",
            "useCount": 2
          },
          {
            "name": "sasbus",
            "family": "sasbus",
            "useCount": 1
          },
          {
            "name": "spi",
            "family": "spi",
            "useCount": 1
          },
          {
            "name": "gpio:emu",
            "family": "gpio",
            "useCount": 0
          },
          {
            "name": "led",
            "family": "led",
            "useCount": 0
          },
          {
            "name": "uart",
            "family": "uart",
            "useCount": 0
          }
        ]
      },
      {
        "module": {
          "name": "account",
          "programId": "040000000000001e",
          "surface": 58.0,
          "focus": false,
          "hostCount": 6,
          "useCount": 22
        },
        "uniqueUsers": 14,
        "serviceCount": 6,
        "topService": {
          "name": "dauth:0",
          "family": "dauth",
          "useCount": 11
        },
        "services": [
          {
            "name": "dauth:0",
            "family": "dauth",
            "useCount": 11
          },
          {
            "name": "acc:e:u1",
            "family": "acc",
            "useCount": 10
          },
          {
            "name": "acc:aa",
            "family": "acc",
            "useCount": 2
          },
          {
            "name": "acc:e",
            "family": "acc",
            "useCount": 1
          },
          {
            "name": "acc:e:u2",
            "family": "acc",
            "useCount": 1
          },
          {
            "name": "acc:e:su",
            "family": "acc",
            "useCount": 0
          }
        ]
      },
      {
        "module": {
          "name": "nifm",
          "programId": "040000000000000f",
          "surface": 53.1,
          "focus": false,
          "hostCount": 3,
          "useCount": 26
        },
        "uniqueUsers": 14,
        "serviceCount": 3,
        "topService": {
          "name": "nifm:s",
          "family": "nifm",
          "useCount": 13
        },
        "services": [
          {
            "name": "nifm:s",
            "family": "nifm",
            "useCount": 13
          },
          {
            "name": "nifm:a",
            "family": "nifm",
            "useCount": 1
          },
          {
            "name": "nifm:u",
            "family": "nifm",
            "useCount": 0
          }
        ]
      },
      {
        "module": {
          "name": "ssl",
          "programId": "0400000000000024",
          "surface": 39.1,
          "focus": false,
          "hostCount": 2,
          "useCount": 12
        },
        "uniqueUsers": 12,
        "serviceCount": 2,
        "topService": {
          "name": "ssl:s",
          "family": "ssl",
          "useCount": 12
        },
        "services": [
          {
            "name": "ssl:s",
            "family": "ssl",
            "useCount": 12
          },
          {
            "name": "ssl",
            "family": "ssl",
            "useCount": 0
          }
        ]
      },
      {
        "module": {
          "name": "hid",
          "programId": "0400000000000013",
          "surface": 72.4,
          "focus": false,
          "hostCount": 9,
          "useCount": 23
        },
        "uniqueUsers": 10,
        "serviceCount": 9,
        "topService": {
          "name": "hid:sys",
          "family": "hid",
          "useCount": 9
        },
        "services": [
          {
            "name": "hid:sys",
            "family": "hid",
            "useCount": 9
          },
          {
            "name": "hid",
            "family": "hid",
            "useCount": 5
          },
          {
            "name": "hidc:s",
            "family": "hidc",
            "useCount": 2
          },
          {
            "name": "irs:sys",
            "family": "irs",
            "useCount": 1
          },
          {
            "name": "hid:dbg",
            "family": "hid",
            "useCount": 0
          },
          {
            "name": "hidbus",
            "family": "hidbus",
            "useCount": 0
          },
          {
            "name": "hidc:d",
            "family": "hidc",
            "useCount": 0
          },
          {
            "name": "irs",
            "family": "irs",
            "useCount": 0
          },
          {
            "name": "xcd:sys",
            "family": "xcd",
            "useCount": 0
          }
        ]
      }
    ],
    "widestClients": [
      {
        "name": "am",
        "programId": "0400000000000023",
        "surface": 77.4,
        "focus": false,
        "hostCount": 4,
        "useCount": 50
      },
      {
        "name": "ns",
        "programId": "040000000000001f",
        "surface": 97.5,
        "focus": true,
        "hostCount": 14,
        "useCount": 46
      },
      {
        "name": "chat",
        "programId": "040000000000004a",
        "surface": 100.0,
        "focus": true,
        "hostCount": 17,
        "useCount": 38
      },
      {
        "name": "omm",
        "programId": "0400000000000045",
        "surface": 63.4,
        "focus": false,
        "hostCount": 4,
        "useCount": 35
      },
      {
        "name": "migration",
        "programId": "040000000000003a",
        "surface": 50.6,
        "focus": false,
        "hostCount": 1,
        "useCount": 28
      },
      {
        "name": "olsc",
        "programId": "040000000000003e",
        "surface": 56.4,
        "focus": false,
        "hostCount": 4,
        "useCount": 26
      },
      {
        "name": "nifm",
        "programId": "040000000000000f",
        "surface": 53.1,
        "focus": false,
        "hostCount": 3,
        "useCount": 26
      },
      {
        "name": "pctl",
        "programId": "040000000000002e",
        "surface": 53.9,
        "focus": false,
        "hostCount": 4,
        "useCount": 24
      },
      {
        "name": "ptm.prod",
        "programId": "0400000000000010",
        "surface": 73.3,
        "focus": false,
        "hostCount": 11,
        "useCount": 23
      },
      {
        "name": "hid",
        "programId": "0400000000000013",
        "surface": 72.4,
        "focus": false,
        "hostCount": 9,
        "useCount": 23
      },
      {
        "name": "account",
        "programId": "040000000000001e",
        "surface": 58.0,
        "focus": false,
        "hostCount": 6,
        "useCount": 22
      },
      {
        "name": "nim",
        "programId": "0400000000000025",
        "surface": 54.7,
        "focus": false,
        "hostCount": 5,
        "useCount": 21
      }
    ],
    "clusters": {
      "gpu": {
        "modules": [
          {
            "name": "vi2.autogen",
            "programId": "0400000000000063",
            "surface": 89.3,
            "focus": true,
            "hostCount": 14,
            "useCount": 19
          },
          {
            "name": "nvservices",
            "programId": "0400000000000019",
            "surface": 64.2,
            "focus": true,
            "hostCount": 6,
            "useCount": 9
          },
          {
            "name": "gsv3",
            "programId": "0400000000000083",
            "surface": 44.4,
            "focus": true,
            "hostCount": 1,
            "useCount": 12
          },
          {
            "name": "gsv1",
            "programId": "0400000000000081",
            "surface": 43.6,
            "focus": true,
            "hostCount": 0,
            "useCount": 12
          },
          {
            "name": "nvkernel",
            "programId": "040000000000004f",
            "surface": 43.2,
            "focus": true,
            "hostCount": 2,
            "useCount": 4
          },
          {
            "name": "gsv4",
            "programId": "0400000000000084",
            "surface": 42.4,
            "focus": true,
            "hostCount": 1,
            "useCount": 10
          },
          {
            "name": "host1x",
            "programId": "0400000000000065",
            "surface": 37.4,
            "focus": true,
            "hostCount": 1,
            "useCount": 5
          },
          {
            "name": "adraw",
            "programId": "0400000000000072",
            "surface": 33.3,
            "focus": true,
            "hostCount": 2,
            "useCount": 5
          },
          {
            "name": "gsvm",
            "programId": "0400000000000080",
            "surface": 29.2,
            "focus": true,
            "hostCount": 3,
            "useCount": 2
          }
        ],
        "services": [
          {
            "name": "host1x",
            "family": "host1x",
            "hostCount": 1,
            "useCount": 6,
            "key": true,
            "note": "Host1x channel manager; hosted by host1x, used by 6 modules."
          },
          {
            "name": "nvdrv:s",
            "family": "nvdrv",
            "hostCount": 1,
            "useCount": 6,
            "key": true,
            "note": "GPU driver; hosted by nvservices, used by 6 modules."
          },
          {
            "name": "nvdrv:v",
            "family": "nvdrv",
            "hostCount": 1,
            "useCount": 3,
            "key": false,
            "note": ""
          },
          {
            "name": "vi2:m2",
            "family": "vi2",
            "hostCount": 1,
            "useCount": 3,
            "key": false,
            "note": ""
          },
          {
            "name": "vi2:v",
            "family": "vi2",
            "hostCount": 1,
            "useCount": 3,
            "key": false,
            "note": ""
          },
          {
            "name": "gpuk:drv",
            "family": "gpuk",
            "hostCount": 1,
            "useCount": 2,
            "key": true,
            "note": "GPU kernel driver; hosted by nvkernel, used by nvservices."
          },
          {
            "name": "gpuk:gsv",
            "family": "gpuk",
            "hostCount": 1,
            "useCount": 2,
            "key": true,
            "note": "GPU kernel codec service; hosted by nvkernel, used by gsv1/gsv3."
          },
          {
            "name": "gsv:s3",
            "family": "gsv",
            "hostCount": 1,
            "useCount": 2,
            "key": true,
            "note": "OpenMAX codec service; hosted by gsv3, used by chat and adraw."
          },
          {
            "name": "gsv:s4",
            "family": "gsv",
            "hostCount": 1,
            "useCount": 2,
            "key": false,
            "note": ""
          },
          {
            "name": "gsv:sv",
            "family": "gsv",
            "hostCount": 1,
            "useCount": 2,
            "key": false,
            "note": ""
          },
          {
            "name": "vi2:m1",
            "family": "vi2",
            "hostCount": 1,
            "useCount": 2,
            "key": true,
            "note": "Display service; hosted by vi2.autogen, used by omm and fatal."
          },
          {
            "name": "vic:u",
            "family": "vic",
            "hostCount": 1,
            "useCount": 2,
            "key": false,
            "note": ""
          },
          {
            "name": "disp:omm",
            "family": "disp",
            "hostCount": 1,
            "useCount": 1,
            "key": false,
            "note": ""
          },
          {
            "name": "gsv:m",
            "family": "gsv",
            "hostCount": 1,
            "useCount": 1,
            "key": true,
            "note": "OpenMAX broker; hosted by gsvm, used by am."
          },
          {
            "name": "disp:ev",
            "family": "disp",
            "hostCount": 1,
            "useCount": 0,
            "key": false,
            "note": ""
          },
          {
            "name": "disp:s",
            "family": "disp",
            "hostCount": 1,
            "useCount": 0,
            "key": false,
            "note": ""
          },
          {
            "name": "gsv:t",
            "family": "gsv",
            "hostCount": 1,
            "useCount": 0,
            "key": false,
            "note": ""
          },
          {
            "name": "nvdrv:t",
            "family": "nvdrv",
            "hostCount": 1,
            "useCount": 0,
            "key": false,
            "note": ""
          },
          {
            "name": "vi2:nv",
            "family": "vi2",
            "hostCount": 1,
            "useCount": 0,
            "key": false,
            "note": ""
          }
        ]
      },
      "filesystem": {
        "modules": [
          {
            "name": "ns",
            "programId": "040000000000001f",
            "surface": 97.5,
            "focus": true,
            "hostCount": 14,
            "useCount": 46
          },
          {
            "name": "es",
            "programId": "0400000000000033",
            "surface": 39.1,
            "focus": false,
            "hostCount": 3,
            "useCount": 9
          },
          {
            "name": "sdcard",
            "programId": "0400000000000089",
            "surface": 36.2,
            "focus": true,
            "hostCount": 0,
            "useCount": 9
          },
          {
            "name": "gc",
            "programId": "0400000000000062",
            "surface": 35.0,
            "focus": false,
            "hostCount": 0,
            "useCount": 9
          },
          {
            "name": "ro",
            "programId": "0400000000000037",
            "surface": 32.5,
            "focus": true,
            "hostCount": 3,
            "useCount": 3
          },
          {
            "name": "boot2.ProdBoot",
            "programId": "0400000000000008",
            "surface": 30.9,
            "focus": false,
            "hostCount": 0,
            "useCount": 8
          }
        ],
        "services": [
          {
            "name": "fsp-srv",
            "family": "fsp-srv",
            "hostCount": 0,
            "useCount": 34,
            "key": true,
            "note": "Filesystem service broker; 34 system modules use it. No host in this dump - hosted by the built-in fs sysmodule, the target of the current ns2jb chain."
          },
          {
            "name": "es",
            "family": "es",
            "hostCount": 1,
            "useCount": 5,
            "key": true,
            "note": "eShop/content service; hosted by es, used by 5 modules."
          },
          {
            "name": "ns:am2",
            "family": "ns",
            "hostCount": 1,
            "useCount": 4,
            "key": false,
            "note": ""
          },
          {
            "name": "ncm",
            "family": "ncm",
            "hostCount": 0,
            "useCount": 3,
            "key": true,
            "note": "Content manager; used by ns, nim, boot2.ProdBoot. No host in this dump."
          },
          {
            "name": "ns:su",
            "family": "ns",
            "hostCount": 1,
            "useCount": 3,
            "key": false,
            "note": ""
          },
          {
            "name": "fs:stcfg",
            "family": "fs",
            "hostCount": 0,
            "useCount": 2,
            "key": false,
            "note": ""
          },
          {
            "name": "ns:ro",
            "family": "ns",
            "hostCount": 1,
            "useCount": 2,
            "key": false,
            "note": ""
          },
          {
            "name": "ldr:cmpt",
            "family": "ldr",
            "hostCount": 0,
            "useCount": 1,
            "key": true,
            "note": "Loader compat service used by cmptldr; no host in this dump (built-in ldr)."
          },
          {
            "name": "ldr:shel",
            "family": "ldr",
            "hostCount": 0,
            "useCount": 1,
            "key": true,
            "note": "Loader shell service used by pgl; no host in this dump (built-in ldr)."
          },
          {
            "name": "ldr:ro",
            "family": "ldr",
            "hostCount": 1,
            "useCount": 0,
            "key": true,
            "note": "Loader service hosted by ro; no users in this dump."
          },
          {
            "name": "ns:dev",
            "family": "ns",
            "hostCount": 1,
            "useCount": 0,
            "key": false,
            "note": ""
          },
          {
            "name": "ns:ec",
            "family": "ns",
            "hostCount": 1,
            "useCount": 0,
            "key": false,
            "note": ""
          },
          {
            "name": "ns:rid",
            "family": "ns",
            "hostCount": 1,
            "useCount": 0,
            "key": false,
            "note": ""
          },
          {
            "name": "ns:rt",
            "family": "ns",
            "hostCount": 1,
            "useCount": 0,
            "key": false,
            "note": ""
          },
          {
            "name": "ns:sweb",
            "family": "ns",
            "hostCount": 1,
            "useCount": 0,
            "key": false,
            "note": ""
          },
          {
            "name": "ns:vm",
            "family": "ns",
            "hostCount": 1,
            "useCount": 0,
            "key": false,
            "note": ""
          },
          {
            "name": "ns:web",
            "family": "ns",
            "hostCount": 1,
            "useCount": 0,
            "key": false,
            "note": ""
          },
          {
            "name": "ro:1",
            "family": "ro",
            "hostCount": 1,
            "useCount": 0,
            "key": true,
            "note": "ro service; hosted by ro, no users in this dump."
          },
          {
            "name": "ro:dmnt",
            "family": "ro",
            "hostCount": 1,
            "useCount": 0,
            "key": true,
            "note": "ro debug service; hosted by ro, no users in this dump."
          }
        ]
      },
      "network": {
        "modules": [
          {
            "name": "glue",
            "programId": "0400000000000031",
            "surface": 71.6,
            "focus": false,
            "hostCount": 14,
            "useCount": 14
          },
          {
            "name": "bsdsocket",
            "programId": "0400000000000012",
            "surface": 61.3,
            "focus": false,
            "hostCount": 9,
            "useCount": 11
          },
          {
            "name": "nim",
            "programId": "0400000000000025",
            "surface": 54.7,
            "focus": false,
            "hostCount": 5,
            "useCount": 21
          },
          {
            "name": "bluetooth.gen2",
            "programId": "040000000000000b",
            "surface": 54.3,
            "focus": false,
            "hostCount": 7,
            "useCount": 14
          },
          {
            "name": "nifm",
            "programId": "040000000000000f",
            "surface": 53.1,
            "focus": false,
            "hostCount": 3,
            "useCount": 26
          },
          {
            "name": "friends",
            "programId": "040000000000000e",
            "surface": 52.3,
            "focus": false,
            "hostCount": 5,
            "useCount": 19
          },
          {
            "name": "nfc",
            "programId": "0400000000000020",
            "surface": 49.8,
            "focus": false,
            "hostCount": 7,
            "useCount": 10
          },
          {
            "name": "wlan.autogen",
            "programId": "0400000000000016",
            "surface": 48.1,
            "focus": false,
            "hostCount": 3,
            "useCount": 12
          },
          {
            "name": "ldn",
            "programId": "0400000000000018",
            "surface": 45.7,
            "focus": false,
            "hostCount": 6,
            "useCount": 13
          },
          {
            "name": "ssl",
            "programId": "0400000000000024",
            "surface": 39.1,
            "focus": false,
            "hostCount": 2,
            "useCount": 12
          },
          {
            "name": "eth",
            "programId": "0400000000000046",
            "surface": 28.0,
            "focus": true,
            "hostCount": 1,
            "useCount": 6
          }
        ],
        "services": [
          {
            "name": "arp:r",
            "family": "arp",
            "hostCount": 1,
            "useCount": 18,
            "key": false,
            "note": ""
          },
          {
            "name": "bsd:s",
            "family": "bsd",
            "hostCount": 1,
            "useCount": 15,
            "key": true,
            "note": "BSD sockets; hosted by bsdsocket, used by 15 modules."
          },
          {
            "name": "nsd:u",
            "family": "nsd",
            "hostCount": 1,
            "useCount": 14,
            "key": false,
            "note": ""
          },
          {
            "name": "nifm:s",
            "family": "nifm",
            "hostCount": 1,
            "useCount": 13,
            "key": true,
            "note": "Network interface manager; hosted by nifm, used by 13 modules."
          },
          {
            "name": "sfdnsres",
            "family": "sfdnsres",
            "hostCount": 1,
            "useCount": 12,
            "key": false,
            "note": ""
          },
          {
            "name": "ssl:s",
            "family": "ssl",
            "hostCount": 1,
            "useCount": 12,
            "key": true,
            "note": "SSL service; hosted by ssl, used by 12 modules."
          },
          {
            "name": "bt:sys",
            "family": "bt",
            "hostCount": 1,
            "useCount": 7,
            "key": false,
            "note": ""
          },
          {
            "name": "ldn:s",
            "family": "ldn",
            "hostCount": 1,
            "useCount": 3,
            "key": false,
            "note": ""
          },
          {
            "name": "arp:w",
            "family": "arp",
            "hostCount": 1,
            "useCount": 2,
            "key": false,
            "note": ""
          },
          {
            "name": "wlan",
            "family": "wlan",
            "hostCount": 1,
            "useCount": 2,
            "key": false,
            "note": ""
          },
          {
            "name": "bsd:nu",
            "family": "bsd",
            "hostCount": 1,
            "useCount": 1,
            "key": false,
            "note": ""
          },
          {
            "name": "ethd:nd",
            "family": "ethd",
            "hostCount": 0,
            "useCount": 1,
            "key": false,
            "note": ""
          },
          {
            "name": "htc",
            "family": "htc",
            "hostCount": 0,
            "useCount": 1,
            "key": false,
            "note": ""
          },
          {
            "name": "htc:nd",
            "family": "htc",
            "hostCount": 0,
            "useCount": 1,
            "key": false,
            "note": ""
          },
          {
            "name": "htcs:sys",
            "family": "htcs",
            "hostCount": 0,
            "useCount": 1,
            "key": false,
            "note": ""
          },
          {
            "name": "nettc:nd",
            "family": "nettc",
            "hostCount": 0,
            "useCount": 1,
            "key": false,
            "note": ""
          },
          {
            "name": "nettc:nu",
            "family": "nettc",
            "hostCount": 0,
            "useCount": 1,
            "key": false,
            "note": ""
          },
          {
            "name": "nfc:am",
            "family": "nfc",
            "hostCount": 1,
            "useCount": 1,
            "key": false,
            "note": ""
          },
          {
            "name": "nifm:a",
            "family": "nifm",
            "hostCount": 1,
            "useCount": 1,
            "key": false,
            "note": ""
          },
          {
            "name": "nim",
            "family": "nim",
            "hostCount": 1,
            "useCount": 1,
            "key": true,
            "note": "Network install manager; hosted by nim, used by ns."
          }
        ]
      },
      "input": {
        "modules": [
          {
            "name": "hid",
            "programId": "0400000000000013",
            "surface": 72.4,
            "focus": false,
            "hostCount": 9,
            "useCount": 23
          },
          {
            "name": "imf",
            "programId": "0400000000000047",
            "surface": 35.8,
            "focus": true,
            "hostCount": 3,
            "useCount": 4
          }
        ],
        "services": [
          {
            "name": "hid:sys",
            "family": "hid",
            "hostCount": 1,
            "useCount": 9,
            "key": true,
            "note": "HID system service; hosted by hid, used by 9 modules."
          },
          {
            "name": "hid",
            "family": "hid",
            "hostCount": 1,
            "useCount": 5,
            "key": false,
            "note": ""
          },
          {
            "name": "hidc:s",
            "family": "hidc",
            "hostCount": 1,
            "useCount": 2,
            "key": false,
            "note": ""
          },
          {
            "name": "hid:dbg",
            "family": "hid",
            "hostCount": 1,
            "useCount": 0,
            "key": false,
            "note": ""
          },
          {
            "name": "hidbus",
            "family": "hidbus",
            "hostCount": 1,
            "useCount": 0,
            "key": false,
            "note": ""
          },
          {
            "name": "hidc:d",
            "family": "hidc",
            "hostCount": 1,
            "useCount": 0,
            "key": false,
            "note": ""
          },
          {
            "name": "imf",
            "family": "imf",
            "hostCount": 1,
            "useCount": 0,
            "key": false,
            "note": ""
          },
          {
            "name": "imf:e",
            "family": "imf",
            "hostCount": 1,
            "useCount": 0,
            "key": false,
            "note": ""
          },
          {
            "name": "imf:fe",
            "family": "imf",
            "hostCount": 1,
            "useCount": 0,
            "key": false,
            "note": ""
          }
        ]
      }
    }
  }
};
