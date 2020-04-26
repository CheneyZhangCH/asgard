import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true,
  routes: [
    {
      path: '/404',
      component: './404.tsx',
      exact: true,
    },
    {
      path: '/',
      component: './layouts/index',
      // routes: [
      //   { path: '/list', component: 'list' },
      //   { path: '/admin', component: 'admin' },
      // ],
    },
  ],
});
