let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() {
    console.log(this.step);
    return this;
  }
};

ladder
.showStep()
.up()
.showStep()
.up()
.up()
.up()
.showStep()
.down()
.showStep();

// ladder.showStep();
// ladder.up();
// ladder.showStep();
// ladder.up();
// ladder.up();
// ladder.showStep();
// ladder.down();
// ladder.showStep();