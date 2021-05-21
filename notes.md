# React Redux Integration

-- What is React?

React is a view library that you provide with data, then it renders the view in an efficient, predictable way.

-- What is Redux?

Redux is a state management framework that you can use to simplify the management of your application's state.

To integrate react-redux package is required to be used.

Wrap your app with Provider

```jsx
class Test extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Provider store={store}>
                <App />
            <Provider>
        );
    }
}
```

## Userful methods

-- Behind the scenes React Redux uses store.subscribe() to implement these methods:

mapStateToProps()
mapDispatchToProps()

-- Connect Method

connect(mapStateToProps, mapDispatchToProps)(Component)
