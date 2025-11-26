---
sidebar_position: 11
---

# Classes Extensions

:::warning
At this moment, Drift does not implement classes extensions.
```drift
class A {
    static {
        let abc
    }
}

extend class A {
    static {
        let def         // The new attribute def is added to A class
    }
}

print(A.def)            // Correct with extension
```

Extensions files should be named following the pattern ``ClassName.ExtensionName.drift``.
:::

Sometimes, it is interesting to extend an existing Class' members, for example, 
to split Class definition in many files, or enrich an external Class. It is straightforward in Drift.