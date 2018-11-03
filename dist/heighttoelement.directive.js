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
var HeightToElementDirective = /** @class */ (function () {
    function HeightToElementDirective(elementRef /*, private layoutService: LayoutService*/) {
        this.elementRef = elementRef;
        this.processed = false;
        //debugger;
    }
    HeightToElementDirective.prototype.onResize = function (event) {
        event.target.innerWidth;
    };
    HeightToElementDirective.prototype.ngAfterViewInit = function () {
        this.setElementHeight();
    };
    HeightToElementDirective.prototype.ngOnInit = function () {
    };
    HeightToElementDirective.prototype.setElementHeight = function () {
        var _this = this;
        this.clearElementHeight();
        setTimeout(function () {
            var elementHeight = $(_this.getSourceElement()).css('height');
            if (_this.processed)
                return;
            elementHeight = _this.calculateHeight();
            $(_this.getSourceElement()).css('height', elementHeight);
            console.log('after set: ', elementHeight);
            //this.processed = true;
        }, 100);
    };
    HeightToElementDirective.prototype.getSourceElement = function () {
        var result = (this.sourceElementSelector ? $(this.elementRef.nativeElement).find(this.sourceElementSelector)[0] : this.elementRef.nativeElement);
        return result;
    };
    HeightToElementDirective.prototype.clearElementHeight = function () {
        $(this.getSourceElement()).css('height', '');
        var elementHeight = $(this.getSourceElement()).css('height');
        console.log('after clear: ', elementHeight);
    };
    HeightToElementDirective.prototype.calculateHeight = function () {
        var targetElement = $(this.targetElementSelector)[0];
        var targetElementVerticalPosition = targetElement.offsetTop;
        console.log('target element top: ', targetElementVerticalPosition);
        var sourceElement = this.getSourceElement();
        var currentElementVerticalPosition = 0;
        if (sourceElement) {
            currentElementVerticalPosition = sourceElement.offsetTop;
            var currentElementHeight = sourceElement.offsetHeight;
        }
        console.log('curruent element top: ', currentElementVerticalPosition);
        var result = targetElementVerticalPosition - currentElementVerticalPosition;
        if (this.currentPadding) {
            result -= this.currentPadding;
        }
        return result;
    };
    __decorate([
        core_1.Input('heightTo'),
        __metadata("design:type", String)
    ], HeightToElementDirective.prototype, "targetElementSelector", void 0);
    __decorate([
        core_1.Input('heightFromChild'),
        __metadata("design:type", String)
    ], HeightToElementDirective.prototype, "sourceElementSelector", void 0);
    __decorate([
        core_1.Input('currentPadding'),
        __metadata("design:type", Number)
    ], HeightToElementDirective.prototype, "currentPadding", void 0);
    __decorate([
        core_1.HostListener('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HeightToElementDirective.prototype, "onResize", null);
    HeightToElementDirective = __decorate([
        core_1.Directive({
            selector: '[heightTo]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef /*, private layoutService: LayoutService*/])
    ], HeightToElementDirective);
    return HeightToElementDirective;
}());
exports.HeightToElementDirective = HeightToElementDirective;
//# sourceMappingURL=heighttoelement.directive.js.map