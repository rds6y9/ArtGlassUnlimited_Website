function initMap() {
    var uluru = {lat: 38.481233, lng: -90.745174};
    var map = new google.maps.Map(document.getElementById('google-map'), {
        zoom: 15,
        center: uluru
    });
   
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}