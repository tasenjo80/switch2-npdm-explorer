(() => {
  'use strict';

  const DATA = window.NPDM_DATA;
  if (!DATA || !Array.isArray(DATA.modules)) {
    document.body.innerHTML =
      '<main style="padding:2rem;font-family:monospace">data.js did not load. Open index.html from the project folder.</main>';
    return;
  }

  const MODULES = DATA.modules;
  const BY_ID = new Map(MODULES.map((m) => [m.programId, m]));
  const SERVICES = Array.isArray(DATA.services) ? DATA.services : [];
  const SERVICE_BY_NAME = new Map(SERVICES.map((s) => [s.name, s]));
  const FAMILIES = Array.isArray(DATA.families) ? DATA.families : [];
  const FAMILY_BY_NAME = new Map(FAMILIES.map((f) => [f.name, f]));
  const STATUS_KEY = 'npdm-explorer-status-v1';
  const STATUSES = ['untriaged', 'watching', 'reviewed', 'blocked'];
  const STATUS_LABEL = {
    untriaged: 'Untriaged',
    watching: 'Watching',
    reviewed: 'Reviewed',
    blocked: 'Blocked',
  };
  const SORT_LABEL = {
    name: 'Module',
    programId: 'Program ID',
    surface: 'Surface',
    syscallCount: 'Syscalls',
    hostCount: 'Hosts',
    useCount: 'Uses',
    mapCount: 'Maps',
    irqCount: 'IRQs',
    fsPermissions: 'FS perms',
  };
  const ALLOWED_SORTS = new Set(['default', ...Object.keys(SORT_LABEL)]);
  const SSORT_LABEL = {
    name: 'Service',
    family: 'Family',
    hostCount: 'Hosts',
    useCount: 'Users',
    totalCount: 'Total',
  };
  const ALLOWED_SSORTS = new Set(['default', ...Object.keys(SSORT_LABEL)]);
  const FSORT_LABEL = {
    name: 'Family',
    serviceCount: 'Services',
    hostCount: 'Hosts',
    useCount: 'Users',
    totalCount: 'Total',
  };
  const ALLOWED_FSORTS = new Set(['default', ...Object.keys(FSORT_LABEL)]);

  const state = {
    view: 'modules',
    q: '',
    focusOnly: false,
    fsOnly: false,
    hostsOnly: false,
    debugOnly: false,
    tag: '',
    minSurface: 0,
    sortKey: 'default',
    sortDir: -1,
    selectedId: null,
    statuses: loadStatuses(),
    sq: '',
    skeyOnly: false,
    shostedOnly: false,
    snohostOnly: false,
    sminUsers: 0,
    sfamily: '',
    sgroup: false,
    ssortKey: 'useCount',
    ssortDir: -1,
    selectedService: null,
    fsortKey: 'useCount',
    fsortDir: -1,
    selectedFamily: null,
    compareA: '040000000000004a',
    compareB: '040000000000001f',
    graphMode: 'module',
    graphEntity: '040000000000004a',
    graphData: null,
  };

  const els = {
    summary: document.getElementById('summary'),
    search: document.getElementById('search'),
    clearSearch: document.getElementById('clear-search'),
    focusOnly: document.getElementById('focus-only'),
    fsOnly: document.getElementById('fs-only'),
    hostsOnly: document.getElementById('hosts-only'),
    debugOnly: document.getElementById('debug-only'),
    tag: document.getElementById('tag'),
    minSurface: document.getElementById('min-surface'),
    minSurfaceValue: document.getElementById('min-surface-value'),
    reset: document.getElementById('reset-filters'),
    exportStatus: document.getElementById('export-status'),
    importStatus: document.getElementById('import-status'),
    statusFile: document.getElementById('status-file'),
    resultCount: document.getElementById('result-count'),
    sortMeta: document.getElementById('sort-meta'),
    table: document.getElementById('module-table'),
    tbody: document.getElementById('module-body'),
    empty: document.getElementById('empty'),
    detail: document.getElementById('detail'),
    source: document.getElementById('source'),
    copyView: document.getElementById('copy-view'),
    exportCsv: document.getElementById('export-csv'),
    viewModules: document.getElementById('view-modules'),
    viewServices: document.getElementById('view-services'),
    viewInsights: document.getElementById('view-insights'),
    viewCompare: document.getElementById('view-compare'),
    viewGraph: document.getElementById('view-graph'),
    modulesView: document.getElementById('modules-view'),
    servicesView: document.getElementById('services-view'),
    insightsView: document.getElementById('insights-view'),
    insightsGrid: document.getElementById('insights-grid'),
    compareView: document.getElementById('compare-view'),
    compareA: document.getElementById('compare-a'),
    compareB: document.getElementById('compare-b'),
    compareSwap: document.getElementById('compare-swap'),
    compareOutput: document.getElementById('compare-output'),
    graphView: document.getElementById('graph-view'),
    graphMode: document.getElementById('graph-mode'),
    graphEntity: document.getElementById('graph-entity'),
    graphCanvas: document.getElementById('graph-canvas'),
    serviceSummary: document.getElementById('service-summary'),
    serviceSearch: document.getElementById('service-search'),
    clearServiceSearch: document.getElementById('clear-service-search'),
    serviceKeyOnly: document.getElementById('service-key-only'),
    serviceHostedOnly: document.getElementById('service-hosted-only'),
    serviceNoHostOnly: document.getElementById('service-nohost-only'),
    serviceFamily: document.getElementById('service-family'),
    serviceGroup: document.getElementById('service-group'),
    serviceMinUsers: document.getElementById('service-min-users'),
    serviceMinUsersValue: document.getElementById('service-min-users-value'),
    serviceReset: document.getElementById('service-reset'),
    serviceResultCount: document.getElementById('service-result-count'),
    serviceSortMeta: document.getElementById('service-sort-meta'),
    serviceTableWrap: document.getElementById('service-table-wrap'),
    serviceTable: document.getElementById('service-table'),
    serviceBody: document.getElementById('service-body'),
    serviceEmpty: document.getElementById('service-empty'),
    familyTableWrap: document.getElementById('family-table-wrap'),
    familyTable: document.getElementById('family-table'),
    familyBody: document.getElementById('family-body'),
    familyEmpty: document.getElementById('family-empty'),
    serviceDetail: document.getElementById('service-detail'),
  };

  // ---------- persistence ----------

  function loadStatuses() {
    try {
      const raw = JSON.parse(localStorage.getItem(STATUS_KEY) || '{}');
      const out = {};
      for (const [id, value] of Object.entries(raw)) {
        if (STATUSES.includes(value)) out[id] = value;
      }
      return out;
    } catch {
      return {};
    }
  }

  function saveStatuses() {
    try {
      localStorage.setItem(STATUS_KEY, JSON.stringify(state.statuses));
    } catch {
      /* localStorage may be unavailable */
    }
  }

  function getStatus(module) {
    return state.statuses[module.programId] || 'untriaged';
  }

  function setStatus(programId, status) {
    if (!STATUSES.includes(status)) return;
    if (status === 'untriaged') delete state.statuses[programId];
    else state.statuses[programId] = status;
    saveStatuses();
    renderTable(filteredModules());
  }

  // ---------- formatting ----------

  const numberFormat = new Intl.NumberFormat();

  function formatNumber(value) {
    return numberFormat.format(value);
  }

  function formatBytes(value) {
    if (value == null) return '\u2014';
    if (value === 0) return '0 B';
    if (value < 1024) return `${value} B`;
    if (value < 1024 * 1024) return `${(value / 1024).toFixed(1)} KiB`;
    return `${(value / 1024 / 1024).toFixed(1)} MiB`;
  }

  function shortFs(hex) {
    if (!hex || /^0+$/.test(hex)) return '\u2014';
    return hex.length > 8 ? `0x\u2026${hex.slice(-6)}` : `0x${hex}`;
  }

  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, (ch) => {
      switch (ch) {
        case '&': return '&amp;';
        case '<': return '&lt;';
        case '>': return '&gt;';
        case '"': return '&quot;';
        case "'": return '&#39;';
        default: return ch;
      }
    });
  }

  function chips(items, empty = 'None') {
    if (!items || !items.length) return `<span class="muted">${esc(empty)}</span>`;
    const shown = items.map((item) => `<span class="chip">${esc(item)}</span>`).join('');
    return `<div class="chips">${shown}</div>`;
  }

  function tagsHtml(tags, limit = 3) {
    if (!tags || !tags.length) return '';
    const shown = tags.slice(0, limit).map((tag) => `<span class="tag">${esc(tag)}</span>`).join('');
    const more = tags.length > limit ? `<span class="tag">+${tags.length - limit}</span>` : '';
    return `<div class="tags">${shown}${more}</div>`;
  }

  function serviceChip(name) {
    return `<button class="chip" type="button" data-service="${esc(name)}">${esc(name)}</button>`;
  }

  function serviceChips(items, empty = 'None') {
    if (!items || !items.length) return `<span class="muted">${esc(empty)}</span>`;
    return `<div class="chips">${items.map(serviceChip).join('')}</div>`;
  }

  function moduleChip(ref) {
    return `<button class="chip${ref.focus ? ' focus-chip' : ''}" type="button" data-module-id="${esc(ref.programId)}">${esc(ref.name)}</button>`;
  }

  function moduleChips(items, empty = 'None') {
    if (!items || !items.length) return `<span class="muted">${esc(empty)}</span>`;
    return `<div class="chips">${items.map(moduleChip).join('')}</div>`;
  }

  function statusHtml(module) {
    const status = getStatus(module);
    return `<span class="status"><span class="dot dot-${status}" aria-hidden="true"></span>${STATUS_LABEL[status]}</span>`;
  }

  // ---------- data views ----------

  function setupTags() {
    const tags = [...new Set(MODULES.flatMap((m) => m.tags))].sort((a, b) => a.localeCompare(b));
    for (const tag of tags) {
      const option = document.createElement('option');
      option.value = tag;
      option.textContent = tag;
      els.tag.append(option);
    }
  }

  function renderSummary() {
    const focusCount = MODULES.filter((m) => m.focus).length;
    const fsCount = MODULES.filter((m) => m.fsPermNonzero).length;
    const hostCount = MODULES.filter((m) => m.hostCount > 0).length;
    const syscalls = MODULES.reduce((sum, m) => sum + m.syscallCount, 0);
    const highSurface = MODULES.filter((m) => m.surface >= 70).length;
    const cards = [
      { value: formatNumber(MODULES.length), label: 'modules', hint: 'system titles in the dump' },
      { value: formatNumber(focusCount), label: 'focus', hint: 'curated research priorities' },
      { value: formatNumber(fsCount), label: 'with FS perms', hint: 'nonzero filesystem permission mask' },
      { value: formatNumber(hostCount), label: 'service providers', hint: 'host at least one service' },
      { value: formatNumber(syscalls), label: 'syscalls', hint: 'sum across all NPDMs' },
      { value: formatNumber(highSurface), label: 'surface \u2265 70', hint: 'heuristic, not vulnerability' },
    ];
    els.summary.innerHTML = cards
      .map(
        (card) => `<article class="card">
          <div class="card-value">${esc(card.value)}</div>
          <div class="card-label">${esc(card.label)}</div>
          <div class="card-hint">${esc(card.hint)}</div>
        </article>`,
      )
      .join('');
  }

  function searchHaystack(module) {
    return [
      module.name,
      module.programId,
      module.file,
      module.note,
      module.noteSource,
      ...module.tags,
      ...module.hostsServices,
      ...module.usesServices,
      ...module.acidHostsServices,
      module.kernel.debug ? JSON.stringify(module.kernel.debug) : '',
    ]
      .join(' ')
      .toLowerCase();
  }

  function filteredModules() {
    const query = state.q.trim().toLowerCase();
    const result = MODULES.filter((module) => {
      if (state.focusOnly && !module.focus) return false;
      if (state.fsOnly && !module.fsPermNonzero) return false;
      if (state.hostsOnly && module.hostCount === 0) return false;
      if (state.debugOnly && !module.kernel.debug) return false;
      if (state.tag && !module.tags.includes(state.tag)) return false;
      if (module.surface < state.minSurface) return false;
      if (query && !searchHaystack(module).includes(query)) return false;
      return true;
    });
    sortModules(result);
    return result;
  }

  function sortValue(module, key) {
    if (key === 'fsPermissions') {
      return module.fsPermNonzero ? parseInt(module.fsPermissions, 16) : -1;
    }
    return module[key];
  }

  function compareModules(a, b, key) {
    const av = sortValue(a, key);
    const bv = sortValue(b, key);
    if (typeof av === 'string' || typeof bv === 'string') {
      return String(av).localeCompare(String(bv));
    }
    return (av || 0) - (bv || 0);
  }

  function sortModules(list) {
    if (state.sortKey === 'default') {
      list.sort(
        (a, b) =>
          Number(b.focus) - Number(a.focus) ||
          b.surface - a.surface ||
          a.name.localeCompare(b.name),
      );
      return;
    }
    const key = state.sortKey;
    list.sort((a, b) => {
      const primary = state.sortDir * compareModules(a, b, key);
      return primary || a.name.localeCompare(b.name);
    });
  }

  function sortDescription() {
    if (state.sortKey === 'default') return 'Sort: focus, then surface';
    const direction = state.sortDir === 1 ? '\u2191' : '\u2193';
    return `Sort: ${SORT_LABEL[state.sortKey] || state.sortKey} ${direction}`;
  }

  function rowHtml(module) {
    const selected = module.programId === state.selectedId ? ' selected' : '';
    const focusBadge = module.focus ? '<span class="badge">FOCUS</span>' : '';
    const fs = module.fsPermNonzero
      ? `<span class="mono" title="${esc(module.fsPermissionsHex)}">${esc(shortFs(module.fsPermissions))}</span>`
      : '<span class="muted">\u2014</span>';
    return `<tr data-id="${esc(module.programId)}" tabindex="0" class="module-row${selected}" aria-label="${esc(module.name)} details">
      <td class="name-cell">
        <div class="name-line"><span class="module-name">${esc(module.name)}</span>${focusBadge}</div>
        ${tagsHtml(module.tags)}
      </td>
      <td class="mono program-id">${esc(module.programId)}</td>
      <td>
        <div class="surface">
          <span class="surface-bar" title="Raw ${esc(module.surfaceRaw)}"><span style="width:${Math.max(2, Math.min(100, module.surface))}%"></span></span>
          <span class="surface-num">${module.surface.toFixed(1)}</span>
        </div>
      </td>
      <td class="num">${esc(module.syscallCount)}</td>
      <td class="num">${esc(module.hostCount)}</td>
      <td class="num">${esc(module.useCount)}</td>
      <td class="num">${esc(module.mapCount)}</td>
      <td class="num">${esc(module.irqCount)}</td>
      <td class="fs-cell">${fs}</td>
      <td class="status-cell">${statusHtml(module)}</td>
    </tr>`;
  }

  function renderTable(rows) {
    if (!rows.length) {
      els.tbody.innerHTML = '';
      els.empty.hidden = false;
      return;
    }
    els.empty.hidden = true;
    els.tbody.innerHTML = rows.map(rowHtml).join('');
  }

  function renderMeta(rows) {
    els.resultCount.textContent = `Showing ${formatNumber(rows.length)} of ${formatNumber(MODULES.length)} modules`;
    els.sortMeta.textContent = sortDescription();
  }

  function updateSortIndicators() {
    const headerRow = els.table.tHead && els.table.tHead.rows[0];
    if (!headerRow) return;
    for (const th of headerRow.cells) {
      const button = th.querySelector('button[data-sort]');
      if (!button) {
        th.setAttribute('aria-sort', 'none');
        continue;
      }
      if (state.sortKey === button.dataset.sort) {
        th.setAttribute('aria-sort', state.sortDir === 1 ? 'ascending' : 'descending');
      } else {
        th.setAttribute('aria-sort', 'none');
      }
    }
  }

  function detailPlaceholder() {
    return `<div class="detail-placeholder">
      <div class="placeholder-mark" aria-hidden="true">NPDM</div>
      <h2>Select a module</h2>
      <p>Click a row to see NPDM permissions, hosted and used services, syscalls, IRQs, and research status.</p>
      <p class="muted">Surface is a heuristic for research prioritization, not a vulnerability score.</p>
    </div>`;
  }

  function breakdownHtml(module) {
    const rows = module.surfaceBreakdown
      .map(
        (item) => `<div class="breakdown-row">
          <span>${esc(item.label)}<span class="muted"> \u00d7 ${esc(item.weight)}</span></span>
          <span class="mono">${esc(item.count)} \u2192 ${item.points.toFixed(1)}</span>
        </div>`,
      )
      .join('');
    return `<details class="breakdown">
      <summary>Score breakdown <span class="muted">raw ${esc(module.surfaceRaw)} / max ${esc(DATA.maxSurfaceRaw)}</span></summary>
      <div class="breakdown-list">${rows}</div>
    </details>`;
  }

  function detailHtml(module) {
    const statusOptions = STATUSES.map(
      (status) =>
        `<option value="${status}"${getStatus(module) === status ? ' selected' : ''}>${STATUS_LABEL[status]}</option>`,
    ).join('');
    const kvItems = [
      ['File', `<code>${esc(module.file)}</code>`],
      ['Version', `<code>${esc(module.versionHex)}</code> <span class="muted">(${formatNumber(module.version)})</span>`],
      ['64-bit', module.is64Bit ? 'Yes' : 'No'],
      ['Address space', esc(module.addressSpace)],
      ['Thread priority', esc(module.mainThreadPriority)],
      ['Thread core', esc(module.mainThreadCore)],
      ['Thread stack', esc(formatBytes(module.mainThreadStackSize))],
      ['System resource', esc(formatBytes(module.systemResourceSize))],
      ['Handle table', module.kernel.handleTable == null ? '<span class="muted">\u2014</span>' : esc(module.kernel.handleTable)],
      ['Memory maps', esc(module.mapCount)],
      ['IRQs', esc(module.irqCount)],
      ['Debug', module.kernel.debug ? `<code>${esc(JSON.stringify(module.kernel.debug))}</code>` : '<span class="muted">\u2014</span>'],
      ['Applet type', module.kernel.appletType == null ? '<span class="muted">\u2014</span>' : esc(module.kernel.appletType)],
    ]
      .map(
        ([label, value]) => `<div class="kv-item"><dt>${esc(label)}</dt><dd>${value}</dd></div>`,
      )
      .join('');
    const note = module.note
      ? `<div class="note">
          <div class="note-label">Note${module.noteSource ? ` \u00b7 ${esc(module.noteSource)}` : ''}</div>
          <p>${esc(module.note)}</p>
        </div>`
      : '';
    const acid = module.acidHostCount
      ? `<h3>ACID host services <span class="count">${module.acidHostCount}</span></h3>${serviceChips(module.acidHostsServices)}`
      : '';

    return `<div class="detail-head">
      <div>
        <div class="detail-eyebrow">${module.focus ? 'FOCUS \u00b7 ' : ''}${esc(module.programId)}</div>
        <h2>${esc(module.name)}</h2>
        ${tagsHtml(module.tags, 8)}
      </div>
      <button id="close-detail" class="icon-btn" type="button" aria-label="Close details">\u00d7</button>
    </div>

    <div class="status-row">
      <label for="status-select">Research status</label>
      <select id="status-select">${statusOptions}</select>
    </div>

    <div class="surface-card">
      <div class="surface-top"><span>Surface</span><strong>${module.surface.toFixed(1)}</strong></div>
      <div class="surface-bar big"><span style="width:${Math.max(2, Math.min(100, module.surface))}%"></span></div>
      <p class="muted small">Heuristic ranking, not a vulnerability score.</p>
      ${breakdownHtml(module)}
    </div>

    <dl class="kv">${kvItems}</dl>

    <h3>FS permissions</h3>
    <div class="code-block">${esc(module.fsPermissionsHex)}</div>

    <h3>Host services <span class="count">${module.hostCount}</span></h3>
    ${serviceChips(module.hostsServices)}
    <h3>Uses services <span class="count">${module.useCount}</span></h3>
    ${serviceChips(module.usesServices)}
    ${acid}

    <h3>Syscalls <span class="count">${module.syscallCount}</span></h3>
    <div class="code-block syscalls">${esc(module.kernel.syscalls.join(' '))}</div>

    <h3>IRQs <span class="count">${module.irqCount}</span></h3>
    ${module.irqCount ? `<div class="code-block">${esc(module.kernel.irqs.join(' '))}</div>` : '<p class="muted">None.</p>'}

    ${note}

    <div class="detail-actions">
      <button class="btn" type="button" data-copy="json">Copy JSON</button>
      <button class="btn" type="button" data-copy="csv">Copy CSV row</button>
      <button class="btn" type="button" data-copy="syscalls">Copy syscalls</button>
      <button class="btn" type="button" data-copy="id">Copy program ID</button>
    </div>`;
  }

  function renderDetail() {
    const module = state.selectedId ? BY_ID.get(state.selectedId) : null;
    if (!module) {
      els.detail.innerHTML = detailPlaceholder();
      return;
    }
    els.detail.innerHTML = detailHtml(module);
  }

  function renderModules() {
    const rows = filteredModules();
    const visible = new Set(rows.map((module) => module.programId));
    if (state.selectedId && !visible.has(state.selectedId)) state.selectedId = null;
    renderTable(rows);
    renderDetail();
    renderMeta(rows);
    updateSortIndicators();
  }

  function setupFamilies() {
    const names = FAMILIES.map((family) => family.name).sort((a, b) => a.localeCompare(b));
    for (const name of names) {
      const option = document.createElement('option');
      option.value = name;
      option.textContent = name;
      els.serviceFamily.append(option);
    }
  }

  function setupCompare() {
    const modules = [...MODULES].sort((a, b) => a.name.localeCompare(b.name));
    for (const module of modules) {
      for (const select of [els.compareA, els.compareB]) {
        const option = document.createElement('option');
        option.value = module.programId;
        option.textContent = `${module.name} (${module.programId})`;
        select.append(option);
      }
    }
    if (!BY_ID.has(state.compareA)) state.compareA = modules[0] ? modules[0].programId : '';
    if (!BY_ID.has(state.compareB)) {
      state.compareB = modules[1] ? modules[1].programId : state.compareA;
    }
  }

  function populateGraphEntities() {
    const mode = state.graphMode;
    const items =
      mode === 'service'
        ? [...SERVICES].sort((a, b) => a.name.localeCompare(b.name))
        : [...MODULES].sort((a, b) => a.name.localeCompare(b.name));
    els.graphMode.value = mode;
    els.graphEntity.innerHTML = '';
    for (const item of items) {
      const option = document.createElement('option');
      option.value = mode === 'service' ? item.name : item.programId;
      option.textContent =
        mode === 'service' ? item.name : `${item.name} (${item.programId})`;
      els.graphEntity.append(option);
    }
    const valid =
      mode === 'service'
        ? SERVICE_BY_NAME.has(state.graphEntity)
        : BY_ID.has(state.graphEntity);
    if (!valid) {
      state.graphEntity =
        mode === 'service'
          ? (SERVICE_BY_NAME.get('fsp-srv')?.name || SERVICES[0]?.name || '')
          : (BY_ID.get('040000000000004a')?.programId || MODULES[0]?.programId || '');
    }
    els.graphEntity.value = state.graphEntity;
  }

  function setupGraph() {
    populateGraphEntities();
  }

  function renderServiceSummary() {
    if (!els.serviceSummary) return;
    const keyCount = SERVICES.filter((service) => service.key).length;
    const noHostCount = SERVICES.filter((service) => service.noHost).length;
    const cards = [
      { value: formatNumber(SERVICES.length), label: 'services', hint: 'unique IPC service names' },
      { value: formatNumber(FAMILIES.length), label: 'families', hint: 'service-name families' },
      { value: formatNumber(keyCount), label: 'key', hint: 'curated high-value services' },
      { value: formatNumber(noHostCount), label: 'no host', hint: 'no provider in this dump' },
    ];
    els.serviceSummary.innerHTML = cards
      .map(
        (card) => `<article class="card">
          <div class="card-value">${esc(card.value)}</div>
          <div class="card-label">${esc(card.label)}</div>
          <div class="card-hint">${esc(card.hint)}</div>
        </article>`,
      )
      .join('');
  }

  function serviceHaystack(service) {
    return [
      service.name,
      service.family,
      service.note,
      ...service.hosts.flatMap((ref) => [ref.name, ref.programId]),
      ...service.users.flatMap((ref) => [ref.name, ref.programId]),
    ]
      .join(' ')
      .toLowerCase();
  }

  function filteredServices() {
    const query = state.sq.trim().toLowerCase();
    const result = SERVICES.filter((service) => {
      if (state.sfamily && service.family !== state.sfamily) return false;
      if (state.skeyOnly && !service.key) return false;
      if (state.shostedOnly && service.hostCount === 0) return false;
      if (state.snohostOnly && !service.noHost) return false;
      if (service.useCount < state.sminUsers) return false;
      if (query && !serviceHaystack(service).includes(query)) return false;
      return true;
    });
    sortServices(result);
    return result;
  }

  function familyHaystack(family) {
    return [
      family.name,
      family.note,
      ...family.services,
      ...family.hosts.flatMap((ref) => [ref.name, ref.programId]),
      ...family.users.flatMap((ref) => [ref.name, ref.programId]),
    ]
      .join(' ')
      .toLowerCase();
  }

  function filteredFamilies() {
    const query = state.sq.trim().toLowerCase();
    const result = FAMILIES.filter((family) => {
      if (state.sfamily && family.name !== state.sfamily) return false;
      if (state.skeyOnly && !family.key) return false;
      if (state.shostedOnly && family.hostCount === 0) return false;
      if (state.snohostOnly && !family.noHost) return false;
      if (family.useCount < state.sminUsers) return false;
      if (query && !familyHaystack(family).includes(query)) return false;
      return true;
    });
    sortFamilies(result);
    return result;
  }

  function compareFamilies(a, b, key) {
    const av = a[key];
    const bv = b[key];
    if (typeof av === 'string' || typeof bv === 'string') {
      return String(av).localeCompare(String(bv));
    }
    return (av || 0) - (bv || 0);
  }

  function sortFamilies(list) {
    const key = state.fsortKey;
    list.sort((a, b) => {
      if (key === 'default') {
        return (
          b.useCount - a.useCount ||
          b.hostCount - a.hostCount ||
          a.name.localeCompare(b.name)
        );
      }
      return (
        state.fsortDir * compareFamilies(a, b, key) ||
        a.name.localeCompare(b.name)
      );
    });
  }

  function familySortDescription() {
    if (state.fsortKey === 'default') return 'Sort: users, then hosts';
    const direction = state.fsortDir === 1 ? '\u2191' : '\u2193';
    return `Sort: ${FSORT_LABEL[state.fsortKey] || state.fsortKey} ${direction}`;
  }

  function familyRowHtml(family) {
    const selected = family.name === state.selectedFamily ? ' selected' : '';
    const tags = [
      family.key ? '<span class="badge">KEY</span>' : '',
      family.likelyBuiltin ? '<span class="badge badge-builtin">BUILT-IN?</span>' : '',
      family.noHost ? '<span class="no-host">no host in dump</span>' : '',
    ]
      .filter(Boolean)
      .join(' ');
    return `<tr data-family="${esc(family.name)}" tabindex="0" class="module-row${selected}" aria-label="${esc(family.name)} family details">
      <td class="name-cell">
        <div class="name-line"><span class="family-name">${esc(family.name)}</span></div>
        ${tags ? `<div class="family-services">${tags}</div>` : ''}
      </td>
      <td class="num">${esc(family.serviceCount)}</td>
      <td class="num">${family.hostCount ? esc(family.hostCount) : '<span class="muted">\u2014</span>'}</td>
      <td class="num">${esc(family.useCount)}</td>
      <td class="num">${esc(family.totalCount)}</td>
      <td>${family.key ? '<span class="badge">KEY</span>' : family.likelyBuiltin ? '<span class="badge badge-builtin">BUILT-IN?</span>' : '<span class="muted">\u2014</span>'}</td>
    </tr>`;
  }

  function renderFamilyTable(rows) {
    if (!rows.length) {
      els.familyBody.innerHTML = '';
      els.familyEmpty.hidden = false;
      return;
    }
    els.familyEmpty.hidden = true;
    els.familyBody.innerHTML = rows.map(familyRowHtml).join('');
  }

  function renderFamilyMeta(rows) {
    els.serviceResultCount.textContent = `Showing ${formatNumber(rows.length)} of ${formatNumber(FAMILIES.length)} families`;
    els.serviceSortMeta.textContent = familySortDescription();
  }

  function updateFamilySortIndicators() {
    const headerRow = els.familyTable.tHead && els.familyTable.tHead.rows[0];
    if (!headerRow) return;
    for (const th of headerRow.cells) {
      const button = th.querySelector('button[data-fsort]');
      if (!button) {
        th.setAttribute('aria-sort', 'none');
        continue;
      }
      if (state.fsortKey === button.dataset.fsort) {
        th.setAttribute('aria-sort', state.fsortDir === 1 ? 'ascending' : 'descending');
      } else {
        th.setAttribute('aria-sort', 'none');
      }
    }
  }

  function familyDetailPlaceholder() {
    return `<div class="detail-placeholder">
      <div class="placeholder-mark">FAMILY</div>
      <h2>Select a family</h2>
      <p>Families group related service names such as spl:_, pm:_, or gsv:_. Use them to see the unique modules behind a whole service family.</p>
    </div>`;
  }

  function familyDetailHtml(family) {
    const tags = [
      family.key ? '<span class="badge">KEY</span>' : '',
      family.likelyBuiltin ? '<span class="badge badge-builtin">BUILT-IN?</span>' : '',
    ]
      .filter(Boolean)
      .join(' ');
    const warning = family.likelyBuiltin
      ? `<div class="warning"><strong>Likely built-in.</strong> Every service in this family has no host in this dump. Verify against the NPDM/ACL data before relying on the classification.</div>`
      : family.noHost
        ? `<div class="warning"><strong>No host in this dump.</strong> Every service in this family has no provider in this dump.</div>`
        : '';
    const note = family.note
      ? `<div class="service-note"><strong>Note.</strong> ${esc(family.note)}</div>`
      : '';
    const kv = [
      ['Services', esc(family.serviceCount)],
      ['Unique hosts', family.hostCount ? esc(family.hostCount) : '<span class="muted">0 (no host in dump)</span>'],
      ['Unique users', esc(family.useCount)],
      ['Total', esc(family.totalCount)],
      ['Key services', esc(family.keyCount)],
      ['No-host services', esc(family.noHostCount)],
    ]
      .map(
        ([label, value]) => `<div class="kv-item"><dt>${esc(label)}</dt><dd>${value}</dd></div>`,
      )
      .join('');
    const serviceButtons = family.services
      .map(
        (name) =>
          `<button class="chip" type="button" data-service="${esc(name)}">${esc(name)}</button>`,
      )
      .join('');
    return `<div class="detail-head">
      <div>
        <div class="detail-eyebrow">SERVICE FAMILY</div>
        <h2>${esc(family.name)} ${tags}</h2>
      </div>
      <button id="close-family-detail" class="icon-btn" type="button" aria-label="Close details">\u00d7</button>
    </div>

    <dl class="kv">${kv}</dl>
    ${warning}
    ${note}

    <h3>Services <span class="count">${family.serviceCount}</span></h3>
    <div class="chips">${serviceButtons}</div>

    <h3>Hosted by <span class="count">${family.hostCount}</span></h3>
    ${moduleChips(family.hosts, 'No host in this dump')}
    <h3>Used by <span class="count">${family.useCount}</span></h3>
    ${moduleChips(family.users, 'No users in this dump')}

    <div class="detail-actions">
      <button class="btn" type="button" data-fcopy="json">Copy JSON</button>
      <button class="btn" type="button" data-fcopy="csv">Copy CSV row</button>
      <button class="btn" type="button" data-fcopy="name">Copy family name</button>
    </div>`;
  }

  function renderFamilyDetail() {
    const family = state.selectedFamily ? FAMILY_BY_NAME.get(state.selectedFamily) : null;
    els.serviceDetail.innerHTML = family ? familyDetailHtml(family) : familyDetailPlaceholder();
  }

  function compareServices(a, b, key) {
    const av = a[key];
    const bv = b[key];
    if (typeof av === 'string' || typeof bv === 'string') {
      return String(av).localeCompare(String(bv));
    }
    return (av || 0) - (bv || 0);
  }

  function sortServices(list) {
    const key = state.ssortKey;
    list.sort((a, b) => {
      if (key === 'default') {
        return (
          b.useCount - a.useCount ||
          b.hostCount - a.hostCount ||
          a.name.localeCompare(b.name)
        );
      }
      return (
        state.ssortDir * compareServices(a, b, key) ||
        a.name.localeCompare(b.name)
      );
    });
  }

  function serviceSortDescription() {
    if (state.ssortKey === 'default') return 'Sort: users, then hosts';
    const direction = state.ssortDir === 1 ? '\u2191' : '\u2193';
    return `Sort: ${SSORT_LABEL[state.ssortKey] || state.ssortKey} ${direction}`;
  }

  function serviceRowHtml(service) {
    const selected = service.name === state.selectedService ? ' selected' : '';
    const noHost = service.noHost
      ? '<div class="tags"><span class="no-host">no host in dump</span></div>'
      : '';
    return `<tr data-service="${esc(service.name)}" tabindex="0" class="module-row${selected}" aria-label="${esc(service.name)} service details">
      <td class="name-cell">
        <div class="name-line"><span class="service-name">${esc(service.name)}</span></div>
        ${noHost}
      </td>
      <td class="service-family">${esc(service.family)}</td>
      <td class="num">${service.hostCount ? esc(service.hostCount) : '<span class="muted">\u2014</span>'}</td>
      <td class="num">${esc(service.useCount)}</td>
      <td class="num">${esc(service.totalCount)}</td>
      <td>${service.key ? '<span class="badge">KEY</span>' : '<span class="muted">\u2014</span>'}</td>
    </tr>`;
  }

  function renderServiceTable(rows) {
    if (!rows.length) {
      els.serviceBody.innerHTML = '';
      els.serviceEmpty.hidden = false;
      return;
    }
    els.serviceEmpty.hidden = true;
    els.serviceBody.innerHTML = rows.map(serviceRowHtml).join('');
  }

  function renderServiceMeta(rows) {
    els.serviceResultCount.textContent = `Showing ${formatNumber(rows.length)} of ${formatNumber(SERVICES.length)} services`;
    els.serviceSortMeta.textContent = serviceSortDescription();
  }

  function updateServiceSortIndicators() {
    const headerRow = els.serviceTable.tHead && els.serviceTable.tHead.rows[0];
    if (!headerRow) return;
    for (const th of headerRow.cells) {
      const button = th.querySelector('button[data-ssort]');
      if (!button) {
        th.setAttribute('aria-sort', 'none');
        continue;
      }
      if (state.ssortKey === button.dataset.ssort) {
        th.setAttribute('aria-sort', state.ssortDir === 1 ? 'ascending' : 'descending');
      } else {
        th.setAttribute('aria-sort', 'none');
      }
    }
  }

  function serviceDetailPlaceholder() {
    return `<div class="detail-placeholder">
      <div class="placeholder-mark">IPC</div>
      <h2>Select a service</h2>
      <p>See which modules host it, which modules use it, and whether the host is missing from the system-title dump.</p>
      <p class="muted">A service with no host here is usually a built-in sysmodule/KIP such as fs, ldr, sm, pm, or spl.</p>
    </div>`;
  }

  function serviceDetailHtml(service) {
    const keyBadge = service.key ? '<span class="badge">KEY</span>' : '';
    const hostWarning = service.noHost
      ? `<div class="warning"><strong>No host in this dump.</strong> Likely a built-in sysmodule/KIP (fs, ldr, sm, pm, spl). The service still has ${service.useCount} client modules.</div>`
      : '';
    const note = service.note
      ? `<div class="service-note"><strong>Note.</strong> ${esc(service.note)}</div>`
      : '';
    const kv = [
      ['Family', esc(service.family)],
      ['Hosts', service.hostCount ? esc(service.hostCount) : '<span class="muted">0 (no host in dump)</span>'],
      ['Users', esc(service.useCount)],
      ['Total', esc(service.totalCount)],
      ['Key', service.key ? 'Yes' : 'No'],
      ['ACID hosts', service.acidHostCount ? esc(service.acidHostCount) : '<span class="muted">\u2014</span>'],
    ]
      .map(
        ([label, value]) => `<div class="kv-item"><dt>${esc(label)}</dt><dd>${value}</dd></div>`,
      )
      .join('');
    const acid = service.acidHostCount
      ? `<h3>ACID hosts <span class="count">${service.acidHostCount}</span></h3>${moduleChips(service.acidHosts)}`
      : '';
    return `<div class="detail-head">
      <div>
        <div class="detail-eyebrow">IPC SERVICE</div>
        <h2>${esc(service.name)} ${keyBadge}</h2>
        <div class="detail-eyebrow">${esc(service.family)}</div>
      </div>
      <button id="close-service-detail" class="icon-btn" type="button" aria-label="Close details">\u00d7</button>
    </div>

    <dl class="kv">${kv}</dl>
    ${hostWarning}
    ${note}

    <h3>Hosted by <span class="count">${service.hostCount}</span></h3>
    ${moduleChips(service.hosts, 'No host in this dump')}
    <h3>Used by <span class="count">${service.useCount}</span></h3>
    ${moduleChips(service.users, 'No users in this dump')}
    ${acid}

    <div class="detail-actions">
      <button class="btn" type="button" data-scopy="json">Copy JSON</button>
      <button class="btn" type="button" data-scopy="csv">Copy CSV row</button>
      <button class="btn" type="button" data-scopy="name">Copy service name</button>
    </div>`;
  }

  function renderServiceDetail() {
    const service = state.selectedService ? SERVICE_BY_NAME.get(state.selectedService) : null;
    els.serviceDetail.innerHTML = service ? serviceDetailHtml(service) : serviceDetailPlaceholder();
  }

  function renderServices() {
    if (state.sgroup) {
      els.serviceTableWrap.hidden = true;
      els.familyTableWrap.hidden = false;
      const rows = filteredFamilies();
      renderFamilyTable(rows);
      renderFamilyDetail();
      renderFamilyMeta(rows);
      updateFamilySortIndicators();
    } else {
      els.serviceTableWrap.hidden = false;
      els.familyTableWrap.hidden = true;
      const rows = filteredServices();
      renderServiceTable(rows);
      renderServiceDetail();
      renderServiceMeta(rows);
      updateServiceSortIndicators();
    }
  }

  function familyButton(name) {
    return `<button class="chip" type="button" data-family-open="${esc(name)}">${esc(name)}</button>`;
  }

  function insightCard(title, subtitle, body) {
    return `<article class="insight-card">
      <h2>${esc(title)}</h2>
      <p class="insight-sub">${subtitle}</p>
      ${body}
    </article>`;
  }

  function clusterCard(title, subtitle, cluster) {
    const modules = cluster.modules.length
      ? `<div class="chips">${cluster.modules.map(moduleChip).join('')}</div>`
      : '<span class="muted">No modules.</span>';
    const services = cluster.services.length
      ? `<div class="chips">${cluster.services.map((service) => serviceChip(service.name)).join('')}</div>`
      : '<span class="muted">No services.</span>';
    return insightCard(
      title,
      subtitle,
      `<h3>Modules</h3>${modules}<h3>Services</h3>${services}`,
    );
  }

  function renderInsights() {
    const insights = DATA.insights;
    if (!insights) {
      els.insightsGrid.innerHTML = '<p class="muted">No insights data in this build.</p>';
      return;
    }

    const gapRows = insights.builtinGaps
      .map(
        (service) => `<tr>
          <td>${serviceChip(service.name)}</td>
          <td class="num">${esc(service.useCount)}</td>
          <td>${familyButton(service.family)}</td>
        </tr>`,
      )
      .join('');
    const gapTable = `<table class="insight-table">
      <colgroup><col style="width:52%"><col style="width:22%"><col style="width:26%"></colgroup>
      <thead><tr><th>Service</th><th>Users</th><th>Family</th></tr></thead>
      <tbody>${gapRows}</tbody>
    </table>`;

    const leverageRows = insights.hostLeverage
      .map(
        (item) => `<tr>
          <td>${moduleChip(item.module)}</td>
          <td class="num">${esc(item.uniqueUsers)}</td>
          <td class="num">${esc(item.serviceCount)}</td>
          <td>${item.topService ? serviceChip(item.topService.name) : '<span class="muted">\u2014</span>'}</td>
        </tr>`,
      )
      .join('');
    const leverageTable = `<table class="insight-table">
      <colgroup><col style="width:30%"><col style="width:22%"><col style="width:16%"><col style="width:32%"></colgroup>
      <thead><tr><th>Module</th><th>Unique users</th><th>Services</th><th>Top service</th></tr></thead>
      <tbody>${leverageRows}</tbody>
    </table>`;

    const clientRows = insights.widestClients
      .map(
        (module) => `<tr>
          <td>${moduleChip(module)}</td>
          <td class="num">${esc(module.useCount)}</td>
          <td class="num">${esc(module.hostCount)}</td>
          <td class="num">${esc(module.surface.toFixed(1))}</td>
        </tr>`,
      )
      .join('');
    const clientTable = `<table class="insight-table">
      <colgroup><col style="width:40%"><col style="width:20%"><col style="width:20%"><col style="width:20%"></colgroup>
      <thead><tr><th>Module</th><th>Uses</th><th>Hosts</th><th>Surface</th></tr></thead>
      <tbody>${clientRows}</tbody>
    </table>`;

    const familyRows = insights.builtinFamilies
      .map(
        (family) => `<tr>
          <td>${familyButton(family.name)}</td>
          <td class="num">${esc(family.serviceCount)}</td>
          <td class="num">${esc(family.useCount)}</td>
          <td>${family.likelyBuiltin ? '<span class="badge badge-builtin">BUILT-IN?</span>' : '<span class="muted">\u2014</span>'}</td>
        </tr>`,
      )
      .join('');
    const familyTable = `<table class="insight-table">
      <colgroup><col style="width:40%"><col style="width:20%"><col style="width:20%"><col style="width:20%"></colgroup>
      <thead><tr><th>Family</th><th>Services</th><th>Users</th><th>Tag</th></tr></thead>
      <tbody>${familyRows}</tbody>
    </table>`;

    const cards = [
      insightCard(
        'Built-in gaps',
        'Services with no host in this dump, ranked by client count. These are candidate built-in KIP surfaces.',
        gapTable,
      ),
      insightCard(
        'Host leverage',
        'Modules whose hosted services reach the most unique client modules.',
        leverageTable,
      ),
      insightCard(
        'Widest clients',
        'Modules that consume the most services. These are the broadest IPC clients.',
        clientTable,
      ),
      insightCard(
        'Built-in families',
        'Families where every service has no host in this dump, ranked by unique users.',
        familyTable,
      ),
      clusterCard(
        'GPU / codec cluster',
        'Providers and services in the GPU, OpenMAX codec, and display stack.',
        insights.clusters.gpu,
      ),
      clusterCard(
        'Filesystem cluster',
        'Providers and services in the fs, ldr, ro, ncm, and storage stack.',
        insights.clusters.filesystem,
      ),
      clusterCard(
        'Network cluster',
        'Providers and services in the BSD socket, NIFM, LDN, SSL, and wireless stack.',
        insights.clusters.network,
      ),
      clusterCard(
        'Input cluster',
        'Providers and services in the HID and input method framework stack.',
        insights.clusters.input,
      ),
    ];

    els.insightsGrid.innerHTML = cards.join('');
  }

  function compareCard(module) {
    const focus = module.focus ? 'FOCUS \u00b7 ' : '';
    return `<article class="compare-card">
      <div class="detail-eyebrow">${focus}${esc(module.programId)}</div>
      <h2>${esc(module.name)}</h2>
      ${tagsHtml(module.tags, 8)}
      <p class="insight-sub">Surface ${module.surface.toFixed(1)} \u00b7 ${module.syscallCount} syscalls \u00b7 ${module.hostCount} hosts \u00b7 ${module.useCount} uses</p>
    </article>`;
  }

  function compareRow(label, aValue, bValue, options = {}) {
    const { numeric = true, format = (value) => String(value) } = options;
    let diff;
    if (numeric && typeof aValue === 'number' && typeof bValue === 'number') {
      const delta = aValue - bValue;
      const cls = delta > 0 ? 'diff-pos' : delta < 0 ? 'diff-neg' : 'diff-same';
      const sign = delta > 0 ? '+' : '';
      diff = `<span class="${cls}">${sign}${esc(format(delta))}</span>`;
    } else {
      const same = String(aValue) === String(bValue);
      diff = `<span class="${same ? 'diff-same' : 'diff-neg'}">${same ? 'same' : 'different'}</span>`;
    }
    return `<tr>
      <td>${esc(label)}</td>
      <td class="num mono">${esc(format(aValue))}</td>
      <td class="num mono">${esc(format(bValue))}</td>
      <td class="num">${diff}</td>
    </tr>`;
  }

  function splitServiceSets(aItems, bItems) {
    const aSet = new Set(aItems);
    const bSet = new Set(bItems);
    return {
      onlyA: [...aSet].filter((item) => !bSet.has(item)).sort(),
      shared: [...aSet].filter((item) => bSet.has(item)).sort(),
      onlyB: [...bSet].filter((item) => !aSet.has(item)).sort(),
    };
  }

  function serviceDiffCard(title, items) {
    return `<div class="compare-col">
      <h3>${esc(title)} <span class="count">${items.length}</span></h3>
      ${serviceChips(items, 'None')}
    </div>`;
  }

  function renderCompare() {
    const a = BY_ID.get(state.compareA) || MODULES[0];
    const b = BY_ID.get(state.compareB) || MODULES[1] || MODULES[0];
    if (!a || !b) {
      els.compareOutput.innerHTML = '<p class="muted">No modules available.</p>';
      return;
    }

    const hostDiff = splitServiceSets(a.hostsServices, b.hostsServices);
    const useDiff = splitServiceSets(a.usesServices, b.usesServices);
    const sysA = new Set(a.kernel.syscalls);
    const sysB = new Set(b.kernel.syscalls);
    const sysOnlyA = [...sysA].filter((value) => !sysB.has(value)).sort((x, y) => x - y);
    const sysOnlyB = [...sysB].filter((value) => !sysA.has(value)).sort((x, y) => x - y);
    const sysShared = [...sysA].filter((value) => sysB.has(value)).sort((x, y) => x - y);

    const metricRows = [
      compareRow('Surface', a.surface, b.surface, { format: (value) => value.toFixed(1) }),
      compareRow('Syscalls', a.syscallCount, b.syscallCount),
      compareRow('Host services', a.hostCount, b.hostCount),
      compareRow('Used services', a.useCount, b.useCount),
      compareRow('Memory maps', a.mapCount, b.mapCount),
      compareRow('IRQs', a.irqCount, b.irqCount),
      compareRow('Thread priority', a.mainThreadPriority, b.mainThreadPriority),
      compareRow('Thread core', a.mainThreadCore, b.mainThreadCore),
      compareRow('Thread stack', a.mainThreadStackSize, b.mainThreadStackSize, { format: formatBytes }),
      compareRow('FS permissions', a.fsPermissionsHex, b.fsPermissionsHex, { numeric: false }),
      compareRow(
        'Handle table',
        a.kernel.handleTable == null ? '\u2014' : a.kernel.handleTable,
        b.kernel.handleTable == null ? '\u2014' : b.kernel.handleTable,
        { numeric: false },
      ),
      compareRow(
        'Debug',
        a.kernel.debug ? 'yes' : 'no',
        b.kernel.debug ? 'yes' : 'no',
        { numeric: false },
      ),
    ].join('');

    els.compareOutput.innerHTML = `
      <div class="compare-modules">${compareCard(a)}${compareCard(b)}</div>

      <section class="insight-card">
        <h2>Metrics</h2>
        <p class="insight-sub">A is the left module, B is the right module. Delta is A minus B.</p>
        <table class="compare-table">
          <colgroup><col style="width:34%"><col style="width:22%"><col style="width:22%"><col style="width:22%"></colgroup>
          <thead><tr><th>Metric</th><th>A</th><th>B</th><th>Diff</th></tr></thead>
          <tbody>${metricRows}</tbody>
        </table>
      </section>

      <section class="insight-card">
        <h2>Hosted services</h2>
        <p class="insight-sub">Services each module provides to other processes.</p>
        <div class="compare-columns">
          ${serviceDiffCard('Only A', hostDiff.onlyA)}
          ${serviceDiffCard('Shared', hostDiff.shared)}
          ${serviceDiffCard('Only B', hostDiff.onlyB)}
        </div>
      </section>

      <section class="insight-card">
        <h2>Used services</h2>
        <p class="insight-sub">Services each module consumes.</p>
        <div class="compare-columns">
          ${serviceDiffCard('Only A', useDiff.onlyA)}
          ${serviceDiffCard('Shared', useDiff.shared)}
          ${serviceDiffCard('Only B', useDiff.onlyB)}
        </div>
      </section>

      <section class="insight-card">
        <h2>Syscalls</h2>
        <p class="insight-sub">A only / shared / B only syscall numbers.</p>
        <div class="compare-syscalls">
          <div class="compare-col"><h3>Only A <span class="count">${sysOnlyA.length}</span></h3><div class="code-block">${esc(sysOnlyA.join(' ') || 'None')}</div></div>
          <div class="compare-col"><h3>Shared <span class="count">${sysShared.length}</span></h3><div class="code-block">${esc(sysShared.join(' ') || 'None')}</div></div>
          <div class="compare-col"><h3>Only B <span class="count">${sysOnlyB.length}</span></h3><div class="code-block">${esc(sysOnlyB.join(' ') || 'None')}</div></div>
        </div>
      </section>`;
  }

  function truncateLabel(text, max = 30) {
    const value = String(text);
    return value.length > max ? `${value.slice(0, max - 1)}\u2026` : value;
  }

  function serviceGraphNode(name) {
    const service = SERVICE_BY_NAME.get(name);
    return service
      ? {
          kind: 'service',
          id: service.name,
          name: service.name,
          sub: `${service.useCount} users`,
          focus: service.key,
        }
      : null;
  }

  function moduleGraphNode(ref) {
    return {
      kind: 'module',
      id: ref.programId,
      name: ref.name,
      sub: ref.programId,
      focus: ref.focus,
    };
  }

  function servicesForGraph(names) {
    return names
      .map(serviceGraphNode)
      .filter(Boolean)
      .sort(
        (a, b) =>
          (SERVICE_BY_NAME.get(b.id)?.useCount || 0) -
            (SERVICE_BY_NAME.get(a.id)?.useCount || 0) ||
          a.name.localeCompare(b.name),
      );
  }

  function graphNodeSvg(node, x, y, width, height, center = false) {
    const kindClass = node.kind === 'module' ? ' module' : ' service';
    const focusClass = node.focus ? ' focus' : '';
    const centerClass = center ? ' center' : '';
    const dataAttr =
      node.kind === 'module'
        ? `data-module-id="${esc(node.id)}"`
        : `data-service="${esc(node.id)}"`;
    const label = truncateLabel(node.name, center ? 28 : 26);
    const sub = center && node.sub
      ? `<text class="graph-sub" x="${x + 12}" y="${y + 33}">${esc(truncateLabel(node.sub, 34))}</text>`
      : '';
    return `<g class="graph-node${kindClass}${focusClass}${centerClass}" ${dataAttr} tabindex="0" role="button" aria-label="${esc(node.name)}">
      <title>${esc(node.name)}${node.sub ? ` \u2014 ${esc(node.sub)}` : ''}</title>
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="8"></rect>
      <text x="${x + 12}" y="${y + (center ? 19 : 22)}">${esc(label)}</text>
      ${sub}
    </g>`;
  }

  function buildGraphSvg(center, left, right, leftLabel, rightLabel, moreLeft, moreRight) {
    const width = 1000;
    const nodeWidth = 260;
    const nodeHeight = 34;
    const gap = 10;
    const margin = 24;
    const header = 34;
    const centerHeight = 48;
    const rows = Math.max(left.length, right.length, 1);
    const height = Math.max(380, rows * (nodeHeight + gap) + header + (moreLeft || moreRight ? 30 : 0));
    const centerX = (width - nodeWidth) / 2;
    const leftX = margin;
    const rightX = width - nodeWidth - margin;
    const centerY = (height - centerHeight) / 2;
    const leftStart = (height - left.length * (nodeHeight + gap)) / 2;
    const rightStart = (height - right.length * (nodeHeight + gap)) / 2;

    const lines = [];
    const nodes = [];
    left.forEach((node, index) => {
      const y = leftStart + index * (nodeHeight + gap);
      lines.push(
        `<line class="graph-edge" x1="${centerX}" y1="${centerY + centerHeight / 2}" x2="${leftX + nodeWidth}" y2="${y + nodeHeight / 2}"></line>`,
      );
      nodes.push(graphNodeSvg(node, leftX, y, nodeWidth, nodeHeight));
    });
    right.forEach((node, index) => {
      const y = rightStart + index * (nodeHeight + gap);
      lines.push(
        `<line class="graph-edge" x1="${centerX + nodeWidth}" y1="${centerY + centerHeight / 2}" x2="${rightX}" y2="${y + nodeHeight / 2}"></line>`,
      );
      nodes.push(graphNodeSvg(node, rightX, y, nodeWidth, nodeHeight));
    });
    nodes.push(graphNodeSvg(center, centerX, centerY, nodeWidth, centerHeight, true));

    const more = [
      moreLeft > 0
        ? `<text class="graph-more" x="${leftX}" y="${height - 10}">+${moreLeft} more</text>`
        : '',
      moreRight > 0
        ? `<text class="graph-more" x="${rightX}" y="${height - 10}">+${moreRight} more</text>`
        : '',
    ].join('');

    return `<svg viewBox="0 0 ${width} ${height}" width="100%" role="img" aria-label="IPC connection graph">
      <text class="graph-label" x="${leftX}" y="18">${esc(leftLabel)}</text>
      <text class="graph-label" x="${rightX}" y="18">${esc(rightLabel)}</text>
      ${lines.join('')}
      ${nodes.join('')}
      ${more}
    </svg>`;
  }

  function renderGraph() {
    if (!els.graphCanvas) return;
    let center;
    let leftAll;
    let rightAll;
    let leftLabel;
    let rightLabel;

    if (state.graphMode === 'service') {
      const service =
        SERVICE_BY_NAME.get(state.graphEntity) ||
        SERVICE_BY_NAME.get('fsp-srv') ||
        SERVICES[0];
      if (!service) {
        els.graphCanvas.innerHTML = '<p class="muted">No services available.</p>';
        return;
      }
      state.graphEntity = service.name;
      center = {
        kind: 'service',
        id: service.name,
        name: service.name,
        sub: service.family,
        focus: service.key,
      };
      leftAll = service.hosts.map(moduleGraphNode);
      rightAll = service.users.map(moduleGraphNode);
      leftLabel = 'Hosts';
      rightLabel = 'Users';
    } else {
      const module =
        BY_ID.get(state.graphEntity) ||
        BY_ID.get('040000000000004a') ||
        MODULES[0];
      if (!module) {
        els.graphCanvas.innerHTML = '<p class="muted">No modules available.</p>';
        return;
      }
      state.graphEntity = module.programId;
      center = {
        kind: 'module',
        id: module.programId,
        name: module.name,
        sub: module.programId,
        focus: module.focus,
      };
      leftAll = servicesForGraph(module.hostsServices);
      rightAll = servicesForGraph(module.usesServices);
      leftLabel = 'Hosts';
      rightLabel = 'Uses';
    }

    const left = leftAll.slice(0, 12);
    const right = rightAll.slice(0, 16);
    state.graphData = {
      mode: state.graphMode,
      entity: state.graphEntity,
      center,
      left: leftAll,
      right: rightAll,
      leftShown: left,
      rightShown: right,
      moreLeft: leftAll.length - left.length,
      moreRight: rightAll.length - right.length,
    };
    els.graphCanvas.innerHTML = buildGraphSvg(
      center,
      left,
      right,
      leftLabel,
      rightLabel,
      state.graphData.moreLeft,
      state.graphData.moreRight,
    );
  }

  function updateViewTabs() {
    const view = state.view;
    const services = view === 'services';
    const insights = view === 'insights';
    const compare = view === 'compare';
    const graph = view === 'graph';
    const modules = view === 'modules';
    els.modulesView.hidden = !modules;
    els.servicesView.hidden = !services;
    els.insightsView.hidden = !insights;
    els.compareView.hidden = !compare;
    els.graphView.hidden = !graph;
    els.viewModules.classList.toggle('active', modules);
    els.viewServices.classList.toggle('active', services);
    els.viewInsights.classList.toggle('active', insights);
    els.viewCompare.classList.toggle('active', compare);
    els.viewGraph.classList.toggle('active', graph);
    els.viewModules.setAttribute('aria-selected', String(modules));
    els.viewServices.setAttribute('aria-selected', String(services));
    els.viewInsights.setAttribute('aria-selected', String(insights));
    els.viewCompare.setAttribute('aria-selected', String(compare));
    els.viewGraph.setAttribute('aria-selected', String(graph));
    els.exportCsv.textContent = insights
      ? 'Export insights JSON'
      : compare
        ? 'Export compare JSON'
        : graph
          ? 'Export graph JSON'
          : 'Export filtered CSV';
  }

  function switchView(view) {
    if (
      view !== 'modules' &&
      view !== 'services' &&
      view !== 'insights' &&
      view !== 'compare' &&
      view !== 'graph'
    ) {
      return;
    }
    state.view = view;
    render();
  }

  function render() {
    updateViewTabs();
    if (state.view === 'insights') renderInsights();
    else if (state.view === 'compare') renderCompare();
    else if (state.view === 'graph') renderGraph();
    else if (state.view === 'services') renderServices();
    else renderModules();
    updateHash();
  }

  // ---------- hash state ----------

  function clampNumber(value, min, max) {
    const number = Number(value);
    if (!Number.isFinite(number)) return min;
    return Math.max(min, Math.min(max, number));
  }

  function clampMinSurface(value) {
    return clampNumber(value, 0, 100);
  }

  function readHash() {
    const params = new URLSearchParams(location.hash.replace(/^#/, ''));
    const view = params.get('view');
    state.view =
      view === 'services' || view === 'insights' || view === 'compare' || view === 'graph'
        ? view
        : 'modules';
    state.q = params.get('q') || '';
    state.focusOnly = params.get('focus') === '1';
    state.fsOnly = params.get('fs') === '1';
    state.hostsOnly = params.get('hosts') === '1';
    state.debugOnly = params.get('debug') === '1';
    state.tag = params.get('tag') || '';
    state.minSurface = clampMinSurface(params.get('min') || 0);
    const sortKey = params.get('sort') || 'default';
    state.sortKey = ALLOWED_SORTS.has(sortKey) ? sortKey : 'default';
    state.sortDir = params.get('dir') === '1' ? 1 : -1;
    const selectedId = params.get('sel');
    state.selectedId = selectedId && BY_ID.has(selectedId) ? selectedId : null;

    state.sq = params.get('sq') || '';
    state.skeyOnly = params.get('skey') === '1';
    state.shostedOnly = params.get('shosted') === '1';
    state.snohostOnly = params.get('snohost') === '1';
    state.sminUsers = clampNumber(params.get('smin') || 0, 0, DATA.maxServiceUse || 0);
    const sfamily = params.get('sfamily') || '';
    state.sfamily = FAMILY_BY_NAME.has(sfamily) ? sfamily : '';
    state.sgroup = params.get('sgroup') === '1';
    const ssortKey = params.get('ssort') || 'useCount';
    state.ssortKey = ALLOWED_SSORTS.has(ssortKey) ? ssortKey : 'useCount';
    state.ssortDir = params.get('sdir') === '1' ? 1 : -1;
    const fsortKey = params.get('fsort') || 'useCount';
    state.fsortKey = ALLOWED_FSORTS.has(fsortKey) ? fsortKey : 'useCount';
    state.fsortDir = params.get('fdir') === '1' ? 1 : -1;
    const selectedService = params.get('svc');
    state.selectedService = selectedService && SERVICE_BY_NAME.has(selectedService) ? selectedService : null;
    const selectedFamily = params.get('sfam');
    state.selectedFamily = selectedFamily && FAMILY_BY_NAME.has(selectedFamily) ? selectedFamily : null;

    const compareA = params.get('ca');
    const compareB = params.get('cb');
    if (compareA && BY_ID.has(compareA)) state.compareA = compareA;
    if (compareB && BY_ID.has(compareB)) state.compareB = compareB;

    state.graphMode = params.get('gmode') === 'service' ? 'service' : 'module';
    const graphEntity = params.get('gentity');
    if (graphEntity) state.graphEntity = graphEntity;
    syncControls();
  }

  function updateHash() {
    const params = new URLSearchParams();
    if (state.view !== 'modules') params.set('view', state.view);
    if (state.q) params.set('q', state.q);
    if (state.focusOnly) params.set('focus', '1');
    if (state.fsOnly) params.set('fs', '1');
    if (state.hostsOnly) params.set('hosts', '1');
    if (state.debugOnly) params.set('debug', '1');
    if (state.tag) params.set('tag', state.tag);
    if (state.minSurface) params.set('min', String(state.minSurface));
    if (state.sortKey !== 'default') {
      params.set('sort', state.sortKey);
      params.set('dir', String(state.sortDir));
    }
    if (state.selectedId) params.set('sel', state.selectedId);
    if (state.sq) params.set('sq', state.sq);
    if (state.skeyOnly) params.set('skey', '1');
    if (state.shostedOnly) params.set('shosted', '1');
    if (state.snohostOnly) params.set('snohost', '1');
    if (state.sminUsers) params.set('smin', String(state.sminUsers));
    if (state.sfamily) params.set('sfamily', state.sfamily);
    if (state.sgroup) params.set('sgroup', '1');
    if (state.ssortKey !== 'useCount' || state.ssortDir !== -1) {
      params.set('ssort', state.ssortKey);
      params.set('sdir', String(state.ssortDir));
    }
    if (state.fsortKey !== 'useCount' || state.fsortDir !== -1) {
      params.set('fsort', state.fsortKey);
      params.set('fdir', String(state.fsortDir));
    }
    if (state.selectedService) params.set('svc', state.selectedService);
    if (state.selectedFamily) params.set('sfam', state.selectedFamily);
    if (state.view === 'compare') {
      params.set('ca', state.compareA);
      params.set('cb', state.compareB);
    }
    if (state.view === 'graph') {
      params.set('gmode', state.graphMode);
      params.set('gentity', state.graphEntity);
    }
    const hash = params.toString();
    const target = hash ? `#${hash}` : `${location.pathname}${location.search}`;
    if (location.href.endsWith(target)) return;
    try {
      history.replaceState(null, '', target);
    } catch {
      /* file:// or restricted context */
    }
  }

  function syncControls() {
    els.search.value = state.q;
    els.clearSearch.hidden = !state.q;
    els.focusOnly.checked = state.focusOnly;
    els.fsOnly.checked = state.fsOnly;
    els.hostsOnly.checked = state.hostsOnly;
    els.debugOnly.checked = state.debugOnly;
    els.tag.value = state.tag;
    els.minSurface.value = String(state.minSurface);
    els.minSurfaceValue.textContent = String(state.minSurface);

    els.serviceSearch.value = state.sq;
    els.clearServiceSearch.hidden = !state.sq;
    els.serviceKeyOnly.checked = state.skeyOnly;
    els.serviceHostedOnly.checked = state.shostedOnly;
    els.serviceNoHostOnly.checked = state.snohostOnly;
    els.serviceFamily.value = state.sfamily;
    els.serviceGroup.checked = state.sgroup;
    els.serviceMinUsers.value = String(state.sminUsers);
    els.serviceMinUsersValue.textContent = String(state.sminUsers);
    els.compareA.value = state.compareA;
    els.compareB.value = state.compareB;
    populateGraphEntities();
  }

  // ---------- clipboard / csv ----------

  function csvEscape(value) {
    const text = value == null ? '' : String(value);
    return /[",\r\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
  }

  const CSV_HEADER = [
    'name', 'programId', 'focus', 'tags', 'surface', 'surfaceRaw',
    'syscalls', 'hostCount', 'useCount', 'mapCount', 'irqCount',
    'fsPermissions', 'status', 'note', 'file',
  ];

  function csvRow(module) {
    return [
      module.name,
      module.programId,
      module.focus ? 'yes' : 'no',
      module.tags.join('; '),
      module.surface,
      module.surfaceRaw,
      module.kernel.syscalls.join(' '),
      module.hostCount,
      module.useCount,
      module.mapCount,
      module.irqCount,
      module.fsPermissionsHex,
      getStatus(module),
      module.note,
      module.file,
    ]
      .map(csvEscape)
      .join(',');
  }

  const SERVICE_CSV_HEADER = [
    'name', 'family', 'key', 'hostCount', 'useCount', 'totalCount',
    'noHost', 'hosts', 'users', 'note',
  ];

  function serviceCsvRow(service) {
    return [
      service.name,
      service.family,
      service.key ? 'yes' : 'no',
      service.hostCount,
      service.useCount,
      service.totalCount,
      service.noHost ? 'yes' : 'no',
      service.hosts.map((ref) => `${ref.name} (${ref.programId})`).join('; '),
      service.users.map((ref) => `${ref.name} (${ref.programId})`).join('; '),
      service.note,
    ]
      .map(csvEscape)
      .join(',');
  }

  const FAMILY_CSV_HEADER = [
    'name', 'serviceCount', 'hostCount', 'useCount', 'totalCount',
    'keyCount', 'noHostCount', 'noHost', 'likelyBuiltin',
    'services', 'hosts', 'users', 'note',
  ];

  function familyCsvRow(family) {
    return [
      family.name,
      family.serviceCount,
      family.hostCount,
      family.useCount,
      family.totalCount,
      family.keyCount,
      family.noHostCount,
      family.noHost ? 'yes' : 'no',
      family.likelyBuiltin ? 'yes' : 'no',
      family.services.join('; '),
      family.hosts.map((ref) => `${ref.name} (${ref.programId})`).join('; '),
      family.users.map((ref) => `${ref.name} (${ref.programId})`).join('; '),
      family.note,
    ]
      .map(csvEscape)
      .join(',');
  }

  async function copyText(text, button) {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.append(textarea);
      textarea.select();
      document.execCommand('copy');
      textarea.remove();
    }
    if (button) {
      const previous = button.textContent;
      button.textContent = 'Copied';
      setTimeout(() => {
        button.textContent = previous;
      }, 1200);
    }
  }

  function exportStatusJson() {
    const payload = {
      version: 1,
      exportedAt: new Date().toISOString(),
      statuses: state.statuses,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: 'application/json;charset=utf-8',
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'npdm-status.json';
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  async function importStatusFile(file) {
    try {
      const data = JSON.parse(await file.text());
      const statuses =
        data && typeof data === 'object' && data.statuses ? data.statuses : data;
      if (!statuses || typeof statuses !== 'object') {
        throw new Error('Expected a status map');
      }
      let imported = 0;
      for (const [programId, status] of Object.entries(statuses)) {
        if (!BY_ID.has(programId) || !STATUSES.includes(status)) continue;
        if (status === 'untriaged') delete state.statuses[programId];
        else state.statuses[programId] = status;
        imported++;
      }
      saveStatuses();
      render();
      alert(`Imported ${imported} module status${imported === 1 ? '' : 'es'}.`);
    } catch (error) {
      alert(`Could not import status file: ${error.message}`);
    }
  }

  function exportFilteredCsv() {
    const rows = filteredModules();
    const csv = '\ufeff' + [CSV_HEADER.join(','), ...rows.map(csvRow)].join('\r\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'npdm-filtered.csv';
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function exportServicesCsv() {
    const rows = filteredServices();
    const csv = '\ufeff' + [SERVICE_CSV_HEADER.join(','), ...rows.map(serviceCsvRow)].join('\r\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'npdm-services-filtered.csv';
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function exportFamiliesCsv() {
    const rows = filteredFamilies();
    const csv = '\ufeff' + [FAMILY_CSV_HEADER.join(','), ...rows.map(familyCsvRow)].join('\r\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'npdm-service-families-filtered.csv';
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function exportInsightsJson() {
    const blob = new Blob([JSON.stringify(DATA.insights || {}, null, 2)], {
      type: 'application/json;charset=utf-8',
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'npdm-insights.json';
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function exportCompareJson() {
    const a = BY_ID.get(state.compareA);
    const b = BY_ID.get(state.compareB);
    const blob = new Blob([JSON.stringify({ a, b }, null, 2)], {
      type: 'application/json;charset=utf-8',
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'npdm-compare.json';
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function exportGraphJson() {
    const blob = new Blob([JSON.stringify(state.graphData || {}, null, 2)], {
      type: 'application/json;charset=utf-8',
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'npdm-graph.json';
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function exportActiveCsv() {
    if (state.view === 'insights') {
      exportInsightsJson();
    } else if (state.view === 'compare') {
      exportCompareJson();
    } else if (state.view === 'graph') {
      exportGraphJson();
    } else if (state.view !== 'services') {
      exportFilteredCsv();
    } else if (state.sgroup) {
      exportFamiliesCsv();
    } else {
      exportServicesCsv();
    }
  }

  // ---------- interaction ----------

  function selectModule(programId) {
    state.selectedId = programId;
    render();
    requestAnimationFrame(() => {
      const row = els.tbody.querySelector(`tr[data-id="${programId}"]`);
      if (row) row.focus({ preventScroll: true });
      if (window.matchMedia('(max-width: 1100px)').matches) {
        els.detail.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  function clearModuleFilters() {
    state.q = '';
    state.focusOnly = false;
    state.fsOnly = false;
    state.hostsOnly = false;
    state.debugOnly = false;
    state.tag = '';
    state.minSurface = 0;
    syncControls();
  }

  function resetFilters() {
    clearModuleFilters();
    render();
    els.search.focus();
  }

  function clearServiceFilters() {
    state.sq = '';
    state.skeyOnly = false;
    state.shostedOnly = false;
    state.snohostOnly = false;
    state.sfamily = '';
    state.sminUsers = 0;
    syncControls();
  }

  function resetServiceFilters() {
    clearServiceFilters();
    render();
    els.serviceSearch.focus();
  }

  function openModule(programId, reset = true) {
    if (!BY_ID.has(programId)) return;
    if (reset) clearModuleFilters();
    state.view = 'modules';
    selectModule(programId);
  }

  function selectService(name) {
    state.selectedService = name;
    render();
    requestAnimationFrame(() => {
      const row = Array.from(els.serviceBody.rows).find((tr) => tr.dataset.service === name);
      if (row) row.focus({ preventScroll: true });
      if (window.matchMedia('(max-width: 1100px)').matches) {
        els.serviceDetail.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  function selectFamily(name) {
    state.selectedFamily = name;
    render();
    requestAnimationFrame(() => {
      const row = Array.from(els.familyBody.rows).find((tr) => tr.dataset.family === name);
      if (row) row.focus({ preventScroll: true });
      if (window.matchMedia('(max-width: 1100px)').matches) {
        els.serviceDetail.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  function openFamily(name) {
    if (!FAMILY_BY_NAME.has(name)) return;
    state.sgroup = true;
    state.view = 'services';
    clearServiceFilters();
    selectFamily(name);
  }

  function openService(name) {
    if (!SERVICE_BY_NAME.has(name)) return;
    state.sgroup = false;
    state.selectedFamily = null;
    clearServiceFilters();
    state.view = 'services';
    selectService(name);
  }

  function bindEvents() {
    for (const button of [
      els.viewModules,
      els.viewServices,
      els.viewInsights,
      els.viewCompare,
      els.viewGraph,
    ]) {
      button.addEventListener('click', () => switchView(button.dataset.view));
    }

    els.graphMode.addEventListener('change', () => {
      state.graphMode = els.graphMode.value;
      state.graphEntity = '';
      populateGraphEntities();
      render();
    });

    els.graphEntity.addEventListener('change', () => {
      state.graphEntity = els.graphEntity.value;
      render();
    });

    els.graphCanvas.addEventListener('click', (event) => {
      const moduleNode = event.target.closest('[data-module-id]');
      if (moduleNode) {
        openModule(moduleNode.getAttribute('data-module-id'), true);
        return;
      }
      const serviceNode = event.target.closest('[data-service]');
      if (serviceNode) openService(serviceNode.getAttribute('data-service'));
    });

    els.graphCanvas.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      const moduleNode = event.target.closest('[data-module-id]');
      const serviceNode = event.target.closest('[data-service]');
      if (!moduleNode && !serviceNode) return;
      event.preventDefault();
      if (moduleNode) openModule(moduleNode.getAttribute('data-module-id'), true);
      else openService(serviceNode.getAttribute('data-service'));
    });

    els.compareA.addEventListener('change', () => {
      state.compareA = els.compareA.value;
      render();
    });

    els.compareB.addEventListener('change', () => {
      state.compareB = els.compareB.value;
      render();
    });

    els.compareSwap.addEventListener('click', () => {
      const swap = state.compareA;
      state.compareA = state.compareB;
      state.compareB = swap;
      syncControls();
      render();
    });

    els.search.addEventListener('input', () => {
      state.q = els.search.value;
      els.clearSearch.hidden = !state.q;
      render();
    });

    els.clearSearch.addEventListener('click', () => {
      state.q = '';
      els.search.value = '';
      els.clearSearch.hidden = true;
      render();
      els.search.focus();
    });

    const checkboxes = [
      [els.focusOnly, 'focusOnly'],
      [els.fsOnly, 'fsOnly'],
      [els.hostsOnly, 'hostsOnly'],
      [els.debugOnly, 'debugOnly'],
    ];
    for (const [element, key] of checkboxes) {
      element.addEventListener('change', () => {
        state[key] = element.checked;
        render();
      });
    }

    els.tag.addEventListener('change', () => {
      state.tag = els.tag.value;
      render();
    });

    els.minSurface.addEventListener('input', () => {
      state.minSurface = clampMinSurface(els.minSurface.value);
      els.minSurfaceValue.textContent = String(state.minSurface);
      render();
    });

    els.reset.addEventListener('click', resetFilters);

    els.serviceSearch.addEventListener('input', () => {
      state.sq = els.serviceSearch.value;
      els.clearServiceSearch.hidden = !state.sq;
      render();
    });

    els.clearServiceSearch.addEventListener('click', () => {
      state.sq = '';
      els.serviceSearch.value = '';
      els.clearServiceSearch.hidden = true;
      render();
      els.serviceSearch.focus();
    });

    const serviceCheckboxes = [
      [els.serviceKeyOnly, 'skeyOnly'],
      [els.serviceHostedOnly, 'shostedOnly'],
      [els.serviceNoHostOnly, 'snohostOnly'],
    ];
    for (const [element, key] of serviceCheckboxes) {
      element.addEventListener('change', () => {
        state[key] = element.checked;
        render();
      });
    }

    els.serviceFamily.addEventListener('change', () => {
      state.sfamily = els.serviceFamily.value;
      render();
    });

    els.serviceGroup.addEventListener('change', () => {
      state.sgroup = els.serviceGroup.checked;
      render();
    });

    els.serviceMinUsers.addEventListener('input', () => {
      state.sminUsers = clampNumber(els.serviceMinUsers.value, 0, DATA.maxServiceUse || 0);
      els.serviceMinUsersValue.textContent = String(state.sminUsers);
      render();
    });

    els.serviceReset.addEventListener('click', resetServiceFilters);

    els.table.tHead.addEventListener('click', (event) => {
      const button = event.target.closest('button[data-sort]');
      if (!button) return;
      const key = button.dataset.sort;
      if (state.sortKey === key) {
        state.sortDir *= -1;
      } else {
        state.sortKey = key;
        state.sortDir = key === 'name' || key === 'programId' ? 1 : -1;
      }
      render();
    });

    els.tbody.addEventListener('click', (event) => {
      const row = event.target.closest('tr[data-id]');
      if (!row) return;
      selectModule(row.dataset.id);
    });

    els.tbody.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      const row = event.target.closest('tr[data-id]');
      if (!row) return;
      event.preventDefault();
      selectModule(row.dataset.id);
    });

    els.serviceTable.tHead.addEventListener('click', (event) => {
      const button = event.target.closest('button[data-ssort]');
      if (!button) return;
      const key = button.dataset.ssort;
      if (state.ssortKey === key) {
        state.ssortDir *= -1;
      } else {
        state.ssortKey = key;
        state.ssortDir = key === 'name' || key === 'family' ? 1 : -1;
      }
      render();
    });

    els.serviceBody.addEventListener('click', (event) => {
      const row = event.target.closest('tr[data-service]');
      if (row) selectService(row.dataset.service);
    });

    els.serviceBody.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      const row = event.target.closest('tr[data-service]');
      if (!row) return;
      event.preventDefault();
      selectService(row.dataset.service);
    });

    els.familyTable.tHead.addEventListener('click', (event) => {
      const button = event.target.closest('button[data-fsort]');
      if (!button) return;
      const key = button.dataset.fsort;
      if (state.fsortKey === key) {
        state.fsortDir *= -1;
      } else {
        state.fsortKey = key;
        state.fsortDir = key === 'name' ? 1 : -1;
      }
      render();
    });

    els.familyBody.addEventListener('click', (event) => {
      const row = event.target.closest('tr[data-family]');
      if (row) selectFamily(row.dataset.family);
    });

    els.familyBody.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      const row = event.target.closest('tr[data-family]');
      if (!row) return;
      event.preventDefault();
      selectFamily(row.dataset.family);
    });

    els.insightsGrid.addEventListener('click', (event) => {
      const serviceButton = event.target.closest('[data-service]');
      if (serviceButton) {
        openService(serviceButton.dataset.service);
        return;
      }
      const moduleButton = event.target.closest('[data-module-id]');
      if (moduleButton) {
        openModule(moduleButton.dataset.moduleId, true);
        return;
      }
      const familyLink = event.target.closest('[data-family-open]');
      if (familyLink) openFamily(familyLink.dataset.familyOpen);
    });

    els.compareOutput.addEventListener('click', (event) => {
      const serviceButton = event.target.closest('[data-service]');
      if (serviceButton) {
        openService(serviceButton.dataset.service);
        return;
      }
      const moduleButton = event.target.closest('[data-module-id]');
      if (moduleButton) openModule(moduleButton.dataset.moduleId, true);
    });

    els.detail.addEventListener('click', (event) => {
      if (event.target.closest('#close-detail')) {
        state.selectedId = null;
        render();
        return;
      }
      const serviceButton = event.target.closest('[data-service]');
      if (serviceButton) {
        openService(serviceButton.dataset.service);
        return;
      }
      const moduleButton = event.target.closest('[data-module-id]');
      if (moduleButton) {
        openModule(moduleButton.dataset.moduleId, true);
        return;
      }
      const copyButton = event.target.closest('[data-copy]');
      if (copyButton) {
        const module = state.selectedId ? BY_ID.get(state.selectedId) : null;
        if (!module) return;
        const what = copyButton.dataset.copy;
        const text =
          what === 'json'
            ? JSON.stringify(module, null, 2)
            : what === 'csv'
              ? [CSV_HEADER.join(','), csvRow(module)].join('\n')
              : what === 'syscalls'
                ? module.kernel.syscalls.join(' ')
                : module.programId;
        copyText(text, copyButton);
      }
    });

    els.detail.addEventListener('change', (event) => {
      if (event.target.id !== 'status-select') return;
      const module = state.selectedId ? BY_ID.get(state.selectedId) : null;
      if (module) setStatus(module.programId, event.target.value);
    });

    els.serviceDetail.addEventListener('click', (event) => {
      if (event.target.closest('#close-service-detail')) {
        state.selectedService = null;
        render();
        return;
      }
      if (event.target.closest('#close-family-detail')) {
        state.selectedFamily = null;
        render();
        return;
      }
      const serviceButton = event.target.closest('[data-service]');
      if (serviceButton) {
        openService(serviceButton.dataset.service);
        return;
      }
      const moduleButton = event.target.closest('[data-module-id]');
      if (moduleButton) {
        openModule(moduleButton.dataset.moduleId, true);
        return;
      }
      const familyCopy = event.target.closest('[data-fcopy]');
      if (familyCopy) {
        const family = state.selectedFamily ? FAMILY_BY_NAME.get(state.selectedFamily) : null;
        if (!family) return;
        const what = familyCopy.dataset.fcopy;
        const text =
          what === 'json'
            ? JSON.stringify(family, null, 2)
            : what === 'csv'
              ? [FAMILY_CSV_HEADER.join(','), familyCsvRow(family)].join('\n')
              : family.name;
        copyText(text, familyCopy);
        return;
      }
      const copyButton = event.target.closest('[data-scopy]');
      if (copyButton) {
        const service = state.selectedService ? SERVICE_BY_NAME.get(state.selectedService) : null;
        if (!service) return;
        const what = copyButton.dataset.scopy;
        const text =
          what === 'json'
            ? JSON.stringify(service, null, 2)
            : what === 'csv'
              ? [SERVICE_CSV_HEADER.join(','), serviceCsvRow(service)].join('\n')
              : service.name;
        copyText(text, copyButton);
      }
    });

    els.copyView.addEventListener('click', () => copyText(location.href, els.copyView));
    els.exportCsv.addEventListener('click', exportActiveCsv);
    els.exportStatus.addEventListener('click', exportStatusJson);
    els.importStatus.addEventListener('click', () => els.statusFile.click());
    els.statusFile.addEventListener('change', async () => {
      const file = els.statusFile.files && els.statusFile.files[0];
      if (file) await importStatusFile(file);
      els.statusFile.value = '';
    });

    window.addEventListener('hashchange', () => {
      readHash();
      render();
    });

    document.addEventListener('keydown', (event) => {
      const tag = event.target.tagName;
      const isTyping = tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA';
      const activeSearch =
        state.view === 'services'
          ? els.serviceSearch
          : state.view === 'modules'
            ? els.search
            : null;
      if (event.key === '/' && !isTyping && activeSearch) {
        event.preventDefault();
        activeSearch.focus();
      } else if (event.key === 'Escape') {
        if (document.activeElement === els.serviceSearch && state.sq) {
          state.sq = '';
          els.serviceSearch.value = '';
          els.clearServiceSearch.hidden = true;
          render();
        } else if (document.activeElement === els.search && state.q) {
          state.q = '';
          els.search.value = '';
          els.clearSearch.hidden = true;
          render();
        } else if (state.view === 'services' && state.selectedService) {
          state.selectedService = null;
          render();
        } else if (state.view === 'modules' && state.selectedId) {
          state.selectedId = null;
          render();
        }
      }
    });
  }

  function init() {
    setupTags();
    setupFamilies();
    setupCompare();
    setupGraph();
    renderSummary();
    renderServiceSummary();
    els.serviceMinUsers.max = String(DATA.maxServiceUse || 0);
    const serviceCountLabel = document.getElementById('header-service-count');
    if (serviceCountLabel) serviceCountLabel.textContent = formatNumber(SERVICES.length);
    readHash();
    bindEvents();
    render();
    els.source.textContent = DATA.source;
    const scopeLabel = document.getElementById('dataset-scope');
    if (scopeLabel) {
      scopeLabel.textContent = `${formatNumber(MODULES.length)} full SystemPrograms · NPDM metadata only`;
    }
    const freshnessLabel = document.getElementById('dataset-freshness');
    if (freshnessLabel && DATA.snapshotDate) {
      freshnessLabel.textContent = `${DATA.snapshotDate} · reviewed ${DATA.reviewedDate || 'unknown'}`;
    }
  }

  init();
})();
