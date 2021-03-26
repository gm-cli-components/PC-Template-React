/*
 * @Author: your name
 * @Date: 2020-02-13 15:44:20
 * @LastEditTime: 2021-03-26 13:47:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /campus-platform/src/config/host.js
 */

/* eslint-disable no-unused-vars */

/**
 * 开发环境后端配置
 */

const PROTOCOL = 'http';
// const PREFIX = '';
const PREFIX = '';
/* 后端服务器地址IP */
// const IP = '118.178.196.42';
// const IP = '127.0.0.1';
/* 后端服务器端口 */
// const PORT = '9090';
// const PORT = '8000';
//const PORT = "80";
const devHost = `/${PREFIX}`;

/********************************************************************/


// 本地开发
// const PROD_PREFIX = 'saas';
// 公测开发
const PROD_PREFIX = '';

const prodHost = `/${PROD_PREFIX}`;


export default {
  devHost,
  prodHost
};
