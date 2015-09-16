# routes
These are our [```express```](http://expressjs.com/) application [```routers```](http://expressjs.com/4x/api.html#router).

## Adding a router
Create a file that exports a path and instance of the [```express```](http://expressjs.com/) [```Router```](http://expressjs.com/4x/api.html#router)

```js
// ./example.js
import { Router } from 'express';

export const path = '/path/to';
export const router = new Router();

router.get('/example', function(req, res, next) {
  res.send('This is the /path/to/example route');
});

```

Import into and export from  [./index.js](./index.js)

```js
// ./index.js
import * as example from './example';

export {
  example
}

```
