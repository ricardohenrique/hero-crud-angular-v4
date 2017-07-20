import { Component, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MdMenuModule} from '@angular/material';
import { openCloseSidebar, openCloseContent } from "./app.component-animations";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [openCloseSidebar(), openCloseContent()],
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