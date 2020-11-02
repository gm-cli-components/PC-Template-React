import { Spin } from 'antd';
import styles from './index.less';


const MyLoading = () => {
  return <div className={styles.example}>
    <Spin />
  </div>
}

export default MyLoading;
