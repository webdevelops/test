const isFetched: boolean = true;
const isLoading: boolean = false;

const int: number = 45;
const float: number = 2.5;
const num: number = 3e10;

const message: string = 'Hello TypeScript';
const go: string = 'Start';

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];

const words: string[] = ['Hello', 'TypeScript'];
const words2: Array<string> = ['Hello', 'TypeScript'];

const contact: [string, number] = ['Oleg', 12345];

let variable: any = 35;
variable = 'Oleg';
variable = [];

function sayName(name: string): void {
  console.log(name);
}

sayName('Oleg');

function infinite(): never {
  while (true) {

  }
}

type Login = string;
const login: Login = 'admin';


type ID = number | string;
const id1: ID = 123;
const id2: ID = '123';

type SomeType = string | null | undefined;