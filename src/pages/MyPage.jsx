import styles from './MyPage.module.scss';
import Header from '../components/layout/Header';
import InfoFav from '../components/common/info/InfoFav';
import Card from '../components/common/card/Card';
import FavMap from '../components/common/map/FavMap';

function MyPage() {
  const mockLikeList = [
    {
      CITYDATA: {
        x: '37.55969632013057',
        y: '126.96369132536704',
        AREA_CD: 'POI052',
        AREA_NM: '충정로역',
        LIVE_PPLTN_STTS: [
          {
            AREA_CD: 'POI052',
            AREA_CONGEST_LVL: '여유',
            AREA_CONGEST_MSG:
              '사람이 몰려있을 가능성이 낮고 붐빔은 거의 느껴지지 않아요. 도보 이동이 자유로워요.',
            AREA_NM: '충정로역',
            FEMALE_PPLTN_RATE: '50.9',
            MALE_PPLTN_RATE: '49.1',
            NON_RESNT_PPLTN_RATE: '52.5',
            PPLTN_RATE_0: '0.3',
            PPLTN_RATE_10: '4.4',
            PPLTN_RATE_20: '23.2',
            PPLTN_RATE_30: '21.3',
            PPLTN_RATE_40: '18.0',
            PPLTN_RATE_50: '14.3',
            PPLTN_RATE_60: '10.7',
            PPLTN_RATE_70: '7.9',
          },
        ],
      },
    },
    {
      CITYDATA: {
        x: '37.48387770585147',
        y: '126.896182530576',
        AREA_CD: 'POI019',
        AREA_NM: '구로디지털단지역',
        LIVE_PPLTN_STTS: [
          {
            AREA_CD: 'POI019',
            AREA_CONGEST_LVL: '여유',
            AREA_CONGEST_MSG:
              '사람이 몰려있을 가능성이 낮고 붐빔은 거의 느껴지지 않아요. 도보 이동이 자유로워요.',
            AREA_NM: '구로디지털단지역',
            FEMALE_PPLTN_RATE: '45.8',
            MALE_PPLTN_RATE: '54.2',
            NON_RESNT_PPLTN_RATE: '52.9',
            PPLTN_RATE_0: '0.2',
            PPLTN_RATE_10: '3.1',
            PPLTN_RATE_20: '23.6',
            PPLTN_RATE_30: '26.5',
            PPLTN_RATE_40: '18.1',
            PPLTN_RATE_50: '13.4',
            PPLTN_RATE_60: '9.4',
            PPLTN_RATE_70: '5.8',
          },
        ],
      },
    },
    {
      CITYDATA: {
        x: '37.55659428234287',
        y: '126.97302795181167',
        AREA_CD: 'POI033',
        AREA_NM: '서울역',
        LIVE_PPLTN_STTS: [
          {
            AREA_CD: 'POI033',
            AREA_CONGEST_LVL: '여유',
            AREA_CONGEST_MSG:
              '사람이 몰려있을 가능성이 낮고 붐빔은 거의 느껴지지 않아요. 도보 이동이 자유로워요.',
            AREA_NM: '서울역',
            FEMALE_PPLTN_RATE: '48.9',
            MALE_PPLTN_RATE: '51.1',
            NON_RESNT_PPLTN_RATE: '77.3',
            PPLTN_RATE_0: '0.2',
            PPLTN_RATE_10: '5.0',
            PPLTN_RATE_20: '30.1',
            PPLTN_RATE_30: '20.3',
            PPLTN_RATE_40: '16.5',
            PPLTN_RATE_50: '16.3',
            PPLTN_RATE_60: '7.8',
            PPLTN_RATE_70: '3.8',
          },
        ],
      },
    },
  ];

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
