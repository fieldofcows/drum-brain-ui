import { Component, OnInit, Input } from '@angular/core';
import { Channel } from '../../model/channel';

@Component({
  selector: 'mixer',
  templateUrl: './mixer.component.html',
  styleUrls: ['./mixer.component.css']
})
export class MixerComponent implements OnInit {
  /**
   * Array of channels for the mixer
   */
  @Input()
  channels: Array<Channel>;

  constructor() { }

  ngOnInit() {
  }

  onClick(channel: Channel) {
    console.log(channel);
  }

}
