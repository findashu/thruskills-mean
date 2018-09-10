// Reading all the documents from a collection

// db.<collection_name>.find({})


db.movie.find()

// Passing a query predicate

// You can pass a simple query selector in find() method

// A query selector is document tht's used to match against all documents in the collection.


//Query for all documents where name is 'shivangi', you pass a simple document that acts as your query selector

db.users.find({name:'shivangi'})

// You can specify multiple fields in the query which creates implicit 'AND' among the fields.

db.users.find({name:'shivangi', age:30});

db.authors.find({'book.name':'Shiva Triology'})
