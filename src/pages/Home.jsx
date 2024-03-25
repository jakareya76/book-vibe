import { useState, useEffect } from "react";

import Banner from "../components/Banner";
import Books from "../components/Books";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooksData = async () => {
      const res = await fetch("./books.json");
      const data = await res.json();

      setBooks(data.books);
    };

    getBooksData();
  }, []);

  return (
    <>
      <Banner />
      <Books books={books} />
    </>
  );
};

export default Home;
