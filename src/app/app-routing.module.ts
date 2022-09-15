import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PagesComponent } from './pages/pages.component';
import { ToDoComponent } from './pages/to-do/component/form/to-do.component';
import { ToDoTableComponent } from './pages/to-do/component/list/to-do_table';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';


const routes: Routes = [
  {
    path:'',
    component:PagesComponent,
    children:[
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'login',
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
      }

    ]
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
