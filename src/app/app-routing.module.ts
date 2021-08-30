import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MaincontentComponent } from './maincontent/maincontent.component';

const routes: Routes = [
  {path:'' , redirectTo:'home',pathMatch:'full'},
  {path:'home'  ,component:MaincontentComponent},
  {path:'**' ,component:NotFoundComponent},
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
