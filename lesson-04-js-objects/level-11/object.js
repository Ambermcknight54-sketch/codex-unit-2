// TODO: Build an object from a written specification and export it as default.
// Example spec: book with title, author, pages, and a summary() method assigned from a named function.
// 1. Declare the method logic using a distinct named function
book.summary = generateBookSummary;

function generateBookSummary() {
  return this.title + " by " + this.author + " has " + this.pages + " pages";
}
const book = {
  title: "The Great Gatsby",
  author: "F Scott Fitzgerald",
  pages: 180,
};

export default book;
