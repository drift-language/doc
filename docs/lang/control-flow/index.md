---
sidebar_position: 5
---

# Control Flow

Drift provides many control flow structures:
- Loops like ``while`` or ``for``…
- Conditionals like ``If-Else``, ``Drift-If``, ``Take-If``…
- And other statements like ``break`` or ``continue``…

## For 

In opposition with many other languages, Drift merges 
**for** and **for-in** statements in one ``for`` statement,
with a lightweight syntax.

For-loop can be used with any _iterable_ value.

:::info
Drift will implement ``Iterable`` prefab soon.
:::

### With ``List``

By using a List as an iterable value, there are
zero to two implementable variables: the value,
and the index. Declare more than two loop-variables
using a List will throw a runtime exception. If no one
loop-variable is declared, the value will be stored
implicitly into ``_``.

```drift
let scores = [10, 50, 23, 100, 59]

// List with one variable
// The variable will store each value
for scores { 
    print("Score = " + _)
}

// Score = 10
// Score = 50
// Score = 23
// Score = 100
// Score = 59
```

```drift
let scores = [10, 50, 23, 100, 59]

// List with one variable
// The variable will store each value
for scores { as score
    print("Score = " + score)
}

// Score = 10
// Score = 50
// Score = 23
// Score = 100
// Score = 59
```

```drift
let scores = [10, 50, 23, 100, 59]

// List with two variables
// The first one will store each value,
// and the second one each loop index
for scores { as score, index
    print("Score equals " + score + " at index " + index)
}

// Score equals 10 at index 0
// Score equals 50 at index 1
// Score equals 23 at index 2
// Score equals 100 at index 3
// Score equals 59 at index 4
```

### With ``Range``

Ranges are powerful to represent all integers between two ones.
With a Range, for-loop only accepts one parameter: the value.
Iterate a Range is straightforward with the Drift's syntax.

```drift
for 1..10 {
    print("i = " + _)
}

// or

for 1..10 { as i
    print("i = " + i)
}

// Will display:
// i = 1
// i = 2
// i = 3
// i = 4
// i = 5
// i = 6
// i = 7
// i = 8
// i = 9
// i = 10
```

## While Loops

While loops allow you to repeat a block of statements 
as long as the given condition is true. 
There are two types of while loops:

- The `while` loop checks the condition before each iteration
and repeats the block while the condition remains true.
- The `repeat-while` loop is slightly different: it runs the
block once before checking the condition, then continues looping as long as the condition is true.

### While

:::warning
At this moment, Drift does not implement while-loop.
```drift
while condition {
    ...
}
```
:::

### Repeat-While

:::warning
At this moment, Drift does not implement repeat-while-loop.
```drift
repeat {
    ...
} while condition
```
:::

## Conditional

Conditional statements are useful to execute different parts 
of code based on provided conditions. Drift offers two ways
to create a conditional statement:

- The _legacy_ ``If-Else`` statement
- The Drift conditional expression

These two structures follow the same logics, only the syntax changes.

### Legacy ``If-Else``

:::info
The Drift syntax convention strongly recommends using the
Drift conditional expression instead of this legacy statement,
for more human and concise code.
:::

Like the main part of the other languages, Drift permits using
the ``If-Else`` statements:

```drift
// Only IF
if condition {
    ...
}

// IF and ELSE
if condition {
    ...
} else {
    ...
}

// IF and ELSE-IF
if condition {
    ...
} else if condition {
    ...
}
```

### Drift Conditional Expression (DCE)

The _Drift Conditional Expression_, shorted as _DCE_ is a 
ternary-based conditional structure. In other languages, 
ternary is only used as value expression. Drift permits using 
it as a conditional statement:

```drift
// Only THEN branch
condition ? {
    ...
}

// THEN and ELSE branches
condition ? {
    ...
} : {  
    ...
}

// THEN and ELSE-THEN branches
condition ? {
    ...
} : condition ? {
    ...
}
```

_DCE_ can also be used as a value expression:
```drift
let age = 18
let message = age >= 18 
    ? "You have +18 y.o."
    : "You have less than 18 y.o."
    
// or

let message = age >= 18 ? {
    "You have +18 y.o."
} : {
    "You have less than 18 y.o."
}
    
// Braces are optional for DCE branches
```

By using braces, consider the last branch expression 
as the value if you use _DCE_ as a value expression.
So, it is possible and accepted to do some statements
before giving the final value. The version without braces
does not support multiple statements in a branch.

```drift
let age = 18
var isRestricted: Bool 

let message = age >= 18 ? {
    isRestricted = false
    "You have +18 y.o."               // <- It is the value
} : {
    isRestricted = true
    "You have less than 18 y.o."      // <- It is the value
}
```

#### ``Take-If``

In some situations, it is interesting to use a value only if 
the provided condition is true. The take-if syntax is based on _DCE_
and permits doing it. This behavior is permitted by the behavior of an 
undefined _DCE_ branch, its value is by default ``Null``.

```drift
fun getSecretIfMajor(age: Int) : String? {
    return age >= 18 ? "This is a secret!"
    // If age >= 18 is true, the string will be returned.
    // Else, Null will be returned.
}
```

### Switch

:::warning
At this moment, Drift does not implement switch.
```drift
[let a = ] match value {
    ~ "Hello" -> {}     // softEquals if implemented
    = 0.1 -> {}         // equals
    > 100 -> {} 
    = 1, > 2 -> {}      // (with compound)
    ^ "Dr" -> {}        // startsWith
    $ "o" -> {}         // endsWith
    ...
    
    min..max -> {}
    
    is Type -> {}
    
    has "email" -> {}   // Object having an "email" attribute
    
    empty -> {}         // isEmpty
    
    /[0-9]+/ -> {}      // RegExpr
    
    // Tuple matching
    (_, 0) -> {}
    (0, _) -> {}
    (-1..1, -1..1) -> {}
    ...
    
    else -> {}
}
```
No one fallthrough, ``break`` not required!

Braces are optional.
:::

## Control Transfer Statements (CTS)

:::warning
At this moment, Drift does not implement _CTS_.
:::

_CTS_ permits changing an executed code behavior by transferring 
control from a part of code to another. Drift has four _CTS_:
- ``continue``
- ``break``
- ``return``
- ``throw`` _(may change)_

### Control Labels

:::warning
At this moment, Drift does not implement Jump Label.
```drift
myloop: for list {
    ...
    break myloop
}
```
:::

## Guard

:::warning 
At this moment, Drift does not implement guards.
```drift
fun test {
    guard expression else {
        return
    }
    
    ...
}
```
:::