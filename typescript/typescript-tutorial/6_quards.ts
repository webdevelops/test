function strip(x: string | number) {
  if (typeof x === 'number') {
    return x.toFixed(2);
  }

  return x.trim();
}

class MyResponse {
  header = 'response header'
  result = 'response result'
};

class MyError {
  header = 'error header'
  message = 'error message'
};
