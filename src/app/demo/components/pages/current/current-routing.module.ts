import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CurrentComponent } from './current.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: CurrentComponent }
    ])],
    exports: [RouterModule]
})
export class CurrentRoutingModule { }
