


let body = document.getElementsByTagName("body")[0]
let color = document.getElementsByTagName("input")[0]
body.style.backgroundColor = "#fffff"


let para = document.querySelector('d');

para.addEventListener('click', updateName);

function updateName() {

  let name = document.getElementById('name');
  window.location.href = "index.html";
  localStorage.setItem('name', 'Guy');
}
function onLoad() {
  let profil = document.getElementById('profil');
  profil.innerHTML = localStorage.getItem('name');
}

function changecolor() {
  let color = document.getElementById('colorpicker').value;
  document.body.style.backgroundColor = color;

}


let changercouleur = document.querySelector('n');

para.addEventListener('click')