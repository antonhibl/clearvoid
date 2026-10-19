# Clear Void

**No more black void sky on sky islands.** In vanilla 1.16, dropping below y=63 turns the lower half of the sky black and fades the fog to black, which happens all the time on skyblock and floating-island maps. Clear Void keeps the sky normal all the way down; darkness only starts far below the world, around where you'd fall out of it anyway.

## Bonus: Astral Sorcery sky fix

Astral Sorcery has a setting to draw only its constellations on top of another mod's sky (`skyRenderingConstellations` in `astralsorcery-client.toml`), but a bug stops it from ever working. Clear Void fixes it, so you can have Astral's constellations over Botania's Garden of Glass skybox (or any other sky). If Astral isn't installed, this part does nothing.

## Details

- **Minecraft 1.16.5 · Forge 36**
- **Client-side only.** Not required on servers.
- No config, no items, no world changes. The mod can be removed or added safely without breaking things.
- Lightweight: two small Forge coremod scripts, no mixins.

Made for the **Blood Astronomia** modpack. Feel free to use it in any modpack.

License: MIT.
