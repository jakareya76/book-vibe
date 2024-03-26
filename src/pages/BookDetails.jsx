import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { BookContext } from "../App";

const BookDetails = () => {
  const [books, setBooks] = useState([]);
  const [bookObj, setBookObj] = useState(null);

  const { handleAddToRead, handleAddToWishlist } = useContext(BookContext);

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
    return <h2 className="my-8 text-2xl font-bold text-center">Loading...</h2>;
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
    <div className="flex flex-col justify-center gap-5 px-5 my-24 lg:flex-row">
      <div className="w-full lg:w-1/2">
        <div className="lg:max-w-[573px] max-h-[711px] bg-[#1313130c] rounded-xl grid place-items-center">
          <img
            src={`../${image}`}
            alt={bookName}
            className="object-cover p-20 lg:w-full"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <h2 className="font-serif text-4xl font-bold">{bookName}</h2>
        <h4 className="my-4 text-xl font-medium">By : {author}</h4>
        <div className="my-5 border border-dashed"></div>
        <h3 className="text-xl font-medium">{category}</h3>
        <div className="my-5 border border-dashed"></div>
        <p>
          <span className="text-xl font-medium">Review : </span>
          <span>{review}</span>
        </p>
        <div className="flex items-center gap-5 my-5 font-semibold text-[#23BE0A]">
          <h4 className="text-xl font-bold text-black">Tags :</h4>
          {tags.map((tag, idx) => {
            return (
              <span key={idx} className="px-5 py-2 bg-green-100 rounded-full">
                {tag}
              </span>
            );
          })}
        </div>
        <div className="my-5 border border-dashed"></div>
        <table>
          <tbody>
            <tr>
              <td className="py-3 pr-10 text-xl">Number of Pages:</td>
              <td className="text-xl font-semibold">{totalPages}</td>
            </tr>
            <tr>
              <td className="py-3 pr-10 text-xl">Publisher:</td>
              <td className="text-xl font-semibold">{publisher}</td>
            </tr>
            <tr>
              <td className="py-3 pr-10 text-xl">Year of Publishing:</td>
              <td className="text-xl font-semibold">{yearOfPublishing}</td>
            </tr>
            <tr>
              <td className="py-3 pr-10 text-xl">Rating:</td>
              <td className="text-xl font-semibold">{rating}</td>
            </tr>
          </tbody>
        </table>

        <div className="my-5 space-x-10">
          <button
            onClick={() => handleAddToRead(bookObj)}
            className="px-8 py-4 text-xl font-medium border-2 rounded-lg"
          >
            Read
          </button>
          <button
            onClick={() => handleAddToWishlist(bookObj)}
            className="px-8 py-4 bg-[#50B1C9] text-white text-xl font-medium border-2 rounded-lg"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
