/*
 * @Author: your name
 * @Date: 2020-08-04 10:42:37
 * @LastEditTime: 2020-08-18 09:11:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /pc-saas-manage-platform/src/models/app.js
 */
import { message } from 'antd';
import { history } from 'umi';
import { getUserInfo, getMenuList, getBannerList } from '@/services/app';

const userInfoStr = sessionStorage.getItem('userInfo') ? sessionStorage.getItem('userInfo') : '{}'
export default {
  namespace: 'app',
  state: {
    userInfo: JSON.parse(userInfoStr),
    menuList: [],
    bannerList: []
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname.indexOf('/loading') > -1) {
          dispatch({
            type: 'getUserInfo',
          });
        }
      });
    },
  },
  effects: {
    *getUserInfo({ payload }, { call, put, select }) {
      const res = yield call(getUserInfo, payload);
      console.log('model中的用户信息', res);
      if (res.success) {
        yield put({
          type: 'updateState',
          payload: {
            userInfo: res.data
          }
        });
        yield put({
          type: 'getMenuList'
        })
        sessionStorage.setItem('userInfo', JSON.stringify(res.data));
        const { identityStatus } = res.data;
        history.push(identityStatus ? '/myApps' : '/setting/company');
      } else {
        return message.error(res.msg ? '操作失败！原因：' + res.msg : '操作失败！');
      }
    },

    *getMenuList({ payload }, { call, put }) {
      const res = yield call(getMenuList, payload);
      console.log('menuList', res);
      if (res.success) {
        yield put({
          type: 'updateState',
          payload: {
            menuList: res.data
          }
        });
      } else {
        return message.error(res.msg ? '操作失败！原因：' + res.msg : '操作失败！');
      }
    },

    *getBannerList({ payload }, { call, put }) {
      const res = yield call(getBannerList, payload);
      console.log('menuList', res);
      if (res.success) {
        yield put({
          type: 'updateState',
          payload: {
            bannerList: res.data
          }
        });
      } else {
        return message.error(res.msg ? '操作失败！原因：' + res.msg : '操作失败！');
      }
    },

  },
  reducers: {
    updateState(state, action) {
      return {
        ...state,
        ...action.payload
      };
    },
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};
