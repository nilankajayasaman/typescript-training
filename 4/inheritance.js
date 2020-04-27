var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Object.defineProperty(Animal.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "weight", {
        get: function () {
            return this._weight;
        },
        set: function (value) {
            this._weight = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "hasTail", {
        get: function () {
            return this._hasTail;
        },
        set: function (value) {
            this._hasTail = value;
        },
        enumerable: true,
        configurable: true
    });
    Animal.prototype.speak = function (sound) {
        console.log(sound);
    };
    Animal.prototype.details = function () {
        console.log(this._name);
        console.log(this._age);
        console.log(this._weight);
        console.log(this._type);
        console.log(this._hasTail);
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(_name, _age, _weight, _type, _hasTail) {
        var _this = _super.call(this) || this;
        _this.name = _name;
        _this.age = _age;
        _this.weight = _weight;
        _this.type = _type;
        _this.hasTail = _hasTail;
        return _this;
    }
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(_name, _age, _weight, _type, _hasTail) {
        var _this = _super.call(this) || this;
        _this.name = _name;
        _this.age = _age;
        _this.weight = _weight;
        _this.type = _type;
        _this.hasTail = _hasTail;
        return _this;
    }
    return Cat;
}(Animal));
var dog = new Dog("Zue", 2, 12, "domestic", true);
dog.speak("Bark!!!");
dog.details();
var cat = new Cat("Pri", 3, 4, "domestic", true);
cat.speak("Meo!!");
cat.details();
