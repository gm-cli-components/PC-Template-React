/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'umi'
import styles from './index.less';


// 我的应用页
const Home = (props) => {

  return <div className={styles.container}>
    {props.home.title}
  </div>
}
export default connect(({ loading, app, home }) => ({ loading, app, home }))(Home);

