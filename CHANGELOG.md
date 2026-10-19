# Changelog

## 1.1.0
- Added: fix for Astral Sorcery's "constellations only" sky setting (`skyRenderingConstellations`).
  Astral compared a dimension ID against a list of strings, so the setting never activated and
  Astral always drew its own full sky. Constellations can now be drawn over another sky, such as
  Botania's Garden of Glass skybox. Does nothing if Astral Sorcery isn't installed.

## 1.0.1
- Fixed: "failed to load a valid ResourcePackInfo" warning on startup (added pack.mcmeta).

## 1.0.0
- Initial release: removes the black lower sky and dark fog below y=63 on sky islands.
