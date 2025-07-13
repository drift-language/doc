---
sidebar_position: 1
---

# Introduction

Welcome to the official documentation for **Drift**, a lightweight and expressive programming language designed to explore new ideas in syntax, semantics, and execution flow.

Drift is built with three core goals in mind:

- **Clarity**: Favoring readable constructs over boilerplate code.
- **Flexibility**: Supporting alternative syntaxes and modern patterns like functional expressions, prefabs, and union types.
- **Control**: Providing precise runtime behavior with static checks, explicit type constraints, and scoped evaluation.

Whether you're here to explore its syntax, understand its evaluation model, or contribute to its evolution, this documentation will guide you through the language's features and design decisions.

## Why Drift?

Drift isn't just a toy language. It's an ongoing experiment in rethinking traditional programming conventions:

- Conditionals can be written in expressive form: `condition ? then : else`
- Function calls allow flexible argument rules, including named and positional parameters
- Classes support inline methods, `init` blocks, visibility modifiers, and prefab injection
- Types include nullable (`T?`), union (`A | B`), and generic containers (`List<T>`, `Box<T>`)
- Lambdas are first-class citizens, with concise syntax and full type support
- Error handling is integrated at the language level with `errorable` blocks

Drift is written in Kotlin and comes with a full parser, type checker, and evaluator. The runtime is designed to be minimal, testable, and extensible.

## What This Documentation Covers

This documentation is organized into the following sections:

- **Getting Started** — Learn how to run your first Drift program.
- **Syntax Overview** — Explore expressions, control flow, functions, classes, and prefabs.
- **Type System** — Understand Drift's type model and how type checking works.
- **Builtins and Native Features** — See what comes preloaded and how to extend the language.
- **Internals** — Dive into how Drift is implemented under the hood.

---

Let’s get started.
