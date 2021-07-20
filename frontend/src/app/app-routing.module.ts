import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubmitApplicationComponent } from './submit-application/submit-application.component';
import { ViewApplicationComponent } from './view-application/view-application.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'submit-application',component:SubmitApplicationComponent},
  {path:'view-application',component:ViewApplicationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
