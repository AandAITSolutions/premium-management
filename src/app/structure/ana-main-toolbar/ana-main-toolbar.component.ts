import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'ana-main-toolbar',
  templateUrl: './ana-main-toolbar.component.html',
  styleUrls: ['./ana-main-toolbar.component.scss']
})
export class AnaMainToolbarComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();
  

  isOpened: boolean = false;
  constructor() { 

  }

  ngOnInit() {
  
  }

  toggleOpen(){
    this.toggleSidenav.emit();   
    this.isOpened = !this.isOpened;
  }


  
}
