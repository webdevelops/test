function work(a, b) {
  return a + b;
}

function spy(func) {

  function wrapper(...args) {
    wrapper.calls.push(args);

    return func.apply(this, arguments);
  }

  wrapper.calls = [];

  return wrapper;
}

work = spy(work);

work(1, 2);
work(4, 5);

for (let args of work.calls) {
  console.log("args", args);
}

function f() {
  console.log(this);
}

let user = {
  g: f.bind(null)
}

user.g();