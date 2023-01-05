const year = new Date().getFullYear();

const htmlYear = document.querySelector(".year");
htmlYear.innerHTML = year;
const canvas = document.querySelector("#borderBottomC3");
const ctx = canvas.getContext("2d");

const shapeC1 = document.querySelector("#shapeC1");
const ctxShapeC1 = shapeC1.getContext("2d");

const shapeBottomC6 = document.querySelector("#shapeBottomC6");
const ctxShapeBottomC6 = shapeBottomC6.getContext("2d");

const shapeTopC6 = document.querySelector("#shapeTopC6");
const ctxShapeTopC6 = shapeTopC6.getContext("2d");

const bottomC3IMG = new Image();
bottomC3IMG.src = "/assets/images/teste.png";
bottomC3IMG.onload = () => ctx.drawImage(bottomC3IMG, -100, 35); 

const shapeC1IMG = new Image();
shapeC1IMG.src = "/assets/images/shapeBottom.png";
shapeC1IMG.onload = () => ctxShapeC1.drawImage(shapeC1IMG, 0, -1); 

const shapeBC6IMG = new Image();
shapeBC6IMG.src = "/assets/images/shapeBottomC6.png";
shapeBC6IMG.onload = () => ctxShapeBottomC6.drawImage(shapeBC6IMG, 0, 59); 

const shapeTC6IMG = new Image();
shapeTC6IMG.src = "/assets/images/shapeTopC6.png";
shapeTC6IMG.onload = () => ctxShapeTopC6.drawImage(shapeTC6IMG, 0, 0); 