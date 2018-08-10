var UserList = require("./userlist");
var users = new UserList();

users.on("saved-user", function (user) {
    console.log("saved: " + user.name + " (" + user.id + ")");
 });

users.save({ name: "Jane Doe", occupation: "manager" });
users.save({ name: "John Jacob", occupation: "developer" });
