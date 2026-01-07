---
sidebar_position: 4
---

# Containers

Containers are useful to create a collection of values.
Four kinds of native containers exist in Drift: **arrays**, **lists**, **sets** 
and **dictionaries**. Each container has its own properties and logic.

:::note
Containers are based on Kotlin types.
For example, Dictionaries are based on Kotlin's ``Map`` type.
:::

<div class="text--center">![](/img/pics/containers.png)</div>

:::warning
At this moment, Drift only implements implicit List typing.
No other container types are supported yet.
:::

## Lists

Lists are useful to store values following an order.
Order is defined by integer keys. List's keys always begin 
with 0. Without an explicit type, a list **can store all types**.

Lists have mutable size, it is more powerful for content editing
than Arrays.

:::warning
At this moment, Drift does not implement explicit list typing.
```drift
let aList: [Type] = [ ... ]
```
:::