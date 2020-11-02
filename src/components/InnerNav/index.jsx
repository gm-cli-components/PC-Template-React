import React from 'react';
import { Breadcrumb } from 'antd';
import styles from './index.less';

const Bitem = Breadcrumb.Item;
const InnerNav = ({ bitemList = [] }) => {
  return (
    <div className={styles.top}>
      <div className={styles.top_inner}>
        <Breadcrumb style={{ lineHeight: '54px' }}>
          {bitemList.map((item, index) => {
            return <Bitem key={index}>
              {item.url ? <a href={item.url}>{item.value}</a> : item.value}
            </Bitem>
          })}
        </Breadcrumb>
      </div>
    </div>
  );
};

export default InnerNav;
