import { NgModule }                  from '@angular/core';
import { CommonModule }              from '@angular/common';
import { SidenavComponent } from './sidenav.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        SidenavComponent, 
    ],
    declarations: [
        SidenavComponent, 
    ]
})
export class SidenavModule { }