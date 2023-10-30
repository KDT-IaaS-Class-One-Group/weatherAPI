const apiKey = '13e787bc80632c2e192c0e6abff23bee'
const jejudo = 'jeju'

// API 요청 
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${jejudo}&appid=${apiKey}&units=metric`) 
.then(response => response.json()) 
.then(data => { 
const temperature = data.main.temp; 
// 온도 
const humidity = data.main.humidity; 
// 습도 

const jejuHumidity = document.getElementById('jeju-humidity')
const jejuTemperature = document.getElementById('jeju-temperature')

jejuHumidity = data.main.humidity
jejuTemperature = data.main.temperature
}) 

.catch(error => { console.error("날씨 정보를 가져오는데 실패했습니다.", error); }); 