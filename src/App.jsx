import { useState, createContext } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      toast.success("Book Added To Read List");
    } else {
      toast.error("Book Already Exist In Read List");
    }
  };

  const handleAddToWishlist = (book) => {
    if (read.some((item) => item.bookId === book.bookId)) {
      toast.error("Book Already Exist In Read List");
      return;
    }

    if (!wishlist.some((item) => item.bookId === book.bookId)) {
      setWishlist((prev) => {
        return [...prev, book];
      });

      toast.success("Book Added To Wishlist");
    } else {
      toast.error("Book Already Exist In Wishlist");
    }
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
      <ToastContainer />
    </BookContext.Provider>
  );
};

export default App;
