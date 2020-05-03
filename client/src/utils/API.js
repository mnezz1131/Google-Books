

import axios from "axios";
// The getBooks method retrieves bookss from the server
// It accepts a "query" or term to search the book api for
export default {
  getBooks: function(bookSearch) {

    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + bookSearch);
  },
  saveBook: function(bookData) {
      return axios.post("/api/books", bookData);
  },
};