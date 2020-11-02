import React from 'react';
import { Link } from 'umi';
import classnames from 'classnames';
import styles from './index.less';

const Nav = ({ className, list = [] }) => {
  return (
    <div
      className={styles.nav}
    >
      <div className={styles.nav_inner}>
        <div className={styles.left}>
          <img src={require(`@/assets/img/common/logo_icon.png`)} className={styles.nav_logo} alt="" />
          <span className={styles.title}>完美校园</span>
        </div>
        <div className={styles.right}>
          {list.map((item, index) => {
            return <Link
              to={item.url || ''}
              className={classnames({
                [styles.list_item]: true,
                [styles.active]: window.location.pathname.indexOf(item.url) > -1,
                [styles.login_item]: item.value === '登录',
                [styles.register_item]: item.value === '注册',
              })}
              key={index}>{item.value}</Link>;
          })}
        </div>
      </div>
    </div >
  );
};

export default Nav;
