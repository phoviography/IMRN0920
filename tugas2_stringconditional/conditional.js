console.log('================');
//soal 1
var nama = "Junaedi"
var peran = "Werewolf"

if (nama == "John" && peran == "") {
    console.log("Halo " + nama, "Pilih peranmu untuk memulai game!");
} else if (nama == 'Jane' && peran == 'Penyihir') {
    console.log("Selamat datang di Dunia Werewolf, " + nama);
    console.log("Halo " + peran + " " + nama + ", kamu dapat melihat siapa yang menjadi werewolf!");
} else if (nama == 'Jenita' && peran == 'Guard') {
    console.log("Selamat datang di Dunia Werewolf, " + nama);
    console.log("Halo " + peran + " " + nama + ", kamu akan membantu melindungi temanmu dari serangan werewolf");
} else if (nama == 'Junaedi' && peran == 'Werewolf') {
    console.log("Selamat datang di Dunia Werewolf, " + nama);
    console.log("Halo " + peran + " " + nama + ", Kamu akan memakan mangsa setiap malam!");
} else {
    console.log("Nama dan peran harus diisi!");
}

console.log('================');
//soal 2
var hari = 17; 
var bulan = 8; 
var tahun = 1945;

switch(bulan) {
    case 1: 
    bulan = "Januari"; break; 
    case 2: 
    bulan = "Februari"; break; 
    case 3: 
    bulan = "Maret"; break; 
    case 4: 
    bulan = "April"; break; 
    case 5: 
    bulan = "Mei"; break; 
    case 6: 
    bulan = "Juni"; break; 
    case 7: 
    bulan = "Juli"; break; 
    case 8: 
    bulan = "Agustus"; break; 
    case 9: 
    bulan = "September"; break; 
    case 10: 
    bulan = "Oktober"; break;
    case 11: 
    bulan = "November"; break; 
    case 12: 
    bulan = "Desember";
}

console.log(hari + " " + bulan + " " + tahun);