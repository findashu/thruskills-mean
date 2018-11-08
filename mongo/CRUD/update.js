// Updating Documents

// All updates require atleast 2 arguments.

// The first specifies which document to update, and the second defines how the selected documents should be modified.


// There are 2 types of updates, with different properties and use cases.


// One type of update involves applying modification operation to a document or documents.

db.users.update({name:'ravi'}, {$set : {age:25}})

// This update tells mongodb to find a document where name is 'ravi' and then set the value of age property to 25.

// Second type involves replacing the old document with new one.
// Here the document will get replaced with one that only contains the gender field and other fields will be removed.

db.users.update({name:'TS'}, {gender:'Male'})

// update Many 

// db.<collection_name>.updateMany(filter, update)

db.users.updateMany({name:'TS'},{$set:{createdOn: new Date()}})

// Droping a column
// Use $unset operator to drop a column / to remove a field from matching docs
db.users.updateMany({name:'TS'},{$unset:{createdOn: 1}})

// Options => A third argument that you pass to update() methods

// 1.upsert : Boolean => It will create a document and insert a document if query didnt find any matching doc. By default its false
//2.multi : Boolean =>  If set to true, updates multiple documents that meet the query criteria. If set to false, updates one document. The default value is false.
//3 .returnNewDocument: By default mongo does not return updated document, to get updated document pass returnNewDocument in options, accepts boolean value by default its false.


// findOneAndUpdate()


// $inc => pass positive value to increment and negative value to decrement.

db.users.findOneAndUpdate({name:"shivangi"}, {$inc:{age:2}}, {upsert:true, returnNewDocument: true})


// $unset => Drop a column from a document or say drop a field from a document

db.users.updateMany({}, {$unset: {createdon:1}})