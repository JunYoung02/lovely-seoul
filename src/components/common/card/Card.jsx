import styles from './Card.module.scss';
import CardItem from './CardItem';
// import { placeData } from '../../../utils/PlaceRtd';

function Card({ props }) {
  // console.log(props);
  return (
    <div className={styles.listwrapper}>
      {props.map((place) => (
        <div key={place.CITYDATA.AREA_NM} className={styles.cardBox}>
          <div className={styles.wrap}>
            <CardItem placeData={place} />
          </div>
        </div>
      ))}
    </div>
  );
}
export default Card;
