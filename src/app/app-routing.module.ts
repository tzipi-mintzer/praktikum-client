import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormInstructionsComponent } from './form-instructions/form-instructions.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [{path:"",component:FormComponent},{path:"form",component:FormComponent},{path:"instruction",component:FormInstructionsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
