// Mongodb actually stores data as BSON or Binary JSON

// Mongodb drivers send and recieve data as BSON and when data written to mongodb, its stored as BSON.

// On the application side, mongodb drivers map BSON to whatever native data types are most appropriate for a given programming language.

// BSON designed to be lightweight - meaning tht space required to represent data is kept to minimum

// BSON is also traversable to support the variety of operations necessary for writing , reading ,and indexing mongodb documents.

// BSON is efficient, meaning encoding data to bson and decoding data from bson as the drivers need to do can be performed very quickly.
    


// JSON

{ "hello" : "world" }

// BSON

"\x16\x00\x00\x02hello\x00\x06\x00\x00world\x00\x00"

// bsonspec.org