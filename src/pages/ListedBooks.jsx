import { useState } from "react";

import ListedBookCard from "../components/ListedBookCard";

import {
  getLocalBooksData,
  getLocalWishlistBooks,
} from "../utility/localStorageData";

const ListedBooks = () => {
  const [readedBooks, setReadedBooks] = useState(getLocalBooksData());
  const [wishlistBooks, setWishlistBooks] = useState(getLocalWishlistBooks());

  return (
    <>
      <div className="p-10 my-8 bg-zinc-100 rounded-xl">
        <h2 className="text-4xl font-semibold text-center ">Books</h2>
      </div>

      <div
        className="flex items-center justify-center mb-16"
        defaultValue="SortBy"
      >
        <select
          defaultValue="SortBy"
          className="bg-[#23BE0A] border-none outline-none text-white select select-info"
        >
          <option value="SortBy" className="text-black bg-white" disabled>
            Sort By
          </option>
          <option value="rating" className="text-black bg-white">
            Rating
          </option>
          <option value="numberOfPages" className="text-black bg-white">
            Number of pages
          </option>
          <option value="publisherYear" className="text-black bg-white">
            Publisher year
          </option>
        </select>
      </div>

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
    </>
  );
};

export default ListedBooks;
