import { handleModuleRoutes } from '@/utils';

const modules = import.meta.globEager('./**/*.ts') as AuthRoute.RouteModule;

const routes = handleModuleRoutes(modules);

export { routes };
