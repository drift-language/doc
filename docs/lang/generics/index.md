---
sidebar_position: 19
---

# Generics

In some cases, structures should interact with a dynamically provided type. 
Generic structure permits waiting a type on call and using it on signature and 
body.

## Generic Callables

:::warning
At this moment, Drift does not implement generic callables.
```drift
let value: Any = 1

fun expectInteger<T> : Last { value is T }

fun registerValue<T>(value: T) { ... }
```
:::

## Generic Types

:::warning
At this moment, Drift does not implement generic types.
```drift
class Stack<Element> {
    var elements: Element[] = []
    
    ...
}
```
:::