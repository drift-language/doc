---
sidebar_position: 15
---

# Error Handling

Error handling in Drift allows you to manage exceptional situations in your code. Drift uses a do-throw-catch mechanism similar to other modern programming languages.

## Error Types

In Drift, errors are represented using enums that extend the `Error` type:

```drift
enum CustomError : Error {
    case notFound
    case unauthorized
    case invalidInput(message: String)
}
```

## Throwing Errors

Functions that can throw errors must be marked with the `throws` keyword:

```drift
fun validateUser(id: String) throws {
    if (id.isEmpty()) {
        throw CustomError.invalidInput(message: "User ID cannot be empty")
    }
    
    // More validation logic...
}
```

You can use the ternary operator for concise error throwing:

```drift
fun checkAccess(user: User) throws {
    user.isAdmin ? null : throw CustomError.unauthorized
}
```

::::warning
At this moment, Drift does not implement error handling.
```drift
enum ExampleError : Error {
    case forbidden
    case invalidField(key: String, value: Any)
}

fun logIn(pass: String, isApproved: Bool) throws {
    let secret: String = "hello"

    pass != secret ? throw ExampleError.invalidValue
    !isApproved ? throw ExampleError.forbidden
    
    print("Welcome!")
}
```
::::

### Explicit Exception Type

Throwable Callables can define explicitly which Error Enum to use in case of throwing.

```drift
fun throwableFunction throws(CustomError) { ... }
```

## Catching Errors

When calling a function that can throw errors, you must handle potential errors using a do-catch block:

```drift
fun processUserData() {
    do {
        validateUser("123")
        // Continue processing...
    } catch (error: CustomError) {
        match error {
            .notFound -> { print("User not found") }
            .unauthorized -> { print("Unauthorized access") }
            .invalidInput(let message) -> { print("Invalid input: " + message) }
        }
    } catch {
        print("Error: " + $error)
    }
}
```

## Propagating Errors

You can propagate errors up the call stack by marking your function with `throws`:

```drift
fun processUser(id: String) throws {
    // This will propagate any errors thrown by validateUser
    validateUser(id)
    
    // Continue processing...
}
```

## Best Practices

1. Use specific error types for different categories of errors
2. Include relevant information in parameterized error cases
3. Handle errors at the appropriate level of abstraction
4. Avoid using throw for control flow in normal operation

## ``try`` Keywords

:::warning
At this moment, Drift does not implement ``try`` keywords.
:::

Contrarily with many other languages, Drift does not use the ``try`` keyword for a try-catch
statement, do-catch in Drift. ``try`` is used for calling throwable callables and implement a
specific behavior.

### Classic ``try`` Keyword

The classic ``try`` keyword permits calling a throwable callable. Do it without this keyword will
result in an error throwing. Require this keyword encourages it to write more maintainable and clean 
code. Call a throwable callable using ``try`` must be done inside a do-catch statement.

```drift
fun throwableFunction throws { ... }

do {
    try throwableFunction()     // It works, try is required because the function can throw

    throwableFunction()         // 'try' keyword is missing, it will throw
} catch {
    ...
}
```

### ``try?`` Operator

This version will not transfer the throwing to a higher level. Instead, it will return **Null** if 
the call results in a throw. It does not need a do-catch statement. 

```drift
fun throwableFunction : Int throws { ... }

let value = try? throwableFunction()     // The returned Integer if none throw, or Null
```

### ``try!`` Operator

The `try!` operator forces unwrapping of a throwable expression by bypassing error handling. 
While convenient for prototyping, it should be used with caution as any thrown error will result 
in a fatal error that crashes the program. Not recommended for production code.

```drift
fun throwableFunction throws { ... }

try! throwableFunction()      // do-catch not needed, if the call throws, it will crash
```