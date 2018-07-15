import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PendulumComponent } from './pendulum/pendulum.component';
import { ClickComponent } from './click/click.component';

@NgModule({
  declarations: [
    PendulumComponent,
    ClickComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PendulumComponent,
    ClickComponent
  ],
  providers: []
})
export class MetronomeModule { }
