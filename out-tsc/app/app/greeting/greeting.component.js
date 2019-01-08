import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from '@angular/core';
import * as i0 from '@angular/core';
const _c0 = ['greeting'];
const _c1 = [1, 'greeting'];
const _c2 = ['greeting', ''];
export class GreetingComponent {
  constructor() {
    this.customEvent = new EventEmitter();
  }
  foo() {}
  ngOnInit() {}
  ngAfterViewInit() {}
  ngOnDestroy() {}
  ngOnChanges(changes) {}
}
GreetingComponent.ngComponentDef = i0.ɵdefineComponent({
  type: GreetingComponent,
  selectors: [['app-greeting']],
  factory: function GreetingComponent_Factory(t) {
    return new (t || GreetingComponent)();
  },
  inputs: { greetingName: ['name', 'greetingName'] },
  outputs: { customEvent: 'customEvent' },
  features: [i0.ɵNgOnChangesFeature],
  viewQuery: function GreetingComponent_Query(rf, ctx) {
    if (rf & 1) {
      i0.ɵquery(0, _c0, true);
    }
    if (rf & 2) {
      var _t;
      i0.ɵqueryRefresh((_t = i0.ɵload(0))) && (ctx.greetingRef = _t.first);
    }
  },
  consts: 4,
  vars: 1,
  template: function GreetingComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵelementStart(1, 'div', _c1, _c2);
      i0.ɵtext(3);
      i0.ɵelementEnd();
    }
    if (rf & 2) {
      i0.ɵtextBinding(3, i0.ɵinterpolation1('Hello ', ctx.greetingName, '!'));
    }
  },
  styles: [
    '.greeting[_ngcontent-%COMP%] {\n        font-weight: bold;\n      }'
  ]
});
/*@__PURE__*/ i0.ɵsetClassMetadata(
  GreetingComponent,
  [
    {
      type: Component,
      args: [
        {
          selector: 'app-greeting',
          template: `<div class="greeting" #greeting>Hello {{greetingName}}!</div>`,
          styles: [
            `
      .greeting {
        font-weight: bold;
      }
    `
          ]
        }
      ]
    }
  ],
  null,
  {
    greetingName: [
      {
        type: Input,
        args: ['name']
      }
    ],
    customEvent: [
      {
        type: Output
      }
    ],
    greetingRef: [
      {
        type: ViewChild,
        args: ['greeting']
      }
    ]
  }
);
//# sourceMappingURL=greeting.component.js.map
