---
sidebar_position: 2
---

# Operators

An operator is a reserved symbol used to compute value(s) and return a result.
There are three kinds of operators: **unary**, **binary** and **ternary**.

- **Unary** operators are used with **only one** expression: ``-2``, where ``-`` 
is the unary operator used to set compatible numeric value negative.
- **Binary** ones are used with **two** expressions: ``1 + 2`` or Take-If expression ``condition ? value``.
- **Ternary** are the rarest ones, at this moment, only the _DCE_
are ternary operators: ``a == b ? 1 : 0``, where ``?`` and ``:`` are both ternary
operators.

The expressions used with an operator are called **operands**.

## Unary Operators

Unary operators are used with **only one operand**.

There are two unary operators:
- ``-`` to set a numeric value negative.
- ``!`` to negate a boolean value.

## Assignment

The ``=`` operator is one of the most used operators. It permits defining a new variable
or assigning a new value to an existing variable.

**Variable declaration:**
```drift
let immutableVar = 10
var mutableVar = 5
```

**Variable reassignment:**
```drift
var a = 10
a = 5
// a value is no longer 10, and becomes 5
```

**Named parameter:**
```drift
fun say(message) {
    print(message)
}

say(message = "Hello, World!")
// Here, the '=' symbol assigns a value to a named parameter. Optional for positional ones.
```

## Arithmetic 

Drift implements standard arithmetic operators that can be used with numeric values:
- Addition, using `+`
- Subtraction, using `-`
- Multiplication, using `*`
- Division, using `/`

```drift
1 + 2   // equals 3
10 - 3  // equals 7
2 * 3   // equals 6
10 / 2  // equals 5
```

By default, Drift does not support operator overflow. 
Overflow type max/min value will throw an exception.
In case of numeric type overflow without an explicit type,
Drift will apply the most optimized type.

```drift
let a = 1000000000000000        // It overflows Int type, so Drift will apply Int64
let b: Int = 1000000000000000   // It overflows Int type, an exception will throw
let c: Int64 = 1000000000000000 // It does not overflow Int64 type
```

### Special behaviors

Some arithmetic operators have special behaviors with precise types:

- Multiplication operator ``*`` permits to multiply string concatenation
```drift
let name = "Bob"
let doubleName = name * 2       // equals "BobBob"
```

- Addition operator ``+`` permits to concatenate strings
```drift
let name = "Bob"
let welcome = "Hello, " + name      // equals "Hello, Bob"
```

### Remainder Operator

The remainder is the value remaining from a _Euclidean_ division,
also called _modulo operation_. 

**Example:** 
```drift
11 % 5      // equals 1
```

On Euclidean division 11 by 5, it remains 1.

![Example Modulo: 11 % 5](/img/pics/modulo.png)

## Operators Precedences

Drift follows basic operators priority.

Operator precedence defines how to order chained
operations expressions.

```drift
5 + 1 * 3 / 4
// Priorities: 5 + ( ( 1 * 3 ) / 4 )
```

Adding parentheses around an operation will give it higher priority.

```drift
(5 + 1) * 3 / 4
// Parenthesis' priority is higher than multiplication
```