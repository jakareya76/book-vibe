import { useState, createContext } from "react";

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const BookContext = createContext({
  read: [],
  wishlist: [],
  handleAddToRead: () => {},
  handleAddToWishlist: () => {},
});

const App = () => {
  const [read, setRead] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const handleAddToRead = (book) => {
    if (!read.some((item) => item.bookId === book.bookId)) {
      setRead((prev) => {
        return [...prev, book];
      });
    } else {
      console.log("Do NOt Add");
    }
  };

  const handleAddToWishlist = (book) => {
    console.log(book);
  };

  console.log(read);

  return (
    <BookContext.Provider
      value={{ handleAddToRead, handleAddToWishlist, read, wishlist }}
    >
      <Navbar />
      <main className="container mx-auto">
        <Outlet />
      </main>
      <Footer />
    </BookContext.Provider>
  );
};

export default App;
