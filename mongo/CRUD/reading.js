// Reading all the documents from a collection

// db.<collection_name>.find({})


db.movie.find()

// Passing a query predicate

// You can pass a simple query selector in find() method

// A query selector is document tht's used to match against all documents in the collection.


//Query for all documents where name is 'shivangi', you pass a simple document that acts as your query selector.

db.users.find({name:'shivangi'})

// You can specify multiple fields in the query which creates implicit 'AND' among the fields.

db.users.find({name:'shivangi', age:30});

// Querying embeded documents using dot notation
db.authors.find({'book.name':'Shiva Triology'})


// count() => to the count of available documents in a collection

db.users.find().count()


// Equality matches on Arrays

//1. On the entire Array

// Querying an exact match to an array of one or more values

db.authors.find({tags:['Node', 'JS']});// 


// Quering to match single element
db.authors.find({tags:'Node'});

// You can query specific values depending upon position in the array

db.authors.find({'tags.0':'Jeff Bridges'});


// Cursor => A pointer to the result set of a query, Clients can iterate through a cursor to retrieve results.

// By default in one mongo returns 108 documents.

// The find() method returns a cursor, to access documents, you need to iterate through the cursor

// In mongodb if don't assign the return value from "find" to a variable using the "var" keyword, the cursor is automatically iterated up to 20 times to print initial set of search results. 
// To print next values use command 'it'  

// Store returned cursor in a variable and iterate it one by one

var req = db.authors.find();

var doc = function() {return req.hasNext() ? req.next() : null};

// To check objects left in a batch
req.objsLeftInBatch();

// Projection => Projection is a handy way of reducing the size of the data returned for any one query
// By default mongodb returns all the fields in all matching documents for queries.
// TO limit the amount of data that MongoDB returns you can include projections in your queries
// Projections are supplied as second argument to find command.

db.authors.find({}, {name:1});

// This will return results containing name and _id field.

// The projection syntax allows to explicitly include fields.If you explicitly include a fields those are the only fields that will be returned. The one exception is _id field, _id is always returned by default.

//  exclude fields in documents.
db.authors.find({}, {name:1, _id:0});


// Operators

// Comparision Operator
    // $eq => equal operator
    // $gt => greater than
    // $gte => greater than equalTO
    // $lt => less than
    // $lte => less than equal to
    // $ne => not equal
    // $in => 
    // $nin => 

// $eq
db.users.find({age:{$eq:22}});

// $gt
db.users.find({age:{$gt:22}});

//gte => greater than or equal to
db.users.find({age:{$gte:22}});

//
db.users.find({age:{$gte:22, $lt:32}});



// Logical Operators
    // $and
    // $or
    // $not => 
    // $nor => Inverse of $or

// $or

db.users.find({$or:[{name:'shivangi'},{age :{$lt:20}}]})

// $and

db.users.find({$and:[{name:'shivangi'},{age :{$lt:20}}]})

// Element Operators
    // $exists => to check presence or absence of a field
    // $type => checks the type of field

db.users.find({gender:{$exists:true}})

db.users.find({'_id':{$type:'number'}});

//findOne() => Returns one document that satisfies the specified query criteria
// findOne(filter,projection)


// Sorting

// Chain the sort() method to get sorted results depending upon specified field

db.users.find().sort({age:1})

// 1 to sort in ascending order
// -1 to sort in decending order

// limit()
// you can limit the number of document return 

db.users.find().limit(2)

// skip() => Skip the number documents

db.users.skip(2);

// limit and skip

// Skipping one and then limiting result to 2 means that three items need to be considered, the first 1 will be skipped and the next 2 will be returned.
db.users.find().limit(2).skip(1)

// explain() => shows the internally query planner

// count() => 
db.users.count(); // to get total count

db.users.count({name:"JS"}) // count the number of documents where name is "JS"