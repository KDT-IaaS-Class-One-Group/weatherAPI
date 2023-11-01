// city.js
export async function fetchWeatherData(inputValue) {
  try {
    const apikey = '13e787bc80632c2e192c0e6abff23bee';
    const city = inputValue; // 원하는 도시 이름으로 변경
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
    const data = await response.json();
    const cityTemp = data.main.temp;
    const cityHumi = data.main.humidity;
    console.log(data)
    return { cityTemp, cityHumi };
  } catch (error) {
    console.error("데이터를 가져오는데 실패했습니다.", error);
    throw error; // 에러를 다시 던져서 .catch()에서 처리할 수 있도록
  }
}
fetchWeatherData("Daejeon")