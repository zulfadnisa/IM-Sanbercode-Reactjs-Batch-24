//Soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

console.log(kataPertama + ' ' + kataKedua.charAt(0).toUpperCase() + kataKedua.slice(1) + ' ' + kataKetiga.substring(0, 6) + kataKetiga.charAt(6).toUpperCase() + ' ' + kataKeempat.toUpperCase());

//Soal 2
var panjangPersegiPanjang = "8";
var lebarPersegiPanjang = "5";

var alasSegitiga = "6";
var tinggiSegitiga = "7";

var kelilingPersegiPanjang = 2 * (Number(panjangPersegiPanjang) + Number(lebarPersegiPanjang));
var luasSegitiga = (Number(alasSegitiga) * Number(tinggiSegitiga)) / 2;

console.log(kelilingPersegiPanjang);
console.log(luasSegitiga);

//Soal 3
var sentences = 'wah javascript itu keren sekali';

var firstWord = sentences.substring(0, 3);
var secondWord = sentences.substring(4, 14);// do your own! 
var thirdWord = sentences.substring(15, 18); // do your own! 
var fourthWord = sentences.substring(19, 24); // do your own! 
var fifthWord = sentences.substring(25, 31); // do your own! 

console.log('Kata Pertama: ' + firstWord);
console.log('Kata Kedua: ' + secondWord);
console.log('Kata Ketiga: ' + thirdWord);
console.log('Kata Keempat: ' + fourthWord);
console.log('Kata Kelima: ' + fifthWord);

//Soal 4
var nilaiJohn = 80;
var nilaiDoe = 50;

var indexJohn;
if (nilaiJohn >= 50) {
    if (nilaiJohn >= 80) { indexJohn = 'A' } else if (nilaiJohn >= 70 && nilaiJohn < 80) { indexJohn = 'B' } else if (nilaiJohn >= 60 && nilaiJohn < 70) { indexJohn = 'C' } else { indexJohn = 'D' }
} else { indexJohn = 'E' }

var indexDoe;
if (nilaiDoe >= 50) {
    if (nilaiDoe >= 80) { indexDoe = 'A' } else if (nilaiDoe >= 70 && nilaiDoe < 80) { indexDoe = 'B' } else if (nilaiDoe >= 60 && nilaiDoe < 70) { indexDoe = 'C' } else { indexDoe = 'D' }
} else { indexDoe = 'E' }

console.log(indexJohn)
console.log(indexDoe)

//Soal 5
var tanggal = 24;
var bulan = 11;
var tahun = 1997;

switch (bulan) {
    case 1: { bulan = 'Januari'; break; }
    case 2: { bulan = 'Februari'; break; }
    case 3: { bulan = 'Maret'; break; }
    case 4: { bulan = 'April'; break; }
    case 5: { bulan = 'Mei'; break; }
    case 6: { bulan = 'Juni'; break; }
    case 7: { bulan = 'Juli'; break; }
    case 8: { bulan = 'Agustus'; break; }
    case 9: { bulan = 'September'; break; }
    case 10: { bulan = 'Oktober'; break; }
    case 11: { bulan = 'November'; break; }
    case 12: { bulan = 'Desember'; break; }
    default: { 'salah input'; }
}
console.log(tanggal + ' ' + bulan + ' ' + tahun)