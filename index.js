let map;
let centerMarker;
let newMarker;
let saveMarker;
let marker;
let info;

const center = { lat: -6.890857388776942, lng: -38.5643308557302 }

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: center,
    zoom: 16,
    zoomcontrol: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  marker = new google.maps.Marker({
    position: center,
    map,
    titles: "Hello world",
    draggable: true,
    animation: google.maps.Animation.DROP
  })
  marker.addListener('click',()=>{
    openWindowInfo()
  })

  map.addListener("click", event =>{
    mudarMarker(event);
    openModal();
  })

  marker.addListener("dblclick", () => {
    info = new google.maps.InfoWindow({
      content: openModal()
    }).open({
      anchor: marker,
      map,
      shouldFocus: false
    })
  })

function openModal(){
  let div = document.querySelector('.container')
    div.classList.add('mostrar')
}

function closeModal(){
  let textarea = document.querySelector('textarea')
    textarea.value = ''
  let modal = document.querySelector('.container')
      modal.classList.remove('mostrar')
}

function mudarMarker(event){
  marker.setPosition(event.latLng)
}

}

window.initMap = initMap;