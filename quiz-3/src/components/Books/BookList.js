import React from "react";
import BooksTable from "./BooksTable";
import BooksForm from "./BooksForm";
import { LoginContext } from "../LoginContext";
import { useHistory } from "react-router-dom";

const BookList = (props) => {

  return (
    <>
          <BooksTable />
          <BooksForm />
    </>
  );
};
export default BookList;
