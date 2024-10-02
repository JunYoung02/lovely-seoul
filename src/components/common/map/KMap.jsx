import { useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { placeData } from '../../../utils/PlaceRtd';
import BlueMapPin from '../../../assets/icons/BlueMapPin.png';
import RedMapPin from '../../../assets/icons/RedMapPin.png';
import axios from 'axios';

function KMap() {
  const [hoveredPlace, setHoveredPlace] = useState(null); // 현재 마우스 오버된 장소
  const API_KEY = import.meta.env.VITE_APP_OPEN_API_KEY;
  const CULTURAL_API = `http://openapi.seoul.go.kr:8088/${API_KEY}/xml/citydata/1/5`;

  const fetchCultural = async (place) => {
    console.log(place);
    const res = await axios.get(`${CULTURAL_API}/${place}`);
    const xmlString = new DOMParser().parseFromString(res.data, 'text/xml');
    console.log(xmlString);

    // const res = await fetch(CULTURAL_API);
    // console.log(res);
    // const data = await res.json();
    // console.log(data);
  };
  return (
    <Map
      center={{ lat: 37.5665, lng: 126.978 }} // 지도 중심 좌표
      style={{ width: '100%', height: '600px', borderRadius: '20px' }} // 지도 크기
      level={8} // 지도 확대 레벨
    >
      {placeData.row.map((place) => (
        <MapMarker
          key={place.area_nm}
          position={{ lat: parseFloat(place.x), lng: parseFloat(place.y) }} // 좌표값을 숫자로 변환하여 사용
          onMouseOver={() => setHoveredPlace(place.area_nm)} // 마우스 오버 시 해당 지역 이름을 상태로 저장
          onMouseOut={() => setHoveredPlace(null)} // 마우스가 벗어나면 상태 초기화
          image={{ src: BlueMapPin, size: { width: 22, height: 26 } }}
          onClick={() => fetchCultural(place.area_nm)}
        >
          {hoveredPlace === place.area_nm && (
            <div
              style={{
                color: '#000',
                padding: '10px',
                borderRadius: '10px',
                width: '11rem',
                height: '15rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '9rem',
                }}
              >
                <img
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                  src={`https://data.seoul.go.kr/SeoulRtd/images/hotspot/${place.area_nm}.jpg`}
                />
              </div>
              {place.area_nm}
            </div>
          )}
        </MapMarker>
      ))}
    </Map>
  );
}

export default KMap;
