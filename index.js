let map;

const center = {lat:-6.890857388776942, lng: -38.5643308557302 } 
 let marker;
 let info;

 function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: center,
    zoom: 16,
    zoomcontrol: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  marker  = new google.maps.Marker({
    position: center,
    map,
    titles: "Hello world",
    draggable: true,
    animation: google.maps.Animation.DROP
  })
  map.addListener("click",(evt)=>{
    marker.setPosition(evt.latLng)
  })
  marker.addListener("dblclick",()=>{
    info = new google.maps.InfoWindow({
      content: "",
    }).open({
      anchor: marker,
      map,
      shouldFocus: false
    })
  })
}

window.initMap = initMap;