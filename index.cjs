const fs = require("fs");
const path = require("path");

const presets = [".editorconfig","omnisharp.json","Directory.Build.props"];
const defaultPreset = ".editorconfig";
const content = fs.readFileSync(path.join(__dirname, defaultPreset), "utf8");

module.exports = {
  name: "@sebastienrousseau/csharp-config",
  version: "0.0.1",
  presets,
  defaultPreset,
  content
};
