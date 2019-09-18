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
GreetingComponent.ngFactoryDef = function GreetingComponent_Factory(t) {
  return new (t || GreetingComponent)();
};
GreetingComponent.ngComponentDef = i0.ɵɵdefineComponent({
  type: GreetingComponent,
  selectors: [['app-greeting']],
  viewQuery: function GreetingComponent_Query(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵstaticViewQuery(_c0, true);
    }
    if (rf & 2) {
      var _t;
      i0.ɵɵqueryRefresh((_t = i0.ɵɵloadQuery())) &&
        (ctx.greetingRef = _t.first);
    }
  },
  inputs: { greetingName: ['name', 'greetingName'] },
  outputs: { customEvent: 'customEvent' },
  features: [i0.ɵɵNgOnChangesFeature()],
  consts: 3,
  vars: 1,
  template: function GreetingComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵelementStart(0, 'div', _c1, _c2);
      i0.ɵɵtext(2);
      i0.ɵɵelementEnd();
    }
    if (rf & 2) {
      i0.ɵɵadvance(2);
      i0.ɵɵtextInterpolate1('Hello ', ctx.greetingName, '!');
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
          template: `
    <div class="greeting" #greeting>Hello {{ greetingName }}!</div>
  `,
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
        args: ['greeting', { static: true }]
      }
    ]
  }
);
//# sourceMappingURL=greeting.component.js.map
