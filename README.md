<!-- SPDX-License-Identifier: Apache-2.0 OR MIT -->

<p align="center">
  <img src="./csharp-config.svg" alt="csharp-config logo" width="128" />
</p>

<h1 align="center">@sebastienrousseau/csharp-config</h1>

<p align="center">
  Shareable C# / .NET configuration providing standardized Roslyn analyzer, EditorConfig, and OmniSharp rules adhering to modern 2026 standards.
</p>

<p align="center">
  <a href="https://github.com/sebastienrousseau/csharp-config/actions"><img src="https://img.shields.io/github/actions/workflow/status/sebastienrousseau/csharp-config/ci.yml?branch=main&style=for-the-badge&logo=github" alt="Build Status" /></a>
  <a href="https://www.npmjs.com/package/@sebastienrousseau/csharp-config"><img src="https://img.shields.io/npm/v/%40sebastienrousseau%2Fcsharp-config.svg?style=for-the-badge&color=fc8d62&logo=npm" alt="npm package" /></a>
  <a href="https://scorecard.dev/viewer/?uri=github.com/sebastienrousseau/csharp-config"><img src="https://img.shields.io/ossf-scorecard/github.com/sebastienrousseau/csharp-config?style=for-the-badge&label=OpenSSF%20Scorecard&logo=openssf" alt="OpenSSF Scorecard" /></a>
  <a href="LICENSE-APACHE"><img src="https://img.shields.io/badge/license-Apache--2.0%20OR%20MIT-blue.svg?style=for-the-badge" alt="License: Apache-2.0 OR MIT" /></a>
  <a href="#minimum-toolchain-policy"><img src="https://img.shields.io/badge/node->=%2018.0.0-93450a.svg?style=for-the-badge&logo=node.js" alt="Node >= 18.0.0" /></a>
</p>

---

## Contents

- [Overview](#overview)
- [Presets](#presets)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [License](#license)
- [Security](#security)

---

## Overview

`@sebastienrousseau/csharp-config` delivers production-ready, standardized configurations for C# tooling adhering to 2026 enterprise best practices.

## Presets Included

- `.editorconfig`
- `omnisharp.json`
- `Directory.Build.props`

## Installation

```bash
npm install -D @sebastienrousseau/csharp-config
```

## Quick Start

### CommonJS
```javascript
const config = require("@sebastienrousseau/csharp-config");
console.log(config.presets);
```

### ESM
```javascript
import config from "@sebastienrousseau/csharp-config";
console.log(config.defaultPreset);
```

## License

Dual licensed under [Apache License, Version 2.0](LICENSE-APACHE) or [MIT License](LICENSE-MIT).
