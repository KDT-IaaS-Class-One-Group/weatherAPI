// Dom.js
import { fetchWeatherData } from "./weatherCityInfo.js";
import { getMap } from "./mapAPI.js"

// 로드될 때 fetch로 가져온 mapAPI의 createMap()함수를 사용해서 맵 제작 
document.addEventListener('DOMContentLoaded',()=>{
  getMap()
})


// submit 제출 했을 때 날씨데이터 가져오는 기능 추가.
document.getElementById('city-form').addEventListener('submit', function (submit) {
  submit.preventDefault(); // 폼 제출 기본 동작 막기
  const cityInput = document.getElementById('city-input');
  document.getElementById('cityname').textContent = cityInput.value; // 도시 이름 가져오기

  fetchWeatherData(cityInput.value)
    .then((data) => {
      document.getElementById('city-temperature').textContent = data.cityTemp;
      document.getElementById('city-humidity').textContent = data.cityHumi;
    })
    .catch((error) => {
      console.error("데이터를 가져오는데 실패했습니다.", error);
    });
});