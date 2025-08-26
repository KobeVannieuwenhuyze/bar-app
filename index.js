const pagina = document.body.id;

const artiekels_prijs = { 'Pils': 3, 'KanPils': 17, 'Carlsberg00': 3, 'KriekMAX': 3, 'FramboiseMAX': 3, 'RougeMAX': 4, 'Duvel': 5, 'Omer': 5, 'Ypra04': 5, 'Kwaremont': 4, 'Blauw': 4, 'Ypra': 5, 'VDGroodbruin': 4, 'Martha': 5, 'Wittewijn': 4, 'Rosewijn': 4, 'Rodewijn': 4, 'Witfles': 15, 'Rosefles': 15, 'Roodfles': 15, 'Cava': 5, 'Cavafles': 20, 'Cola': 3, 'ColaZero': 3, 'Fanta': 3, 'Icetea': 3, 'Fruitsap': 3, 'Platwater': 2, 'Spuitwater': 2, 'Koffie': 3, 'Chips': 2, 'NieuweBeker': 1, 'VuileKan': -5, 'Beker': -1 };

var artiekels_aantal = { 'Pils': 0, 'KanPils': 0, 'Carlsberg00': 0, 'KriekMAX': 0, 'FramboiseMAX': 0, 'RougeMAX': 0, 'Duvel': 0, 'Omer': 0, 'Ypra04': 0, 'Kwaremont': 0, 'Blauw': 0, 'Ypra': 0, 'VDGroodbruin': 0, 'Martha': 0, 'Wittewijn': 0, 'Rosewijn': 0, 'Rodewijn': 0, 'Witfles': 0, 'Rosefles': 0, 'Roodfles': 0, 'Cava': 0, 'Cavafles': 0, 'Cola': 0, 'ColaZero': 0, 'Fanta': 0, 'Icetea': 0, 'Fruitsap': 0, 'Platwater': 0, 'Spuitwater': 0, 'Koffie': 0, 'Chips': 0, 'NieuweBeker': 0, 'VuileKan': 0, 'Beker': 0 };
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
const Pils = document.getElementById("Pils");
const KanPils = document.getElementById("KanPils");
const Carlsberg00 = document.getElementById("Carlsberg00");
const KriekMAX = document.getElementById("KriekMAX");
const FramboiseMAX = document.getElementById("FramboiseMAX");
const RougeMAX = document.getElementById("RougeMAX");
const Duvel = document.getElementById("Duvel");
const Omer = document.getElementById("Omer");
const Ypra04 = document.getElementById("Ypra04");
const Kwaremont = document.getElementById("Kwaremont");
const Blauw = document.getElementById("Blauw");
const Ypra = document.getElementById("Ypra");
const VDGroodbruin = document.getElementById("VDGroodbruin");
const Wittewijn = document.getElementById("Wittewijn");
const Rosewijn = document.getElementById("Rosewijn");
const Rodewijn = document.getElementById("Rodewijn");
const Witfles = document.getElementById("Witfles");
const Rosefles = document.getElementById("Rosefles");
const Roodfles = document.getElementById("Roodfles");
const Cava = document.getElementById("Cava");
const Cavafles = document.getElementById("Cavafles");
const Cola = document.getElementById("Cola");
const ColaZero = document.getElementById("ColaZero");
const Fanta = document.getElementById("Fanta");
const Icetea = document.getElementById("Icetea");
const Fruitsap = document.getElementById("Fruitsap");
const Platwater = document.getElementById("Platwater");
const Spuitwater = document.getElementById("Spuitwater");
const Koffie = document.getElementById("Koffie");
const Chips = document.getElementById("Chips");
const NieuweBeker = document.getElementById("NieuweBeker");
const VuileKan = document.getElementById("VuileKan");
const Beker = document.getElementById("Beker");

//Initialisatie van nummering
initialisatie('Pils', Pils);
initialisatie('PilsKan', PilsKan);
initialisatie('Carlsberg00', Carlsberg00);
initialisatie('KriekMAX', KriekMAX);
initialisatie('FramboiseMAX', FramboiseMAX);
initialisatie('RougeMAX', RougeMAX);
initialisatie('Duvel', Duvel);
initialisatie('Omer', Omer);
initialisatie('Ypra04', Ypra04);
initialisatie('Kwaremont', Kwaremont);
initialisatie('Blauw', Blauw);
initialisatie('Ypra', Ypra);
initialisatie('VDGroodbruin', VDGroodbruin);
initialisatie('Wittewijn', Wittewijn);
initialisatie('Rosewijn', Rosewijn);
initialisatie('Rodewijn', Rodewijn);
initialisatie('Witfles', Witfles);
initialisatie('Rosefles', Rosefles);
initialisatie('Roodfles', Roodfles);
initialisatie('Cava', Cava)
initialisatie('Cavafles', Cavafles);
initialisatie('Cola', Cola);
initialisatie('ColaZero', ColaZero);
initialisatie('Fanta', Fanta);
initialisatie('Icetea', Icetea);
initialisatie('Fruitsap', Fruitsap);
initialisatie('Platwater', Platwater);
initialisatie('Spuitwater', Spuitwater);
initialisatie('Koffie', Koffie);
initialisatie('Chips', Chips);
initialisatie('NieuweBeker', NieuweBeker);
initialisatie('VuileKan', VuileKan);
initialisatie('Beker', Beker);

// Werkend maken nummering
nummering('Pils', Pils);
nummering('PilsKan', PilsKan);
nummering('Carlsberg00', Carlsberg00);
nummering('KriekMAX', KriekMAX);
nummering('FramboiseMAX', FramboiseMAX);
nummering('RougeMAX', RougeMAX);
nummering('Duvel', Duvel);
nummering('Omer', Omer);
nummering('Ypra04', Ypra04);
nummering('Kwaremont', Kwaremont);
nummering('Blauw', Blauw);
nummering('Ypra', Ypra);
nummering('VDGroodbruin', VDGroodbruin);
nummering('Wittewijn', Wittewijn);
nummering('Rosewijn', Rosewijn);
nummering('Rodewijn', Rodewijn);
nummering('Witfles', Witfles);
nummering('Rosefles', Rosefles);
nummering('Roodfles', Roodfles);
nummering('Cava', Cava)
nummering('Cavafles', Cavafles);
nummering('Cola', Cola);
nummering('ColaZero', ColaZero);
nummering('Fanta', Fanta);
nummering('Icetea', Icetea);
nummering('Fruitsap', Fruitsap);
nummering('Platwater', Platwater);
nummering('Spuitwater', Spuitwater);
nummering('Koffie', Koffie);
nummering('Chips', Chips);
nummering('NieuweBeker', NieuweBeker);
nummering('VuileKan', VuileKan);
nummering('Beker', Beker);


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
    if (artiekels_aantal[label] != 0 && label != 'Beker')
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


