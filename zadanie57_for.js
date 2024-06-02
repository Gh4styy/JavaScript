var start = parseInt(prompt("Podaj numer początkowy:"));

function printSquareAndFourthRoots(num) {
    var squareRoot = Math.sqrt(num).toFixed(2);
    var fourthRoot = Math.sqrt(squareRoot).toFixed(2);
    console.log("I = " + num);
    console.log("pierw_2(" + num + ") = " + squareRoot);
    console.log("pierw_4(" + num + ") = " + fourthRoot);
}

for (var i = start; i < start + 15; i++) {
    printSquareAndFourthRoots(i);

    if ((i - start + 1) % 3 === 0) {
        if (!confirm("Zatrzymać?")) break;
    }
}