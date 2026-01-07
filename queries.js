// Find all books in a specific genre
db.books.find({ genre: "Programming" });

// Find books published after 2010
db.books.find({ published_year: { $gt: 2010 } });

// Find books by a specific author
db.books.find({ author: "Robert C. Martin" });

// Update the price of a specific book
db.books.updateOne(
  { title: "Clean Code" },
  { $set: { price: 480 } }
);

// Delete a book by title
db.books.deleteOne({ title: "Think and Grow Rich" });

// Books in stock and published after 2010
db.books.find(
  { in_stock: true, published_year: { $gt: 2010 } },
  { title: 1, author: 1, price: 1, _id: 0 }
);

// Sort by price ascending
db.books.find().sort({ price: 1 });

// Sort by price descending
db.books.find().sort({ price: -1 });

// Pagination (page 1)
db.books.find().skip(0).limit(5);

// Aggregation: average price by genre
db.books.aggregate([
  { $group: { _id: "$genre", averagePrice: { $avg: "$price" } } }
]);

// Author with most books
db.books.aggregate([
  { $group: { _id: "$author", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
]);

// Group by publication decade
db.books.aggregate([
  {
    $group: {
      _id: {
        decade: {
          $subtract: ["$published_year", { $mod: ["$published_year", 10] }]
        }
      },
      totalBooks: { $sum: 1 }
    }
  }
]);
