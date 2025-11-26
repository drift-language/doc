---
sidebar_position: 17
---

# Concurrency

Concurrency in Drift allows you to execute multiple tasks simultaneously, improving performance 
and responsiveness in your applications. Drift's concurrency model is designed to make parallel 
execution safer and more intuitive.

::::warning
At this moment, Drift does not implement concurrency features.
```drift
// Example of how concurrency might look in Drift
async fun fetchData(url: String) : String {
    // Asynchronous operation
    return await networkRequest(url)
}

// Running tasks in parallel
fun processMultipleUrls(urls: [String]) {
    let results = parallel {            // Concurrent block returning values
        for urls { as url
            fetchData(url)
        }
    }
    
    // Process results after all tasks complete
    for results { as result
        print(result)
    }
}
```

**Concurrent Blocks:**
- ``parallel`` runs async-capable expression statements, each statement must return a value. 
The block will return a tuple with each returned value.
- ``concurrent`` runs async-capable expression statements without returning a tuple.

In both cases, on error throwing, the entire block will be canceled.
::::

## Concurrency Features

Drift's concurrency model will include:

- Asynchronous functions with `async`/`await` syntax
- Parallel execution of tasks
- Thread safety mechanisms
- Structured concurrency for better resource management
- Built-in synchronization primitives

