import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from  '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { SidenavComponent } from './structure/sidenav/sidenav.component';
import { MaterialModule } from './shared/material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { AnaMainToolbarComponent } from './structure/ana-main-toolbar/ana-main-toolbar.component';
import { LoginComponent } from './components/login/login.component';
import { UsersModule } from './users/users.module';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    AnaMainToolbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: "login", component: LoginComponent},
      {path: "", component: SidenavComponent}      
    ]),
    MaterialModule,
    UsersModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence()
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
