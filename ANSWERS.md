- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes are a way to make your React Javascript software "type-sensitive" to ensure the right data type is being passed through
throughout the components in your ecosystem. Data type sensitivity is important in ensuring your code is peformant, can scale well, and remains stable & safe
as your code becomes more larger & complex. 

- [ ] Describe a life-cycle event in React?

A React Life-Cycle consists of the following:
* A React Component is initialized, or mounted, through the constructor, and given an initial state from the props data, if applicable, from outside the component. 
* The React Component determines whether a component should be rendered, based on appropriate logic provided by the method "ShouldComponentUpdate()". This is also where the programmer adds additional event listeners to point to Component methods, in the case in any point of the lifecycle, that the user is interacting and making any changes to the state of the website. 
* The React Component renders, or updates, based on the appropriate logic provided by the render() method. The React Component renders all React Components
on the HTML DOM;
* The React Component checks for any additional events from the user interacting with the DOM, using the event handlers / listeners attached to the React Component. If an event is sent off from the event handlers, the methods attached to the event handlers will perform any appropriate logic to change the 
state (i.e. this.setState()), and when the React LifeCycle repeats itself, those changes will be reflected on the render() method. 
* At the end of the lifecycle, ComponentDidMount() and ComponentDidUpdate() is applied before the next frame of rendering to apply any global logic 
on the component (i.e. subscribe/unsubscribe to outside event listeners or data API calls), based on the current state data.


- [ ] Explain the details of a Higher Order Component?

A Higher Order Component allows for conditional rendering of lower level components, based on the state (existing mutable data) of the higher level components. A Higher Order Component is like a Parent Component looking at the state of the world around it, and determining what to do with the child components it has received - its decision is reflected in the Parent Component's output.   

In other words, a higher order component is the equivalent of a higher order function that can take in several functions, or more, as arguments,
and using the logic provided in the higher order function, determinng the output of the higher function, after applying the appropriate logic to
the functions as arguments. 


- [ ] What are three different ways to style components in React? Explain some of the benefits of each.

* *Vanila Javascript with CSS:* The most direct means of applying styling to all of your HTML elements. 
* *LESS / SAAS Pre-Processing:* Allows for nested CSS styling, CSS variables, or mixins of large CSS files. Very friendly for responsive web / mobile design. 
* *Styled Components:* Allows for the programmer to create custom HTML elements / class tags that have their own styling attributes directly
on Javascript, rather than going back and forth between your CSS Files and your Javascript files. You can apply conditional rendering logic on the
styled components far more faster.  