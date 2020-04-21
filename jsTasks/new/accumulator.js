function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt('Enter any number: ', 0);
  }
}

const accum = new Accumulator(5);

accum.read();
accum.read();
accum.read();

alert(accum.value);