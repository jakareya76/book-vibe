import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const [books, setBooks] = useState([]);
  const [bookObj, setBookObj] = useState(null);

  const { id } = useParams();
  const idInt = parseInt(id);

  useEffect(() => {
    const getBooksData = async () => {
      try {
        const res = await fetch("../books.json");
        const data = await res.json();
        setBooks(data.books);
      } catch (error) {
        console.log("Error fetching books:", error);
      }
    };

    getBooksData();
  }, []);

  useEffect(() => {
    const filteredBook = books.find((book) => book.bookId === idInt);
    setBookObj(filteredBook);
  }, [books, idInt]);

  if (!bookObj) {
    return <h2 className="text-2xl font-bold text-center my-8">Loading...</h2>;
  }

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = bookObj;

  return (
    <div>
      <h2>{bookName}</h2>
    </div>
  );
};

export default BookDetails;
