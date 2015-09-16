import { Router } from 'express';

const path = '/';
let router = new Router();

router.get('*', function(req, res, next) {
  res.send('react router here');
});

export {
  path,
  router
}
