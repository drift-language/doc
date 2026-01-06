---
sidebar_position: 6
---

# Callables

Callables are special parts of code with a self-contained environment.
It permits running statements on call at any moment of the code.

Drift offers three kinds of Callable:
- Functions
- Class Methods
- Lambda

## Functions

A function cannot be defined as a value, but its structure
can be used as a value by using its name.

It is **stored as a variable** in the **scope's environment**.

```drift
fun test {}

let a = test    // a equals the function's structure

let b = fun otherTest {}  // It will throw a parser exception
```

To define a function, the ``fun`` keyword must be used:

```drift
fun myEmptyFunction {
    ...
}
```

A function can contain parameters, it is optional. In opposition of other languages,
if no one parameter is defined, the parentheses are optional:
```drift
fun withoutParen { ... }

fun withParen(...) { ... }
```

### Parameters

Function parameters are necessary to make functions adapted for any situation.
Parameters must be typed.

```drift
fun greet(name: String) { print("Hello, " + name) }

let myName = "John"
greet(name = myName)       // Hello, John

let friendName = "Maria"
greet(name = friendName)   // Hello, Maria
```

A parameter must be named by default using ``name = value`` on call.
It is recommended to enhance code readability. It can be converted into
a positional parameter using the ``*`` symbol before.

```drift
fun greet(*name: String) { print("Hello " + name) }

greet("Bob")        // Hello, Bob
```

Parameters can have a default value, if defined, the parameter becomes
optional on call.

```drift
fun greet(*name: String = "Guest") { print("Hello " + name) }

greet()             // Hello, Guest
greet("Harry")      // Hello, Harry
```

_Parameters are immutable._

### Return Type and Value

Function return type can be set, it is optional.
If not defined, the ``Any`` type will be used.

```drift
fun withoutType { }     
// It can return anything, using Any type

fun onlyStrings : String { ... }
// It can only return a string.

fun stringsOrBool : String|Bool { ... }
// It can return a string or a boolean
```

Functions can return a value. There are two ways to do it:
- Use ``return`` keyword followed by the value
```drift
return value 
```
- Use the ``Last`` special return type 
```drift
fun hello : Last { "Hello" }
```

## Class Methods

Class methods have the same syntax as Functions. But have the particularity
to be defined inside a Class.

:::note
Methods are stored in the Class' definition structure, not in the environment itself,
in opposition of Functions, for optimization purposes.
:::

```drift
class Animal {

    fun about : String {
        return "It is an animal"
    }
}
```

## Lambdas

Lambdas permit defining functions as a value. They can be defined into a 
variable, function return statement, etc.

```drift
let myName = (*name: String) -> {
    return "My name is " + name 
}
```

In opposition to Functions and Class Methods, Lambdas do a snapshot of the 
parent environment to create its own. If the function must be agnostic of the parents'
environments' evolution, please use Functions.

```drift
var a = 1

let whatIsNumber = () -> {
    return a
}

print(whatIsNumber())       // a = 1

a = 2

print(whatIsNumber())       // a = 1
```

Lambdas can return the last value without ``return`` keyword by default, the
``Last`` return type is not required: Lambda body is a single expression.

:::info
Lambdas return ``Null`` by default, contrarily of Functions and Methods who return ``Void``.
Lambdas cannot return ``Void``, set it as return type will throw an exception on execution 
(not declaration).

```drift
let weirdLambda = (): Void -> { ... }        // Will throw
```
:::

## Nested Callables

Callables having their own environment, inherited from their parents' ones,
A callable can be declared in another.

```drift
fun parentFunction {
    fun childFunction { ... }
    ...
}
```

In this example, ``childFunction`` will only be accessible 
in ``parentFunction`` body.