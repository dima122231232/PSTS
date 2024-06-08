google.maps.event.addDomListener(window, 'load', init);
        
function init() {
    var mapOptions = {
        zoom: 9.5,
        center: new google.maps.LatLng(51,34.8142175),

        styles: [{"featureType":"all","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"administrative","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#686868"},{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"lightness":"-22"},{"visibility":"on"},{"color":"#b4b4b4"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"saturation":"-51"},{"lightness":"11"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"saturation":"3"},{"lightness":"-56"},{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"lightness":"-52"},{"color":"#9094a0"},{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"weight":"6.13"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"weight":"1.24"},{"saturation":"-100"},{"lightness":"-10"},{"gamma":"0.94"},{"visibility":"off"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b4b4b4"},{"weight":"5.40"},{"lightness":"7"}]},{"featureType":"road.highway.controlled_access","elementType":"labels.text","stylers":[{"visibility":"simplified"},{"color":"#231f1f"}]},{"featureType":"road.highway.controlled_access","elementType":"labels.text.fill","stylers":[{"visibility":"simplified"},{"color":"#595151"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"lightness":"-16"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#d7d7d7"}]},{"featureType":"road.arterial","elementType":"labels.text","stylers":[{"color":"#282626"},{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"saturation":"-41"},{"lightness":"-41"},{"color":"#2a4592"},{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.text.stroke","stylers":[{"weight":"1.10"},{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"lightness":"-16"},{"weight":"0.72"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"lightness":"-37"},{"color":"#2a4592"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"visibility":"off"},{"color":"#eeed6a"}]},{"featureType":"transit.line","elementType":"geometry.stroke","stylers":[{"visibility":"off"},{"color":"#0a0808"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#b7e4f4"},{"visibility":"on"}]}]
    };

    var mapElement = document.getElementById('map');

    var map = new google.maps.Map(mapElement, mapOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(50.93333,34.76899),
        map: map,
        title: 'Веретеновский и Курский микрорайон',
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'});
    var marker = new google.maps.Marker({position: new google.maps.LatLng(50.97278, 34.76222),map: map,title: 'Верхнє Піщане'});
    var marker = new google.maps.Marker({position: new google.maps.LatLng(50.911911, 34.792559),map: map,title: 'с. Шевченкове'});
    var marker = new google.maps.Marker({position: new google.maps.LatLng(51.05143, 34.71072),map: map,title: ' с. Кровне'});
    var marker = new google.maps.Marker({position: new google.maps.LatLng(51.03132 , 34.73774 ),map: map,title: 'с.Руднівка'});
    var marker = new google.maps.Marker({position: new google.maps.LatLng(51.010298, 34.7785995),map: map,title: 'с. Стецьківка'});
    var marker = new google.maps.Marker({position: new google.maps.LatLng(51.0573955, 34.6626225),map: map,title: 'с. Миколаївка'});
    var marker = new google.maps.Marker({position: new google.maps.LatLng(51.015225, 34.8317035),map: map,title: 'с. Радьківка'});
    var marker = new google.maps.Marker({position: new google.maps.LatLng(50.9924655, 34.7510485),map: map,title: ' с. Кардашівка'});
    var marker = new google.maps.Marker({position: new google.maps.LatLng(51.0780565 , 34.775842 ),map: map,title: 'с.Хотінь'});
    var marker = new google.maps.Marker({position: new google.maps.LatLng(51.075669, 34.8262865),map: map,title: 'с. Писарівка'});
    var marker = new google.maps.Marker({position: new google.maps.LatLng(50.8596205,34.5503245),map: map,title: 'с. Терешківка'});
    var marker = new google.maps.Marker({position: new google.maps.LatLng(50.849648,34.6243545),map: map,title: 'с. Великі Вільми'});
    var marker = new google.maps.Marker({position: new google.maps.LatLng(50.830483, 34.617163),map: map,title: 'с.Симонівка'});
    var marker = new google.maps.Marker({position: new google.maps.LatLng(51.1349345, 34.8631985),map: map,title: 'с. Олексіївка'});
    var marker = new google.maps.Marker({position: new google.maps.LatLng(50.8219235, 34.535165),map: map,title: 'с. Сула'});
    // var marker = new google.maps.Marker({position: new google.maps.LatLng(52.2408065, 33.78593),map: map,title: 'с. Голубівка'});
    var marker = new google.maps.Marker({position: new google.maps.LatLng(50.846591, 34.4894545),map: map,title: 'с. Печище'});
    var marker = new google.maps.Marker({position: new google.maps.LatLng(51.002771, 34.8556035),map: map,title: 'с.Рибці'});
    var marker = new google.maps.Marker({position: new google.maps.LatLng(50.874851, 34.686428),map: map,title: 'с. Москалівщина'});
    var marker = new google.maps.Marker({position: new google.maps.LatLng(50.7732055,34.4496005 ),map: map,title: 'с. Сіробабине'});
    var marker = new google.maps.Marker({position: new google.maps.LatLng(51.1443015,34.7660005 ),map: map,title: 'с. Кіндратівка'});
    var marker = new google.maps.Marker({position: new google.maps.LatLng(51.070963 ,34.5696785 ),map: map,title: 'с. Кекино'});
    // var marker = new google.maps.Marker({position: new google.maps.LatLng(52.308252,33.6156495 ),map: map,title: 'с. Капітанівка'});
    var marker = new google.maps.Marker({position: new google.maps.LatLng(51.0794685 ,34.647598 ),map: map,title: 'с. Спаське'});
    var marker = new google.maps.Marker({position: new google.maps.LatLng(51.1003555 ,34.6146345 ),map: map,title: 'с. Графське'});
    var marker = new google.maps.Marker({position: new google.maps.LatLng(50.969678 ,34.7056745 ),map: map,title: 'с. Гриценкове'});
    var marker = new google.maps.Marker({position: new google.maps.LatLng(51.002771,34.8556035 ),map: map,title: 'с. Рибці'});
    var marker = new google.maps.Marker({position: new google.maps.LatLng(50.861094 ,34.6825785 ),map: map,title: 'с. Ясени'});
    var marker = new google.maps.Marker({position: new google.maps.LatLng(51.1770275 ,34.9181935 ),map: map,title: 'с.Водолаги'});
    var marker = new google.maps.Marker({position: new google.maps.LatLng(51.1806605 ,34.971715 ),map: map,title: 'с. Біловоди'});
    var marker = new google.maps.Marker({position: new google.maps.LatLng(51.171059 ,34.7687855 ),map: map,title: 'с. Костянтинівка'});
    var marker = new google.maps.Marker({position: new google.maps.LatLng(50.961897 ,34.726026 ),map: map,title: 'с. Загірське'});
    var marker = new google.maps.Marker({position: new google.maps.LatLng(50.89228 ,34.57020 ),map: map,title: 'с. Степне'});
    var marker = new google.maps.Marker({position: new google.maps.LatLng(50.868333 ,34.658333 ),map: map,title: ''});
    var marker = new google.maps.Marker({position: new google.maps.LatLng(51.141667,34.636389 ),map: map,title: 'с. Яструбине'});
    var marker = new google.maps.Marker({position: new google.maps.LatLng(51.15560 ,34.90442 ),map: map,title: 'с. Новомиколаївка'});


    // const triangleCoords = [
    //     { lat: 25.774, lng: -80.19 },
    //     { lat: 18.466, lng: -66.118 },
    //     { lat: 32.321, lng: -64.757 },
    //     { lat: 25.774, lng: -80.19 },
    //   ];
    //   // Construct the polygon.
    //   const bermudaTriangle = new google.maps.Polygon({
    //     paths: triangleCoords,
    //     strokeColor: "#FF0000",
    //     strokeOpacity: 0.8,
    //     strokeWeight: 2,
    //     fillColor: "#FF0000",
    //     fillOpacity: 0.35,
    //   });
    
      bermudaTriangle.setMap(map);
}


