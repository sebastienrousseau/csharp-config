# `@sebastienrousseau/csharp-config` API Specification

Comprehensive schema, property definitions, and exported options reference for `@sebastienrousseau/csharp-config`.

---

## Description

Shareable C# and .NET configuration standards providing Roslyn analyzers, EditorConfig, and OmniSharp rules.

---

## Programmatic Entrypoints

| Specifier | Module Type | Target Runtime | Path |
| :--- | :--- | :--- | :--- |
| `.` (default) | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `@sebastienrousseau/csharp-config` | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `index.d.ts` | TypeScript | TypeScript >= 5.0 | Type declarations |

---

## Feature & Property Reference

### 1. Directory.Build.props

- **Description**: Centralized MSBuild properties enabling strict nullable checking, treat warnings as errors, and latest analysis level.
- **Scope**: Production & Development
- **Status**: Stable & Active

### 2. omnisharp.json

- **Description**: Editor and language server configuration for OmniSharp and VS Code C# Dev Kit.
- **Scope**: Production & Development
- **Status**: Stable & Active
