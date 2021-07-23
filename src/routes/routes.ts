import * as express from 'express';
import authRoutes from './auth-routes';
import passwordsRoutes from './passwords-routes';

const router = express.Router();

router.use(authRoutes);
router.use('/passwords/', passwordsRoutes);

export default router;
