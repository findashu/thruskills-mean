# HTTP Protocol

Web applications are built around a client-server model where a client could be something as simple as a web browser displaying plain old HTML, a mobile application fetching and creating data or even other web services.


Similarly, servers could be implemented in a variety of ways, using different technology stacks, languages, and serving different types of data.

In order to accommodate this diversity, clients and servers must agree upon a set of conventions — a protocol — that dictates all communication between them. This protocol allows a web server to receive the information —-requests-— sent by an arbitrary client, process them, and respond appropriately.

Modern day web applications use the Hypertext Transfer Protocol, commonly abbreviated to HTTP, in order to exchange information

## URL

URL is short for Uniform Resource Locator and is used to identify the address of a resource on the Web.

![alt text](https://github.com/findashu/thruskills-mean/tree/master/node/core/http-module/http-protocol/images/url.png "url image")

### A URL typically consists of the following components: 

**Protocol:** This is the protocol that the request is served over. This is most often just HTTP (or its secure version, HTTPS).

**Domain:** This is the host name of the server the resource is being requested from.

**Path:** This is the location of the resource on the server. This may be correspond to the location of the resource within the file system (i.e. /search/files/myFile.txt) although this practice is rarely used nowadays.

**Parameters:** This is additional data, passed in the form of key-value pairs, that may be used by the server to identify the resource, or filter a list of resources.

**Fragment:**  A fragment refers to a location within the resource being returned and is typically applied to documents. For example, for HTML documents the browser directly scrolls to the element identified by the anchor. Fragments are also referred to as anchors.

## HTTP Methods

HTTP defines a handful of methods, also called “verbs”, that a client may use in order to describe the type of request being made.

Each request can be modeled as doing a specific action on a resource. For example, a client may request to create, delete, update or simply read from a resource. In HTTP this corresponds to making POST, DELETE, PUT or GET requests respectively.