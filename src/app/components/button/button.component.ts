import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() text!: string;
  @Input() color!: string;
  @Output() btnClickFunction = new EventEmitter();

  onClickFunction(){
    // in order to reuse this component, 
    // we only want to emit an event, 
    // not to specify which one 
    this.btnClickFunction.emit();
  }
  
}
