const COORDS = 'coords';

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
}

function handleGeoError(){

}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucess, handleGeoError);
}

function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null){
        askForCoords();
    } else {
        //getWeather
    }

}

function init(){
    loadCoords();
}

init();