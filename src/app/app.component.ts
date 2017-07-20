import { Component, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MdMenuModule} from '@angular/material';
import { openCloseSidebar, openCloseContent, hiddenShowText } from "./app.component-animations";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [openCloseSidebar(), openCloseContent(), hiddenShowText()],
})
export class AppComponent {
  title             = 'Tour of Heroes';
  sidebarLarge      = false;
  stateSidebar      = "collapsed";
  stateContent      = "collapsed";
  sidebarButtonText = "hidden";

  handleOnOpen($e): void {
    if(this.sidebarLarge){
      this.sidebarButtonText = "hidden";
      this.sidebarLarge = false;
      this.stateSidebar = 'collapsed';
      this.stateContent = 'collapsed';
    }else{
      this.sidebarButtonText = "show";
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