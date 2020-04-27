var Calculate = /** @class */ (function () {
    function Calculate() {
        this.addition = function (a, b) {
            return a + b;
        };
        this.multiplication = function (a, b) { return a * b; };
    }
    return Calculate;
}());
var calculate = new Calculate();
console.log(calculate.addition(12, 5));
console.log(calculate.multiplication(2, 5));
