import styles from './Card.module.scss';
import CardItem from './CardItem';

function Card() {
  return (
    <div className={styles.cardBox}>
      <CardItem />
    </div>
  );
}
export default Card;
