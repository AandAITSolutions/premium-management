import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PremiumStructureComponent } from './premium-structure.component';
import { PremiumRouterModule } from './premium-router.module';
import { AnaMainToolbarComponent } from './ana-main-toolbar/ana-main-toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { UsersComponent } from './features/users/components/users/users.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { MaterialModule } from '../shared/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TableComponent } from './features/table/table.component';


@NgModule({
  imports: [    
    CommonModule,
    RouterModule.forChild([
      {path: "", component: PremiumStructureComponent, children:[
        {path: "dashboard", component: DashboardComponent},
        {path: "users", component:UsersComponent}
      ]}
    ]),
    MaterialModule    
  ],
  declarations: [
    PremiumStructureComponent,
     AnaMainToolbarComponent, 
     SidenavComponent,
     UsersComponent,
     DashboardComponent,
     TableComponent
    ]
})
export class PremiumStructureModule { }
