import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, bookName, author, image, rating, tags, category } = book;

  return (
    <Link to={`/book-details/${bookId}`}>
      <div className="p-5 border rounded-xl">
        <div className="bg-[#F3F3F3] rounded-xl w-[326px] h-[230px] p-10 flex items-center justify-center">
          <img src={image} alt="book-img" className="w-[135px]" />
        </div>
        <div className="flex items-center gap-5 my-5 font-semibold text-[#23BE0A]">
          {tags.map((tag, idx) => {
            return (
              <span key={idx} className="bg-green-100 py-2 px-5 rounded-full">
                {tag}
              </span>
            );
          })}
        </div>
        <h2 className="text-2xl font-bold font-serif">{bookName}</h2>
        <p className="text-lg my-2 font-medium">
          By : <span>{author}</span>
        </p>
        <div className="border border-dashed my-4"></div>

        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">{category}</h3>

          <div className="flex items-center gap-3">
            <span className="font-medium">{rating}</span>
            <FaRegStar size={20} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
