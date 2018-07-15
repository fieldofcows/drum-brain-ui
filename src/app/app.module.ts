import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FaderComponent } from './components/fader/fader.component';
import { MixerComponent } from './components/mixer/mixer.component';
import { MetronomeModule } from './metronome/metronome.module';

@NgModule({
  declarations: [
    AppComponent,
    FaderComponent,
    MixerComponent
  ],
  imports: [
    BrowserModule,
    MetronomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
