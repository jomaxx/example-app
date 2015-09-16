import { Router } from 'express';
import renderServer from '../../www/server';

const router = new Router();

router.get('*', renderServer);

export default router;
