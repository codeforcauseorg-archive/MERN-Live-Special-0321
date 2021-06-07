"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape() {
        this.getInfo = function () {
            console.log("I am of generic shape");
        };
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getInfo = function () {
            console.log("I am of circular shape");
        };
        return _this;
    }
    return Circle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getInfo = function () {
            console.log("I am of square shape");
        };
        return _this;
    }
    return Square;
}(Shape));
var ShapeFactory = /** @class */ (function () {
    function ShapeFactory() {
    }
    ShapeFactory.create = function (shape) {
        if (shape === "square") {
            return new Square();
        }
        else if (shape === "circle") {
            return new Circle();
        }
        return new Shape();
    };
    return ShapeFactory;
}());
var s1 = ShapeFactory.create();
var s2 = ShapeFactory.create("square");
var s3 = ShapeFactory.create("circle");
s1.getInfo();
s2.getInfo();
s3.getInfo();
