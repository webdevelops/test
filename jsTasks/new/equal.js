const hello = {
  greeting: "Hello"
};

function A() { return hello; }
function B() { return hello; }

let a = new A();
let b = new B();

console.log(a == b);