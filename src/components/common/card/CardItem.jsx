import styles from './Card.module.scss';
import Heart from '../../../assets/icons/Heart.svg';
import PlaceMark from '../../../assets/icons/PlaceMark.svg';
import Place from '../../../assets/sample/Place.png';
import Female from '../../../assets/icons/Female.jpg';
import Male from '../../../assets/icons/Male.jpg';
import { ResponsiveBar } from '@nivo/bar';

function CardItem({ placeData }) {
  // 나잇대별 인구 비율
  const ageData = [
    {
      age: '10대',
      '인구 비율': placeData.CITYDATA.LIVE_PPLTN_STTS[0].PPLTN_RATE_10,
    },
    {
      age: '20대',
      '인구 비율': placeData.CITYDATA.LIVE_PPLTN_STTS[0].PPLTN_RATE_20,
    },
    {
      age: '30대',
      '인구 비율': placeData.CITYDATA.LIVE_PPLTN_STTS[0].PPLTN_RATE_30,
    },
    {
      age: '40대',
      '인구 비율': placeData.CITYDATA.LIVE_PPLTN_STTS[0].PPLTN_RATE_40,
    },
    {
      age: '50대',
      '인구 비율': placeData.CITYDATA.LIVE_PPLTN_STTS[0].PPLTN_RATE_50,
    },
    {
      age: '60대',
      '인구 비율': placeData.CITYDATA.LIVE_PPLTN_STTS[0].PPLTN_RATE_60,
    },
  ];

  return (
    <>
      <img className={styles.bookMark} src={Heart} alt="북마크" />
      <div>
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
              <span>
                {placeData.CITYDATA.LIVE_PPLTN_STTS[0].MALE_PPLTN_RATE}
              </span>
            </div>
          </li>
          <li className={styles.placeState}>
            <div className={styles.people}>
              {placeData.CITYDATA.LIVE_PPLTN_STTS[0].AREA_CONGEST_LVL}
            </div>
          </li>
        </ul>
      </div>
      {/* 그래프 */}
      <div style={{ width: '100%', height: '20em' }}>
        <ResponsiveBar
          data={ageData}
          keys={['인구 비율']}
          indexBy="age"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          groupMode="grouped"
          layout="horizontal"
          colors={({ id, data }) => {
            switch (data.age) {
              case '10대':
                return '#F94144'; // Red for 10대
              case '20대':
                return '#F3722C'; // Orange for 20대
              case '30대':
                return '#F8961E'; // Yellow for 30대
              case '40대':
                return '#F9C74F'; // Light Yellow for 40대
              case '50대':
                return '#90BE6D'; // Green for 50대
              case '60대':
                return '#43AA8B'; // Teal for 60대
              default:
                return '#577590'; // Default color
            }
          }}
          borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Age',
            legendPosition: 'middle',
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Population Rate',
            legendPosition: 'middle',
            legendOffset: -40,
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
          legends={[
            {
              dataFrom: 'keys',
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: 'left-to-right',
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </>
  );
}

export default CardItem;
