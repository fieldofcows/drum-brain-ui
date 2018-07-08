import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FaderComponent } from './components/fader/fader.component';
import { MixerComponent } from './components/mixer/mixer.component';
import { MetronomeComponent } from './components/metronome/metronome.component';

@NgModule({
  declarations: [
    AppComponent,
    FaderComponent,
    MixerComponent,
    MetronomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
