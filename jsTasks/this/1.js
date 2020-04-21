'use strict';

let user = {
  name: "Pete",
  age: 45,
  // go: function () { console.log(this.name) }
  go() {
    console.log(this.name);
  }
};

// user.go();
(user.go)();