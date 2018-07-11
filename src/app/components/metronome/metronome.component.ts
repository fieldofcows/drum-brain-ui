import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Observable, timer, Subscription } from 'rxjs';

@Component({
  selector: 'metronome',
  templateUrl: './metronome.component.html',
  styleUrls: ['./metronome.component.css']
})
export class MetronomeComponent implements OnInit {
  swingLeft = true;
  timer: Observable<number> = null;
  subscription: Subscription = null;
  metronomeHeight = '128px';
  metronomeWidth = '128px';

  constructor(private host: ElementRef) { }

  ngOnInit() {
    this.timer = timer(0, 500);
  }

  ngAfterViewInit() {
    // The host element is the native component element in the parent (<fader> in this case)
    // Size the fader according to this height
    setTimeout(() => {
      this.metronomeHeight = this.host.nativeElement.offsetHeight + 'px';
      this.metronomeWidth = this.host.nativeElement.offsetWidth + 'px';
      console.log(this.metronomeHeight);
      this.toggle();
    });
  }

  getSwingTime(): string {
    return '0.5s';
  }

  toggle() {
    if (this.subscription == null) {
      this.subscription = this.timer.subscribe(t => this.swingLeft = !this.swingLeft);
    } else {
      this.subscription.unsubscribe();
      this.subscription = null;
      this.swingLeft = true;
    }
  }

}
