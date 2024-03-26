const ListedBooks = () => {
  return (
    <>
      <div className="p-10 my-8 bg-zinc-100 rounded-xl">
        <h2 className="text-4xl font-semibold text-center ">Books</h2>
      </div>

      <div
        className="flex items-center justify-center mb-16"
        defaultValue="SortBy"
      >
        <select
          defaultValue="SortBy"
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

      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="text-xl tab"
          aria-label="Read Books"
        />
        <div role="tabpanel" className="tab-content">
          <div className="p-10 my-5 border rounded-xl">
            <h3>Read Books Content</h3>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="text-xl tab"
          aria-label="Wishlist Books"
          defaultChecked
        />
        <div role="tabpanel" className="tab-content">
          <div className="p-10 my-5 border rounded-xl">
            <h3>Wishlist Books Content</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListedBooks;
