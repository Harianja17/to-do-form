import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';
import { ToDoComponent } from './to-do/to-do.component';
import { ToDoTableComponent } from './to-do/to-do_table';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'todo/:id',
    component:ToDoComponent
  },
  {
    path:'todo',
    component:ToDoComponent
  },
  {
    path:'totable',
    component:ToDoTableComponent
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
