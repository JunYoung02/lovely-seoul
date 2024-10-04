import styles from './MyPage.module.scss';
import Form from '../components/common/modal/Form';
import Header from '../components/layout/Header';
import InfoFav from '../components/common/info/InfoFav';
import Card from '../components/common/card/Card';
import FavMap from '../components/common/map/FavMap';

function MyPage() {
  const mockLikeList = {
    row: [
      {
        area_nm: '서울역',
        congestion_color: '#DD1F3D',
        x: '37.55659428234287',
        y: '126.97302795181167',
        area_congest_lvl: '붐빔',
        category: '인구밀집지역',
        area_congest_num: 4,
      },
      {
        area_nm: '선릉역',
        congestion_color: '#DD1F3D',
        x: '37.50605402384465',
        y: '127.04980711661749',
        area_congest_lvl: '붐빔',
        category: '인구밀집지역',
        area_congest_num: 4,
      },
      {
        area_nm: '충정로역',
        congestion_color: '#DD1F3D',
        x: '37.55969632013057',
        y: '126.96369132536704',
        area_congest_lvl: '붐빔',
        category: '인구밀집지역',
        area_congest_num: 4,
      },
    ],
  };
  return (
    <>
      {/* <Form /> */}
      <Header />
      <div className={styles.wrapper}>
        <div>
          <InfoFav />
          <Card props={mockLikeList} />
        </div>
        <div className={styles.mapCon}>
          {/* 지도 그리기 */}
          {/* 카카오 맵 */}
          <FavMap markerPlace={mockLikeList} />
        </div>
      </div>
    </>
  );
}

export default MyPage;
