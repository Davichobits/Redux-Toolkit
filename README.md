# Redux-Toolkit
Deeping Redux Toolkit concepts from [Codevolution](https://www.youtube.com/playlist?list=PLC3y8-rFHvwiaOAuTtVXittwybYIorRB3) 

## Videos

- ✅ [Intro](https://www.youtube.com/watch?v=0awA5Uw6SJE&list=PLC3y8-rFHvwiaOAuTtVXittwybYIorRB3&index=1)
- ✅ [Getting Started](https://www.youtube.com/watch?v=ZySFOgejw0k&list=PLC3y8-rFHvwiaOAuTtVXittwybYIorRB3&index=2)
- ✅ [Three Core Concepts](https://www.youtube.com/watch?v=7cREd9mesMg&list=PLC3y8-rFHvwiaOAuTtVXittwybYIorRB3&index=3)

## When to use Redux?

When you want to manage the global state of your application in a predictable way.

## Cons of Redux
- Complex configuration.
- In addition to redux, you need to install other libraries like redux-thunk, redux-saga, redux-observable, etc.
- Requires a lot of boilerplate code.

## What is Redux Toolkit?

Is the official toolset for efficient Redux development. Solve the cons of Redux.

## React Redux

Is the official React bindings for Redux.

## Order of learning
1. Redux
2. Redux Toolkit
3. React Redux

## Three Core Concepts in Redux
Store - Holds the state of your application.
Action - Describes the changes in the state of the application.
Reducer - Ties the store and actions together.

## Three Principles of Redux

![image](https://github.com/Laboratoria/curriculum/assets/123121338/9752b708-65b4-4b21-b11d-b513ce936272)

## Redux Store

- Holds the state of your application.
- Allows access to state via `getState()`.
- Allows state to be updated via `dispatch(action)`.
- Registers listeners via `subscribe(listener)`.
- Handles unregistering of listeners via the function returned by `subscribe(listener)`.