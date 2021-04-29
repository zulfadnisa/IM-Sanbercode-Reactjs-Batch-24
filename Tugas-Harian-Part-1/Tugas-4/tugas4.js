// soal 1
console.log('LOOPING PERTAMA')
var i = 2;
while (i <= 20 && i % 2 == 0) {
    console.log(i + ' - I love coding')
    i = i + 2
}
console.log('LOOPING KEDUA')
var j = 20
while (j >= 2 && j % 2 == 0) {
    console.log(j + ' - I will become a frontend developer')
    j = j - 2
}

// soal 2
for (var k = 1; k <= 20; k++) {
    if (k % 2 == 0) {
        console.log(k + ' - Berkualitas')
    }
    else {
        if (k % 3 == 0) {
            console.log(k + ' - I Love Coding')
        }
        else {
            console.log(k + ' - Santai')
        }
    }
}

// soal 3
var jumlah = '';
for (var i = 1; i < 8; i++) {
    jumlah = jumlah + '#';
    console.log(jumlah)
}

// soall 4
var kalimat=["aku", "saya", "sangat", "sangat", "senang", "belajar", "javascript"]
kalimat.shift()
kalimat.splice(1,1)
console.log(kalimat.join(' '))

// soal 5
var sayuran=[]
sayuran.push('Kangkung')
sayuran.push('Bayam')
sayuran.push('Buncis')
sayuran.push('Kubis')
sayuran.push('Timun')
sayuran.push('Seledri')
sayuran.push('Tauge')
sayuran.sort()
for(var i=1; i<8; i++){
    console.log(i+'.'+sayuran[i-1])
}