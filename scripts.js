

window.addEventListener("DOMContentLoaded", () => {
    if(navigator.geolocation) {
        let latitude = document.getElementById("latitude");
        let longitude = document.getElementById("longitude");

        navigator.geolocation.getCurrentPosition((position) => {
            console.log("Szerokość geograficzna: " + position.coords.latitude);
            console.log("Długość geograficzna: " + position.coords.longitude)

            latitude.innerHTML = "Szerokość geograficzna: " + position.coords.latitude;
            longitude.innerHTML = "Długość geograficzna: " + position.coords.longitude;
        })
    } else {
        console.log("Geolokalizacja nie działa!");
    }
});