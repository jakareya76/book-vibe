const getLocalBooksData = () => {
  const readedBooks = localStorage.getItem("Books_Read_List");

  if (readedBooks) {
    return JSON.parse(readedBooks);
  } else {
    return [];
  }
};

const getLocalWishlistBooks = () => {
  const wishlistBooks = localStorage.getItem("Books_Wishlist");

  if (wishlistBooks) {
    return JSON.parse(wishlistBooks);
  } else {
    return [];
  }
};

export { getLocalBooksData, getLocalWishlistBooks };
