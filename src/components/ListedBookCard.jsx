import { Link } from "react-router-dom";

import peopleIcon from "../assets/2.svg";
import pageIcon from "../assets/3.svg";
import locationIcon from "../assets/4.svg";

const ListedBookCard = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    rating,
    tags,
    category,
    yearOfPublishing,
    totalPages,
    publisher,
  } = book;

  return (
    <div className="flex flex-col gap-8 p-5 border rounded-xl lg:flex-row">
      <div className="lg:w-[380px] w-full flex items-center justify-center px-16 py-8 bg-base-200 rounded-xl">
        <img src={image} alt="" className="w-44 h-52" />
      </div>
      <div className="w-full">
        <h2 className="font-serif text-3xl font-bold">{bookName}</h2>
        <p className="my-2 text-lg font-medium">
          By : <span>{author}</span>
        </p>
        <div className="flex flex-wrap items-center gap-5 my-5 font-semibold text-[#23BE0A]">
          <h2 className="text-xl font-bold text-black">Tag:</h2>
          {tags.map((tag, idx) => {
            return (
              <span key={idx} className="px-5 py-2 bg-green-100 rounded-full">
                #{tag}
              </span>
            );
          })}
          <div className="flex items-center gap-2">
            <img src={locationIcon} alt="icon" />

            <h2 className="font-medium text-black">
              Year of Publishing: {yearOfPublishing}
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-8 my-8">
          <div className="flex items-center gap-2">
            <img src={peopleIcon} alt="icon" />
            <p className="text-xl font-medium">Publisher: {publisher}</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={pageIcon} alt="icon" />
            <p className="text-xl font-medium">Page: {totalPages}</p>
          </div>
        </div>
        <div className="w-full my-5 border"></div>
        <div className="flex flex-wrap items-center gap-5">
          <button className="px-8 py-3 font-medium text-blue-500 rounded-full bg-blue-50">
            Category : {category}
          </button>
          <button className="px-8 py-3 font-medium text-green-500 rounded-full bg-green-50">
            Rating : {rating}
          </button>
          <Link
            to={`/book-details/${bookId}`}
            className="px-8 py-3 font-medium text-white rounded-full bg-[#23BE0A]"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedBookCard;
