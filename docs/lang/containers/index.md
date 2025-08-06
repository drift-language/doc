---
sidebar_position: 4
---

# Containers

Containers are useful to create a collection of values.
Three kinds of containers exist in Drift: **lists**, **sets** 
and **dictionaries**. Each container has its own properties and logic.

<div class="text--center">![](/img/pics/containers.png)</div>

## Lists

Lists are useful to store values following an order.
Order is defined by integer keys. List's keys always begin 
with 0. Without an explicit type, a list **can store all types**.

:::warning
At this moment, Drift does not implement explicit list typing.
```drift
let aList: Type[] = [ ... ]
```
:::