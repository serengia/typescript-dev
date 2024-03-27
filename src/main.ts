let myName = "James Serengia";
// console.log(myName);

// class Coder {
//   secondLang!: string;

//   name: string;
//   age: number;
//   city: string;

//   constructor(name: string, age: number, city: string) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//   }

//   greet() {
//     console.log(`Hello. My name is ${this.name}, I am ${this.age} years old`);
//     console.log(`I live in ${this.city} Kenya`);
//   }
// }

// const serecode = new Coder("James", 30, "Nairobi");
// serecode.greet();

class Coder {
  secondLang!: string;

  //   name: string;
  //   age: number;
  //   city: string;

  constructor(public name: string, private age: number, readonly city: string) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  greet() {
    console.log(`Hello. My name is ${this.name}, I am ${this.age} years old`);
    console.log(`I live in ${this.city} Kenya`);
  }
}

// const serecode = new Coder("James", 30, "Nairobi");
// serecode.greet();

// Index signature
interface TransactionInt {
  //   [index: string]: number;
  Book: number;
  Pizza: number;
  Transport: number;
}

const jamesTransactions: TransactionInt = {
  Book: 12,
  Pizza: 13,
  Transport: 100,
};

function calculateExpenditure(transactions: TransactionInt): number {
  let total = 0;
  for (const trans in transactions) {
    total += transactions[trans as keyof TransactionInt];
  }
  return total;
}

const total = calculateExpenditure(jamesTransactions);
console.log(total);
