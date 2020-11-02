import { message, Modal } from 'antd';
import axios from 'axios';
// import pathToRegexp from 'path-to-regexp';
import qs from 'qs';
import { ymd } from '@/utils/date';
import config from '../config';
import enums from '../config/enums';
import Logger from '@/utils/logger-browser';

const logger = new Logger();

const {
  // api,
  baseURL,
  urlPrefix
} = config;
const { resultCode } = enums;
const serializeDate = d => ymd(d);
const paramsSerializer = params => qs.stringify(params, { serializeDate, indices: false });

// // Default config of axios
// logger.info(`API Server: ${baseURL}`);
axios.defaults = Object.assign(axios.defaults, {
  baseURL,
  timeout: 1000 * 60, // 请求超时时间
  withCredentials: true
});

axios.interceptors.request.use(
  config => {
    var token = localStorage.getItem('saasPortalToken'); //检查是否有token,有的话说明是已登录，没有就说明未登录
    if (token) {
      //如果登录了就在每个接口的headers里面增加token
      config.headers.saasPortalToken = token;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  response => {
    // token 已过期，重定向到登录页面
    // console.log(response.status);
    if (response.status === 401) {
      Modal.error({
        title: '登录超时',
        content: '请重新登陆',
        okText: '好',
        onOk: () => {
          window.location.href = '/travel/login';
        }
      });
      return response;
    }

    if (response.status === 404) {
      message.error('请求失败，请联系管理员');
      return response;
    }

    return response;
  },
  error => {
    // Do something with response error
    return Promise.reject(error);
  }
);

const fetch = options => {
  let { method = 'GET', url, params, data, ...otherOptions } = options;
  const cloneData = { ...data };
  //console.log(otherOptions);
  try {
    let domain = '';
    if (url.match(/[a-zA-z]+:\/\/[^/]*/)) {
      domain = url.match(/[a-zA-z]+:\/\/[^/]*/)[0];
      url = url.slice(domain.length);
    }
    // const match = pathToRegexp.parse(url);
    // console.log(match);
    // url = pathToRegexp.compile(url)(data);
    // for (const item of match) {
    //   console.log(item);
    //   if (item instanceof Object && item.name in cloneData) {
    //     delete cloneData[item.name];
    //   }
    // }
    // url = encodeURI(url);
    // console.log(url);
    url = domain + url;
  } catch (e) {
    console.log(e);
    message.error(e.message);
  }
  switch (method.toLowerCase()) {
    case 'get':
      return axios.get(url, {
        params: params,
        paramsSerializer
      });
    case 'post':
      return axios.post(url, cloneData, {
        params
      });
    case 'download':
      return axios.get(url, {
        responseType: 'arraybuffer',
        params,
        paramsSerializer
      });
    case 'form':
      return axios.post(url, cloneData, {
        params,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        paramsSerializer
      });
    case 'delete':
      return axios.delete(url, cloneData);
    case 'put':
      return axios.put(url, cloneData);
    case 'patch':
      return axios.patch(url, cloneData, {
        params
      });
    case 'upload':
      return axios.post(url, data, {
        headers: {
          'Content-Type': 'multipart/form-data'
          // 'X-Requested-With': 'XMLHttpRequest',
        },
        ...otherOptions
      });
    default:
      return axios(options);
  }
};

const request = options => {
  logger.network(`[REQ] [${options.method.toUpperCase()}] ${options.url}`, options);

  return fetch(options)
    .then(response => {
      logger.network(`[RES] [${options.method.toUpperCase()}] ${options.url}`, response);
      // console.groupEnd()
      const { headers, status } = response;
      const res = response.data;
      // 成功code = '10000'
      if (res.code === '10000') {
        return {
          success: true,
          msg: resultCode[res.code] || res.msg,
          code: res.code,
          data: res.data
        };
      } else {
        return {
          success: false,
          msg: resultCode[res.code] || res.msg,
          code: res.code,
          data: res.data
        };
      }
    })
    .catch(error => {
      let msg = '';
      const { response } = error;
      console.log('error', error);
      // console.log(response);

      if (response) {
        const { status } = response;
        logger.error(`[RES] [${options.method.toUpperCase()}] ${options.url}`, response);

        if (status === 401) {
          Modal.error({
            title: '登录超时',
            content: '请重新登录',
            okText: '好',
            onOk: () => {
              window.location.href = urlPrefix + 'login';
            }
          });

          msg = '登录超时';
          // return;
        } else if (status === 400) {
          msg = '错误的请求参数，请开发检查';
        } else if (status === 404) {
          msg = '请求的API不存在，请开发检查';
        } else if (status === 409) {
          msg = '提交数据与已有数据冲突，请开发检查';
        } else if (status === 500) {
          msg = '服务端错误，请开发检查';
        }
        // console.log(msg);
        return { success: false, status, message: msg };
      }

      const status = 600;
      msg = '网络异常';
      return { success: false, status, message: msg };
    });
};

export default { request };
