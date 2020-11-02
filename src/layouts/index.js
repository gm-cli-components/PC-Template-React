/*
 * @Author: your name
 * @Date: 2020-08-03 16:53:23
 * @LastEditTime: 2020-11-02 10:42:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /pc-saas-manage-platform/src/layouts/index.js
 */
import React, { useEffect, useState } from 'react';
// import NProgress from 'nprogress';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { withRouter, connect } from 'umi';
import { BackTop, Layout, ConfigProvider, Icon, Spin } from 'antd';
import lodash from 'lodash';
import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.less';
import styles from './index.less';
import '@/styles/index.less';
import { config } from '@/utils';
import { Nav } from '@/components';


const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

const { Content, Footer } = Layout;
const { favicon, menuCfg, navConfig, zhName } = config;
const { workNav } = navConfig;

const App = ({ children, dispatch, app, loading, location, dashboard, login, ...rest }) => {

  const t = Object.values(menuCfg).filter(menu => location.pathname.indexOf(menu.url) > -1);
  const title = t.length ? `${t[0].name} · ${zhName}` : `${zhName}`;
  // const changeBackColor = location.pathname.match('/setting') || location.pathname.match('/mailList');

  const userInfo = JSON.parse(sessionStorage.getItem('userInfo') || '{}');

  const [new_workNav, setNew_workNav] = useState(workNav);

  useEffect(() => {
    const unlisten = rest.history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);



  useEffect(() => {
    let tempArr = [];
    const menuList = JSON.parse(sessionStorage.getItem('menuList') || '[]');
    tempArr = lodash.cloneDeep(menuList.map(item => ({ value: item.menuName, url: item.menuUrl, menuId: item.menuId })));
    // if (app && app.menuList && app.menuList.length > 0) {
    //   // {menuId: 34899, menuName: "我的应用", menuUrl: "/myApps", icon: null, menuType: "C"}
    //   tempArr = lodash.cloneDeep(app.menuList.map(item => ({ value: item.menuName, url: item.menuUrl, menuId: item.menuId })));
    // } else {
    //   tempArr = lodash.cloneDeep(workNav);
    // }
    tempArr.push({
      value: `欢迎您${app.userInfo.userName && ('，' + app.userInfo.userName) || ''}`,
      isUser: true,
    });
    console.log('useEffect-tempArr--->', tempArr);
    setNew_workNav(tempArr);
  }, [app.userInfo.userName]);


  const isLoading = () => {
    let temp = false;
    for (let a in loading.effects) {
      if (loading.effects[a]) {
        temp = true;
      }
    };
    return temp;
  };
  const isTransfer = location.pathname.match('/transferLogin') || location.pathname.match('/transferError');
  return (
    <ConfigProvider locale={zhCN}>
      <Spin spinning={isLoading()} className={styles.allLoading} tip='加载中...' indicator={antIcon}>
        <div>
          {/* 控制页面title  favicon等*/}
          <Helmet>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href={favicon} type="image/x-icon" />
          </Helmet>
          {/* 子页面展示 */}
          <Layout>
            <div className={styles.centerContainer} id="centerContainer">
              <BackTop visibilityHeight={85} target={() => document.getElementById('centerContainer')} />
              {/* 公共导航栏，todo控制动态list， 及defaultNav放到modal控制 */}
              {isTransfer ? null : <Nav
                className={styles.navBox}
                list={new_workNav}
                dispatch={dispatch}
              />}
              <Content style={{ marginTop: isTransfer ? '0' : '50px', minHeight: '700px' }}>
                <div className={styles.innerContainer} id="innerContainer">
                  {children}
                </div>
              </Content>
              <Footer style={{ textAlign: 'center', fontSize: '12px', color: 'rgba(0,0,0,0.45)' }}>
                <p>{config.footerText.split('|')[0]}</p>
                <p>{config.footerText.split('|')[1]}</p>
              </Footer>
            </div>
          </Layout>
        </div>
      </Spin>
    </ConfigProvider>
  );
};

App.propTypes = {
  // children: PropTypes.element.isRequired,
  dispatch: PropTypes.func,
  app: PropTypes.object,
  loading: PropTypes.object
};

export default withRouter(connect(({ app, loading }) => ({ app, loading }))(App));
