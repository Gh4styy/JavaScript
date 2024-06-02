var n = parseInt(prompt("Podaj liczbę dla której chcesz obliczyć silnię:"));
var silnia = 1;
if (n == 0) {
    console.log("0! = 1");
} else {
    for (var i = 1; i <= n; i++) {
        silnia *= i;
    }
    console.log(n + "! = " + silnia);
}