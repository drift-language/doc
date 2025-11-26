---
sidebar_position: 20
---

# Advanced Operators

In addition to basic operators introduced in [Basics Chapter](/docs/lang/basics),
Drift implements advanced, like Bitwise, Overflow and custom ones.

## Bitwise Operators

### Bitwise NOT Operator

:::warning
At this moment, Drift does not implement bitwise NOT operator.
```drift
~0b0011     // equals 0b1100
```
:::

### Bitwise AND Operator

:::warning
At this moment, Drift does not implement bitwise AND operator.
```drift
0b0011 & 0b0110     // equals 0b0010
```
:::

### Bitwise OR Operator

:::warning
At this moment, Drift does not implement bitwise OR operator.
```drift
0b0011 | 0b0110     // equals 0b0111
```
:::

### Bitwise XOR Operator

:::warning
At this moment, Drift does not implement bitwise XOR operator.
```drift
0b0011 ^ 0b0110     // equals 0b0101
```
:::

### Bitwise Left and Right Shift Operators

:::warning
At this moment, Drift does not implement bitwise left and right shift operators.
```drift
0b0011 << 1     // equals 0b0110
0b0011 << 2     // equals 0b1100

0b0011 >> 1     // equals 0b0001
0b0011 >> 2     // equals 0b0000
```
:::

## Overflow Operator

The default numeric overflow behavior is to throw an exception (Too long).
This can be avoided by using the Overflow Operator as a prefix of the used 
operator.

:::warning
At this moment, Drift does not implement the overflow operator.
```drift
Int Context:        [INT MAX] + 1       // Will throw (too long)
Int Context:        [INT MAX] &+ 1      // Equals 0
```
:::

## Operator Method

:::warning
At this moment, Drift does not implement operator methods.
```drift
class User(name: String) : +Equatable, +Incrementable {
    operator == { $left.name == $right.name }
    // Last expression as return type is possible
    
    operator != (l: User, r: User) { 
        return l.name != r.name 
    }
    // Explicit parameters are possible
    
    prefix operator ++ { ... }
    // Prefix operator: ++obj
    
    postfix operator -- { ... }
    // Postfix operator: obj--
}
```

Operator methods require the implementation of their prefab.
:::