---
sidebar_position: 3
---

# Strings and Characters

A string is a native and useful container of characters.
It permits creating texts in Drift. Strings can be empty.

```drift
"Hello, World!"
// It is a string, where each symbol is a character: H, e, l, ...
```

## Write a string

### String Literal

The main way to create a string is the **literal** one.
To create a string literal, you must surround characters by double-quotes.
Indents and newlines inside a string literal are included in the string expression.

```drift
"Hello, World"
```

:::note
String literal can be multiline:

```drift
let a = "Hello,
World"

// Result:
// Hello,
// World
```

No one ```"""``` (triple quotes) syntax exists. The single double-quotes are used for multiline string literal.
**This syntax could be modified in the future.**
:::

### String Operations

#### Concatenation

Two strings can be concatenated. It consists in merging both to return one.
The ``+`` permits to do it.

```drift
let helloWorld = "Hello" + "World"
// helloWorld equals "HelloWorld"
```

#### Duplication

A string can be multiplied with a numeric. Useful to create repetitive texts.

```drift
let separator = "-" * 6
// separator equals "------" (6x dashes)
```