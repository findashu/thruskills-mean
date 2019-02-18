## Mongo-Shell

MongoDB Shell is an JavaScript interface to MongoDB for administering the database & manipulating data.

```mongo``` executable loads the shell & connects to a specified mongod process, or one running locally by default on default port 27017.

**Using Non-Default Port**

```mongo --port 28015```

**Using Remote Host**

You can specify a ```connection string``` to connect mongodb running remotely

```mongo mongodb://mongodb0.example.com:28015```

You can use the command-line option ```--host <host>:<port>```

```mongo --host mongodb0.example.com:28015```

## Working with Mongo Shell

* Print list of all databases on the server

    ```show dbs```

* To switch a particular database

    ```use <db_name>```

* To display database you are using

    ```db```

* To drop the current database and deleting associated files

    ```db.dropDatabase()```

* Print a list of all collections for current database.

    ```show collections```

* Help Commands

    ```db.help()```

    ```db.collection_name.help()```
    
    ```db.collection_name.find().help()```