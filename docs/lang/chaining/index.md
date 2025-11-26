---
sidebar_position: 14
---

# Unwrapping & Chaining

Drift permits members chaining. 

```drift
class A(value: Int)

let instance = A()
print(instance.value)       // Here, instance.value is a chain to access 
                            // value from the instance object
```

## Forced Unwrapping

:::warning
At this moment, Drift does not implement forced unwrapping
```drift
let a: String? = "hello"
let b: String = a!          // '!' operator removes the nullable typing

// and forced unwrapping in a chain

nullableMember!.child
```
:::

Sometimes, members can be nullable. A direct chaining from them could throw a runtime exception
in case of a ``NULL`` value.

```drift
let username: String? = null
print(username.length)      // It will throw a runtime exception, 
                            // username is NULL, length is an unknown member
```

If you are sure that the member will not have ``NULL`` as value, you can use the ``!`` operator.
It is used to unwrap nullable behavior from the member type: ``String? -> String``.

:::warning
Unwrap a member which has ``NULL`` as value will throw a runtime exception: ``NULL`` cannot be
unwrapped.
:::

## Optional Chaining

:::warning
At this moment, Drift does not implement optional chaining.
```drift
nullableMember?.child
// If nullableMember is not null, the chain is executed, else not.
```
:::

Optional Chaining permits doing a chain if the member is not ``NULL``.