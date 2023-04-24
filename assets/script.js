const slides = [    //Ceci, correspond à un tableau car il y a les crochets []
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//Je déclare mes variables, j'utilise des constantes, car elles nes changeront plus


const leftArrow = document.getElementById("left_arrow")
const rightArrow = document.getElementById("right_arrow")


leftArrow.addEventListener("click",() => { console.log("event listener, fléche gauche");} ) //Je mets un addEventListener au click et je verifie si cela foctionne aà l'aide console.log
rightArrow.addEventListener("click",() => {alert("event listener, fléche droite");}) //Je mets un addEventListener au click et je verifie si cela foctionne avec une alert



















//const banner = document.getElementById("banner");
//const slides = document.getElementById("slides");

//const left = document.getElementById("left");
//left.addEventListener("click", function () {
//	slides(+1);
//},
//)

//console.log("left");