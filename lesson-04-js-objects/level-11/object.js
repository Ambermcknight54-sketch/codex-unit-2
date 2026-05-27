// TODO: Build an object from a written specification and export it as default.
// Example spec: book with title, author, pages, and a summary() method assigned from a named function.
// 1. Declare the method logic using a distinct named function
function generateBookSummary() {
  return this.title + " by " + this.author + " has " + this.pages + " pages";
}

// 2. Build the primary object literal structure matching the specification fields
const book = {
  title: "The Great Gatsby",
  author: "F Scott Fitzgerald",
  pages: 180
};

// 3. Attach the named function to the object as a method property
book.summary = generateBookSummary;

// 4. Default export the completed object for the automated testing suite
export default book;

  /* TODO: implement spec */
};
export default book;
