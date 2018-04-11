import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { AnaMainToolbarComponent } from '../ana-main-toolbar/ana-main-toolbar.component';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'ana-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px`);

  @ViewChild(AnaMainToolbarComponent) mainToolbar: AnaMainToolbarComponent;
  constructor(zone: NgZone) {

    this.mediaMatcher.addListener(mql => 
      zone.run(() => this.mediaMatcher = mql))
   }

  ngOnInit() {    
  } 
  
  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

}
