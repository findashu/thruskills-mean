## ObjectId 

The ObjectId is the default primary key for a MongoDB document and is usually found in the ``` _id ``` field in an inserted document. This is a value type defined in the BSON spec.


```
{
    "_id":ObjectId("54759eb3c090d83494e2d804")
}
```

If we don't pass an ``` _id ``` field explicitly, mongodb generates it.

All Collections have a unique primary index on the _id field.


ObjectId values are 12 byte hex string.

* First four byte value represents the seconds since the Unix epoch so a timestamp

* Next 3 bytes in the string are machine identifier (mac address)

* Then 2 bytes contains the process Id

* Finally last 3 bytes are a counter, starting with a random value

### Driver ObjectId Constructor
The driver allows you to create ObjectId’s

```new ObJectId()```

You can access the timestamp also using methods provided by driver

```
var id = new ObjectId()
id.getTimestamp()
```