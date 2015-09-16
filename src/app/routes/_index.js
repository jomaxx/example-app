import { Router } from 'express';

export const path = '/';
export const router = new Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
