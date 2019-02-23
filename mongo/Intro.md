# MongoDB

## What is Database
A database is a collection of information/data which has an interface for interacting (adding, removing, editing) with that data/information, and there are like 2 broad categories of databases which are **SQL (relational databases)** and **NoSQL (non-relational databases)** but we would only be talking about the **NoSQL** database because that’s what **MongoDB** (A NoSQL database) entails.

**NoSQL Database:** This is a non-relational database. It has no tables, no definition of patterns hence allows room for a lot more flexibility with nested data. It looks like JavaScript Object with a bunch of key/value pairs and here is what an example of information about a user stored in a relational database looks like:

```
{
  name: "John Doe",
  age: 20,
  city: "Lagos",
  comments: [
      {text: "Learning everyday"},
      {text: "Javascript for the win!"}
    ]
}
```

### MongoDB

Mongodb is a DB Management system, designed to rapidly develop web-app & internet infra.
Developed by company **10Gen**. Storage Engine - **'Wired Tiger'**
 
**Strengths**

* Stores data in flexible, JSON-like documents by a dynamic schema so the data structure can vary from from document to document in the same collection.

* Holds a wide set of intuitive ad hoc queries helps to access and analyse the data easily and efficient indexing and real time aggregation.

* Provides a document model that can be easily maps to objects in the application code.

### MongoDB Core Server & Tools

* MongoDB is written in C++ & actively developed by MongoDB Inc.
* MongoDb is open source & licensed under the GNU-Affero.
* Source code freely available on [Github](https://github.com/mongodb/mongo)

#### Core Server

* Core database server runs via an executable called ```mongod```

* `mongod` server process recieves commands over a network socket using a custom binary protocol.

* `mongod` can be run in several modes, such as a standalone server or a member of a replica set.


#### JavaScript Shell

**MongoDB Shell** is a JS-based tool for administering the data-base & manipulating data.

`mongo` executable loads the shell & connects to a specified mongod process, or one running locally by default.