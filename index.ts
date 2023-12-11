// types by inference, it knows JS so it will generate types for us
let helloWorld = "Hello World";

// some patterns make it difficult for types to be inferred automatically
// supports extension of telling what types should be
const user = {
    name: "Hayes",
    id: 0
}

// can explicityl describe objects shape using interface
interface User{
    name: string,
    id: number
}

const userInter: User = {
    name: "Hayes",
    id: 0
}

// if you dont provide object that doesnt match, it will warn you

// can use interface declaration with classes

class UserAccount {
    name: string;
    id: number;
    constructor(name: string, id: number){
        this.name = name;
        this.id = id;
    }
}
const userClass: User = new UserAccount("Murphy", 1);

// can use interfaces to annotate parameters and return values to functions
function deleteUser(user: User){
    //...
}

// Unions can declare a type could be one of many
type myBool = true | false;
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

// Unions provide way to handle dfferent types in a function
function getLength(obj: string | string[]){
    return obj.length;
}

// typeof 
// can make function return different value based on type passed in
function wrapInArray(obj: string | string[]){
    if(typeof obj === "string"){
        return [obj];
    }
    return obj;
}

console.log(wrapInArray("Poop"))
console.log(wrapInArray(["Pee", "Poo"]))