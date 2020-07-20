import {Component, Directive, Input, ViewChild} from '@angular/core';

@Directive({
  selector: 'pane'
})
export class Pane {
  @Input() id!: string;
}

// @ts-ignore
// @ts-ignore
@Component({
  selector: 'example-app',
  template: `
    <pane id="1" ></pane>
    <pane id="2" ></pane>

    <button (click)="toggle()">Toggle</button>

    <div>Selected: {{selectedPane}}</div>
  `,
})

export class ViewChildComp {
  @ViewChild(Pane)
  set pane(v: Pane) {
    setTimeout(() => {
      this.selectedPane = v.id;
    }, 0);
  }
  selectedPane: string = '';
  shouldShow = true;
  toggle() {
    this.shouldShow = !this.shouldShow;
  }
}
