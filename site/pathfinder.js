(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  } else {
    root.NPDMPath = api;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const RELATION_ORDER = {
    hosts: 0,
    uses: 1,
    'hosted by': 2,
    'used by': 3,
  };

  function moduleKey(programId) {
    return `m:${programId}`;
  }

  function serviceKey(name) {
    return `s:${name}`;
  }

  function build(modules) {
    const nodes = new Map();
    const adjacency = new Map();

    function addNode(key, kind, id, name) {
      if (nodes.has(key)) return;
      nodes.set(key, { key, kind, id, name });
      adjacency.set(key, []);
    }

    function addEdge(fromKey, toKey, relation) {
      adjacency.get(fromKey).push({ to: toKey, relation });
    }

    for (const module of modules || []) {
      const moduleNodeKey = moduleKey(module.programId);
      addNode(moduleNodeKey, 'module', module.programId, module.name);

      for (const name of module.hostsServices || []) {
        const key = serviceKey(name);
        addNode(key, 'service', name, name);
        addEdge(moduleNodeKey, key, 'hosts');
        addEdge(key, moduleNodeKey, 'hosted by');
      }

      for (const name of module.usesServices || []) {
        const key = serviceKey(name);
        addNode(key, 'service', name, name);
        addEdge(moduleNodeKey, key, 'uses');
        addEdge(key, moduleNodeKey, 'used by');
      }
    }

    for (const edges of adjacency.values()) {
      edges.sort((a, b) => {
        const nameA = nodes.get(a.to).name;
        const nameB = nodes.get(b.to).name;
        return (
          nameA.localeCompare(nameB) ||
          RELATION_ORDER[a.relation] - RELATION_ORDER[b.relation] ||
          a.to.localeCompare(b.to)
        );
      });
    }

    return { nodes, adjacency };
  }

  function find(graph, fromKey, toKey) {
    if (!graph || !graph.nodes.has(fromKey) || !graph.nodes.has(toKey)) {
      return null;
    }
    if (fromKey === toKey) {
      return { nodes: [graph.nodes.get(fromKey)], edges: [], length: 0 };
    }

    const parents = new Map([[fromKey, null]]);
    const queue = [fromKey];
    let head = 0;

    while (head < queue.length) {
      const current = queue[head];
      head += 1;

      for (const edge of graph.adjacency.get(current) || []) {
        if (parents.has(edge.to)) continue;
        parents.set(edge.to, { prev: current, relation: edge.relation });

        if (edge.to === toKey) {
          const keys = [toKey];
          const edges = [];
          let key = toKey;
          while (key !== fromKey) {
            const parent = parents.get(key);
            edges.push(parent.relation);
            key = parent.prev;
            keys.push(key);
          }
          keys.reverse();
          edges.reverse();
          return {
            nodes: keys.map((pathKey) => graph.nodes.get(pathKey)),
            edges,
            length: edges.length,
          };
        }

        queue.push(edge.to);
      }
    }

    return null;
  }

  return { build, find, moduleKey, serviceKey };
});
