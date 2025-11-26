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

```drift
let a = "Hello, World"
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

No one ```"""``` exists. The single double-quotes are used for multiline string literal.
:::

Indents inside a string literal are included in the string expression.

### Special Characters inside a String

:::warning
At this moment, Drift does not implement special character expression.
:::

### Sanitized String

:::warning
At this moment, Drift does not implement sanitized string.
:::

Sanitized String syntax will permit creating a string 
including special characters without triggering their effect:

```drift
let a = @"Hello, \n World!"
// It will let \n as two characters: Hello, \n World!
```

Useful to avoid prefixing special expressions with backslash everytime.

### String Operations

#### Concatenation

Two strings can be concatenated. It consists in merging both to return one.
The ``+`` permits to do it.

```drift
let helloWorld = "Hello" + "World"
// helloWorld equals "HelloWorld"
```

#### Multiplication

A string can be multiplied with a numeric. Useful to create repetitive texts.

```drift
let separator = "-" * 6
// separator equals "------" (6x dashes)
```

### String Interpolation

:::warning
At this moment, Drift does not implement string interpolation. 
Concatenation is the only way.
:::

### String edition

:::warning
At this moment, Drift does not implement string edition methods.
:::

We plan to add native support for:
- Indexing characters inside a ``String``
```drift
var text = "Hello"
print(text[0]) // It will display "H" Character

text[1] = "a"
print(text)    // It will display "Hallo" String
```
- Negative indexing 
```drift
var text = "Hello"
print(text[-1], text[-2]) // It will display "o" and "l"

text[-1] = "a"
print(text)               // It will display "Hella"
```
:::note
Negative index is computed by adding to it the string's length.

``[-1]`` index equals to ``-1 + [String].length()``

```drift
"Hello"
// This string's length equals 5.
// [-1] index equals to -1 + 5 = 4
```
:::

- Remove character using index
```drift
var a = "Hello"
a-[0]   // It will remove the first character, "Hello" -> "ello"
```
- Add character to the provided index position
```drift
var a = "Hello"
a+[2] = "x"   // It will add "x" to the third position, "Hello" -> "Hexllo"
```
- Substring using range
```drift
let a = "Hello"
print( a[ 1..3 ] )      // It will display "ell"
```

## Characters

:::warning
At this moment, Drift does not implement ``Character`` type.
Characters are computed internally.
:::

### Unicode Characters

:::warning
At this moment, Drift does not implement Unicode characters expressions.
:::