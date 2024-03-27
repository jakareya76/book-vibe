import { useState, useEffect } from "react";
import { isEqual } from "lodash";

import {
  getLocalBooksData,
  getLocalWishlistBooks,
} from "../utility/localStorageData";

import ListedBookCard from "./ListedBookCard";

const TabLists = ({ sortBy }) => {
  const [readedBooks, setReadedBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);

  useEffect(() => {
    // Function to sort books
    const sortBooks = (books, criteria) => {
      switch (criteria) {
        case "rating":
          return books.slice().sort((a, b) => b.rating - a.rating);
        case "numberOfPages":
          return books.slice().sort((a, b) => a.totalPages - b.totalPages);
        case "publisherYear":
          return books
            .slice()
            .sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
        default:
          return books.slice();
      }
    };

    const localReadedBooks = getLocalBooksData();
    const localWishlistBooks = getLocalWishlistBooks();

    const sortedReadedBooks = sortBooks(localReadedBooks, sortBy);
    const sortedWishlistBooks = sortBooks(localWishlistBooks, sortBy);

    if (
      !isEqual(sortedReadedBooks, readedBooks) ||
      !isEqual(sortedWishlistBooks, wishlistBooks)
    ) {
      setReadedBooks(sortedReadedBooks);
      setWishlistBooks(sortedWishlistBooks);
    }
  }, [sortBy]);

  return (
    <div role="tablist" className="tabs tabs-lifted">
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="text-xl tab"
        aria-label="Read Books"
        defaultChecked
      />
      <div role="tabpanel" className="tab-content">
        <div className="p-3 my-5 border md:p-10 rounded-xl">
          <div className="grid gap-5">
            {readedBooks.length > 0 ? (
              readedBooks.map((book) => {
                return <ListedBookCard key={book.bookId} book={book} />;
              })
            ) : (
              <h2 className="text-2xl font-bold">No Book Found!</h2>
            )}
          </div>
        </div>
      </div>

      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="text-xl tab"
        aria-label="Wishlist Books"
      />
      <div role="tabpanel" className="tab-content">
        <div className="p-10 my-5 border rounded-xl">
          <div className="grid gap-5">
            {wishlistBooks.length > 0 ? (
              wishlistBooks.map((book) => {
                return <ListedBookCard key={book.bookId} book={book} />;
              })
            ) : (
              <h2 className="text-2xl font-bold">No Book Found!</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabLists;
