import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BookContext } from "./contexts/BookContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import {
  getLocalBooksData,
  getLocalWishlistBooks,
} from "./utility/localStorageData";

const App = () => {
  const [read, setRead] = useState(getLocalBooksData());
  const [wishlist, setWishlist] = useState(getLocalWishlistBooks());

  const handleAddToRead = (book) => {
    if (!read.some((item) => item.bookId === book.bookId)) {
      setRead((prev) => {
        const updatedRead = [...prev, book];
        localStorage.setItem("Books_Read_List", JSON.stringify(updatedRead));
        return updatedRead;
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
        const updatedRead = [...prev, book];
        localStorage.setItem("Books_Wishlist", JSON.stringify(updatedRead));
        return updatedRead;
      });

      toast.success("Book Added To Wishlist");
    } else {
      toast.error("Book Already Exist In Wishlist");
    }
  };

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
