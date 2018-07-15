import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Observable, timer, Subscription } from 'rxjs';

@Component({
  selector: 'pendulum',
  templateUrl: './pendulum.component.html',
  styleUrls: ['./pendulum.component.css']
})
export class PendulumComponent implements OnInit {
  swingLeft = true;
  timer: Observable<number> = null;
  subscription: Subscription = null;
  pendulumHeight = '128px';
  pendulumWidth = '128px';

  constructor(private host: ElementRef) { }

  ngOnInit() {
    this.timer = timer(0, 500);
  }

  ngAfterViewInit() {
    // The host element is the native component element in the parent (<fader> in this case)
    // Size the fader according to this height
    setTimeout(() => {
      this.pendulumHeight = this.host.nativeElement.offsetHeight + 'px';
      this.pendulumWidth = this.host.nativeElement.offsetWidth + 'px';
      console.log(this.pendulumHeight);
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
