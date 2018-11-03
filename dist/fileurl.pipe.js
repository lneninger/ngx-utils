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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var _common_1 = require("./_common");
//import { Constants } from '../../shared/smartadmin.config';
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var FileUrlPipe = /** @class */ (function () {
    function FileUrlPipe(sanitized, config, envProvider) {
        this.sanitized = sanitized;
        this.config = config;
        this.envProvider = envProvider;
    }
    FileUrlPipe.prototype.transform = function (value, defaultSrc, thumbnail) {
        if (thumbnail === void 0) { thumbnail = true; }
        var configDataObservable;
        if (!!this.config) {
            configDataObservable = rxjs_1.of(this.config);
        }
        else if (!!this.envProvider) {
            configDataObservable = this.envProvider.getEnvironnmentData();
        }
        else {
            console.log('HIPALANET: No configuration found');
            return rxjs_1.Observable.throw('HIPALANET: No configuration found');
        }
        if (!value && defaultSrc) {
            return rxjs_1.of(defaultSrc);
        }
        if (value.indexOf('http') == 0) {
            return rxjs_1.of(value);
        }
        //let internalOptions = <FileUrlPipeOptions>{ thumbnail: true };
        //if (options != null) {
        //    internalOptions = { ...internalOptions, ...options };
        //}
        if (thumbnail !== undefined) {
            //debugger;
            return configDataObservable.pipe(operators_1.map(function (config) { return config; }), operators_1.mergeMap(function (config) {
                return rxjs_1.of(config.fileRetrieveUrl + "?id=" + value + "&thumbnail=" + thumbnail);
            }));
        }
        else {
            return configDataObservable.pipe(operators_1.map(function (config) { return config; }), operators_1.mergeMap(function (config) {
                return rxjs_1.of(config.fileRetrieveUrl + "?id=" + value + "&thumbnail=true");
            }));
        }
    };
    FileUrlPipe = __decorate([
        core_1.Pipe({ name: 'fileUrl' }),
        __param(2, core_1.Inject(_common_1.HIPALANET_UTILS_CONFIGPROVIDER)),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer, _common_1.EnvironmentData, _common_1.EnvironmentProvider])
    ], FileUrlPipe);
    return FileUrlPipe;
}());
exports.FileUrlPipe = FileUrlPipe;
//export class FileUrlPipeOptions {
//    thumbnail?: boolean;
//    defaultSrc?: string;
//}
//# sourceMappingURL=fileurl.pipe.js.map