console.log('================');
//soal 1

function teriak() {
    return 'Halo Sanbers!'
}
console.log(teriak()) //Halo Sanbers!

console.log('================');
//soal 2

function multiply(num1, num2) {
    return num1 * num2
}
var num1 = 12
var num2 = 4

var hasilKali = multiply(num1, num2)
console.log(hasilKali) //48

console.log('================');
//soal 3
function introduce(name, age, address, hobby) {
    return 'Nama saya ' + name + ", umur saya " + age + " tahun, alamat saya di " + address + " dan saya punya hobby yaitu " + hobby + "!"
}

var name = "Agus"
var age = 30
var address = "Jln. Malioboro, Yogyakarta"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogyakarta, dan saya punya hobby yaitu Gaming!" 