import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  EventEmitter
} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-greeting',
  template: `Hello {{greetingName}}!`
})
export class GreetingComponent implements OnChanges, OnDestroy {
  @Input('name') greetingName: string;

  foo() {}

  ngOnDestroy() {}

  ngOnChanges(changes) {}
}
