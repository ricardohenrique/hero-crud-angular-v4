import {trigger, state, animate, style, transition} from '@angular/core';

export function openCloseSidebar(){
    return trigger("openCloseSidebar", [
        state('collapsed', style({
          width: '90px',
        })), 
        state('expanded', style({
          width: '190px',
        })),
        transition(
          'collapsed <=> expanded', [animate(300)]
        )
    ]);
}

export function openCloseContent(){
    return trigger("openCloseContent", [
        state('collapsed', style({
          width: 'calc(100vw - 90px)',
        })), 
        state('expanded', style({
          width: 'calc(100vw - 190px)',
        })),
        transition(
          'collapsed <=> expanded', [animate(300)]
        )
    ]);
}