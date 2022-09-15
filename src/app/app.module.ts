import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { LoginComponent } from './auth/login/login.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './auth/logout/logout.component';
import { AnimeFormComponent } from './pages/anime-form/anime-form.component';


import { ExponentPipe } from './shared/pipes/exponent.pipe';
import { AgePipe } from './shared/pipes/age.pipe';

import { NotFoundComponent } from './shared/component/not-found/not-found.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { ToDoTableComponent } from './pages/to-do/component/list/to-do_table';
import { ToDoComponent } from './pages/to-do/component/form/to-do.component';
import { ToDoService } from './pages/to-do/service/to-do.service';
import { PagesComponent } from './pages/pages.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    LifecycleComponent,
    LogoutComponent,
    AnimeFormComponent,
    ExponentPipe,
    AgePipe,
    NotFoundComponent,
    FooterComponent,
    ToDoTableComponent,
    ToDoComponent,
    PagesComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ToDoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
