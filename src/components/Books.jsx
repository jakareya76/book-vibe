import Book from "./Book";

const Books = ({ books }) => {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center font-serif">Books</h2>

      <div className="flex items-center justify-center mt-14">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => {
            return <Book key={book.bookId} book={book} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Books;
