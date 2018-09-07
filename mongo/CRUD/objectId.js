// Object ID values

// Mongodb if we dont supply one, creates and _id field by default.

// All Collections have a unique primary index on the _id field.

// By default, Mongodb creates values for the _id field of type ObjectId 

// This is a value type defined in the BSON spec.

// All objectId values are 12 byte hex string.

// First four bytes are a value representing the seconds since the Unix epoch so a timestamp

// Next 3 bytes in the string are machine identifier(mac address)

// Then 2 bytes contains the process Id

// Finally last 3 bytes are a counter

