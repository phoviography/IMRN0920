console.log('================');
//soal 1

var now = new Date()
var thisYear = now.getFullYear() // 2020 (tahun sekarang)

arr = []
function arrayToObject(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i][3] === undefined || arr[i][3] > thisYear) {
            var personObj = {
                firstName: arr[i][0],
                lastName: arr[i][1],
                gender: arr[i][2],
                age: "invalid birth year"
            }
        } else {
            var personObj = {
                firstName: arr[i][0],
                lastName: arr[i][1],
                gender: arr[i][2],
                age: thisYear - arr[i][3]
            }
        }
        console.log(i + 1 + ". " + personObj.firstName + " " + personObj.lastName + ": ");
        console.log(personObj);
    }
}

var people = [["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"]]
arrayToObject(people)

var people2 = [["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023]]
arrayToObject(people2)

console.log('================');
//soal 2

function shoppingTime(memberId, money) {
    // you can only write your code here!
}

console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(shoppingTime('', 2475000));
console.log(shoppingTime('234JdhweRxa53', 15000));
console.log(shoppingTime());

console.log('================');
//soal 3
arr = []
function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    for (i = 0; i < arrPenumpang.length; i++) {
        var penumpangObj = {
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: (rute.indexOf(arrPenumpang[i][2]) - rute.indexOf(arrPenumpang[i][1])) * 2000
        }
        console.log("penumpang: " + penumpangObj.penumpang + ", naik dari: " + penumpangObj.naikDari + ", tujuan: " + penumpangObj.tujuan + ", bayar: " + penumpangObj.bayar)
    }
}

console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
console.log(naikAngkot([]));