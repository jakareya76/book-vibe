import { Link } from "react-router-dom";
import StarIcon from "../assets/1.svg";

const Book = ({ book }) => {
  const { bookId, bookName, author, image, rating, tags, category } = book;

  return (
    <Link to={`/book-details/${bookId}`}>
      <div className="p-5 border rounded-xl">
        <div className="bg-[#F3F3F3] rounded-xl max-w-[326px] h-[230px] p-10 flex items-center justify-center">
          <img src={image} alt="book-img" className="w-[135px]" />
        </div>
        <div className="flex items-center gap-5 my-5 font-semibold text-[#23BE0A]">
          {tags.map((tag, idx) => {
            return (
              <span key={idx} className="px-5 py-2 bg-green-100 rounded-full">
                {tag}
              </span>
            );
          })}
        </div>
        <h2 className="font-serif text-2xl font-bold">{bookName}</h2>
        <p className="my-2 text-lg font-medium">
          By : <span>{author}</span>
        </p>
        <div className="my-4 border border-dashed"></div>

        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">{category}</h3>

          <div className="flex items-center gap-3">
            <span className="font-medium">{rating}</span>

            <img src={StarIcon} alt="star-icon" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
