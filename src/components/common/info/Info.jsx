import styles from './Info.module.scss';
import SubInfo from './SubInfo';

function Info() {
  return (
    <div className={styles.wrap}>
      <h2 className={styles['div__h2--text']}>
        현재 가장 <strong>인기가 많은</strong>곳이에요!
      </h2>
      <SubInfo />
    </div>
  );
}

export default Info;
