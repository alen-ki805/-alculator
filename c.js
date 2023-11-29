let masivBukv = [];
let x1 = 0
let deist = ''


function clearSearch() {
  document.getElementById("searchInput").value = "";
}

function callback() {
  masivBukv = [];
  deist = ''
  x1 = 0
  document.getElementById("knopka").value = masivBukv.join("");
  Plus.classList.remove ('active');
  Deli.classList.remove("active");
  umnog.classList.remove("active");
  Minus.classList.remove("active");
}
AC.addEventListener("click", callback);


function callback4() {
  deist = "+"
  Plus.classList.add('active');
  Deli.classList.remove("active");
  umnog.classList.remove("active");
  Minus.classList.remove("active");

  x1=masivBukv.join("")
  x1 =Number(x1)
  masivBukv = [];
  document.getElementById("knopka").value = masivBukv.join("");
  
}
const Plus = document.querySelector("#Plus");
Plus.addEventListener("click", callback4);



function callback8() {
  deist = "-"
  Minus.classList.add('active');
  Deli.classList.remove("active");
  umnog.classList.remove("active");
  Plus.classList.remove("active");

  x1=masivBukv.join("")
  x1 =Number(x1)
  masivBukv = [];
  document.getElementById("knopka").value = masivBukv.join("");
  
}
const Minus = document.querySelector("#Minus");
Minus.addEventListener("click", callback8);

function callback12() {
  deist = "*"
  umnog.classList.add('active');
  Deli.classList.remove("active");
  Minus.classList.remove("active");
  Plus.classList.remove("active");

  x1=masivBukv.join("")
  x1 =Number(x1)
  masivBukv = [];
  document.getElementById("knopka").value = masivBukv.join("");
 
  
}
const umnog = document.querySelector("#umnog");

umnog.addEventListener("click", callback12);



function callback16() {
  deist = "/"
  Deli.classList.add('active');
  umnog.classList.remove("active");
  Minus.classList.remove("active");
  Plus.classList.remove("active");

  x1=masivBukv.join("")
  x1 =Number(x1)
  masivBukv = [];
  document.getElementById("knopka").value = masivBukv.join("");
  
}
const Deli = document.querySelector("#Deli");
Deli.addEventListener("click", callback16);



function callback5() {
  masivBukv.push("1");
  document.getElementById("knopka").value = masivBukv.join("");
}
One.addEventListener("click", callback5);

function callback6() {
  masivBukv.push("2");
  document.getElementById("knopka").value = masivBukv.join("");
}
Two.addEventListener("click", callback6);

function callback7() {
  masivBukv.push("3");
  document.getElementById("knopka").value = masivBukv.join("");
}
three.addEventListener("click", callback7);



function callback9() {
  masivBukv.push("4");
  document.getElementById("knopka").value = masivBukv.join("");
}
four.addEventListener("click", callback9);

function callback10() {
  masivBukv.push("5");
  document.getElementById("knopka").value = masivBukv.join("");
}
Fiwe.addEventListener("click", callback10);

function callback11() {
  masivBukv.push("6");
  document.getElementById("knopka").value = masivBukv.join("");
}
Six.addEventListener("click", callback11);







function callback13() {
  masivBukv.push("7");
  document.getElementById("knopka").value = masivBukv.join("");
}
seven.addEventListener("click", callback13);

function callback14() {
  masivBukv.push("8");
  document.getElementById("knopka").value = masivBukv.join("");
}
Eit.addEventListener("click", callback14);

function callback15() {
  masivBukv.push("9");
  document.getElementById("knopka").value = masivBukv.join("");
}

Nine.addEventListener("click", callback15);



function callback17() {
  masivBukv.push("0");
  document.getElementById("knopka").value = masivBukv.join("");
}

nole.addEventListener("click", callback17);




function callback18() {
  if (masivBukv.length != 0) 
  {
    if (masivBukv.indexOf(".") ==-1){
    masivBukv.push(".");
    document.getElementById("knopka").value = masivBukv.join("");
    }
  }
}
zapy.addEventListener("click", callback18);


function callback19() {
console.log(masivBukv,x1 )

  if(deist =="-"){
    masivBukv = String(x1 - Number(masivBukv.join(""))).split("");
    document.getElementById("knopka").value = masivBukv.join("");
  
  }
  if(deist =="+"){
    masivBukv = String(x1 + Number(masivBukv.join(""))).split("");
    document.getElementById("knopka").value = masivBukv.join("");
  }
  if(deist =="/"){
    masivBukv = String(x1 / Number(masivBukv.join(""))).split("");
    document.getElementById("knopka").value = masivBukv.join("");
  }
  if(deist =="*"){
    masivBukv = String(x1 * Number(masivBukv.join(""))).split("");
    document.getElementById("knopka").value = masivBukv.join("");
  }
  x1=0
  deist=""
  
  Plus.classList.remove('active');
  Deli.classList.remove("active");
  umnog.classList.remove("active");
  Minus.classList.remove("active");
}
const ravno = document.querySelector("#ravno");
ravno.addEventListener("click", callback19);

// Для кнопки1 сделать стили, для кнопок тоже сделать стили
// убрать поле с песнями
// Сделать ввод определенных символов с клавиатуры
// гит 