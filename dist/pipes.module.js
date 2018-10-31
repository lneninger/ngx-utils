"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var safehtml_pipe_1 = require("./safehtml.pipe");
var fileurl_pipe_1 = require("./fileurl.pipe");
var safehtml_pipe_2 = require("./safehtml.pipe");
exports.SafeHtmlPipe = safehtml_pipe_2.SafeHtmlPipe;
var fileurl_pipe_2 = require("./fileurl.pipe");
exports.FileUrlPipe = fileurl_pipe_2.FileUrlPipe;
var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule_1 = PipesModule;
    PipesModule.forRoot = function () {
        return {
            ngModule: PipesModule_1,
            providers: [],
        };
    };
    PipesModule = PipesModule_1 = __decorate([
        core_1.NgModule({
            imports: [],
            declarations: [safehtml_pipe_1.SafeHtmlPipe, , fileurl_pipe_1.FileUrlPipe],
            providers: [safehtml_pipe_1.SafeHtmlPipe, fileurl_pipe_1.FileUrlPipe],
            exports: [safehtml_pipe_1.SafeHtmlPipe, fileurl_pipe_1.FileUrlPipe]
        })
    ], PipesModule);
    return PipesModule;
    var PipesModule_1;
}());
exports.PipesModule = PipesModule;
//# sourceMappingURL=pipes.module.js.map