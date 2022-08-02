//Primitives
// type on lower case
let age: number = 22;
let userName: string = "jman";
let isFinished: boolean = false;

//Complex types
let hobbies: string[];
let person: { name: string; age: number };
let people: { name: string; age: number }[];

// Union types
let course: string | number = "React";
course = 12234;

//Aliases
type Person = { name: string; age: number };
let persons: Person[];

//functions. It can be state o infered from the code
function newAdd(a: number, b: number) {
  return a + b;
}

function newAdd2(a: number, b: number): number {
  return a + b;
}
// Inference make returing void and it has not got returns
function printToConsole(value: any) {
  console.log(value);
}

// Generics
function insertAtBegginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBegginning(demoArray, -1); // It is number[]
const stringArray = insertAtBegginning(["a", "b", "v"], "d"); // It is string[]
