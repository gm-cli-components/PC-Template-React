/*
 * @Author: your name
 * @Date: 2020-08-03 18:11:59
 * @LastEditTime: 2020-11-05 14:41:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /pc-saas-manage-platform/src/routes.js
 */
export default [
  {
    path: '/',
    component: '../layouts/index',
    routes: [
      { path: '/', redirect: '/home' },
      // 我的应用
      {
        path: '/home', component: '../pages/app/home',
      },
      {
        component: '../pages/error/404'
      },
      // loading
      {
        path: '/loading',
        component: '../pages/app/loading'
      }
    ],
    // wrappers: ['../pages/app/wrappers/auth']
  }
];
