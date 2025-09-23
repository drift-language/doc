---
sidebar_position: 8
---

# Enumerators

:::warning
At this moment, Drift does not implement enumerators.
```drift
// Without explicit type, it uses Int type 
// and assignment is optional
enum Name {
    value       // = 0
    value2      // = 1
    ...
}

// With explicit type
// Assignment is necessary if 
// the type does not implement 
// the Incrementable prefab.
enum Name : Type {
    value = Value
    value2 = Value2
}
```
:::