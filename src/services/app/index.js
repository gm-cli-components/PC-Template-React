/*
 * @Author: your name
 * @Date: 2020-08-05 11:12:40
 * @LastEditTime: 2020-08-05 13:43:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /pc-saas-manage-platform/src/services/app/appsMarket/index.js
 */
import { config, networkUtils } from '@/utils/index';
const { api } = config;
const { app, common } = api;
export async function getUserInfo(params) {
	return networkUtils.request({
		url: app.getUserInfo,
		method: 'post',
	});
};

export async function getMenuList(params) {
	return networkUtils.request({
		url: app.getMenuList,
		method: 'post',
	});
};

export async function getBannerList(params) {
	return networkUtils.request({
		url: app.getBannerList,
		method: 'post',
	});
};

export async function sendMessageCode(params) {
	return networkUtils.request({
		url: common.sendMessageCode,
		method: 'post',
	});
};

