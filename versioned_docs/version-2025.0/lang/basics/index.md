---
sidebar_position: 1
---

# The Basics

This section is a perfect start point for beginners. 
Drift is a programming language taking the best parts, features, of many other languages.
Its goal is to offer to developers a modern, safe-to-use, and concise syntax.

Drift is, at this moment, an interpreted language. A compiler will be developed and released
in the future. 

Like all programming languages, Drift offers native primary types:

**Do you need to represent a digit?**
> Let's use ``Int`` (integer), ``Int64`` or ``UInt`` types…

**Do you need to represent a string?**
> Let's use ``String`` type.

**Do you need to represent a boolean?**
> Let's use ``Bool`` type.

**Do you need to represent a value collection?**
> In most cases, the ``List`` type is the best to represent a collection of values.
> In case of **numeric** range, ``Range`` type is preferred. 

Drift also implements variables, classes and callables.

## Constants & Variables

Constants and variables are useful. Drift implements these easily with
a clear and concise syntax. Drift is optionally typed, allying freedom
and safety. 

To define immutable variable, the keyword ``let`` must be used, to define
a mutable one, the keyword ``var`` is preferred.

```drift
let myFirstConstant = 10
var myFirstMutable = "Hello, World!"
```

Constants, like the name says, are immutable. Their value cannot be reassigned.
In opposition, variables are mutable, it is possible to change their value.

```drift
let myImmutable = 1
myImmutable = 2
// It will throw a runtime exception: cannot reassign immutable variable.

var myMutable = "Hi!"
myMutable = "Bye."
// The variable's value will be reassigned.
```

To prevent any security issue, we strongly recommend declaring variables 
as **immutable** if no reassignment is needed later. 
Also, even if Drift supports untyped variables, prioritize typing your variables
to make the code more maintainable and safe.

```drift
let name = "Bob"            // It works but not recommended
let name: String = "Bob"    // Recommended
```

Once declared, the variable's name is reserved and cannot be defined 
a second time in the same environment.

```drift
let hello: Int = 1
let hello: String = "Hello"
// It will throw a runtime exception: already declared.
```

### Unassigned variable

Declared variable without value has ``Unknown`` type by default.
An unassigned variable cannot be used. 

```drift
let unassignedVariable

print(unassignedVariable)
// It will throw a runtime exception: cannot use unassigned.
```

A variable can be assigned later (immutable once):

```drift
let canUse: Boolean     // Unassigned 
let age: Int = 20
// age is already read-only.

canUse = age >= 18
// canUse variable is now read-only. 
```

## Statements separation and semicolon

:::warning
At this time, Drift does not support inline statement separation.
Semicolon is not an accepted symbol. A new line must separate each statement.

```drift
let a = 1 print(a)
// It will throw a parser exception: statements must be separated by a new line.

let a = 1; print(a)
// It will throw a lexer exception: semicolon is not recognized by Drift.

let a = 1
print(a)
// Successful!
```
:::

## Drift and JVM

Drift is written in Kotlin, a JVM-based language written in Java by JetBrains.
Drift is interpreted using the Kotlin's JVM, the Drift heap behavior is the same
as Kotlin one.

We believe Kotlin is an incredible environment to develop our language with 
by its efficiency, and the power of the Java VM.

:::note
Drift does not support Kotlin and Java codes at this moment.
We plan to add interoperability with Kotlin and Java in the future.
:::

Drift primary types are based on Kotlin ones.

## Numeric types

### Int

``Int`` type represents a 32-bit integer.

**Min:** ``-2147483648``\
**Max:** ``2147483647``

### Int64

``Int64`` type represents a 64-bit integer.

**Min:** ``-9223372036854775808``\
**Max:** ``9223372036854775807``

### UInt

``UInt`` type represents an unsigned integer.
Drift forbids negative value with UInt for safety purposes.

**Min:** ``0``\
**Max:** ``4294967295``

```drift
let correct: UInt = 55      // Value = 55

let incorrect: UInt = -55   
// It will throw a runtime exception: cannot assign negative value with UInt.
```

:::note
Unsigned integer is not the absolute value of an integer.
:::

:::info
We plan to add `Int16`, `Int8`, and their unsigned version,
and hexadecimal syntax in future releases.
:::

## Booleans and Conditional

A boolean value represents a binary state, ``true`` or ``false``.
Useful to represent permissions, for example.

```drift
let canRead: Bool = true
let canWrite: Bool = false
```

It is possible to reverse boolean expression using the unary ``!`` operator above:

```drift
let a = true    // TRUE
let b = !a      // FALSE
```

Booleans offers conditional structures. 
Drift permits two ways to create a conditional statement:

### Legacy IF-ELSE statement

This version is common with other programming languages.
Drift does not recommend this syntax as well the next way
is more concise and respectful of Drift conventions.

Legacy syntax is a statement, not an expression unlike Kotlin.

```drift
let a = 1
let b = 1

if a == b {
    print("a equals b!")
}
```

```drift
if a > b {
    print("a is superior than b")
} else {
    print("a is not superior than b")
}
```
```drift
if a > b {
    print("a is superior than b")
} else if a < b {
    print("a is inferior than b")
} else {
    print("a equals b")
}
```
```drift
// Parentheses are supported!
if (a == b) {
    print("a equals b!")
}

// Inline branches are supported!
if (a == b) print("a equals b!")
```

:::danger
Condition without parentheses followed by an inline statement is possible
but unrecommended. It could create an unexpected behavior.
We strongly recommended using parentheses with inline branch.

```drift
if a == b print("a equals b!") 
// It is unrecommended!
```
:::

### Drift Conditional

Drift recommends the ternary-based syntax to create a conditional structure.
This syntax is more concise and clear, while still remaining close to human language.

```drift
let a = 1
let b = 2

a == b ? {
    print("a equals b")
} : a < b ? {
    print("a is inferior than b")
} : {
    print("a is superior than b")
}
```

This way has the advantage of returning a value from the expression.
You can use it as a value, for example:

```drift
let a = 1

// With blocks
let b = a == 1 ? {
    "a is 1!"
} : {
    "a is not 1..."
}

// Inline branches
let c = a == 2 ? "It should not happen..." : "Oh nice!"
```

Unlike other languages, Drift does not require the _else_ branch in ternary.
If it is used as a value without it, if the condition equals False,
it will return ``Null``. We call this syntax **Take-If**.

```drift
let condition = false
let value = condition ? "It should not happen..."   // value equals Null
```

## Optional type and valueless

``Null`` is an initialized valueless type.
To not confuse with ``Unknown``.

By default, Drift forbids ``Null`` as value for safety purposes. 
If a variable is nullable, the behavior must be precised using the ``?`` 
operator after the type, or its explicit version with union ``OtherType | Null``.

```drift
let a: Int = null
// It will throw a runtime exception: a is not optional.

let b: Int? = null
// Successful!

let c: Int|Null = null
// Successful!
```

Untyped variable accepts ``Null`` as value. It is a reason to explicitly type
everything!

## Types union

A variable can accept many types using the ``|`` operator between
them.

```drift
var a: Int|String = 1
a = "2"
```

To set a variable with united types nullable, ``Null`` type must be added
to union.

```drift
let a: String|Int|Null = null
```