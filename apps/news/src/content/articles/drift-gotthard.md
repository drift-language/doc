---
title: "Introducing Drift Gotthard"
date: 2026-06-28
category: "Announcement"
excerpt: "The next major evolution of the Drift language is on its way. Gotthard brings a complete standard library and the bases of the language."
featured: true
gradient: "linear-gradient(135deg, #0a0f1e 0%, #1d4ed8 50%, #7c3aed 100%)"
author: "Drift Management Team"
---


After months of development, the Drift language is now in its first major evolution.
Where [2025.0](https://drift.belic.fr/) introduced an interpreted prototype, Gotthard introduces the first Drift 
JVM-based compiler and brings a complete standard library and the bases of the language.


## A New Compiler for Drift

The most significant change in Gotthard is the shift from the interpreted prototype introduced in 2025.0 to a proper 
JVM-based compiler written in Kotlin. Where the previous version executed Drift code by walking an AST at runtime, Gotthard compiles 
Drift sources to JVM bytecode, enabling real performance, interoperability with the broader Java ecosystem, and a 
foundation stable enough to build on.

The compiler is written from scratch and handles the full pipeline: lexing, parsing, type checking, and bytecode 
emission via ASM. Error messages have been a first-class concern throughout: the compiler reports precise source 
locations, distinguishes between type errors and scope errors, and where possible suggests what the programmer likely 
intended.

As 2025.0 was released as an unsupported prototype, compatibility with code written for the interpreter is not 
guaranteed. Gotthard is a clean break, the right starting point for anyone building with Drift.


## A First Version of the Syntax

While 2025.0 was a sandbox for the future official Drift's syntax, Gotthard introduces the first official version.
Drift's syntax takes inspiration from many reference languages, including Java, Kotlin, C#, Swift and TypeScript.
The syntax is designed to be familiar to developers who have used these languages before, while introducing a new 
set of features that are not necessarily present in these languages.

```drift
import Homemade { * }


class Animal(name: String) {

    fun eat { 
        print($this.name + " is eating...")
    }
    
    fun sleep(duration: Int) { 
        print($this.name + " is sleeping for " + duration + " hours...")
    }
    
    fun say(* message: String) { 
        print($this.name + " says: " + message)
    }
}


let dog = Animal("Doggo")
dog.eat()                  // Doggo is eating...
dog.sleep(duration = 10)   // Doggo is sleeping for 10 hours...
dog.say("Woof!")           // Doggo says: Woof!
```


## A New Standard Library: Homemade

Homemade is the name of the library that Gotthard brings to the language, the standard library of Drift.
It is a collection of native libraries and utilities that are part of the standard library.

Homemade will be composed of all primary types like String, numerics, collection ones, etc. and functions 
that are essential to build a Drift application, like I/O and logging. Drift does not use the Java primary
types.

All more specific libraries will be released as separate packages, called "kits".

---

**Follow our progress on [GitHub](https://github.com/drift-language/)!**