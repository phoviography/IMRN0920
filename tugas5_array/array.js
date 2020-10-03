console.log('================');
//soal 1

function range(startNum, finishNum) {
    var array = [];
    if (startNum <= finishNum) {
        for (let i = startNum; i <= finishNum; i++) {
            array.push(i);
        }
    } else if (startNum >= finishNum) {
        for (let i = startNum; i >= finishNum; i--) {
            array.push(i);
        }
    } else {
        return -1
    }
    return array;
}

console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)) // -1
console.log(range(11, 18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)) // [54, 53, 52, 51, 50]
console.log(range()) // -1

console.log('================');
//soal 2

function rangeWithStep(startNum, finishNum, step) {
    var array = []
    if (startNum <= finishNum) {
        for (let i = startNum; i <= finishNum; i += step) {
            array.push(i);
        }
        return array;
    } else {
        for (let i = startNum; i >= finishNum; i -= step) {
            array.push(i);
        }
        return array;
    }
}

console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5]

console.log('================');
//soal 3
function sum(startNum, finishNum, step = 1) {
    var rangeArray = rangeWithStep(startNum, finishNum, step);
    return rangeArray.reduce((acc, cur) => acc + cur, 0);
}
console.log(sum(1, 10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15, 10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0 

console.log('================');
//soal 4
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling() {
    for (var i = 0, x = input.length; i < x; i++) {
        console.log('ID: ' + input[i][0] + '\n' + 'Nama: ' + input[i][1] + '\n' + 'TTL: ' + input[i][2] + ", " + input[i][3] + '\n' + "Hobby: " + input[i][4]);

    }
}
console.log(dataHandling());

console.log('================');
//soal 5
function balikKata(string) {
    var newString = ""
    for (var i = string.length - 1; i >= 0; i--) {
        newString += string[i]
    }
    return newString
}

console.log(balikKata("Kasur Rusak")) // kasuR rusaK
console.log(balikKata("SanberCode")) // edoCrebnaS
console.log(balikKata("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata("I am Sanbers")) // srebnaS ma I

console.log('================');
//soal 6
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2() {
    input.splice(1,2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung")
    input.splice(4,2, "Pria", "SMA Internasional Metro")
    console.log(input);
    var ttl = input[0,3]
    var getDate = ttl.split("/")
    var getDate2 = ttl.split("/")
    var getMonth = parseInt(getDate[0,1])
    switch(getMonth) {
        case 1: 
        getMonth = "Januari"; break; 
        case 2: 
        getMonth = "Februari"; break; 
        case 3: 
        getMonth = "Maret"; break; 
        case 4: 
        getMonth = "April"; break; 
        case 5: 
        getMonth = "Mei"; break; 
        case 6: 
        getMonth = "Juni"; break; 
        case 7: 
        getMonth = "Juli"; break; 
        case 8: 
        getMonth = "Agustus"; break; 
        case 9: 
        getMonth = "September"; break; 
        case 10: 
        getMonth = "Oktober"; break;
        case 11: 
        getMonth = "November"; break; 
        case 12: 
        getMonth = "Desember";
    }
    console.log(getMonth)
    var dateSort = getDate.sort(function(a, b){return b-a});
    console.log(dateSort);
    var joinDate = getDate2.join('-')
    console.log(joinDate);
}

dataHandling2(input)