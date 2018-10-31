import { DomSanitizer } from '@angular/platform-browser'
import { PipeTransform, Pipe } from '@angular/core';
import { EnvironmentProvider } from './_common';
//import { Constants } from '../../shared/smartadmin.config';

@Pipe({ name: 'fileUrl' })
export class FileUrlPipe implements PipeTransform {
    constructor(private sanitized: DomSanitizer, private envProvider: EnvironmentProvider) { }
    transform(value: string, defaultSrc?: string, thumbnail: boolean = true): string {
        if (!value && defaultSrc) {
            return defaultSrc;
        }

        if (value.indexOf('http') == 0) {
            return value;
        }

        //let internalOptions = <FileUrlPipeOptions>{ thumbnail: true };
        //if (options != null) {
        //    internalOptions = { ...internalOptions, ...options };
        //}

       

        if (thumbnail !== undefined) {
            //debugger;
            return `${this.envProvider.fileRetrieveUrl}?id=${value}&thumbnail=${thumbnail}`;
        }
        else {
            return `${this.envProvider.fileRetrieveUrl}?id=${value}&thumbnail=true`;
        }
    }
}

//export class FileUrlPipeOptions {
//    thumbnail?: boolean;
//    defaultSrc?: string;
//}