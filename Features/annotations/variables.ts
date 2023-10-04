let apples: number = 5;

let speed: string = 'fast';

let hasName: boolean = true;

let nothingMuch: null = null;

let nothing: undefined = undefined;

// built in objects

let now: Date = new Date();

let colors: String[] = ['red', 'green', 'blue'];

let myNumber: number[] = [1, 2, 3];

let truths: boolean[] = [true, true, false, false];

// classes
class Car {}
let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//function
const logNumber:(i:number) =>void = (i: number) => {
  console.log(i);
};


// 1 fnuction that return the 'any type
const json='{"x":10,"y":20}';
const coordinates =JSON.parse(json); 
console.log(coordinates);


// 2) When we declare  a variable on one line 
// and initialixe it later

let words =['red','green','blue'];
let foundWord;

for(let i=0;i<=words.length;i++){
  if(words[i]=='green'){
    foundWord=true;
  }
}

//3) variable 
let numbers=[-10,-1,12];

let numberAboveZero =boolean | number = false;

for(let i=0;i<numbers.length;i++){
  if(numbers[i]>0){
    numberAboveZero=numbers[i];
  }
}