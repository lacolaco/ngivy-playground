import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: 'app-greeting',
  template: `<div class="greeting">Hello {{greetingName}}!</div>`,
  styles: [
    `
      .greeting {
        font-weight: bold;
      }
    `
  ]
})
export class GreetingComponent
  implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  @Input('name') greetingName: string;

  foo() {}

  ngOnInit() {}

  ngAfterViewInit() {}

  ngOnDestroy() {}

  ngOnChanges(changes) {}
}
