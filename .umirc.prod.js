/*
 * @Author: your name
 * @Date: 2020-08-03 16:53:23
 * @LastEditTime: 2020-12-23 15:05:52
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
  alias: {
    '@': require('path').resolve(__dirname, 'src'),
    '@ant-design/icons/lib/dist': require('path').resolve(__dirname, 'src/utils/lib/antdIcons.js')
  },
  // 正式环境
  base: '/',
  publicPath: 'publicPath',
  outputPath: './dist/prod/saasManage',
  mock: false,
  title: false,
  locale: false,
  hash: true,
  theme: {
    '@primary-color': '#ff800e',
  },
  proxy: {
    "/path": {
      "target": "ip", // 正式环境
      "changeOrigin": true,
      "pathRewrite": { "^/path": "" }
    }
  }
};
