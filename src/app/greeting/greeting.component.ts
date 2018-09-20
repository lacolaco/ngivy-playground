import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  AfterViewInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-greeting',
  template: `<div class="greeting" #greeting>Hello {{greetingName}}!</div>`,
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
  @Input('name')
  greetingName: string;

  @Output()
  customEvent = new EventEmitter();

  @ViewChild('greeting')
  greetingRef: ElementRef;

  foo() {}

  ngOnInit() {}

  ngAfterViewInit() {}

  ngOnDestroy() {}

  ngOnChanges(changes) {}
}
