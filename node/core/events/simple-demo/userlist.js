let util = require("util");
var EventEmitter = require("events").EventEmitter;

var id = 1;
var database = {
    users: [
        { id: id++, name: "Joe Smith",  occupation: "developer"    },
        { id: id++, name: "Jane Doe",   occupation: "data analyst" },
        { id: id++, name: "John Henry", occupation: "designer"     }
    ]
};

function UserList () {
    EventEmitter.call(this);
}

// inherits prototype functions
util.inherits(UserList, EventEmitter);

UserList.prototype.save = function (obj) {
    obj.id = id++;
    database.users.push(obj);
    this.emit("saved-user", obj);  
};

UserList.prototype.all = function () {
    return database.users;
};

module.exports = UserList;