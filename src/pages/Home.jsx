import styles from './Home.module.scss';
import Header from '../components/layout/Header';
import Info from '../components/common/info/Info';
import InfoUser from '../components/common/info/InfoUser';
import InfoFav from '../components/common/info/InfoFav';
import Card from '../components/common/card/Card';
import KMap from '../components/common/map/KMap';
import { placeData } from '../utils/PlaceRtd';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  // console.log(placeData);
  const [placeDetail, setPlaceDetail] = useState([]);

  // 데이터 패칭해야 됨
  useEffect(() => {
    placeData.row.map(async (placeNm) => {
      const res = await axios.get(
        `http://openapi.seoul.go.kr:8088/${
          import.meta.env.VITE_APP_OPEN_API_KEY
        }/json/citydata/1/5/${placeNm.area_nm}`,
      );

      // console.log(res);
      setPlaceDetail((prev) => [...prev, res.data]);
    });
  }, []);

  return (
    <>
      <Header />

      {/* <InfoUser />
      <InfoFav /> */}
      <div className={styles.wrapper}>
        <div>
          {localStorage.getItem('users') ? <InfoUser /> : <Info />}
          {/* <Info /> */}
          <Card props={placeDetail} />
        </div>
        <div className={styles.mapCon}>
          <KMap />
        </div>
      </div>
    </>
  );
}

export default Home;
