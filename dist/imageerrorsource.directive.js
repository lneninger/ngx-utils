"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DefaultImage = /** @class */ (function () {
    function DefaultImage() {
    }
    Object.defineProperty(DefaultImage.prototype, "defaultSrc", {
        get: function () {
            return this._defaultSrc;
        },
        set: function (value) {
            this._defaultSrc = value;
            this.SetDefaultUrl();
        },
        enumerable: true,
        configurable: true
    });
    DefaultImage.prototype.onError = function () {
        this.error = true;
        this.SetDefaultUrl();
    };
    DefaultImage.prototype.SetDefaultUrl = function () {
        if (this.error) {
            this.src = this.defaultSrc || 'images/angular.png';
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DefaultImage.prototype, "src", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DefaultImage.prototype, "defaultSrc", null);
    DefaultImage = __decorate([
        core_1.Directive({
            selector: 'img[src][defaultSrc]',
            host: {
                '(error)': 'onError()',
                '[src]': 'src'
            }
        })
    ], DefaultImage);
    return DefaultImage;
}());
exports.DefaultImage = DefaultImage;
//# sourceMappingURL=imageerrorsource.directive.js.map