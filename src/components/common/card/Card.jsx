import styles from './Card.module.scss';
import CardItem from './CardItem';
import { placeData } from '../../../utils/PlaceRtd';

function Card() {
  return (
    <div className={styles.listwrapper}>
      {placeData.row.map((place) => (
        <div key={place.area_nm} className={styles.cardBox}>
          <div className={styles.wrap}>
            <CardItem placeData={place} />
          </div>
        </div>
      ))}
    </div>
  );
}
export default Card;
