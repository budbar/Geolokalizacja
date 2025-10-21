function getLocation() {
    if(navigator.geolocation) {
        let latitude = document.getElementById("latitude");
        let longitude = document.getElementById("longitude");

        navigator.geolocation.getCurrentPosition((position) => {
            latitude.innerHTML = "Szerokość geograficzna: " + position.coords.latitude;
            longitude.innerHTML = "Długość geograficzna: " + position.coords.longitude;
        })
    } else {
        console.log("Geolokalizacja nie działa!");
    }
}

function getAxis() {
    if ('Gyroscope' in window) {
        try {
            let gyroscope = new Gyroscope({ frequency: 60 });
            let x = document.getElementById("x");
            let y = document.getElementById("y");
            let z = document.getElementById("z");


            gyroscope.addEventListener("reading", () => {
                x.innerHTML = "Współrzędna X: " + gyroscope.x
                y.innerHTML = "Współrzędna Y: " + gyroscope.y
                z.innerHTML = "Współrzędna Z: " + gyroscope.z
            });

            gyroscope.start();
        } catch (error) {
            console.error("Błąd przy uruchamianiu żyroskopu:", error);
        }
    }
}

window.addEventListener("DOMContentLoaded", () => {
    getLocation();
    getAxis();
});

