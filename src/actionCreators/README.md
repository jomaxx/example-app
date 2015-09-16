# actionCreators
An actionCreator is a pure function that returns an [```action```](http://rackt.github.io/redux/docs/basics/Actions.html). Actions are payloads of information that you send to the [```redux```](http://rackt.github.io/redux/index.html) [```store```](http://rackt.github.io/redux/docs/basics/Store.html) via [```store.dispatch()```](http://rackt.github.io/redux/docs/api/Store.html). The store uses [```reducers```](http://rackt.github.io/redux/docs/basics/Reducers.html) to change it's state with the given action.

## actionTypes
An action is an object that has a ```type``` property. It is best practices to use constants for your action type so that they can be used throughout your application.

### Example
Create an actionType

```js
// ../actionTypes.js
export const DO_SOMETHING
```

Create an actionCreator for this actionType
```js
// ./exampleActionCreators.js
import { DO_SOMETHING } from '../actionTypes';

export function doSomething (str) {
  return {
    type: DO_SOMETHING,
    payload: str
  };
}
```
