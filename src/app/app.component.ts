import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  userPosition: {longitude: any, latitude: any} = null;
  private R = 6378.137;

  private annaCoord = {
    lon: 27.6895156,
    lat: 53.9374111
  }

  public run() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          this.userPosition = position.coords;
          console.log(position);
          console.log('Distance in meters: ', this.getDistanceInMeters(this.userPosition.latitude, this.userPosition.longitude, this.annaCoord.lat, this.annaCoord.lon));
        });
    } else {
        console.log('navigator.geolocation is not defined');
        return
    }
  }

  private getDistanceInMeters(lat1, lon1, lat2, lon2){
    var dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
    var dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = this.R * c;
    return d * 1000; // meters
  }
}
