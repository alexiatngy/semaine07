const boutonsModale = document.querySelectorAll('.bouton');
const modale = document.querySelector('.modale');


for (let i = 0; i < boutonsModale.length; i++) {
    boutonsModale[i].addEventListener('click', openModale);
}


function openModale() {

const texte = document.createElement("p");
texte.textContent= "Modale"

modale.appendChild(texte);
modale.classList.add('visible');


modale.addEventListener("click", closeModale);
}

function closeModale(event) {
    modale.classList.remove('visible');
}

