import { skinProductRoutes } from "./features/skinsProducts/routes/skinProducts.route.mjs";

const BASE_PATH = "/api/v1";

export const CustomRouter = (app) => {
  const routes = () => {
    app.use(BASE_PATH, skinProductRoutes.routes());
  };
  routes();
};
