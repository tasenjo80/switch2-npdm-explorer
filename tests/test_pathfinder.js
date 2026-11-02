const assert = require('node:assert/strict');
const test = require('node:test');

const { build, find, moduleKey, serviceKey } = require('../site/pathfinder.js');

const MODULES = [
  {
    name: 'A',
    programId: 'a'.repeat(16),
    hostsServices: ['x'],
    usesServices: ['y'],
  },
  {
    name: 'B',
    programId: 'b'.repeat(16),
    hostsServices: ['y'],
    usesServices: ['z'],
  },
  {
    name: 'C',
    programId: 'c'.repeat(16),
    hostsServices: ['z'],
    usesServices: [],
  },
  {
    name: 'D',
    programId: 'd'.repeat(16),
    hostsServices: ['x'],
    usesServices: ['x'],
  },
  {
    name: 'Isolated',
    programId: 'e'.repeat(16),
    hostsServices: [],
    usesServices: [],
  },
];

const graph = build(MODULES);

test('finds a direct module-to-service path', () => {
  const path = find(graph, moduleKey('a'.repeat(16)), serviceKey('x'));
  assert.equal(path.length, 1);
  assert.deepEqual(path.nodes.map((node) => node.name), ['A', 'x']);
  assert.deepEqual(path.edges, ['hosts']);
});

test('finds a module-to-module path through services', () => {
  const path = find(graph, moduleKey('a'.repeat(16)), moduleKey('c'.repeat(16)));
  assert.equal(path.length, 4);
  assert.deepEqual(path.nodes.map((node) => node.name), ['A', 'y', 'B', 'z', 'C']);
  assert.deepEqual(path.edges, ['uses', 'hosted by', 'uses', 'hosted by']);
});

test('finds a reverse service-to-module path with the reverse label', () => {
  const path = find(graph, serviceKey('x'), moduleKey('a'.repeat(16)));
  assert.equal(path.length, 1);
  assert.deepEqual(path.nodes.map((node) => node.name), ['x', 'A']);
  assert.deepEqual(path.edges, ['hosted by']);
});

test('returns a zero-length path for the same node', () => {
  const key = moduleKey('a'.repeat(16));
  const path = find(graph, key, key);
  assert.equal(path.length, 0);
  assert.deepEqual(path.nodes.map((node) => node.name), ['A']);
  assert.deepEqual(path.edges, []);
});

test('returns null for disconnected or missing nodes', () => {
  assert.equal(
    find(graph, moduleKey('e'.repeat(16)), serviceKey('x')),
    null,
  );
  assert.equal(find(graph, moduleKey('missing'), serviceKey('x')), null);
});

test('deduplicates duplicate edges by keeping the hosts label', () => {
  const path = find(graph, moduleKey('d'.repeat(16)), serviceKey('x'));
  assert.equal(path.length, 1);
  assert.deepEqual(path.edges, ['hosts']);
});

test('finds a service-to-service path through a module', () => {
  const path = find(graph, serviceKey('y'), serviceKey('z'));
  assert.equal(path.length, 2);
  assert.deepEqual(path.nodes.map((node) => node.name), ['y', 'B', 'z']);
  assert.deepEqual(path.edges, ['hosted by', 'uses']);
});
