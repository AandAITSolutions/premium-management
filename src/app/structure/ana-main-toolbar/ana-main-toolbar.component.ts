import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'ana-main-toolbar',
  templateUrl: './ana-main-toolbar.component.html',
  styleUrls: ['./ana-main-toolbar.component.scss']
})
export class AnaMainToolbarComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();
  

  isOpened: boolean = true;
  constructor() { 

  }

  ngOnInit() {
  
  }

  hasChanged(){
    this.toggleSidenav.emit();    
  }

  toggleOpened(){   
    this.isOpened = !this.isOpened;    
  }


  
}
