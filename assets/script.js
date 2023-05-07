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
//Je mets dans des constantes les éléments que je veux animer (const car le contenu ne doit pas être changé)

const leftArrow = document.getElementById("left_arrow") //Je vais chercher mes id(mes fléches) dans index.httml, fléche gauche et fléche droite
const rightArrow = document.getElementById("right_arrow") //Fléche droite
const changeImg = document.querySelector(".banner-img") // Je vais chercher ma banner d'images ds index.html
const textImages = document.querySelector(".textImages")//Je récupére mon p de ma banner pour le modifier ds index.html
const AllSlides = slides.length //lenght=longueur, toutes les diapositives de mon tableau(images et textes de mon tableau), je ferai apparaitre mes 4 diapositives, lenght permet de compter les elements du tableau
let i = 0 // Variable pour suivre l'index des slide du carrousel, l'indice de base d'un tableau c'est 0, c'est mon compteur qui part de 0 et qui va me permettre d'itérerds mon tableau d'images(repetition de la boucle)

//leftArrow.addEventListener("click", () => { console.log("event listener, fléche gauche"); }) //Je mets un addEventListener au click et je verifie si cela foctionne aà l'aide console.log
//rightArrow.addEventListener("click", () => { console.log("event listener, fléche droite"); }) //Je mets un addEventListener au click et je verifie si cela foctionne avec une alert


//J'ajoute un point pour l'image du slider
function createBulletPoint() {     
	const point = document.createElement("div");  //je cree la div dans laquelle seront les points, cette div sera dans la div class="dots dans index.html"
	point.classList.add("dot"); // classList.add me permet d'aller chercher la class dot dans style.css qui correspond à mes points, dc j'ajoute un point à ma div crée au dessus
	const dots = document.querySelector(".dots"); //Je vais chercher ds index.html ma div qui s'appelle dots dans laquelle sera mon points et ma nouvelle div crée en ligne 37 (attention au point car c'est une class)
	dots.appendChild(point); // A dots je lui ajoute(1) point. dots est le parent de point (qui est son enfant). La propriété appenChild() va ajouter un élément parmis les enfant d’un élément parents spécifié (l’élément ajouté par appenChild se positionnera à la fin des enfants de l’élément parent).
}

//Je crée tous les points
function createBulletPoints() {
	// Je crée un bullet point pour chaques éléments de mon tableau d'images
	slides.forEach(createBulletPoint); //donc je crée 4 bulletes points, un bullet pour chaque image
	const dotSelected = document.querySelector(".dots :first-child");  //Je selectionne .dots ds mon fichier style.css qui correspond à un point classique, je selectionne le 1er enfant
	dotSelected.classList.add("dot_selected");  //Je mets le point different sur le premier point, je vais recuperer le point different et l'ajouter à .dots qui correspons à mon premier point
	//console.log(createBulletPoints);
}  // dotSlected est mon point actif

createBulletPoints() //j'appelle ma fonction car je veux qu'elle s'execute, à présent apparition de mes 4 points et du point different sur le 1er point


function displaySlide() { //function pour faire apparaître les slides comprenant les images et les textes
	changeImg.src = `./assets/images/slideshow/${slides[i].image}`;  // src= je spécifie le lien de l'image à afficher/$concaténer = ajouter/ Je récupére les images et j'ajoute les images
	textImages.innerHTML = slides[i].tagLine; //J'ajoute le texte pour chaques images en partant du counter 0, tagLine correspond aux paragraphes, dc au texte.Je récupére le texte et j'ajoute le texte. innerHTML permet de récupérer le texte ainsi que son balisage HTML
} //Ma fonction est juste définie, je l'appelle plus bas


//Au clic sur la fléche droite, je change le bullet point actif au suivant, je change l’image, je change le texte correspondant à l’image


//Au clic sur la fléche gauche, je change la diapositive
function previousSlide() {
	if (i === 0 ) {   //je verifie une condition, si compteur est strictement égal à 0 alors tu fais ça 
		i = AllSlides ;
		//console.log('counter:' + counter);
	} 
	i--  //décrémentation

	displaySlide()   //J'appelle ma fonction pour l'éxécuter slides (images+textes)
	activeBullet();  //J'appelle la fonction pour l'executer le bullet change de place en foncton de l'image en cours

	//console.log(counter);
}

leftArrow.addEventListener("click", previousSlide)    //Autre façon de l'écrire, leftArrow.addEventListener("click", () => { previousSlides(); })

//Au clic sur la fléche droite, je change l’image
function nextSlide() {
	if (i === AllSlides) { //je verifie une condition
		i = -1 
	}
   
		i++  // ++ incrémentation
	

	displaySlide();  //J'appelle ma fonction pour l'éxécuter tous les slides (images+textes)
	activeBullet();  //J'appelle la fonction pour l'executer le bullet change de place en foncton de l'image en cours

	//console.log(counter); //je regarde mon counter au clik sur la fleche droite dans ma console
}

rightArrow.addEventListener("click", nextSlide);  //Autre façon de l'écrire, rightArrow.addEventListener("click", () => { nextSlides(); });


//je change le bullet point actif au suivant, en fonction de l'image en cours dans le slide

function activeBullet() {  //Change dynamiquement la position du point en fonction de l'image en cours d'itération dans le slide
	const dots = document.getElementsByClassName("dot"); //ds style.css, ce sont mes points, il y en a 4, que j'ai placé à l'intérieur d 'une div crée en ligne 36
	//console.log(dot);
	for (let i = 0; i < dots.length; i++) {  //for ([initialisation]; [condition]; [expression-finale]) et instruction ligne 110
		
		dots[i].classList.remove("dot_selected");        //instruction qui est exécutée tant que la condition de la boucle est vérifiée, remote pour suprimer des classes
		//console.log(counter);
	}
	dots[i].classList.add("dot_selected"); //add pour ajouter des classes
}

 activeBullet();