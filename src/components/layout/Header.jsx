import Logo from '../../assets/icons/Logo.svg';
import Search from '../../assets/icons/Search.svg';
import Favorite from '../../assets/icons/Favorite.svg';
import styles from './Header.module.scss';

function Header() {
  return (
    <div className={styles.wrap}>
      <div className={styles.mainCon}>
        <div className={styles.logoCon}>
          <img className={styles.logo} src={Logo} alt="로고" />
        </div>
        <div className={styles.inputWrap}>
          <input type="text" />
          <div className={styles.searchCon}>
            <img src={Search} alt="검색" />
          </div>
        </div>
      </div>

      <div className={styles.myCon}>
        <div className={styles.favCon}>
          <img src={Favorite} alt="하트" />
        </div>
        <p>My</p>
      </div>
    </div>
  );
}

export default Header;
