# Learning React

ReactDOM offers a simple method to render React elements to the DOM which looks like this:

```jsx
ReactDOM.render(componentToRender, targetNode)
```

Nested JSX must return a single element.

Add Comment

```jsx
{/* */}
```

In react `class` attribute should be converted to `className` and all the HTML attributes becomes camelCase.
Example: onclick becomes onClick.

In JSX, the rules are a little different. Any JSX element can be written with a self-closing tag, and every element must be closed.

The first way is to use a JavaScript function. Defining a component in this way creates a stateless functional component.
To create a component with a function, you simply write a JavaScript function that returns either JSX or null. One important thing to note is that React requires your function name to begin with a capital letter.

Example:

```jsx
const MyComponent = function() {
    return (
        <div></div>
    );
}
```

Class Way

```jsx
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return null;
    }
}
```

Adding default props - only used if not supplied props

```jsx
MyComponent.defaultProps = {
  'items': 0
}
```

A stateless functional component is any function you write which accepts props and returns JSX. A stateless component, on the other hand, is a class that extends React.Component, but does not use internal state (covered in the next challenge). Finally, a stateful component is a class component that does maintain its own internal state. You may see stateful components referred to simply as components or React components.

A common pattern is to try to minimize statefulness and to create stateless functional components wherever possible. This helps contain your state management to a specific area of your application. In turn, this improves development and maintenance of your app by making it easier to follow how changes to state affect its behavior.

State consists of any data your application needs to know about, that can change over time. You want your apps to respond to state changes and present an updated UI when necessary.

What this means is that state updates through the setState method can be asynchronous.
This pattern illustrates some important paradigms in React. The first is unidirectional data flow.

LifeCycle Methods

componentWillMount() -- Deprecated and will be removed
componentDidMount() -- Prefered for API Calls
shouldComponentUpdate() -- Returns true  or false and checks if component should be rendered
componentDidUpdate() --
componentWillUnmount() --
ReactDOMServer.renderToString
