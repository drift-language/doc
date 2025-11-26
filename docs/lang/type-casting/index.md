---
sidebar_position: 18
---

# Type Casting

In Drift, it is easy to check and deal with native and custom types.
Two main parts exist:
- Type Check using the ``is`` keyword.
- Type Down-casting using the ``as`` keyword.

## Type Check

:::warning 
At this moment, Drift does not implement type check.
```drift
fun isInteger(value: Any) : Bool {
    return value is Int
}

fun isNotInteger(value: Any) : Bool {
    return value !is Int        // 'is' keyword can be negated -> '!is'
}
```
:::

## Down-casting

:::warning
At this moment, Drift does not implement down-casting.
```drift
let a: Any = 1          // Has Any as type, not Int
let b: Int = a as Int   // a is down-casted as Int

fun toIntOrNull(value: Any) : Int? {
    return value as? Int        // Down-casted if possible, else Null
}
```
:::

:::info
At this moment, Any is not a top-type, but the absence of a type.
We plan to refactor Any to be a top-type.
:::