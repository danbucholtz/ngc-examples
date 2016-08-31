import { NgModule } from '@angular/core';
import { MyApp } from './app.ngfactory.ts';
import { SecondComponent } from './second-component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    MyApp,
    SecondComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [MyApp],
  entryComponents: [
    MyApp
  ]
})
export class NgModule {}
