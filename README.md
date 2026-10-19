# Clear Void (Minecraft 1.16.5, Forge)

A tiny client-side mod for skyblock and floating-island worlds.

## What it does

**1. No more black void sky.** In vanilla 1.16, once your eyes drop below the world's
horizon height (y=63 in normal worlds) the lower half of the sky turns black and fog fades
to black. Over a sky island that happens constantly. Clear Void lowers the horizon to about
y=-64, so the sky stays normal all the way down; darkness only begins around y=-32, where
you're falling into the void anyway.

**2. Astral Sorcery "constellations only" sky fix (optional, automatic).** Astral Sorcery
has a setting to draw only its constellations on top of another mod's sky
(`skyRenderingConstellations` in `astralsorcery-client.toml`). Because of a bug in Astral,
that setting never takes effect. Clear Void fixes the check, so you can combine Astral's
constellations with e.g. Botania's Garden of Glass skybox. If Astral isn't installed this
part does nothing.

## Compatibility

- Minecraft 1.16.5, Forge 36.x.
- Client-side only. Not needed on servers, and clients without it can still join.

## License

MIT, see `LICENSE`.
