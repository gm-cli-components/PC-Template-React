/*
 * @Author: your name
 * @Date: 2020-08-03 16:53:23
 * @LastEditTime: 2020-11-05 14:40:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /pc-saas-manage-platform/.umirc.js
 */
// ref: https://umijs.org/config/
import routes from './src/routes';

export default {
  routes,
  antd: {},
  // history: { type: 'hash' },
  dva: {},
  dynamicImport: {
    loading: '@/pages/Loading',
  },
  // base: '/publicPath/',
  outputPath: './dist/publicPath',
  // publicPath: '/publicPath/',
  // mock: false,
  title: false,
  locale: false,
  hash: true,
  theme: {
    '@primary-color': '#ff800e',
  },
  // proxy: {
  //   "/neazfw": {
  //     // "target": "",
  //     "changeOrigin": true,
  //     "pathRewrite": { "^/neazfw": "" }
  //   }
  // }
};
