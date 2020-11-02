/*
 * @Author: your name
 * @Date: 2020-08-04 10:08:42
 * @LastEditTime: 2020-11-02 10:23:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /pc-saas-manage-platform/src/pages/app/wrappers/auth/index.js
 */
import { Redirect } from 'umi';

const useAuth = () => {
	// todo登录态身份验证
	const token = localStorage.getItem('saasPortalToken');
	if (token) return true;
	else return false;
};

// 验证登录态
export default props => {
	const isLogin = useAuth();
	if (isLogin) {
		return <div>{props.children}</div>;
	} else {
		return <Redirect to="/login" />;
	}
};
