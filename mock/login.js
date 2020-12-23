/*
 * @Author: your name
 * @Date: 2020-08-05 10:01:45
 * @LastEditTime: 2020-12-23 15:07:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /pc-saas-manage-platform/mock/application.js
 */
export default {
  // GET POST 可省略
  'POST /login/getQrcode': (req, res) => {
    res.send({
      "code": "10000",
      "msg": "成功",
      "data": {
        "url": "http://url",
        "qrId": "2088555555555"
      }
    });
  },
  'POST /login/verifyQrcode': (req, res) => {
    res.send({
      "code": "10000",
      "msg": "成功",
      "data": { "saasPortalToken": "111-222" }
    });
  },
  'POST /login/getUserInfo': (req, res) => {
    res.send({
      "msg": "成功",
      "code": "10000",
      "data": {
        "id": 1,
        "userName": "张三",
        "nickName": null,
        "phoneNum": "13333333333",
        "deptId": 1,
        "wxId": 111,
        "dataScope": null,
        "identityStatus": true,
        "roleKeyCode": "1"
      }
    });
  },
};
