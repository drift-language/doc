---
sidebar_position: 2
---

# Installation

:::warning
**Drift** is currently in **LATE ALPHA** version.
It is not officially released yet, and breaking changes may occur.

***Our language is not ready for any usage.***
:::


Drift is not officially released. You must build it from source.

Source is available on [GitHub](https://github.com/drift-language/drift).
It is the only way to download/clone Drift.

## Download & Build

Go to the [releases page](https://github.com/drift-language/drift/releases) and download the latest version.
You can also build it from source by cloning the repository and building it.
The project is written in **Kotlin**, based on the **Maven** ecosystem.

## Run Code

Once built, you can run Drift source code by executing the runner:

```shell
./gradlew :drift-cli:shadowJar && java -jar ./drift-cli/build/libs/drift-cli-0.1-all.jar run -p <<YOUR PROJECT ABSOLUTE PATH>>
```

Drift 2025.0 is versioned **0.1** on JARs.

:::note
The JARs version number will change on each new version release.
Drift will offer a builtin and lightweight command-line interface
on its first public release.
:::

### Lightweight Runner

Drift also offers a lightweight runner, which can run only one Drift at once.
Import statements are unavailable on this version.

Run the ``main`` method from ``DriftRunnerTest.kt`` with as argument the absolute
path to your Drift file. 