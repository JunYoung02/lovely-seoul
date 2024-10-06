import { useState, useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { placeData } from '../../../utils/PlaceRtd';
import BlueMapPin from '../../../assets/icons/BlueMapPin.png';
import RedMapPin from '../../../assets/icons/RedMapPin.png';
import { XMLParser } from 'fast-xml-parser';

function KMap() {
  const [hoveredPlace, setHoveredPlace] = useState(null); // 현재 마우스 오버된 장소
  const [eventInfoList, setEventInfoList] = useState([]);
  const API_KEY = import.meta.env.VITE_APP_OPEN_API_KEY;
  const CULTURAL_API = `http://openapi.seoul.go.kr:8088/${API_KEY}/xml/citydata/1/5`;

  // 행사 리스트 마커 함수 (나중에 리스트로도 해야되겠다)
  const eventList = (eventInfo) => {
    console.log(eventInfo); // 데이터 잘 왔는지 확인
    const eventPlace = eventInfo.map((event) => ({
      title: event.EVENT_NM,
      sub: event.EVENT_PLACE,
      date: event.EVENT_PERIOD,
      latitude: event.EVENT_Y,
      longitude: event.EVENT_X,
      poster: event.THUMBNAIL,
      url: event.URL,
    }));
    console.log(`eventplace ${eventPlace}`); // JSON.stringify 사용
    setEventInfoList(eventPlace);
  };

  const fetchCultural = async (place) => {
    try {
      console.log(place); // 선택한 장소 콘솔 출력
      const response = await fetch(`${CULTURAL_API}/${place}`);
      const xmlText = await response.text(); // XML 문자열 받아오기

      // XML 파서 생성
      const parser = new XMLParser({
        ignoreAttributes: false,
        attributeNamePrefix: '@_', // 속성 이름 접두사
      });

      const jsonObj = parser.parse(xmlText); // XML을 JSON으로 변환
      const seoulcitydata = Object.values(jsonObj)[0]; // 최상위 객체 값 추출
      // console.log(seoulcitydata.CITYDATA.EVENT_STTS.EVENT_STTS); // 필요한 데이터 출력
      const eventInfo = seoulcitydata.CITYDATA.EVENT_STTS.EVENT_STTS;
      eventList(eventInfo);
    } catch (error) {
      console.error('Error fetching cultural data:', error);
    }
  };

  useEffect(() => {
    const loadKakaoMap = () => {
      if (window.kakao && window.kakao.maps) {
        const mapContainer = document.getElementById('map');
        if (mapContainer) {
          const map = new window.kakao.maps.Map(mapContainer, {
            center: new window.kakao.maps.LatLng(37.5665, 126.978),
            level: 8,
          });

          // 기존 장소 마커 표시
          placeData.row.forEach((place) => {
            const markerPosition = new window.kakao.maps.LatLng(
              parseFloat(place.x),
              parseFloat(place.y),
            );
            const marker = new window.kakao.maps.Marker({
              position: markerPosition,
              title: place.area_nm,
              image: new window.kakao.maps.MarkerImage(
                BlueMapPin,
                new window.kakao.maps.Size(22, 26),
              ),
            });

            // 마커 클릭 시 기존 행사 마커 초기화 후 새로운 행사 마커 추가
            window.kakao.maps.event.addListener(marker, 'click', () => {
              setEventInfoList([]); // 기존 행사 마커 제거
              fetchCultural(place.area_nm); // 새로운 행사 정보 가져오기
            });

            marker.setMap(map);
          });

          // 행사 마커 표시
          eventInfoList.forEach((event) => {
            const markerPosition = new window.kakao.maps.LatLng(
              event.latitude,
              event.longitude,
            );
            const marker = new window.kakao.maps.Marker({
              position: markerPosition,
              title: event.title,
              image: new window.kakao.maps.MarkerImage(
                RedMapPin,
                new window.kakao.maps.Size(22, 26),
              ),
            });
            marker.setMap(map); // 행사 마커 지도에 표시
          });
        } else {
          console.error('Map container does not exist');
        }
      } else {
        console.error('Kakao Maps API가 로드되지 않았습니다.');
      }
    };

    const kakaoScript = document.createElement('script');
    kakaoScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_APP_KAKAOMAP_API_KEY
    }&libraries=services,clusterer&autoload=false`;
    kakaoScript.onload = () => {
      window.kakao.maps.load(loadKakaoMap);
    };
    document.head.appendChild(kakaoScript);
  }, [eventInfoList]); // eventInfoList에 의존, 새로운 정보가 생길 때마다 렌더링

  return (
    <Map
      id="map"
      center={{ lat: 37.5665, lng: 126.978 }} // 지도 중심 좌표
      style={{ width: '100%', height: '600px', borderRadius: '20px' }} // 지도 크기
      level={8} // 지도 확대 레벨
    >
      {placeData.row.map((place) => (
        <MapMarker
          key={place.area_nm}
          position={{ lat: parseFloat(place.x), lng: parseFloat(place.y) }} // 좌표값을 숫자로 변환하여 사용
          onMouseOver={() => setHoveredPlace(place.area_nm)} // 마우스 오버 시 해당 지역 이름을 상태로 저장
          onMouseOut={() => setHoveredPlace(false)} // 마우스가 벗어나면 상태 초기화
          image={{ src: BlueMapPin, size: { width: 22, height: 26 } }}
          onClick={() => fetchCultural(place.area_nm)}
          clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
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

      {/* 행사 마커 */}
      {eventInfoList.map((event, index) => (
        <MapMarker
          key={index}
          position={{ lat: event.latitude, lng: event.longitude }}
          image={{ src: RedMapPin, size: { width: 22, height: 26 } }} // 행사 마커 아이콘
          onMouseOver={() => setHoveredPlace(event.title)} // 마우스 오버 시 해당 지역 이름을 상태로 저장
          onMouseOut={() => setHoveredPlace(null)} // 마우스가 벗어나면 상태 초기화
        >
          {hoveredPlace === event.title && (
            <div
              style={{
                padding: '5px',
                background: 'white',
                borderRadius: '5px',
              }}
            >
              <strong>{event.title}</strong>
              <p>{event.date}</p>
              <p>{event.sub}</p>
            </div>
          )}
        </MapMarker>
      ))}
    </Map>
  );
}

export default KMap;
