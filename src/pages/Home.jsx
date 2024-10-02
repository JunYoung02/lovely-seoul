import styles from './Home.module.scss';
import Header from '../components/layout/Header';
import Info from '../components/common/info/Info';
import InfoUser from '../components/common/info/InfoUser';
import InfoFav from '../components/common/info/InfoFav';
import Card from '../components/common/card/Card';
import KMap from '../components/common/map/KMap';

function Home() {
  return (
    <>
      <Header />
      {/* <InfoUser />
      <InfoFav /> */}
      <div className={styles.wrapper}>
        <div>
          <Info />
          <Card />
        </div>
        <div className={styles.mapCon}>
          <KMap />
        </div>
      </div>
    </>
  );
}

export default Home;
