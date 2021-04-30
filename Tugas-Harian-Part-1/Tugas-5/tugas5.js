// soal1
console.log('-----soal 1-----')
function luasPersegiPanjang(panjang, lebar) {
    return panjang * lebar
}
function kelilingPersegiPanjang(panjang, lebar) {
    return 2 * (panjang + lebar)
}
function volumeBalok(panjang, lebar, tinggi) {
    return panjang * lebar * tinggi
}
var panjang = 12
var lebar = 4
var tinggi = 8

var luasPersegiPanjang = luasPersegiPanjang(panjang, lebar)
var kelilingPersegiPanjang = kelilingPersegiPanjang(panjang, lebar)
var volumeBalok = volumeBalok(panjang, lebar, tinggi)

console.log(luasPersegiPanjang)
console.log(kelilingPersegiPanjang)
console.log(volumeBalok)

// soal2
console.log('-----soal 2-----')
function introduce(name, age, address, hobby) {
    return 'Nama saya ' + name + ", umur saya " + age + ' tahun, alamat saya di ' + address + ', dan saya punya hobby yaitu ' + hobby + '!';
}

var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"

var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan)

// soal3
console.log('-----soal 3-----')
var arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku", 1992]
var ObjDaftarPeserta = {
    nama: "John Doe",
    jenisKelamin: "laki-laki",
    hobi: "baca buku",
    tahunLahir: 1992,
}
console.log(ObjDaftarPeserta)

// soal4 
console.log('-----soal 4-----')
var buah = [{
    nama: "Nanas",
    warna: "Kuning",
    adaBijinya: false,
    harga: 9000
},
{
    nama: "Jeruk",
    warna: "Oranye",
    adaBijinya: true,
    harga: 8000
},
{
    nama: "Semangka",
    warna: "Hijau & Merah",
    adaBijinya: true,
    harga: 10000
},
{
    nama: "Pisang",
    warna: "Kuning",
    adaBijinya: false,
    harga: 5000
}]
var BuahFilter = buah.filter(function (item) {
    return item.adaBijinya == false;
})
console.log(BuahFilter)

// soal5
console.log('-----soal 5-----')
var dataFilm = []
function tambahDataFilm(nama, durasi, genre, tahun) {
    dataFilm.push({ "nama": nama, "durasi": durasi, "genre": genre, "tahun": tahun });
}

tambahDataFilm("LOTR", "2 jam", "action", "1999")
tambahDataFilm("avenger", "2 jam", "action", "2019")
tambahDataFilm("spiderman", "2 jam", "action", "2004")
tambahDataFilm("juon", "2 jam", "horror", "2004")

console.log(dataFilm)
