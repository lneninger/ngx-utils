import { NgModule, ModuleWithProviders } from "@angular/core";
import { DirectivesModule } from "./directives.module";
import { PipesModule } from "./pipes.module";
import { EnvironmentProvider, EnvironmentData } from "./_common";


@NgModule({
    exports: [
        DirectivesModule
        , PipesModule
    ],
    providers: [EnvironmentProvider]

})
export class MainModule {

    static forRoot(config?: EnvironmentData): ModuleWithProviders {
        return {
            ngModule: MainModule,
            providers: [{
                provide: EnvironmentData, useValue: config
            }]
        }

    }
}
