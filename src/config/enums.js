/*
 * @Author: your name
 * @Date: 2020-02-13 15:44:20
 * @LastEditTime: 2020-07-08 10:01:42
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /campus-platform/src/config/enums.js
 */

// SUCCESS("10000", "成功"),
// PARAMS_EMPTY("10001", "参数不能为空"),
// PARAMS_ERROR("10002", "参数不合法"),
// PARAMS_NOFULL("10003", "必填参数缺失"),
// SIGN_ERROR("10004", "签名错误"),
// DES_ERROR("10005", "加密错误"),
// SYSTEM_ERROR("10006", "系统异常"),
// BUSINESS_ERROR("10007", "业务异常"),
// DB_ERROR("10007", "DB异常"),
// RESULT_EMPTY("10008", "返回结果为空");
// 返回代码枚举
const resultCode = {
  NG_PRINCIPAL: '用户名或密码错误', // 用户名不存在
  NG_CREDENTIAL: '用户名或密码错误', // 密码错误
  NG_ACCOUNT: '用户名或密码错误或该账户已被停用', // 用户名或密码错误
  NG_USER_NOT_FOUND: '用户未找到',
  NG_UNSUPPORTED: '不支持的认证请求',
  OK: '操作成功',
  NG: '操作失败',
  NG_CAPTCHA: '验证码输入错误',
};

export default {
  resultCode,
};
