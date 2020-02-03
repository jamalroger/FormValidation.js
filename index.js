"use strict";
if (typeof exports !== 'undefined')
    exports.__esModule = true;
else
    var exports = { "__esModule": true };
var ValidationForm = /** @class */ (function () {
    function ValidationForm(eleform) {
        this.eleform = eleform;
        this.validateMethods = {};
    }
    ValidationForm.prototype.get = function (field) {
        return this.eleform.elements[field].value;
    };
    ValidationForm.prototype.setValidation = function (validateMethods) {
        this.validateMethods = validateMethods;
        this.addEvent();
    };
    ValidationForm.prototype.addEvent = function () {
        var _this = this;
        var _loop_1 = function (key) {
            if (this_1.validateMethods[key].event)
                this_1.eleform[key].addEventListener('keyup', function (e) { _this.validateMethods[key].method(e.target.value); }, false);
        };
        var this_1 = this;
        for (var key in this.validateMethods) {
            _loop_1(key);
        }
    };
    Object.defineProperty(ValidationForm.prototype, "is_valid", {
        get: function () {
            for (var key in this.validateMethods)
                if (!this.validateMethods[key].method(this.get(key)))
                    return false;
            return true;
        },
        enumerable: true,
        configurable: true
    });
    return ValidationForm;
}());
exports.ValidationForm = ValidationForm;
