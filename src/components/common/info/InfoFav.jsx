import styles from './Info.module.scss';
import SubListInfo from './SubListInfo';

function InfoFav() {
  return (
    <div className={styles.wrap}>
      <h2 className={styles['div__h2--text']}>
        <strong>OOO님이</strong> 찜한 목록이에요!
      </h2>
      <SubListInfo />
    </div>
  );
}

export default InfoFav;
