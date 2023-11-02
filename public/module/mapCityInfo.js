export default class City {
  constructor(lat, lng) {
    // this.name = name;
    // this.center = new naver.maps.LatLng{ center.lat, center.lng };
    this.center = new naver.maps.LatLng(lat, lng);
  }
}
