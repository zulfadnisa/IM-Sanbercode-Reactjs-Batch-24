var readBooksPromise = require('./promise.js')

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 }
]

function execute(time, index) {
    readBooksPromise(time, books[index]).then(function (sisa) {
        if (sisa !== 0 && index !== 2) {
            execute(sisa, index + 1)
        }
    }).catch(function (err) {
        console.log(err)
    })
}
execute(10000, 0)