db = db.getSiblingDB("plp_bookstore");

db.books.insertMany([
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Programming",
    published_year: 2008,
    price: 450,
    in_stock: true,
    pages: 464,
    publisher: "Prentice Hall"
  },
  {
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    genre: "Programming",
    published_year: 2015,
    price: 380,
    in_stock: true,
    pages: 278,
    publisher: "O'Reilly Media"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-Help",
    published_year: 2018,
    price: 320,
    in_stock: false,
    pages: 320,
    publisher: "Penguin Random House"
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    genre: "Productivity",
    published_year: 2016,
    price: 290,
    in_stock: true,
    pages: 304,
    publisher: "Grand Central Publishing"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    published_year: 1993,
    price: 250,
    in_stock: true,
    pages: 208,
    publisher: "HarperOne"
  },
  {
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    genre: "Finance",
    published_year: 1937,
    price: 200,
    in_stock: false,
    pages: 238,
    publisher: "The Ralston Society"
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    genre: "Finance",
    published_year: 1997,
    price: 280,
    in_stock: true,
    pages: 336,
    publisher: "Warner Books"
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "History",
    published_year: 2011,
    price: 400,
    in_stock: true,
    pages: 498,
    publisher: "Harvill Secker"
  },
  {
    title: "Educated",
    author: "Tara Westover",
    genre: "Memoir",
    published_year: 2018,
    price: 360,
    in_stock: true,
    pages: 352,
    publisher: "Random House"
  },
  {
    title: "The Power of Habit",
    author: "Charles Duhigg",
    genre: "Psychology",
    published_year: 2012,
    price: 310,
    in_stock: false,
    pages: 371,
    publisher: "Random House"
  }
]);
