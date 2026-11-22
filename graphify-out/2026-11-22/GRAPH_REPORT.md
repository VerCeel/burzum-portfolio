# Graph Report - burzum  (2026-11-22)

## Corpus Check
- 12 files · ~4,206 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 98 nodes · 105 edges · 12 communities (9 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `a25442e6`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- page.tsx
- compilerOptions
- devDependencies
- layout.tsx
- include
- package.json
- dependencies
- README.md
- lib
- AGENTS.md
- eslint.config.mjs
- next.config.ts

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `include` - 7 edges
3. `scripts` - 5 edges
4. `lib` - 4 edges
5. `profile` - 3 edges
6. `InkFilters()` - 2 edges
7. `Gate()` - 2 edges
8. `Birds()` - 2 edges
9. `Wanderer()` - 2 edges
10. `Branch()` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (12 total, 3 thin omitted)

### Community 0 - "page.tsx"
Cohesion: 0.14
Nodes (15): petals, Birds(), Branch(), flock, Gate(), InkFilters(), Roof(), Wanderer() (+7 more)

### Community 1 - "compilerOptions"
Cohesion: 0.13
Nodes (15): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, module, moduleResolution (+7 more)

### Community 2 - "devDependencies"
Cohesion: 0.15
Nodes (13): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, @types/node, @types/react, @types/react-dom (+5 more)

### Community 3 - "layout.tsx"
Cohesion: 0.25
Nodes (6): brush, latin, metadata, sans, serifSc, profile

### Community 4 - "include"
Cohesion: 0.20
Nodes (9): **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, exclude (+1 more)

### Community 5 - "package.json"
Cohesion: 0.22
Nodes (8): name, private, scripts, build, dev, lint, start, version

### Community 6 - "dependencies"
Cohesion: 0.29
Nodes (7): next, dependencies, next, react, react-dom, react, react-dom

### Community 7 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 8 - "lib"
Cohesion: 0.50
Nodes (4): dom, dom.iterable, esnext, lib

## Knowledge Gaps
- **54 isolated node(s):** `sans`, `latin`, `brush`, `serifSc`, `metadata` (+49 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `compilerOptions` connect `compilerOptions` to `lib`, `include`?**
  _High betweenness centrality (0.070) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.054) - this node is a cross-community bridge._
- **What connects `sans`, `latin`, `brush` to the rest of the system?**
  _54 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._