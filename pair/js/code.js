import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

var token = getCookie("token");

function getCode() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch('https://api.wa.my.id/api/device/' + token, requestOptions)
        .then(response => {
            console.log('Raw Response:', response);
            return response.json();
        })
        .then(data => {
            displayCode(data);
        })
        .catch(error => {
            console.error('Fetch Error:', error);
        });
}

function displayCode(data) {
    const tableBody = document.getElementById('productTableBody');
    if (!tableBody) {
        console.error('Table body element not found');
        return;
    }

    tableBody.innerHTML = '';

    const card = document.createElement('div');
    card.innerHTML = `
    <h1>${data.code}</h1>
    <h3 style="color: white;">Input this token into your Google Cloud Function</h3>
    <div style="color: white; text-align: center;"> ${token} </div>
    <h3></h3>
    `;
    tableBody.appendChild(card);
}

document.addEventListener("DOMContentLoaded", function () {
    getCode();
});

window.onload = getCode;
