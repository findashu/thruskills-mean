## Database/dbs

A container that holds a group of collections. A single **MongoDB Server** can have multiple databases for different purposes.

* In Mongodb creating the database isn't required.

* Databases & collections are created only when documents are first inserted.

* The behaviour is consistent with the MongoDB's dynamic approach to data; just as the structure of documents need not be defined in advance, individual collections & databases can be created at runtime.

## Collections

 A group of documents represent a collection, in SQL terms, equivalent of a table.

## Document

A set of key-value pairs based in a dynamic schema which means that one document can have different set of key-value pairs than the other. in SQL terms, the equivalent of a single row in a table.

```
{
    _id : 10,
    name :"ashu",
    email : 'test@test.com'
}
```