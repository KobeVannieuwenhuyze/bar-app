const pagina = document.body.id;

const artiekels_prijs = { 'bockor': 3, 'carlsberg': 3, 'omer': 5, 'duvel': 5, 'ypra': 5, 'ypra00': 5, 'kriek': 3, 'rouge': 5, 'cola': 3, 'colazero': 3, 'fanta': 3, 'icetea': 3, 'platwater': 2, 'spuitwater': 2, 'witglas': 5, 'roseglas': 5, 'roodglas': 5, 'witfles': 18, 'rosefles': 18, 'roodfles': 18, 'cavaglas': 6, 'cavafles': 22, 'chips': 2, 'beker/glas': 1, 'beker': -1 };

var artiekels_aantal = { 'bockor': 0, 'carlsberg': 0, 'omer': 0, 'duvel': 0, 'ypra': 0, 'ypra00': 0, 'kriek': 0, 'rouge': 0, 'cola': 0, 'colazero': 0, 'fanta': 0, 'icetea': 0, 'platwater': 0, 'spuitwater': 0, 'witglas': 0, 'roseglas': 0, 'roodglas': 0, 'witfles': 0, 'rosefles': 0, 'roodfles': 0, 'cavaglas': 0, 'cavafles': 0, 'chips': 0, 'beker/glas': 0, 'beker': 0 };
try{
if (JSON.stringify(Object.keys(artiekels_aantal).sort()) === JSON.stringify(Object.keys(JSON.parse(localStorage.getItem("artiekels_aantal"))).sort()))
{
  artiekels_aantal = JSON.parse(localStorage.getItem("artiekels_aantal"));
}
}
catch (e) {
  console.error("Fout bij het lezen/parsen van localStorage – reset naar defaults.");
  localStorage.setItem("artiekels_aantal", JSON.stringify(artiekels_aantal));
}


var prijs = 0;
  

if (pagina === "index") {  
    // Verschillende artiekelen
const bockor = document.getElementById("bockor");
const carlsberg = document.getElementById("carlsberg");
const omer = document.getElementById("omer");
const duvel = document.getElementById("duvel");
const ypra = document.getElementById("ypra");
const ypra00 = document.getElementById("ypra00");
const kriek = document.getElementById("kriek");
const rouge = document.getElementById("rouge");
const cola = document.getElementById("cola");
const colazero = document.getElementById("colazero");
const fanta = document.getElementById("fanta");
const acetea = document.getElementById("icetea");
const platwater = document.getElementById("platwater");
const spuitwater = document.getElementById("spuitwater");
const witglas = document.getElementById("witglas");
const roseglas = document.getElementById("roseglas");
const roodglas = document.getElementById("roodglas");
const witfles = document.getElementById("witfles");
const rosefles = document.getElementById("rosefles");
const roodfles = document.getElementById("roodfles");
const cavaglas = document.getElementById("cavaglas");
const cavafles = document.getElementById("cavafles");
const chips = document.getElementById("chips");
const nieuwebeker = document.getElementById("beker/glas");
const beker = document.getElementById("beker");

//Initialisatie van nummering
initialisatie('bockor', bockor);
initialisatie('carlsberg', carlsberg);
initialisatie('omer', omer);
initialisatie('duvel', duvel);
initialisatie('ypra', ypra);
initialisatie('ypra00', ypra00);
initialisatie('kriek', kriek);
initialisatie('rouge', rouge);
initialisatie('cola', cola);
initialisatie('colazero', colazero);
initialisatie('fanta', fanta);
initialisatie('icetea', icetea);
initialisatie('platwater', platwater);
initialisatie('spuitwater', spuitwater);
initialisatie('witglas', witglas);
initialisatie('roseglas', roseglas);
initialisatie('roodglas', roodglas);
initialisatie('witfles', witfles);
initialisatie('rosefles', rosefles);
initialisatie('roodfles', roodfles);
initialisatie('cavaglas', cavaglas);
initialisatie('cavafles', cavafles);
initialisatie('chips', chips);
initialisatie('beker/glas', nieuwebeker)
initialisatie('beker', beker);

// Werkend maken nummering
nummering('bockor', bockor);
nummering('carlsberg', carlsberg);
nummering('omer', omer);
nummering('duvel', duvel);
nummering('ypra', ypra);
nummering('ypra00', ypra00);
nummering('kriek', kriek);
nummering('rouge', rouge);
nummering('cola', cola);
nummering('colazero', colazero);
nummering('fanta', fanta);
nummering('icetea', icetea);
nummering('platwater', platwater);
nummering('spuitwater', spuitwater);
nummering('witglas', witglas);
nummering('roseglas', roseglas);
nummering('roodglas', roodglas);
nummering('witfles', witfles);
nummering('rosefles', rosefles);
nummering('roodfles', roodfles);
nummering('cavaglas', cavaglas);
nummering('cavafles', cavafles);
nummering('chips', chips);
nummering('beker/glas', nieuwebeker)
nummering('beker', beker);

// Code voor knop betalen
const berekenen = document.getElementById("berekenen");
berekenen.onclick = function () {
    for (label in artiekels_aantal) {
        prijs += artiekels_aantal[label] * artiekels_prijs[label];
    }
    localStorage.setItem("artiekels_aantal", JSON.stringify(artiekels_aantal));
    let query = '';
window.location = `betalen.html`;
}
}


