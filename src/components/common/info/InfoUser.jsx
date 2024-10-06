import styles from './Info.module.scss';
import SubInfo from './SubInfo';

function InfoUser() {
  const { name, age } = JSON.parse(localStorage.getItem('users'));

  return (
    <div className={styles.wrap}>
      <h2 className={styles['div__h2--text']}>
        {name}님! 현재 {age}대에게 <strong>인기가 많은</strong>곳이에요!
      </h2>
      <SubInfo />
    </div>
  );
}

export default InfoUser;
