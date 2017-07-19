import { Component, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MdMenuModule} from '@angular/material';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger("openCloseSidebar", [
        state('collapsed', style({
          width: '90px',
        })), 
        state('expanded', style({
          width: '190px',
        })),
        transition(
          'collapsed <=> expanded', [animate(300)]
        )
    ]),
    trigger("openCloseContent", [
        state('collapsed', style({
          width: 'calc(100vw - 90px)',
        })), 
        state('expanded', style({
          width: 'calc(100vw - 190px)',
        })),
        transition(
          'collapsed <=> expanded', [animate(300)]
        )
    ])
  ]
})
export class AppComponent {
  title = 'Tour of Heroes';
  sidebarLarge = false;
  stateSidebar = "collapsed";
  stateContent = "collapsed";

  handleOnOpen($e): void {
    if(this.sidebarLarge){
      this.sidebarLarge = false;
      this.stateSidebar = 'collapsed';
      this.stateContent = 'collapsed';
    }else{
      this.sidebarLarge = true;
      this.stateSidebar = 'expanded'; 
      this.stateContent = 'expanded'; 
    }
    console.log("ola");
  }

  handleMenuOpen($e): void {
    console.log("ola");
  }
}