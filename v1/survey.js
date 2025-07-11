const up = document.getElementById('oke');
const down = document.getElementById('not_oke');

up.addEventListener('click', function () {
  alert('Terima kasih atas respon baik anda');
  window.location.replace("/prize.html")
});

down.addEventListener('click', function () {
  window.location.replace("/sambat.html")
})