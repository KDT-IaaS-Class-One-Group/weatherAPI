export function getMap() {  
  return fetch("https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=lr1t71afg4")

  .then(response => response.json())
  .then(
    function firstmap(){
    return new naver.maps.LatLng(37.5666102,126.9783881)
  })
    
      
 
  .catch(error => {
      console.error("맵 정보를 가져오는데 실패했습니다.", error);
  });
}
