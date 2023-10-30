const seoul = require('./seoul')
const jejudo = require('./jejudo')
const daejeon = require("./daejeon")



// 서울 온도, 습도 설정
document.getElementById('seoul-temperature').textContent = `${seoul.seoulTemp}°C`;
document.getElementById('seoul-humidity').textContent = `${seoul.seoulHumi}%`;
// 대전 온도, 습도 설정
document.getElementById('daejeon-temperature').textContent = `${daejeon.seoulTemp}°C`;
document.getElementById('daejeon-humidity').textContent = `${daejeon.seoulHumi}%`;
// 제주도 온도, 습도 설정s
document.getElementById('jeju-temperature').textContent = `${jejudo.seoulTemp}°C`;
document.getElementById('jeju-humidity').textContent = `${jejudo.seoulHumi}%`;

