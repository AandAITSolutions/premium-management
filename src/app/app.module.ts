import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from  '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { MaterialModule } from './shared/material/material.module';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { PremiumStructureModule } from './structure/premium-structure.module';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
   
    RouterModule.forRoot([
      {path: 'myapp', loadChildren: './structure/premium-structure.module#PremiumStructureModule'},
      {path: "login", component: LoginComponent},
          
    ]),    
    MaterialModule,    
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence()
  ],
  declarations: [
    AppComponent,      
    LoginComponent
  ],
  
     
  bootstrap: [AppComponent]
})
export class AppModule { }
