const seoul = require('./seoul')
const jejudo = require('./jejudo')
const daejeon = require("./daejeon")



// 서울 온도, 습도 설정
document.getElementById('seoul-temperature').textContent = `${seoul.seoulTemp}°C`;
document.getElementById('seoul-humidity').textContent = `${seoul.seoulHumi}%`;