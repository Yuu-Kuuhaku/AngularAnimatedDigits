import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewersPageComponent } from './viewers-page/viewers-page.component';

const routes: Routes = [{
  path: '',
  component: ViewersPageComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
