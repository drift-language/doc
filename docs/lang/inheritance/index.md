---
sidebar_position: 13
---

# Inheritance

:::warning
At this moment, Drift does not implement inheritance.
```drift
class Parent {
    fun test { ... }
}

class ChildA extend Parent {
    override fun test { ... }
}
// or
class ChildB : Parent {
    override fun test { ... }
}
```
:::

Another important feature of Object-Oriented-Programing is inheritance.
Classes can inherit from others. The inheriting Class is called _subclass_,
and the inherited one is called parent or _superclass_. A class can inherit 
from once superclass. 

Subclasses inherit of their superclass members like methods, attributes and 
subscripts. They can override their definition using the ``override`` keyword
as prefix.

## Accessing Superclass Members

:::warning
At this moment, Drift does not implement superclass accessing.
```drift
class Parent : +Subscriptable {
    let age: Int = 56

    subscript (i: Int) : Int {
        ...
    }

    fun test { ... }
}

class Child : Parent {
    override let age: Int = $super.age / 2
    
    override subscript (x, y) : Int {
        return $super[x * y]
    }

    override fun test {
        ...
        $super.test()
    }
}
```
:::

## Disable Overriding On Member

:::warning
At this moment, Drift does not implement Override Preventing
```drift
class A {
    final let a: Int = 1
}
```
:::

It is possible to prevent any override of a Class member
by using the ``final`` keyword.