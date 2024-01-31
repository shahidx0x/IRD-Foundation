import express from 'express';

import { CategoryRoutes} from '../modules/categories/cat.route';

const router = express.Router();
const moduleRoutes = [

  {
    path: '/categories',
    route: CategoryRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
