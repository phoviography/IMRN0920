console.log('================');
//soal 1
var firstNumber = 0;
var secondNumber = 22;

console.log('LOOPING PERTAMA');
while (firstNumber < 20) {
    firstNumber += 2
    console.log(`${firstNumber} I love coding`);
}

console.log('LOOPING KEDUA');
while (secondNumber > 2) {
    secondNumber -= 2
    console.log(`${secondNumber} I will become a frontend developer`)
}

console.log('================');
//soal 2
var angka = 1;

for (angka; angka <= 20; angka++) {
    if (angka % 2 == 0) {
        console.log(`${angka} Berkualitas`);
    } else if (angka % 3 == 0) {
        console.log(`${angka} I Love Coding`);
    } else {
        console.log(`${angka} Santai`);
    }
}

console.log('================');
//soal 3

var row = 4
var column = 8

var rectangle = ""
for (var i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
        rectangle += "#"
    }
    rectangle += "\n"
}
console.log(rectangle);

console.log('================');
//soal 4
var x = '';
for (var i = 0; i < 7; i++) {
    x = '#' + x
    console.log(x);
}


console.log('================');
//soal 5
var size = 8;
var board = "";

for (var y = 0; y < size; y++) {
    for (var x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
            board += " ";
        }
        else {
            board += "#";
        }
    }
    board += "\n";
}

console.log(board);