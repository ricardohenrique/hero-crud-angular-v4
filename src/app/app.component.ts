import { Component, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger("openClose", [
        state('collapsed', style({
          width: '7%',
        })), 
        state('expanded', style({
          width: '15%',
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
  stateExpression = "collapsed";

  handleOnOpen($e): void {
    if(this.sidebarLarge){
      this.sidebarLarge = false;
      this.stateExpression = 'collapsed';
      // this.stateExpression = 'expanded';
    }else{
      this.sidebarLarge = true;
      // this.stateExpression = 'collapsed'; 
      this.stateExpression = 'expanded'; 
    }
    console.log("ola");
  }
}