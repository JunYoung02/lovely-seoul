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
          src={`https://data.seoul.go.kr/SeoulRtd/images/hotspot/${placeData.CITYDATA.AREA_NM}.jpg`}
          alt="장소 사진"
        />
      </div>
      <ul className={styles.placeInfoUl}>
        <h3>{placeData.CITYDATA.AREA_NM}</h3>
        <li className={styles.placeInfo}>
          {placeData.CITYDATA.LIVE_PPLTN_STTS[0].AREA_CONGEST_MSG}
        </li>
        <li className={styles.genderWrap}>
          <div className={styles.gender}>
            <div>
              <img src={Female} alt="여성" />
            </div>
            <span>
              {placeData.CITYDATA.LIVE_PPLTN_STTS[0].FEMALE_PPLTN_RATE}
            </span>
          </div>
          <div className={styles.gender}>
            <div>
              <img src={Male} alt="남성" />
            </div>
            <span>{placeData.CITYDATA.LIVE_PPLTN_STTS[0].MALE_PPLTN_RATE}</span>
          </div>
        </li>
        <li className={styles.placeState}>
          <div className={styles.people}>
            {placeData.CITYDATA.LIVE_PPLTN_STTS[0].AREA_CONGEST_LVL}
          </div>
        </li>
      </ul>
    </>
  );
}

export default CardItem;
