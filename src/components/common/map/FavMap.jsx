import { useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

function FavMap({ markerPlace }) {
  // 인포윈도우 Open 여부를 저장하는 state 입니다.
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Map
      center={{ lat: 37.5665, lng: 126.978 }} // 지도 중심 좌표
      style={{ width: '100%', height: '600px', borderRadius: '20px' }} // 지도 크기
      level={8} // 지도 확대 레벨
    >
      {markerPlace.row.map((loc) => (
        <MapMarker
          key={loc.x - loc.y}
          position={{ lat: loc.x, lng: loc.y }}
          clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
          // 마커에 마우스오버 이벤트를 등록합니다
          onMouseOver={
            // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
            () => setIsOpen(loc.area_nm)
          }
          // 마커에 마우스아웃 이벤트를 등록합니다
          onMouseOut={
            // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
            () => setIsOpen(false)
          }
        >
          {isOpen === loc.area_nm && (
            <div style={{ padding: '5px', color: '#000' }}>{loc.area_nm}</div>
          )}
        </MapMarker>
      ))}
    </Map>
  );
}

export default FavMap;
