import { NgModule, ModuleWithProviders } from "@angular/core";
import { DirectivesModule } from "./directives.module";
import { PipesModule } from "./pipes.module";
import { IEnvironmentProvider } from "./_common";


export declare var UTILS_PROVIDERS = 'UTILS_PROVIDERS';

@NgModule({
    exports: [
        DirectivesModule
        , PipesModule
    ]

})
export class MainModule {

    static forRoot(providersService: IEnvironmentProvider): ModuleWithProviders {
        return {
            ngModule: MainModule,
            providers: [{
                provide: UTILS_PROVIDERS, useFactory: () => {
                    return new providersService();
                }
            }}]
        }

    }
}
