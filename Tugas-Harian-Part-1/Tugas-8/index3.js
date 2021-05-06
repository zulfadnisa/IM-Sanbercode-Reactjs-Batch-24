var filterBooksPromise = require('./promise2.js')

filterBooksPromise(true, 40).then(function (data) {
    console.log(data)
}).catch(function (err) {
    console.log(err)
})
const asyncBook = async () => {
    try {
        let a = await filterBooksPromise(false, 250)
        console.log(a)
        let b = await filterBooksPromise(true, 30)
        console.log(b)
    }
    catch (err) {
        console.log(err)
    }
}
asyncBook()