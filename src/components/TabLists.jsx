import ListedBookCard from "./ListedBookCard";

import {
  getLocalBooksData,
  getLocalWishlistBooks,
} from "../utility/localStorageData";

const TabLists = () => {
  const readedBooks = getLocalBooksData();
  const wishlistBooks = getLocalWishlistBooks();

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
