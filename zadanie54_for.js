var imie = "mariusz";
var nazwisko = "fornal";
var a_for = (nazwisko.length % 4) + 5;
var b_for = (imie.length % 6) + 20;

var rowTop = "*".repeat(b_for);
console.log(rowTop);

for (var i = 0; i < (a_for - 2); i++) {
    var rowMiddle = "*" + "&nbsp;".repeat(b_for - 2) + "*";
    console.log(rowMiddle);
}

var rowBottom = "*".repeat(b_for);
console.log(rowBottom);

console.log("a = " + a_for);
console.log("b = " + b_for);