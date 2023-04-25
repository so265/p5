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

leftArrow.addEventListener("click", () => { console.log("event listener, fléche gauche"); }) //Je mets un addEventListener au click et je verifie si cela foctionne aà l'aide console.log
rightArrow.addEventListener("click", () => { alert("event listener, fléche droite"); }) //Je mets un addEventListener au click et je verifie si cela foctionne avec une alert


//J'ajoute les points pour les 4 images du slider
function bulletPoints() {     //Une fonction déclarée directement avec le mot clef function aura une portée plus globale qu'une fonction déclarée dans une variable
	const points = document.createElement("div");  //je cree la div dans laquelle seront les points, cette div sera dans la div class="dots dans index.html"
    points.classList.add("dot"); // classList.add me permet d'aller chercher la class dot dans style.css qui correspond à mes points, dc j'ajoute mes points à ma div crée au dessus
	const dots = document.querySelector(".dots"); //Je vais chercher ds index.html ma div qui s'appelle dots dans laquelle seront mes points et ma nouvelle div crée en ligne 37 (attention au point car c'est une class)
	dots.appendChild(points); //la propriété appenChild() va ajouter un élément parmis les enfant d’un élément parents spécifié (l’élément ajouté par appenChild se positionnera à la fin des enfants de l’élément parent).
    const dotSelected = document.querySelector(".dots :first-child");  //Je selectionne .dots ds mon fichier style.css qui correspond à un point classique, je selectionne le 1er enfant
	dotSelected.classList.add("dot_selected");  //Je mets le point different sur le premier point, je vais recuperer de point different et l'ajouter à .dots qui correspons à mon premier point

}

bulletPoints()

// Je crée un bullet point pour chaque élément de mon tableau d'images
slides.forEach(bulletPoints);




//let Pinkiou = document.querySelector("p").style.color="pink";
