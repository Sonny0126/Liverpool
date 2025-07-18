// 구글 API 키를 변수에 저장
const apiKey = ""; // 여기에 API 키를 입력합니다.

// 구글 맵 API 초기화 함수
function initMap() {
  // 지도 중심을 Anfield의 위치로 설정 (위도, 경도)
  const anfieldLocation = { lat: 53.4308, lng: -2.9604 };

  // 지도 객체 생성
  const map = new google.maps.Map(document.getElementById("map"), {
    center: anfieldLocation,
    zoom: 15,
  });

  // 마커 추가 (Anfield 위치)
  const marker = new google.maps.Marker({
    position: anfieldLocation,
    map: map,
    title: "Anfield Stadium",
  });
}

// 구글 API 로드
function loadGoogleMaps() {
  const script = document.createElement("script");
  // 동적으로 API 키를 삽입
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

// 구글 맵 로드 시작
loadGoogleMaps();
