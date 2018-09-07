// Buffer

// The Buffer class was introduced as part of the Node.js API to make it possible to manipulate or interact with streams of binary data.
// BUFFER is a temporary holding spot for data being moved from one place to another.

// Stream

// Stream in Node.js simply means a sequence of data being moved from one point to the other over time. The whole concept is, you have a huge amount of data to process, but you don’t need to wait for all the data to be available before you start processing it.

// New Ways to create buffer


// You can create using uninitiated Buffer of n octets like this.

var buf = Buffer.alloc(10);

console.log(Buffer.isBuffer(buf));

//console.log(buf.toString());

//You can also create a buffer using an array.
//This initializes the buffer to the contents of this array. Keep in mind that the contents of the array are integers representing bytes.

const buffer_array = Buffer.from([8, 6, 7, 5, 3, 0, 9]);

//You can also create a buffer from a string.
//The default encoding is utf-8 so you don’t really need to pass it.

const buffer_string = Buffer.from("I'm a string!", "utf-8");

//Buffer operations

//The easiest way to read the buffer and decode those 0’s and 1 is by converting them into a string. Here’s how.

console.log(buffer_string.toString());

// read in different encoding

buffer_string.toString('hex');

console.log(buffer_string.toString('hex'));

// read from 0 to 10.
buffer_string.toString('utf-8', 0, 10);

console.log(buffer_string.toString('utf-8', 0, 10));

//You can convert the buffer into JSON as well. Very useful if you are reading from the database which provides the stream.

const json = JSON.stringify(buffer_string);

console.log(json);

//JSON.stringify() internally uses toJSON() function of buffer.


//You can join multiple buffers together to create a single buffer using concat method.

const joined_buffer = Buffer.concat([buffer_string]);

console.log(joined_buffer.toString('utf8'));


//Compares buf with target and returns a number indicating whether buf comes before, after, or is the same as target in sort order. Comparison is based on the actual sequence of bytes in each Buffer.

// 0 is returned if target is the same as buf
// 1 is returned if target should come before buf when sorted.
// -1 is returned if target should come after buf when sorted.


console.log(buffer_string.compare(buffer_array));
console.log(buffer_array.compare(buffer_string));

// You can slice the buffer, just like you do with strings.

const sliced_buffer = buffer_string.slice(0,10);

console.log(sliced_buffer.toString());

// Probably the most used function, check the length of buffer.

console.log(sliced_buffer.length)