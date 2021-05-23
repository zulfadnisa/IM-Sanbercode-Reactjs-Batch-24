import React from 'react'
import BooksTable from './BooksTable'
import BooksForm from './BooksForm'
import {BooksProvider} from './BooksContext'
const BookList = (props) => {
    return(
        <>
            <BooksTable/>
            <BooksForm/>
        </>
    )
}
export default BookList
