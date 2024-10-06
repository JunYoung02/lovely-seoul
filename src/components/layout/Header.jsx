import { Link } from 'react-router-dom';
import Logo from '../../assets/icons/Logo.svg';
import Search from '../../assets/icons/Search.svg';
import Favorite from '../../assets/icons/Favorite.svg';
import styles from './Header.module.scss';
import { useState } from 'react';
import Form from '../common/modal/Form';

function Header() {
  const [isLoginModal, setIsLoginModal] = useState(false);

  const isLogin = () => {
    if (!localStorage.getItem('user')) setIsLoginModal(true);
    else {
      setIsLoginModal(false);
    }
  };

  return (
    <div className={styles.wrap}>
      {isLoginModal && <Form close={() => setIsLoginModal(false)} />}
      <div className={styles.mainCon}>
        <Link to="/" className={styles.logoCon}>
          <img className={styles.logo} src={Logo} alt="로고" />
        </Link>
        <div className={styles.inputWrap}>
          <input type="text" />
          <div className={styles.searchCon}>
            <img src={Search} alt="검색" />
          </div>
        </div>
      </div>

      <div to="/mypage" className={styles.myCon} onClick={isLogin}>
        <div className={styles.favCon}>
          <img src={Favorite} alt="하트" />
        </div>
        <p>My</p>
      </div>
    </div>
  );
}

export default Header;
