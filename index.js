// types by inference, it knows JS so it will generate types for us
var helloWorld = "Hello World";
// some patterns make it difficult for types to be inferred automatically
// supports extension of telling what types should be
var user = {
    name: "Hayes",
    id: 0
};
var userInter = {
    name: "Hayes",
    id: 0
};
// if you dont provide object that doesnt match, it will warn you
// can use interface declaration with classes
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var userClass = new UserAccount("Murphy", 1);
// can use interfaces to annotate parameters and return values to functions
function deleteUser(user) {
    //...
}
// Unions provide way to handle dfferent types in a function
function getLength(obj) {
    return obj.length;
}
// typeof 
// can make function return different value based on type passed in
function wrapInArray(obj) {
    if (typeof obj === "string") {
        return [obj];
    }
    return obj;
}
console.log(wrapInArray("Poop"));
console.log(wrapInArray(["Pee", "Poo"]));
