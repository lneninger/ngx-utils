"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var directives_module_1 = require("./directives.module");
var pipes_module_1 = require("./pipes.module");
var _common_1 = require("./_common");
var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule_1 = MainModule;
    MainModule.forRoot = function (config) {
        return {
            ngModule: MainModule_1,
            providers: [{
                    provide: _common_1.EnvironmentData, useValue: config
                }]
        };
    };
    MainModule = MainModule_1 = __decorate([
        core_1.NgModule({
            exports: [
                directives_module_1.DirectivesModule,
                pipes_module_1.PipesModule
            ],
            providers: [_common_1.EnvironmentProvider]
        })
    ], MainModule);
    return MainModule;
    var MainModule_1;
}());
exports.MainModule = MainModule;
//# sourceMappingURL=main.js.map