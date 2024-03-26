const ListedBooks = () => {
  return (
    <>
      <div className="p-10 mt-8 mb-16 bg-zinc-100 rounded-xl">
        <h2 className="text-4xl font-semibold text-center ">Books</h2>
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
          checked
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
