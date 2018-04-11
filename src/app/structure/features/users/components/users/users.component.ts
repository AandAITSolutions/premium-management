import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

   users_data: User[] = [
    {id:"1", avatar:"#", firstName: 'Alexander', lastName: "Bayoh", position: 'developer', email: "ab@exa.com", number: "0770321135", role: {administrator: true, edit: true}},
    {id:"2", avatar:"#", firstName: 'Aaron', lastName: "Mineen", position: 'developer', email: "am@exa.com", number: "0770321135", role: {administrator: true, edit: true}},
    {id:"3", avatar:"#", firstName: 'Alexander', lastName: "Bayoh", position: 'developer', email: "ab@exa.com", number: "0770321135", role: {administrator: true, edit: true}},
    {id:"4", avatar:"#", firstName: 'Aaron', lastName: "Mineen", position: 'developer', email: "am@exa.com", number: "0770321135", role: {administrator: true, edit: true}},
    {id:"5", avatar:"#", firstName: 'Alexander', lastName: "Bayoh", position: 'developer', email: "ab@exa.com", number: "0770321135", role: {administrator: true, edit: true}},
    {id:"6", avatar:"#", firstName: 'Aaron', lastName: "Mineen", position: 'developer', email: "am@exa.com", number: "0770321135", role: {administrator: true, edit: true}},
    {id:"7", avatar:"#", firstName: 'Alexander', lastName: "Bayoh", position: 'developer', email: "ab@exa.com", number: "0770321135", role: {administrator: true, edit: true}},
    {id:"8", avatar:"#", firstName: 'Aaron', lastName: "Mineen", position: 'developer', email: "am@exa.com", number: "0770321135", role: {administrator: true, edit: true}},
    {id:"9", avatar:"#", firstName: 'Alexander', lastName: "Bayoh", position: 'developer', email: "ab@exa.com", number: "0770321135", role: {administrator: true, edit: true}},
    {id:"10", avatar:"#", firstName: 'Aaron', lastName: "Mineen", position: 'developer', email: "am@exa.com", number: "0770321135", role: {administrator: true, edit: true}},
    {id:"11", avatar:"#", firstName: 'Alexander', lastName: "Bayoh", position: 'developer', email: "ab@exa.com", number: "0770321135", role: {administrator: true, edit: true}},
    {id:"12", avatar:"#", firstName: 'Aaron', lastName: "Mineen", position: 'developer', email: "am@exa.com", number: "0770321135", role: {administrator: true, edit: true}},
    {id:"13", avatar:"#", firstName: 'Alexander', lastName: "Bayoh", position: 'developer', email: "ab@exa.com", number: "0770321135", role: {administrator: true, edit: true}},
    {id:"14", avatar:"#", firstName: 'Aaron', lastName: "Mineen", position: 'developer', email: "am@exa.com", number: "0770321135", role: {administrator: true, edit: true}},
    {id:"15", avatar:"#", firstName: 'Alexander', lastName: "Bayoh", position: 'developer', email: "ab@exa.com", number: "0770321135", role: {administrator: true, edit: true}},
    {id:"16", avatar:"#", firstName: 'Aaron', lastName: "Mineen", position: 'developer', email: "am@exa.com", number: "0770321135", role: {administrator: true, edit: true}},
    {id:"17", avatar:"#", firstName: 'Alexander', lastName: "Bayoh", position: 'developer', email: "ab@exa.com", number: "0770321135", role: {administrator: true, edit: true}},
    {id:"18", avatar:"#", firstName: 'Aaron', lastName: "Mineen", position: 'developer', email: "am@exa.com", number: "0770321135", role: {administrator: true, edit: true}},
    {id:"19", avatar:"#", firstName: 'Alexander', lastName: "Bayoh", position: 'developer', email: "ab@exa.com", number: "0770321135", role: {administrator: true, edit: true}},
    {id:"20", avatar:"#", firstName: 'Aaron', lastName: "Mineen", position: 'developer', email: "am@exa.com", number: "0770321135", role: {administrator: true, edit: true}},
    {id:"21", avatar:"#", firstName: 'Alexander', lastName: "Bayoh", position: 'developer', email: "ab@exa.com", number: "0770321135", role: {administrator: true, edit: true}},
    {id:"22", avatar:"#", firstName: 'Aaron', lastName: "Mineen", position: 'developer', email: "am@exa.com", number: "0770321135", role: {administrator: true, edit: true}},
    {id:"23", avatar:"#", firstName: 'Alexander', lastName: "Bayoh", position: 'developer', email: "ab@exa.com", number: "0770321135", role: {administrator: true, edit: true}},
    {id:"24", avatar:"#", firstName: 'Aaron', lastName: "Mineen", position: 'developer', email: "am@exa.com", number: "0770321135", role: {administrator: true, edit: true}},
    {id:"25", avatar:"#", firstName: 'Alexander', lastName: "Bayoh", position: 'developer', email: "ab@exa.com", number: "0770321135", role: {administrator: true, edit: true}},
    {id:"26", avatar:"#", firstName: 'Aaron', lastName: "Mineen", position: 'developer', email: "am@exa.com", number: "0770321135", role: {administrator: true, edit: true}},
    {id:"27", avatar:"#", firstName: 'Alexander', lastName: "Bayoh", position: 'developer', email: "ab@exa.com", number: "0770321135", role: {administrator: true, edit: true}},
    {id:"28", avatar:"#", firstName: 'Aaron', lastName: "Mineen", position: 'developer', email: "am@exa.com", number: "0770321135", role: {administrator: true, edit: true}},
  ];
  constructor() { }

  ngOnInit() {
  }

}
