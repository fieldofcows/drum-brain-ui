import { Component, OnInit } from '@angular/core';
import { Channel } from './model/channel';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  channels: Array<Channel> = new Array<Channel>();

  ngOnInit() {
    this.channels.push(new Channel('Bass', 0.6));
    this.channels.push(new Channel('Snare', 0.62));
    this.channels.push(new Channel('Tom 1', 0.37));
    this.channels.push(new Channel('Tom 2', 0.37));
    this.channels.push(new Channel('Tom 3', 0.43));
    this.channels.push(new Channel('Hi-Hat', 0.46));
    this.channels.push(new Channel('Crash 1', 0.7));
    this.channels.push(new Channel('Crash 2', 0.68));
    this.channels.push(new Channel('Ride', 0.72));
  }

  onClickBass() {
  }

}
