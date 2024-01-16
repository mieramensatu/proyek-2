import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

var token = getCookie("token");

function startDevice() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch('https://api.wa.my.id/api/start/device/' + token, requestOptions)
        .then(response => {
            console.log('Raw Response:', response);
            return response.json();
        })
        .then(data => {
            console.log('Device strated!');
        })
        .catch(error => {
            console.error('Fetch Error:', error);
        });
}

document.addEventListener("DOMContentLoaded", function () {
    startDevice();
});

window.onload = startDevice;