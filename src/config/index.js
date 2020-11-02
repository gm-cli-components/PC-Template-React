/*
 * @Author: your name
 * @Date: 2020-04-26 14:53:20
 * @LastEditTime: 2020-08-08 10:38:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /gy-b2bv2-web/src/config/index.js
 */

import hostConf from './host';
import apiConf from './api';
import menu from './menu';
import navConfig from './nav';

const DEV = process.env.NODE_ENV === 'development';
const envAssetsPrefix = process.env.ASSETS_PREFIX;
const envApiPrefix = process.env.API_PREFIX;

const urlPrefix = envAssetsPrefix ? envAssetsPrefix : DEV ? '/' : '';
const baseURL = envApiPrefix ? envApiPrefix : DEV ? hostConf.devHost : hostConf.prodHost;

console.log('urlPrefix', urlPrefix);
console.log('baseURL', baseURL);

export default {
  name: 'campus',
  zhName: '完美校园',
  urlPrefix, // 静态资源前缀
  footerText: `Copyright©2020完美数联(杭州)有限公司（Perfect Digital (Hangzhou)Technology Co.,Ltd.）| 浙ICP备20007824号-1`,
  logo: urlPrefix + 'assets/img/common/logo_new.png',
  //logo: urlPrefix + 'assets/temp/yunshitonglogo.png',
  favicon: require('@/assets/img/favicon.ico'),
  baseURL, // 后端接口前缀
  apiPrefix: apiConf.apiPrefix,
  api: apiConf,
  menuCfg: menu,
  navConfig,
};
