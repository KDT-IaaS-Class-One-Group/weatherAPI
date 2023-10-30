// console.log('hi');

const deajeonFetch = async () => {
  // 필요한 변수 설정
  const apiKey = 'af424409722cecb0056cea43492fb33c'; // 본인의 API 키로 대체
  const city = 'daejeon'; // 원하는 도시명으로 변경 가능
  // API 요청
  await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    try {

    }
    catch(error) {
      console.error("날씨 정보 가져올 수 없습니다.");
    }
}

deajeonFetch().then( result => console.log(result));

