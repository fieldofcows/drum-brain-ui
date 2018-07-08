import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
    this.timer = timer(0, 500);
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
