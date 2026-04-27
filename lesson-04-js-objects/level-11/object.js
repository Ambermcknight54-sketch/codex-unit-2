// TODO: Build an object from a written specification and export it as default.
// Example spec: book with title, author, pages, and a summary() method assigned from a named function.
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  pages: 180,
};
// 2. Define the function for the method
function summary() {
  return this.title + " by " + this.author;
}

// 3. Attach the function as a method to the object
book.summary = summary;
/* TODO: implement spec */

export default book;
