import styles from './Info.module.scss';
import SubInfo from './SubInfo';

function InfoUser() {
  return (
    <div className={styles.wrap}>
      <h2 className={styles['div__h2--text']}>
        OO님! 현재 00대에게 <strong>인기가 많은</strong>곳이에요!
      </h2>
      <SubInfo />
    </div>
  );
}

export default InfoUser;
