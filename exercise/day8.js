function looping() {
  // forEach()
  const arr = [1, 2, 3, 4, 5];
  arr.forEach((item) => {
    console.log(item);
  });

  // map()
  const arr2 = [1, 2, 3, 4, 5];
  arr2.map((item) => {
    console.log(item);
  });

  // filter()
  const arr3 = [1, 2, 3, 4, 5];
  arr3.filter((item) => {
    console.log(item % 2 == 0);
  });

  // reduce()
  const arr4 = [1, 2, 3, 4, 5];
  arr4.reduce((total, item) => {
    console.log(total + item);
  }, 0);
}

// Callback
function callback() {
  function hello() {
    console.log("Hello world");
  }

  function goodbye() {
    console.log("Goodbye world");
  }

  function print(callback) {
    callback();
  }

  print(hello);
  print(goodbye);
}

function custom() {
  // custom HOF that return another function
  function multiplyBy(n) {
    return function (x) {
      return x * n;
    };
  }

  const double = multiplyBy(2);
  console.log(double(2));

  // custom HOF that implement callbacks
  function repeat(n, action) {
    for (let i = 0; i < n; i++) {
      action(i);
    }
  }

  function logNumber(n) {
    console.log(`The number is ${n}`);
  }

  repeat(3, logNumber);
}

// looping();
// callback();
custom();
