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
