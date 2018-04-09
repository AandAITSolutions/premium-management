import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from  '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { UserService } from './users/user.service';
import { SidenavComponent } from './structure/sidenav/sidenav.component';
import { MaterialModule } from './shared/material/material.module';
import { AnaSidenavModule } from './modules/ana-sidenav/ana-sidenav.module';
import { RouterModule, Routes } from '@angular/router';
import { AnaMainToolbarComponent } from './structure/ana-main-toolbar/ana-main-toolbar.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    AnaMainToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: "", component: SidenavComponent}      
    ]),
    MaterialModule,
    AnaSidenavModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence()
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
