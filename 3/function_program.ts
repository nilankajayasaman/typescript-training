class Calculate {
  addition = function (a, b) {
    return a + b;
  };

  multiplication = (a: number, b: number) => a * b;
}

let calculate = new Calculate();
console.log(calculate.addition(12, 5));

console.log(calculate.multiplication(2, 5));
