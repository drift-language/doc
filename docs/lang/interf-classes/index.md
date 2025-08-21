---
sidebar_position: 10
---

# Interfaces & Classes

Interfaces and Classes are bases of Object-Oriented-Programming.
They permit creating reusable entities and utility structures.

## Interfaces

:::warning
At this moment, Drift does not implement interfaces.
```drift
interface Name {
    ...
}
```
:::

Interfaces are optional but handy for defining OOP structure bases.
By using them, the structure of the classes is planned before any 
implementation. 

Once created, Interfaces can be implemented to classes. All concerned
classes must have a coded implementation of each interface's member.

## Classes

The main part of OOP. Classes are reusable structures. 
They can contain static members which do not have an inherited
environment, and dynamic ones.

Class Body is optional. If it contains nothing, it can be omitted.

```drift
class Car
// None constructor and body

class User(name: String, password: String)
// Short Constructor and none body
```

### Static Members

:::warning
At this moment, Drift does not implement static members.
```drift
class A {
    static {
        private let a
        var b
        ...
    }
    
    ...
}
```
:::

Sometimes, we need to create members which are not instance-dependent.
Static Members have the same values for all instances of a Class.
Static Methods can be run without an instance.

### Dynamic Members

Dynamic Members are declared on instantiating. Dynamic Attributes can be 
initialized by using the constructor.

```drift
class Human {
    private let id: String
    private var name: String
    
    fun about {
        print("ID = " + $this.id + " / name = " + $this.name)
    }
}
```

### Constructor

Class Constructor is run on Class instantiating. It permits running a script directly
when the new instance is initialized. It permits also initializing class attributes.
There are two ways to create a constructor: the complete one, and the short other.

Constructor Parameters cannot be positional. Their name must be written on instantiating.

#### Classic Constructor

:::warning
At this moment, Drift does not implement the classic constructor.
```drift
constructor (...) { ... }
```
:::

The Classic Constructor is preferred if the initialization requires a script and operations.
In opposition to the other constructor, this cannot declare an attribute. The attributes
must be declared in the class' body.

It is suggested to use ``this`` keyword to target an attribute or method, to prevent any
confusion with constructor's parameters.

```drift
class Human {
    private let name: String

    constructor (name: String) {
        $this.name = name
    }
    
    ...
}
```

#### Short Constructor

Short Constructor permits declaring _private_ and _immutable_ attributes using a short 
syntax. Short Constructor cannot be used with Classic one and the same class.
So the Short Constructor can be used for private data, for example, and Classic one for public
and complex other.

```drift
class Human(name: String) { ... }
```

### Initialization For Attributes

:::warning
At this moment, Drift does not implement Attribute Initialization
```drift
class A(b: String = "a") {  // b Initialized on "a"
    let a: Int = 1       // a Initialized on 1
}
```
:::

### Instantiating

Interfaces cannot be instantiated, only Classes can. Contrarily to other languages, 
Drift does not need ``new`` keyword.

```drift
class Vehicle

let personalCar = Vehicle()
// personalCar has an instance of the Vehicle class
```

```drift
class User(name: String)

let me = User(name = "John")
// me has an instance of the User class
```

### Accessing Class Members

Static and Dynamic Members from a Class can be accessed easily.
In a class' body, the members can be accessed by two ways:
- **Explicit way:** using the ``$this`` variable before, like ``$this.member``
- **Implicit way:** writing directly the member's name. Attention to doesn't
confuse with parameters.

#### Static Members

In most cases, to access a Static Member, the Class' name
must start the access expression:

```drift
class User {
    static {
        var usersCount = 11
    }
}

print("Users Count = " + User.usersCount)
```

Another special case permits accessing without the class' name:

**An Explicit Typed Context:**

If the context where the access is done already knows which class use,
the class name can be omitted. Remember the dot before the member name.

This does not work if the parameter is not typed explicitly, 
or a union of many types.

```drift
class Color {
    static {
        let black = 0x0
        let white = 0xFFFFFF
        
        fun random : Color { ... }
    }
}

fun colorize(color: Color) { ... }

colorize(.white)        // The parameter is explicitly typed as Color
colorize(.random())
```

#### Dynamic Members

Dynamic Members can be accessed by using the class instance reference.
Dynamic Members cannot be defined using the set statement.

```drift
class Settings {
    var isDarkModeEnabled = false
}

let me = User()     // me has the class instance reference

me.isDarkModeEnabled = true     // set a dynamic attribute
print(me.isDarkModeEnabled)     // get a dynamic attribute
```

### Computed Attributes

:::warning
At this moment, Drift does not implement computed attributes.
```drift
class A {
    var attr: Type {
        get {
            ...
        }
        
        set (newValue) {
            ...
        }
    }
    
    var attr2: Type {
        get { ... }
        
        no set      // optional, explicit read-only behavior
    }
    
    var attr3 { no set }        // Default getter, read-only
}

let a = A()
a.attr = value      // setter is runned
print(a.attr)       // getter is runned
```

Getter has Last special return type as default.

If none parameter is given to a setter, the implicit constant ``$newValue`` 
is initialized.

An attribute with only a setter is read-only.

Immutable attributes cannot have a setter.
:::

In many cases, an attribute should be computed on get or set. 

### Attributes Triggers

:::warning
At this moment, Drift does not implement attributes observers.
```drift
class A {
    var attr : Type {
        trigger onSet {     // Will be triggered when on attribute value set
            ...
        }
        
        ...
    }
}
```

**Planned Triggers:**

- ``beforeGet``
- ``afterGet``
- ``beforeSet``
- ``afterSet``
::: 

Attributes can implement Observers. These Observers are functions triggered on a defined event.

### Operators Methods

:::warning
At this moment, Drift does not implement operators methods.
```drift
class A {
    operator + {            // $left and $right are implicit
        return ...
    }
}
```
:::

Operator behavior can be customized for a class by defining Operators Methods.

## Visibility

:::warning
At this moment, Drift does not implement visibilities.
```drift
class A {
    public let abc
    protected var def
    
    private fun ghi { ... }
}
```
:::

Visibilities are crucial in OOP to prevent accessing to critical members like private data, 
secrets, etc. In Drift, there are three visibilities:
- **Public:** can be manipulated from anywhere
- **Protected:** can only be manipulated from the current class and its children
- **Private:** can only be manipulated from its class