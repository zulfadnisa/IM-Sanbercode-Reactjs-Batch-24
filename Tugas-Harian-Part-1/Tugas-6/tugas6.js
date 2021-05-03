// soal1
console.log('-----soal 1-----')
const PI = 22 / 7
const luasLingkaran = (r) => {
    return PI * r * r;
}
const kelilingLingkaran = (r) => {
    return 2 * PI * r;
}
console.log(luasLingkaran(7))
console.log(kelilingLingkaran(7))

// soal2
console.log('-----soal 2-----')
const introduce = (...rest) => {
    let [nama, umur, jenisKelamin, pekerjaan] = rest
    return `Pak ${nama} adalah seorang ${pekerjaan} yang berusia ${umur} tahun`
}

const perkenalan = introduce("John", "30", "Laki-Laki", "penulis")
console.log(perkenalan) // Menampilkan "Pak John adalah seorang penulis yang berusia 30 tahun"

// soal3
console.log('-----soal 3-----')
const newFunction = function literal(firstName, lastName) {
    return {
        firstName,
        lastName,
        fullName() {
            console.log(`${firstName} ${lastName}`)
        }
    }
}

console.log(newFunction("John", "Doe").firstName)
console.log(newFunction("Richard", "Roe").lastName)
newFunction("William", "Imoh").fullName()

// soal4
console.log('-----soal 4-----')
let phone = {
    name: "Galaxy Note 20",
    brand: "Samsung",
    year: 2020,
    colors: ["Mystic Bronze", "Mystic White", "Mystic Black"]
}

const { name: phoneName, brand: phoneBrand, year, colors } = phone
const [colorBronze, colorWhite, colorBlack] = colors
console.log(phoneBrand, phoneName, year, colorBlack, colorBronze)

// soal5
console.log('-----soal 5-----')
let warna = ["biru", "merah", "kuning", "hijau"]

let dataBukuTambahan = {
    penulis: "john doe",
    tahunTerbit: 2020
}

let buku = {
    nama: "pemograman dasar",
    jumlahHalaman: 172,
    warnaSampul: ["hitam"]
}

buku.warnaSampul = [...buku.warnaSampul, ...warna]
let combinedBuku = { ...buku, ...dataBukuTambahan }
console.log(combinedBuku)
