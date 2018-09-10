// Primary ways to insert data in mongo

// 1. db.<collection_name>.insert({})

db.movies.insertOne({"name":"JS"})

// 2 . insert multiple documents

// insertMany inserts multiple documents in a collection in ordered way.
// If you try to insert duplicate data(_id) you will get an error.

db.movies.insertMany([
    {"name":"JS"},
    {"name":"JS"},
    {"name":"JS"}
]);

// we can pass optional second to insertMany Command
// To ignore error for duplicate values add second parameter {"ordered":false}
db.movies.insertMany([
    {"name":"JS"},
    {"name":"JS"},
    {"name":"JS"},
], {"ordered":false})


// Hint the third way to create doc by using update commands

// Update commands ("upserts")