else if (pagina === "betalen") {
    for (label in artiekels_aantal) {
        prijs += artiekels_aantal[label] * artiekels_prijs[label];
    }
    document.getElementById('prijs').textContent = prijs;

// Overzichtslijst maken
const main = document.getElementById('main');
for (let label in artiekels_aantal) {
    if (artiekels_aantal[label] != 0 && label != 'beker')
    {
        let lijn = document.createElement("h4");
        lijn.innerHTML = artiekels_aantal[label] + ' x ' + label;
        main.insertBefore(lijn, main.children[2]);
    }
}

// Code voor koppen
const wijzigen = document.getElementById("wijzigen");
wijzigen.onclick = function () {
    window.location = `index.html`;
}
const nieuw = document.getElementById("nieuw");
nieuw.onclick = function () {
    for (let label in artiekels_aantal) {
        artiekels_aantal[label] = 0;
    }
    localStorage.setItem("artiekels_aantal", JSON.stringify(artiekels_aantal));
    window.location = 'index.html';
}

}

// Functies voor nummmering
function nummering(soort, moederelement) {
    moederelement.addEventListener("click", function (e) {
        if (e.target.tagName === "SPAN") {
            artiekels_aantal[soort] -= 1;
            negatief(soort, moederelement);
        }
        else if (e.target.tagName === "IMG") {
            artiekels_aantal[soort] += 1;
            positief(soort, moederelement);
        }
        else if (e.target.tagName === "DIV") {
            artiekels_aantal[soort] += 1;
            positief(soort, moederelement);
        }
    });
}

function positief(soort, moederelement) {
    if (artiekels_aantal[soort] === 1) {
        let kruis = document.createElement("span");
        kruis.innerHTML = "\u00d7";
        moederelement.insertBefore(kruis, moederelement.children[0]);
        let figurecaption = document.createElement("figcaption");
        figurecaption.innerHTML = artiekels_aantal[soort];
        moederelement.insertBefore(figurecaption, moederelement.children[0]);
    }
    else {
        moederelement.removeChild(moederelement.firstElementChild);
        let figurecaption = document.createElement("figcaption");
        figurecaption.innerHTML = artiekels_aantal[soort];
        moederelement.insertBefore(figurecaption, moederelement.children[0]);
    }
}

function negatief(soort, moederelement) {
    if (artiekels_aantal[soort] === 0) {
        moederelement.removeChild(moederelement.firstElementChild);
        moederelement.removeChild(moederelement.firstElementChild);
    }
    else {
        moederelement.removeChild(moederelement.firstElementChild);
        let figurecaption = document.createElement("figcaption");
        figurecaption.innerHTML = artiekels_aantal[soort];
        moederelement.insertBefore(figurecaption, moederelement.children[0]);
    }
}

function initialisatie (soort, moederelement)
{
    if(artiekels_aantal[soort] != 0)
    {
        let kruis = document.createElement("span");
        kruis.innerHTML = "\u00d7";
        moederelement.insertBefore(kruis, moederelement.children[0]);
        let figurecaption = document.createElement("figcaption");
        figurecaption.innerHTML = artiekels_aantal[soort];
        moederelement.insertBefore(figurecaption, moederelement.children[0]);
    }
}
