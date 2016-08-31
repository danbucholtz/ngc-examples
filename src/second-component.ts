import { Component } from '@angular/core';

@Component({
  selector: 'second-component',
  template: `
    <div>Some Content Below</div>
    <div>{{someData}}</div>
  `
})
export class SecondComponent {
  public someData: string = 'Some String';
}
