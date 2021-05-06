// di index.js
var readBooks = require('./callback.js')

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 },
    { name: 'komik', timeSpent: 1000 }
]
function execute(time, index) {
    readBooks(time, books[index], function (sisa) {
        if (sisa !== 0 && index !== 3) {
            execute(sisa, index + 1)
        }
    })
}

execute(10000, 0)
