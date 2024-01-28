let filename = prompt("file name: ");
let punkti = require("./" + filename);

let colors = punkti.points.map(point=>point.color);

let skaits = {};
 // color parametrs, atjauno skaitu pie katra krasas gadijuma, rezultats ieks skaits[color], ja nav tad skaits=0
colors.forEach(color => {skaits[color]=(skaits[color] || 0) + 1;});
// unikalu ierakstu skaits
let krasas = Object.keys(skaits);

// visretakas krasas apstrade
let retakaKrasa = krasas.reduce((minColor, color) => {
    return skaits[color] < skaits[minColor] ? color: minColor; // iegust vismazako krasu skaita gadijumu, attiecigi to atzime vai nu ka color vai minColor
}, krasas[0]);

// visbiezakas krasas apstrade
let biezakaKrasa = krasas.reduce((maxColor, color) => {
    return skaits[color] > skaits [maxColor] ? color : maxColor; // iegust vislielako krasu skaita gadijumu
}, krasas[0]);

console.log("min=" + retakaKrasa + " max=" + biezakaKrasa);
