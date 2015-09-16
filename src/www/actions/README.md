# actionCreators
An actionCreator is a pure function that returns an [```action```](http://rackt.github.io/redux/docs/basics/Actions.html). Actions are payloads of information that you send to the [```redux```](http://rackt.github.io/redux/index.html) [```store```](http://rackt.github.io/redux/docs/basics/Store.html) via [```store.dispatch()```](http://rackt.github.io/redux/docs/api/Store.html). The store uses [```reducers```](http://rackt.github.io/redux/docs/basics/Reducers.html) to change it's state with the given action.

## actionTypes
An action is an object that has a ```type``` property. It is best practice to use constants for your action type so that they can be used throughout your application.
