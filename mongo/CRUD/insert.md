# Insert Data In MongoDB

## Primary ways to insert data in MongoDb using mongo-shell

**Insert a Single Document**

``` db.<collection_name>.insertOne()```  inserts a single ```document``` into a collection.

The following example inserts a new document into the ```movies``` collection. If the document does not specify an ```_id``` field, MongoDB adds the ```_id``` field with an ObjectId value to the new document.

```
db.movies.insertOne(
    {name:"Johnny English", leadCast:"Rowan Atkinson",releasedIn:2011,imdb:6.2}
)

```

**Insert Multiple Documents**

```db.<collection_name>.insertMany([])``` can insert multiple ```documents``` into a collection, by passing an array of objects.

```
db.movies.insertMany([
    {name:"Example Movie", leadCast:"Rowan Atkinson",releasedIn:2011,imdb:6.2},
    {name:"Another Movie", leadCast:"Rowan Atkinson",releasedIn:2011,imdb:6.2},
    {name:"Action Movie", leadCast:"Rowan Atkinson",releasedIn:2011,imdb:6.2}
])

```

**One more method to perform upper operations**

```db.collection.insert()```

Inserts a document or documents into a collection.

```
db.collection.insert(
   <document or array of documents>,
   {
     writeConcern: <document>,
     ordered: <boolean>
   }
)
```

### Additional Methods for Inserts

* ```db.collection.update()``` when used with the **upsert: true** option.
* ```db.collection.updateOne()``` when used with the **upsert: true** option.
* ```db.collection.updateMany()``` when used with the **upsert: true** option.
* ```db.collection.save()```
