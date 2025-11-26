---
sidebar_position: 9
---

# Prefabs

:::warning
At this moment, Drift does not implement prefabs.
```drift
prefab PrefabName {
    ...
}

class ClassName with PrefabName
// or short syntax
class ClassName : +PrefabName
```

**Planned Native Prefabs:**

- ``Data`` to create data classes with util members
- ``Subscriptable`` to add a native index system to class with getter and setter
```drift
class A : +Subscriptable {
    subscript (index: Int) : Int {
        return ...
    }
} 
```
- ``Equatable`` to implement operator methods for ``==`` and ``!=`` operators
- ``Comparable`` to implement operator methods for comparison operators
- ``Hashable`` to implement ``hash`` method
- ``Cloneable`` to implement deep/shallow ``clone`` method
- ``Serializable`` to implement native _JSON_ auto serialization
- ``Incrementable`` to accept ``++`` and ``--`` operators
- ``Addable`` / ``Subtractable`` / ``Multipliable`` / ``Divisible`` to accept basic math operators
- ``Iterable`` to implement ``iterate`` method with ``for instance { ...``
- ``Countable`` to implement ``count`` method
- ``Observable`` to implement main event methods (``onChange`` etc.)
- ``Closeable`` to implement ``close`` method
:::