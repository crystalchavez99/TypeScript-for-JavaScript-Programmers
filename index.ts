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

// Generics provide variables to type
// Arrays without generics could contain anything, with one can describe va,ues inside
type StringArray = Array<String>;
type NumberArray = Array<Number>;
type ObjectWithNameArray = Array<{name: string} >;

// can declare own types that use generics
interface Backpack<Type>{
    add: (obj:Type) => void;
    get: () => Type;
}

// tells TS there is const called backpack and not worry where it came from
declare const backpack: Backpack<string>;

// object is a string, because we declared it above as the variable part
const object = backpack.get();

// since backpack is a string, cant pass num to add function
backpack.add("Pencil");

// Structural Type System is the principle that type checking focuses on the shape that values have 
interface Point{
    x: number,
    y: number
}

function logPoint(p: Point){
    console.log(`${p.x}, ${p.y}`);
}

const point = {x:12,y:26};
// point variable is never declared as a Point type but TS compares the shape in type-check (have the same shape)
logPoint(point);

const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"
 
const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // logs "33, 3"
 
// Will given an error
// const color = { hex: "#187ABF" };
// logPoint(color);

// No difference between how classes and objects conform to shapes