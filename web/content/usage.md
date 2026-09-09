---
title: "Usage — @sebastienrousseau/csharp-config"
description: "How to use and configure @sebastienrousseau/csharp-config."
layout: "doc"
---

# Usage

`@sebastienrousseau/csharp-config` can be consumed across all standard module formats.

## CommonJS

```javascript
const config = require("@sebastienrousseau/csharp-config");
console.log(config.presets);
```

## ES Modules

```javascript
import config from "@sebastienrousseau/csharp-config";
console.log(config.defaultPreset);
```
