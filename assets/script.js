const slides = [    //Ceci, correspond à un tableau car il y a les crochets []
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>",
	},
];

//Je déclare mes variables, j'utilise des constantes, car elles ne changeront plus, ce sont des variables non évolutives


const leftArrow = document.getElementById("left_arrow") //Je vais chercher mes id(mes fléches) dans index.httml, fléche gauche et fléche droite
const rightArrow = document.getElementById("right_arrow") //Fléche droite
const changeImg = document.querySelector(".banner-img") // Je vais chercher ma banner d'images ds index.html
const textImages = document.querySelector(".textImages")//Je récupére mon p de ma banner pour le modifier

//leftArrow.addEventListener("click", () => { console.log("event listener, fléche gauche"); }) //Je mets un addEventListener au click et je verifie si cela foctionne aà l'aide console.log
//rightArrow.addEventListener("click", () => { console.log("event listener, fléche droite"); }) //Je mets un addEventListener au click et je verifie si cela foctionne avec une alert

leftArrow.addEventListener("click", () => { moveToPrevSlide(); })

rightArrow.addEventListener("click", () => {
	moveToNextSlide();
});


//J'ajoute le point pour l' image du slider
function createBulletPoint() {     //Une fonction déclarée directement avec le mot clef function aura une portée plus globale qu'une fonction déclarée dans une variable
	const point = document.createElement("div");  //je cree la div dans laquelle seront les points, cette div sera dans la div class="dots dans index.html"
	point.classList.add("dot"); // classList.add me permet d'aller chercher la class dot dans style.css qui correspond à mes points, dc j'ajoute un point à ma div crée au dessus
	const dots = document.querySelector(".dots"); //Je vais chercher ds index.html ma div qui s'appelle dots dans laquelle sera mon points et ma nouvelle div crée en ligne 37 (attention au point car c'est une class)
	dots.appendChild(point); // A dots je lui ajoute(1) point. dots est le parent de point (qui est son enfant). La propriété appenChild() va ajouter un élément parmis les enfant d’un élément parents spécifié (l’élément ajouté par appenChild se positionnera à la fin des enfants de l’élément parent).
}

function createBulletPoints() {
	// Je crée un bullet point pour chaques éléments de mon tableau d'images
	slides.forEach(createBulletPoint);
	const dotSelected = document.querySelector(".dots :first-child");  //Je selectionne .dots ds mon fichier style.css qui correspond à un point classique, je selectionne le 1er enfant
	dotSelected.classList.add("dot_selected");  //Je mets le point different sur le premier point, je vais recuperer de point different et l'ajouter à .dots qui correspons à mon premier point
	//console.log(createBulletPoints);
}

createBulletPoints() //j'appelle ma fonction car je veux qu'elle s'execute

//Je veux faire apparaitre mes images
const totalImg = slides.length //=longueur, toutes les images de mon tableau

// Variable pour suivre l'index des slide du carrousel
let i = 0 // l'indice de base d'un tableau c'est 0

function displayImagesText() { //function pour les images et les textes
	changeImg.src = `./assets/images/slideshow/${slides[i].image}`; // src= je spécifie le lien de l'image à afficher/$concaténer = ajouter/ backticks permettent de concaténer plus facilement des chaînes de caractères et des variables
	textImages.innerHTML = slides[i].tagLine;
}


//Au clic sur la fléche droite, je change le bullet point actif au suivant, je change l’image, je change le texte correspondant à l’image


//Au clic sur la fléche droite, je change l’image

function moveToNextImg() {
	if (i === totalImg - 1) {
		i = 0
	}
	else {
		(i++)

	}

	displayImagesText()   //J'appelle ma fonction pour l'éxécuter images+textes
	activeBullet();       //J'appelle la fonction pour l'executer le bullet change de place en foncton de l'image en cours
}

//Au clic sur la fléche gauche, je change l’image

function moveToPreviousImg() {
	if (i === 0) {
		i = totalImg - 1;
	}
	else {
		(i--)

	}

	displayImagesText()   //J'appelle ma fonction pour l'éxécuter images+textes
	activeBullet();       //J'appelle la fonction pour l'executer le bullet change de place en foncton de l'image en cours

}

//je change le bullet point actif au suivant, en fonction de l'image en cours dans le slide

function activeBullet() {
	const dot = document.getElementsByClassName("dot");
	for (let i = 0; i < dot.length; i++) {
		dot[i].classList.remove("dot_selected");
	}
	dot[i].classList.add("dot_selected");
}

