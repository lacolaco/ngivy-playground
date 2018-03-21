import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  template: `Hello {{name}}!`
})
export class GreetingComponent {
  @Input() name: string;

  foo() {}
}
