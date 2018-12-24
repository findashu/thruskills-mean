## MongooseJS

MongooseJS, a schema and usability wrapper for MongoDB in NodeJS. MongooseJS was developed by LearnBoost, an education startup based in San Francisco, and maintained by 10gen. MongooseJS lets us take advantage of MongoDB’s flexibility and performance benefits while using development paradigms.

### Mongoose’s schema setup is defined by 3 types: Schema, Connection, and Model.

* A Schema is an object that defines the structure of any documents that will be stored in your MongoDB collection; it enables you to define types and validators for all of your data items.

* A Connection is a fairly standard wrapper around a database connection.

* A Model is an object that gives you easy access to a named collection, allowing you to query the collection and use the Schema to validate any documents you save to that collection. It is created by combining a Schema, a Connection, and a collection name.