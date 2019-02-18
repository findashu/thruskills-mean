### BSON

Mongodb actually stores data as BSON or Binary JSON.

Mongodb drivers send and recieve data as BSON and when data written to mongodb, its stored as BSON.

On the application side, mongodb drivers map BSON to whatever native data types are most appropriate for a given programming language.

BSON designed to be lightweight - meaning that space required to represent data is kept to minimum.

BSON is also traversable to support the variety of operations necessary for writing, reading and indexing mongodb documents.

BSON is efficient, meaning encoding data to BSON and decoding data from BSON as the drivers needs can be performed very quickly.
    
JSON Data

```{ "hello" : "world" }```

BSON representation

```"\x16\x00\x00\x02hello\x00\x06\x00\x00world\x00\x00"```

To read more about [BSON SPEC](http://bsonspec.org)