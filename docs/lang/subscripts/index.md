---
sidebar_position: 12
---

# Subscripts

Subscripts can be defined in structures like Classes, Enums.
They are shortcuts for accessing elements using the index syntax ``member[index]``.
Subscripts are natively implemented containers like Lists and Dictionaries.
The Subscript behavior can be defined itself by defining the special ``subscript`` method into
the member.

To implement Subscripts, the member must implement the ``Subscriptable`` Prefab.

## Static Subscripts

:::warning
At this moment, Drift does not implement static subscripts.
```drift
class A with Subscriptable {
    static {
        subscript (index: Int) : Int {
            get {
                ...
            }
            
            set {
                ...     // $newValue injected
            }
        }
    }
}
// A[i]    A[i] = value


class B : +Subscriptable {
    static {
        subscript (x: Int, y: Int) : Int {
            return ...
        }
    }
}
// B[x, y]     B[x, y] = value
```
:::

## Dynamic Subscripts

:::warning
At this moment, Drift does not implement dynamic subscripts.
```drift
class A with Subscriptable {
    subscript (index: Int) : Int {
        get {
            ...
        }
        
        set {
            ...     // $newValue injected
        }
    }
}
// member[i]    member[i] = value


class B : +Subscriptable {
    subscript (x: Int, y: Int) : Int {
        return ...
    }
}
// member[x, y]     member[x, y] = value
```
:::