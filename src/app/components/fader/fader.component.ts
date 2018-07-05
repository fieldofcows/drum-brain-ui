import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';

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
  @Input()
  value: number = 0;

  // Height of fader calculated from parent
  faderHeight: string = "300px";

  constructor(private host: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // The host element is the native component element in the parent (<fader> in this case)
    // Size the fader according to this height
    setTimeout(() => {
      this.faderHeight = this.host.nativeElement.offsetHeight - 45 + "px";
    });
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
