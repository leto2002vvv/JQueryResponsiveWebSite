function initMap() {
    var myLatLng = {lat: 40.68941984430832, lng: -73.91185673325926};
  
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: myLatLng
    });
  
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    });
  }