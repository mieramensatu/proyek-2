let submenu = document.querySelectorAll(".coba")
let lah = document.querySelectorAll(".submenu")
let arrows = document.querySelectorAll(".arrow")

function test() {
    for (let i=0; i < submenu.length; i++) {
        lah[i].onclick = function () {
            submenu[i].classList.toggle('hidden')
            arrows[i].classList.toggle('rotate-0')
        }
    }
}

test()

  function Openbar() {
    document.querySelector('.sidebar').classList.toggle('left-[-300px]')
}

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('left-[-300px]');
  }

  document.getElementById('tombol1').addEventListener('click', function(){
    document.getElementById('tombol-1').classList.remove('hidden');
    document.getElementById('tombol1').classList.add('hidden');
    document.getElementById('langkah1').classList.remove('hidden');
  });
  document.getElementById('tombol-1').addEventListener('click', function(){
    document.getElementById('tombol1').classList.remove('hidden');
    document.getElementById('tombol-1').classList.add('hidden');
    document.getElementById('langkah1').classList.add('hidden');
  });
  document.getElementById('tombol2').addEventListener('click', function(){
    document.getElementById('tombol-2').classList.remove('hidden');
    document.getElementById('tombol2').classList.add('hidden');
    document.getElementById('langkah2').classList.remove('hidden');
  });
  document.getElementById('tombol-2').addEventListener('click', function(){
    document.getElementById('tombol2').classList.remove('hidden');
    document.getElementById('tombol-2').classList.add('hidden');
    document.getElementById('langkah2').classList.add('hidden');
  });
  document.getElementById('tombol3').addEventListener('click', function(){
    document.getElementById('tombol-3').classList.remove('hidden');
    document.getElementById('tombol3').classList.add('hidden');
    document.getElementById('langkah3').classList.remove('hidden');
  });
  document.getElementById('tombol-3').addEventListener('click', function(){
    document.getElementById('tombol3').classList.remove('hidden');
    document.getElementById('tombol-3').classList.add('hidden');
    document.getElementById('langkah3').classList.add('hidden');
  });
  document.getElementById('tombol4').addEventListener('click', function(){
    document.getElementById('tombol-4').classList.remove('hidden');
    document.getElementById('tombol4').classList.add('hidden');
    document.getElementById('langkah4').classList.remove('hidden');
  });
  document.getElementById('tombol-4').addEventListener('click', function(){
    document.getElementById('tombol4').classList.remove('hidden');
    document.getElementById('tombol-4').classList.add('hidden');
    document.getElementById('langkah4').classList.add('hidden');
  });

  document.getElementById('awal').addEventListener('click', function(){
    document.getElementById('langkah-awal').classList.remove('hidden');
    document.getElementById('desclaimer').classList.add('hidden');
    document.getElementById('informasi').classList.add('hidden');
    document.getElementById('hubungi').classList.add('hidden');
  });
  document.getElementById('des').addEventListener('click', function(){
    document.getElementById('langkah-awal').classList.add('hidden');
    document.getElementById('desclaimer').classList.remove('hidden');
    document.getElementById('informasi').classList.add('hidden');
    document.getElementById('hubungi').classList.add('hidden');
  });
  document.getElementById('inf').addEventListener('click', function(){
    document.getElementById('langkah-awal').classList.add('hidden');
    document.getElementById('desclaimer').classList.add('hidden');
    document.getElementById('informasi').classList.remove('hidden');
    document.getElementById('hubungi').classList.add('hidden');
  });
  document.getElementById('hub').addEventListener('click', function(){
    document.getElementById('langkah-awal').classList.add('hidden');
    document.getElementById('desclaimer').classList.add('hidden');
    document.getElementById('informasi').classList.add('hidden');
    document.getElementById('hubungi').classList.remove('hidden');
  });

  
