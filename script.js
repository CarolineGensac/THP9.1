// Exo 1
// const footer = document.querySelector("footer");

// footer.addEventListener("click", function() {
//   console.log("Clique");
// });
// en 1 ligne : document.querySelector("footer").addEventListener("click", () => console.log("Clique"));

// Exo 1Bis

// const footer = document.querySelector("footer");
// let counter = 1;

// footer.addEventListener("click", function() {
//   console.log(`clic numéro ${counter}`);
//   counter++;
// });

// Exo 2

const btn = document.querySelector('.navbar-toggler');
const hiddentext = document.getElementById('navbarHeader');

btn.addEventListener('click', function() {
    hiddentext.classList.toggle('show');
});


// Exo 3

const orangecard = document.querySelector("body > main > div > div > div > div:nth-child(1)");
const edit = document.querySelector("body > main > div > div > div > div:nth-child(1) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary");

edit.addEventListener('click', function () {
    orangecard.style ="color: red";
});

// Exo 4

const bluecard = document.querySelector("body > main > div > div > div > div:nth-child(2)");
const editgreen = document.querySelector("body > main > div > div > div > div:nth-child(2) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary");

editgreen.addEventListener('click', function () {
  if (bluecard.style.color === 'green'){
    bluecard.style.color = 'black';
  }
   else bluecard.style ="color: green";
});

// Exo 5

// const page = document.querySelector("html");
// const link = document.querySelector("head > link");
// let linkEnabled = true;

// page.addEventListener('click', function() {
//   if (linkEnabled) {
//     linkEnabled = false;
//     link.disabled = true;
//   } else {
//     linkEnabled = true;
//     link.disabled = false;
//   }
// });
//  --------------------------------------
// VERSION COURTE
//  page.addEventListener('click', function() {
//   linkEnabled ? (link.disabled = true) : (link.disabled = false);
//   linkEnabled = !linkEnabled;
// });
// ---------------------------------------

// Exo 6

const yellowcard = document.querySelector("body > main > div > div > div > div:nth-child(3) > div");
const view = document.querySelector("body > main > div > div > div > div:nth-child(3) > div > div > div > div > button.btn.btn-sm.btn-success");
const textp = document.querySelector("body > main > div > div > div > div:nth-child(3) > div > div > p");
let reducing = true;

view.addEventListener('mouseover', function() {
  if (reducing) {
    yellowcard.style.width = "20%";
    textp.style.display = "none";
    reducing = false;
  } else {
    yellowcard.style.removeProperty("width");
    textp.style.display = "block";
    reducing = true;
  }
});

// exos 7 pas fini mais pas mal

const lastcard = document.querySelector("body > main > div > div > div > div:nth-child(6)").lastElementChild;
const list = document.querySelector("body > main > div > div > div > div:nth-child(1) > div");
const button = document.querySelector("body > main > section > div > p > a.btn.btn-secondary.my-2")

  button.addEventListener('click', function(){
    list.insertBefore(lastcard, list.firstChild);
  })



