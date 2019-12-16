var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a = 10;
var b = "'hello'";
var c = true;
var d = [5, 6, 8, '5'];
var d1 = [5, 6, 8];
var d2 = [5, 6, 8];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
console.log(Color.Blue);
console.log(d[1]);
function doit() {
    console.log("world");
}
doit();
var didit = function () {
    return 12.5;
};
console.log(didit());
var didit2 = function () {
    return 12.5;
};
var didit3 = function () { return 12.5; };
var doit2 = function () { return console.log("mondo"); };
console.log(didit2() + didit3());
var m = doit2;
m();
var square = function (i) { return i * i; };
console.log(square(4));
/*
function myf(s:string ):string{

}
function myf(s:number ):number{
    
}*/
function myf(s) {
    return 12;
}
function anyf(s) {
    var t = s;
    return "hello";
}
var p = {
    name: "pierre",
    age: 15,
    firstname: 'toto',
    plusOne: function () { return p.age++; }
};
console.log(p.name);
var agePlusOne = function (pp) { return pp.age++; };
agePlusOne(p);
console.log(p.age);
var p2 = { name: "pierre",
    plusOne: function () { return p2.age++; }
};
p.plusOne();
console.log(p.age);
p2.plusOne();
console.log(p2.age);
var AddN = function (p, n) {
    if (n === void 0) { n = 1; }
    p.age += n;
};
AddN(p);
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        if (age === void 0) { age = 0; }
        this.age = age;
        if (name.length > 0 && age >= 0) {
            this.name = name;
        }
        else
            throw "Impossible to create animal";
    }
    Animal.prototype.getName = function () {
        return this.name;
    };
    Animal.prototype.getAge = function () {
        return this.age;
    };
    return Animal;
}());
var an = new Animal("cheetah", 12);
//an.age=-25;
console.log(an.getName());
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion(name, age, tail_length) {
        if (age === void 0) { age = 0; }
        var _this = _super.call(this, name, age) || this;
        _this.tail_length = tail_length;
        _this.tailLength = tail_length;
        return _this;
    }
    Object.defineProperty(Lion.prototype, "tailLength", {
        get: function () {
            return this.tail_length;
        },
        set: function (value) {
            if (value > 150) {
                throw "Impossible to create lion";
            }
            else
                this.tail_length = value;
        },
        enumerable: true,
        configurable: true
    });
    return Lion;
}(Animal));
var leo = new Lion("leo", 10, 120);
//leo.tailLength=200;
console.log(leo.tailLength);
var Zoo;
(function (Zoo) {
    var Giraffe = /** @class */ (function (_super) {
        __extends(Giraffe, _super);
        function Giraffe(name, age) {
            if (age === void 0) { age = 0; }
            return _super.call(this, name, age) || this;
        }
        return Giraffe;
    }(Animal));
    Zoo.Giraffe = Giraffe;
})(Zoo || (Zoo = {}));
var gigi = new Zoo.Giraffe("Gigi", 8);
for (var i in d1) {
    console.log(d1[i]);
}
var d4 = [5, 6, 8];
for (var _i = 0, d4_1 = d4; _i < d4_1.length; _i++) {
    var i = d4_1[_i];
    console.log(i);
}
