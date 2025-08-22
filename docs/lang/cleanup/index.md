---
sidebar_position: 16
---

# Cleanup Actions

:::warning
At this moment, Drift does not implement cleanup actions
```drift
fun exists(filename: String) { ... }
fun open(filename: String) throws { ... }
fun close(filename: String) throws { ... }

fun readFile(filename: String) throws {
    exists(filename) ? {
        let file = try! open(filename)
        
        defer {     // All statements in the defer block will
                    // be executed at end of block life
                    // (return, break, throw)
            try! close(filename)
        }
        
        ...
    }
}

... {
    
    // Order execution of many defer block
    // By default as LIFO, or using explicit indexing.
    defer[1] {
        ...
    }
    
    defer[2] {
        ...
    }
    
} ...
```
:::