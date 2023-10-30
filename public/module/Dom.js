import { getWeatherData } from './seoul.js'
getWeatherData() 
    .then(data => {
        console.log(`서울 온도: ${data.seoulTemp}°C`);
        console.log(`서울 습도: ${data.seoulHumi}%`);
    })
    .catch(error => {
        console.error("날씨 정보를 가져오는데 실패했습니다.", error);
    });
    

// 서울 온도, 습도 설정
// document.getElementById('seoul-temperature').textContent 

// document.getElementById('seoul-humidity').textContent = `${seoul.seoulHumi}%`;
//   // 대전 온도, 습도 설정
// document.getElementById('daejeon-temperature').textContent = `${daejeon.seoulTemp}°C`;
// document.getElementById('daejeon-humidity').textContent = `${daejeon.seoulHumi}%`;
// // 제주도 온도, 습도 설정s
// document.getElementById('jeju-temperature').textContent = `${jejudo.seoulTemp}°C`;
// document.getElementById('jeju-humidity').textContent = `${jejudo.seoulHumi}%`;


