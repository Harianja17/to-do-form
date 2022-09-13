import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { AnimeFormComponent } from './anime-form/anime-form.component';
import { ToDoComponent } from './to-do/to-do.component';
import { ToDoTableComponent } from './to-do/to-do_table';
import { ExponentPipe } from './shared/pipes/exponent.pipe';
import { AgePipe } from './shared/pipes/age.pipe';
import { ToDoService } from './to-do/to-do.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    LifecycleComponent,
    LogoutComponent,
    AnimeFormComponent,
    ToDoComponent,
    ToDoTableComponent,
    ExponentPipe,
    AgePipe
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
