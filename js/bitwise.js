// Add user Permission to Read Write EXecute

// Read 00000100
// Write 00000010
// Execute 00000001

const readPermission = 6;
const writePermission = 2;
const executePermission = 1;

let myPermissions = 0;

myPermissions = myPermissions | readPermission;

// check do i have read permission

let message = (myPermissions & readPermission) ? 'yes' : 'no';

console.log(message)