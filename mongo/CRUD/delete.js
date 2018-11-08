// deleteOne => Removes one document based on criteria
//deletes the first document that matches the filter. Use a field that is part of a unique index such as _id for precise deletions.
db.users.deleteOne({"name":"ashu"})

//deleteMany() => Deletes all documents that matches the filer/query
db.users.deleteMany({"name":"ashu"})

//remove => Delete a single document or all documents that match a specified filter.

db.users.remove({filter})

// findOneAndDelete(query, options)
// passing 1 to sort documents in ascending order 
// you can pass projection also in options
db.users.findOneAndDelete({name:"something"}, {sort:{age:1}})