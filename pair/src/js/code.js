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
    <div class="my-10 text-center">
    <p class="font-extrabold px-8 pt-8 text-2xl">${data.code}</p>
  </div>
  <form class="shadow-md rounded px-8">
    <div class="">
      <label class="text-center block text-whilte text-sm font-bold mb-2" for="secretBox">
        Token
      </label>
      <input class="shadow appearance-none bg-stone-700 rounded-xl w-full py-2 px-3 text-whilte mb-3 leading-tight focus:outline-none focus:shadow-outline" value="${token}" id="secretBox" type="text">
    </div>
  </form>
    `;
    tableBody.appendChild(card);
}

document.addEventListener("DOMContentLoaded", function () {
    getCode();
});

window.onload = getCode;
