import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fader',
  templateUrl: './fader.component.html',
  styleUrls: ['./fader.component.css']
})
export class FaderComponent implements OnInit {

  // Title of fader. This also is the text that is displayed on the button
  @Input()
  name : string;

  // Event that is generated when the title is clicked
  @Output()
  clickTitle = new EventEmitter();

  // Current slider value
  value: number = 0;


  constructor() { }

  ngOnInit() {
  }

  // Event handler for when the slider value changes
  setValue(value : number) {
    this.value = 1.0 - value;
  }

  // Event handler for when the title is clicked
  onClick(button) {
    this.clickTitle.emit();
  }

}
