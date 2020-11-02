/*
 * @Author: your name
 * @Date: 2020-02-13 15:44:20
 * @LastEditTime: 2020-09-03 17:32:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /campus-platform/src/config/api.js
 */

export default {
  apiPrefix: '/saas-portal',
  common: {
    sendMessageCode: '/common/sms',
    getCaseList: '/common/getCaseList',
    caseDetail: '/common/caseDetail'
  },
  travel: {
    getQrcode: '/login/getQrcode',
    verifyQrcode: '/login/verifyQrcode'
  },
  app: {
    getUserInfo: '/login/getUserInfo',
    getMenuList: '/login/menuList',
    getBannerList: '/login/bannerList',
    queryAppList: '/application/list',
    myApps: {
      appSwitch: '/application/self/switch',
      queryDetail: '/application/self/queryAppPrivilegeRange',
      queryOrgList: '/application/self/queryDeptList',
      queryUserGroup: '/application/self/queryUserGroup',
      submit: '/application/self/submitAppPrivilegeRange',
      queryAppRangeUsers: '/application/self/queryAppRangeUsers',
      queryUsersWithPrivilege: '/application/self/queryUsersWithPrivilege',
      preViewAppPrivilegeRange: '/application/self/preViewAppPrivilegeRange',
    },
    appsMarket: {
      queryCategoryList: '/application/categoryList',
      detail: '/application/market/detail',
      toOpen: '/application/market/open'
    },
    setting: {
      queryPersonalInfo: '/setup/account/queryPersonalInformation',
      updatePersonalInfo: '/setup/account/updatePersonalInformation',
      queryBaseUnitInfo: '/setup/unit/queryBaseUnitInfo',
      queryUnitInfo: '/setup/unit/queryUnitInformation',
      transferConfirm: '/setup/manager/confirmThiTransfer',
      queryAppManagerList: '/setup/manager/queryManagerUsers',
      queryAppManagerRole: '/setup/manager/queryUserAppPri',
      submitAppManagerRole: '/setup/manager/submitAppPrivilege',
      deleteAppManager: '/setup/manager/deleteAppManager'
    },
    mailList: {
      // 组织
      queryOrgList: '/contacts/dept/queryDeptList',
      editDept: '/contacts/dept/editDept',
      addDept: '/contacts/dept/addDept',
      deleteDept: '/contacts/dept/deleteDept',
      // 部门
      queryUserGroup: '/contacts/userGroup/queryUserGroup',
      editUserGroup: '/contacts/userGroup/editUserGroup',
      addUserGroup: '/contacts/userGroup/addUserGroup',
      deleteUserGroup: '/contacts/userGroup/deleteUserGroup',
      // 人员
      queryPerList: '/contacts/user/queryUserList',
      addDeptUser: '/contacts/user/addUser',
      editDeptUser: '/contacts/user/editUser',
      deleteUser: '/contacts/user/deleteUser',
      unbindUser: '/contacts/userGroup/unbindUser',
      queryBindUserList: '/contacts/userGroup/queryBindUserList',
      bindUser: '/contacts/userGroup/bindUser',
      importDept: '/contacts/dept/importDept'
    }
  }
};
