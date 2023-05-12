/** Common config for bookstore. */


let DB_NAME;

if (process.env.NODE_ENV === "test") {
  DB_NAME = `books-test`;
} else {
  DB_NAME = `books`;
}


module.exports = { DB_NAME };