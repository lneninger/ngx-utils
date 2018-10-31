
export interface BaseFileUrl {
    fileRetrieveUrl: string;
}

//export declare type EnvironmentProvider = { [key: string]: any }
export class EnvironmentData implements BaseFileUrl {
    fileRetrieveUrl: string;
}

export interface IEnvironmentProvider {
    getEnvironnmentData(): EnvironmentData;
}