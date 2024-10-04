import styles from './Card.module.scss';
import Heart from '../../../assets/icons/Heart.svg';
import PlaceMark from '../../../assets/icons/PlaceMark.svg';
import Place from '../../../assets/sample/Place.png';
import Female from '../../../assets/icons/Female.jpg';
import Male from '../../../assets/icons/Male.jpg';

function CardItem({ placeData }) {
  return (
    <>
      <img className={styles.bookMark} src={Heart} alt="북마크" />
      <div className={styles.placeImgCon}>
        <img
          src={`https://data.seoul.go.kr/SeoulRtd/images/hotspot/${placeData.area_nm}.jpg`}
          alt="장소 사진"
        />
      </div>
      <ul className={styles.placeInfoUl}>
        <h3>{placeData.area_nm}</h3>
        <li>
          <img src={PlaceMark} alt="주소" /> 서울특별시 ~~ 주소가 들어갑니다.
        </li>
        <li className={styles.placeInfo}>
          사람들이 몰려있을 가능성이 크고 붐빈다고 느낄 수 있어요. 인구밀도가
          높은 구간에서는 도보 이동시 부딪힘이 발생할 수 있어요.
        </li>
        <li className={styles.genderWrap}>
          <div className={styles.gender}>
            <div>
              <img src={Female} alt="여성" />
            </div>
            <span>50.0</span>
          </div>
          <div className={styles.gender}>
            <div>
              <img src={Male} alt="남성" />
            </div>
            <span>50.5</span>
          </div>
        </li>
        <li className={styles.placeState}>
          <div className={styles.people}>매우 혼잡</div>
          <div className={styles.popular}>20대한테 인기가 많아요</div>
        </li>
      </ul>
    </>
  );
}

export default CardItem;
