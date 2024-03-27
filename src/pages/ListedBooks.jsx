import { useState } from "react";
import TabLists from "../components/TabLists";

const ListedBooks = () => {
  const [sortBy, setSortBy] = useState("SortBy");

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <>
      <div className="p-10 my-8 bg-base-200 rounded-xl">
        <h2 className="text-4xl font-semibold text-center ">Books</h2>
      </div>

      <div className="flex items-center justify-center mb-16">
        <select
          value={sortBy}
          onChange={handleSortChange}
          className="bg-[#23BE0A] border-none outline-none text-white select select-info"
        >
          <option value="SortBy" className="text-black bg-white" disabled>
            Sort By
          </option>
          <option value="rating" className="text-black bg-white">
            Rating
          </option>
          <option value="numberOfPages" className="text-black bg-white">
            Number of pages
          </option>
          <option value="publisherYear" className="text-black bg-white">
            Publisher year
          </option>
        </select>
      </div>

      <TabLists sortBy={sortBy} />
    </>
  );
};

export default ListedBooks;
