# Redux

Redux is a state management framework that can be used with a number of different web technologies, including React.

In Redux, there is a single state object that's responsible for the entire state of your application. This means if you had a React app with ten components, and each component had its own local state, the entire state of your app would be defined by a single state object housed in the Redux store. This is the first important principle to understand when learning Redux: the Redux store is the single source of truth when it comes to application state.

Redux is a state management framework that can be used with a number of different web technologies, including React.

In Redux, there is a single state object that's responsible for the entire state of your application. This means if you had a React app with ten components, and each component had its own local state, the entire state of your app would be defined by a single state object housed in the Redux store. This is the first important principle to understand when learning Redux: the Redux store is the single source of truth when it comes to application state.

## Create a store

const store = Redux.createStore(reducer);

## Get State from the store

const currentState = store.getState();

## Create a action to interact with state

const action = {
    type: 'ANYTHING'
}

## Dispatch

store.dispatch()

## Reducer - Pure Function

Takes a state, action and returns a new State.

## Subscibing to a store

store.subscribe()

## Combine Multiple Store

Redux.combineReducers({
    key1: key1Reducer,
    key2: key2Reducer,
})