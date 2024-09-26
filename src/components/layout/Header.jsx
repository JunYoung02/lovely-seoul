import Logo from '../../assets/icons/Logo.svg';
import Search from '../../assets/icons/Search.svg';
import Favorite from '../../assets/icons/Favorite.svg';
import './Header.scss';

function Header() {
  return (
    <div className="wrap">
      <div className="mainCon">
        <div className="logoCon">
          <img className="logo" src={Logo} alt="로고" />
        </div>
        <div className="inputWrap">
          <input type="text" />
          <div className="searchCon">
            <img src={Search} alt="검색" />
          </div>
        </div>
      </div>

      <div className="myCon">
        <div className="favCon">
          <img src={Favorite} alt="하트" />
        </div>
        <p>My</p>
      </div>
    </div>
  );
}

export default Header;
