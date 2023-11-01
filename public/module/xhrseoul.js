export function getWeatherSeoulWithXHR() {
  // OpenWeatherMap API 키
  const apiKeyseoul = 'af424409722cecb0056cea43492fb33c'; // 본인의 API 키로 대체해야 합니다.

  // 도시 이름
  const seoul = 'Seoul'; // 원하는 도시로 변경할 수 있습니다.

  // XHR 객체 생성
  const xhr = new XMLHttpRequest();

  // 요청 설정
  xhr.open('GET', `http://api.openweathermap.org/data/2.5/weather?q=${seoul}&appid=${apiKeyseoul}&units=metric`, true);

  // 응답 처리
  xhr.onload = function () {
      if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          const seoulTemp = data.main.temp; // 온도
          const seoulHumi = data.main.humidity; // 습도

          const weatherData = { seoulTemp, seoulHumi };
          console.log(weatherData);
      } else {
          console.error("날씨 정보를 가져오는데 실패했습니다.");
      }
  };

  // 오류 처리
  xhr.onerror = function () {
      console.error("요청 중 오류가 발생했습니다.");
  };

  // 요청 보내기
  xhr.send();
}