import { Component, NgModule } from '@angular/core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Tour of Heroes';
  sidebarLarge = false;
  stateExpression = "";

  handleOnOpen($e): void {
    if(this.sidebarLarge){
      this.sidebarLarge = false;
      // this.stateExpression = 'expanded';
    }else{
      this.sidebarLarge = true;
      // this.stateExpression = 'collapsed'; 
    }

    console.log("ola");
  }
}
