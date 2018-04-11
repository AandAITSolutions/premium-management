import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';
import { UsersComponent } from './components/users/users.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([      
      {path:"users",  children:[
        {path: "", component: UsersComponent}
      ]},     
    ])
  ],
  declarations: [UsersComponent],
  providers:[UserService]
})
export class UsersModule { }
