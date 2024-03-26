import { createContext } from "react";

const BookContext = createContext({
  read: [],
  wishlist: [],
  handleAddToRead: () => {},
  handleAddToWishlist: () => {},
});

export { BookContext };
