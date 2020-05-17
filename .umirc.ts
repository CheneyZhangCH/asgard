import { defineConfig } from 'umi'

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
      path: '/login',
      component: './login/login',
      exact: true,
    },
    {
      path: '/*',
      component: './layout/layout',
      exact: true,
      routes: [
        { path: '/', component: './index/index', exact: true },
        { path: '/post/new', component: './post/new', exact: true },
      ],
    },
  ],
  antd: {},
  dva: false,
  dynamicImport: false,
  title: '米果的小木屋',
})
