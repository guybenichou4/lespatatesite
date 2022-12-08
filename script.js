

alert("Salut c'est GUUUUUy(le créateur");


let body = document.getElementsByTagName("body")[0]
body.style.backgroundColor = "pink"


let para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('Enter a new name');
  para.textContent = 'Player 1: ' + name;
}