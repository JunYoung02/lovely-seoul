import styles from './Info.module.scss';
import SubInfo from './SubInfo';

function InfoFav() {
  const { name, age } = JSON.parse(localStorage.getItem('users'));

  return (
    <div className={styles.wrap}>
      <h2 className={styles['div__h2--text']}>
        <strong>{name}님이</strong> 찜한 목록이에요!
      </h2>
      <SubInfo />
    </div>
  );
}

export default InfoFav;
