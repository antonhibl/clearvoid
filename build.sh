#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
VERSION=$(grep -m1 '^version=' src/main/resources/META-INF/mods.toml | sed 's/version="\(.*\)"/\1/')
OUT=build
rm -rf "$OUT" && mkdir -p "$OUT/stubs" "$OUT/classes" dist

javac --release 8 -nowarn -d "$OUT/stubs" buildstubs/net/minecraftforge/fml/common/Mod.java 2>/dev/null \
  || javac -source 8 -target 8 -nowarn -d "$OUT/stubs" buildstubs/net/minecraftforge/fml/common/Mod.java

javac --release 8 -nowarn -cp "$OUT/stubs" -d "$OUT/classes" src/main/java/com/bloodastronomia/clearvoid/ClearVoid.java 2>/dev/null \
  || javac -source 8 -target 8 -nowarn -cp "$OUT/stubs" -d "$OUT/classes" src/main/java/com/bloodastronomia/clearvoid/ClearVoid.java

cp -R src/main/resources/. "$OUT/classes/"

printf 'Manifest-Version: 1.0\nImplementation-Title: Clear Void\nImplementation-Version: %s\n' "$VERSION" > "$OUT/MANIFEST.MF"
JAR="dist/clearvoid-1.16.5-$VERSION.jar"
rm -f "$JAR"
(cd "$OUT/classes" && jar cfm "../../$JAR" ../MANIFEST.MF .)
echo "Built $JAR"
