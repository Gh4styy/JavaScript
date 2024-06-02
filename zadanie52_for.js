var a_for = ("fornal".length % 4) + 5;
var b_for = ("mariusz".length % 6) + 20;

var rowTop = "*".repeat(b_for);
console.log(rowTop);

for (var i = 0; i < (a_for - 2); i++) {
    console.log("*" + " ".repeat(b_for - 2) + "*");
}

var rowBottom = "*".repeat(b_for);
console.log(rowBottom);

console.log("a = " + a_for);
console.log("b = " + b_for);
