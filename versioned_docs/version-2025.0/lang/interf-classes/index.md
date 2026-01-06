---
sidebar_position: 10
---

# Interfaces & Classes

:::warning
At this moment, Drift does not implement interfaces.
```drift
interface Name {
    ...
}
```
:::

Interfaces and Classes are bases of Object-Oriented-Programming.
They permit creating reusable entities and utility structures.

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

Sometimes, we need to create members which are not instance-dependent.
A static member is accessible using the Class' name.

```drift
class A {

    static {
    
        var x = 11
    }
}

print(A.x)    // Prints 11
```

A static field must be initialized on the class declaration.

```drift
class A {

    static {
    
        let x   // Error: x is not initialized
    }
}
```

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

The Classic Constructor is preferred if the initialization requires a script and operations.
In opposition to the other constructor, this cannot declare an attribute. The attributes
must be declared in the class' body.

```drift
class Human {

    let name: String

    init (name: String) {
        $this.name = name
    }
}
```

#### Primary Constructor

Primary Constructor permits declaring _private_ and _immutable_ attributes using a shorter 
syntax. Primary Constructor cannot be used with Classic one and the same class.
So the Primary Constructor can be used for private data, for example, and Classic one for public
and complex other.

```drift
class Human(name: String) { ... }
```

### Initialization For Attributes

Attributes can be initialized on Class declaration.

```drift
class A {
    let counter: Int = 0
    
    fun increment { $this.counter = $this.counter + 1 }
}
```

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
In a class' body, the members can be accessed using the ``$this`` variable, 
like ``$this.member``.

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

#### Dynamic Members

Dynamic Members can be accessed by using the class instance reference.
Dynamic Members cannot be defined using the set statement.

```drift
class Settings {
    var isDarkModeEnabled = false
}

let me = Settings()             // me has the class instance reference
me.isDarkModeEnabled = true     // set a dynamic attribute
print(me.isDarkModeEnabled)     // get a dynamic attribute
```