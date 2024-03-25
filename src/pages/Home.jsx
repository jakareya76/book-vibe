import { useLoaderData } from "react-router-dom";

import Banner from "../components/Banner";
import Books from "../components/Books";

const Home = () => {
  const booksData = useLoaderData();

  const { books } = booksData;

  return (
    <>
      <Banner />
      <Books books={books} />
    </>
  );
};

export default Home;
