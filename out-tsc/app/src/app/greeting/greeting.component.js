var __decorate =
  (this && this.__decorate) ||
  function(decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function(k, v) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
      return Reflect.metadata(k, v);
  };
import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from '@angular/core';
import * as i0 from '@angular/core';
var _c0 = ['greeting', ''];
var _c1 = ['greeting', 1, 'greeting', true];
let GreetingComponent = class GreetingComponent {
  constructor() {
    this.customEvent = new EventEmitter();
  }
  foo() {}
  ngOnInit() {}
  ngAfterViewInit() {}
  ngOnDestroy() {}
  ngOnChanges(changes) {}
};
GreetingComponent.ngComponentDef = i0.ɵdefineComponent({
  type: GreetingComponent,
  selectors: [['app-greeting']],
  factory: function GreetingComponent_Factory(t) {
    return new (t || GreetingComponent)();
  },
  inputs: { greetingName: 'name' },
  outputs: { customEvent: 'customEvent' },
  features: [i0.ɵPublicFeature, i0.ɵNgOnChangesFeature],
  viewQuery: function GreetingComponent_Query(rf, ctx) {
    if (rf & 1) {
      i0.ɵquery(0, ['greeting'], true);
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
      i0.ɵelementStart(1, 'div', null, _c0);
      i0.ɵelementStyling(_c1);
      i0.ɵtext(3);
      i0.ɵelementEnd();
    }
    if (rf & 2) {
      i0.ɵtextBinding(3, i0.ɵinterpolation1('Hello ', ctx.greetingName, '!'));
    }
  },
  styles: [
    '.greeting[_ngcontent-%COMP%] {\n        font-weight: bold;\n      }'
  ],
  animations: []
});
__decorate(
  [Input('name'), __metadata('design:type', String)],
  GreetingComponent.prototype,
  'greetingName',
  void 0
);
__decorate(
  [Output(), __metadata('design:type', Object)],
  GreetingComponent.prototype,
  'customEvent',
  void 0
);
__decorate(
  [ViewChild('greeting'), __metadata('design:type', ElementRef)],
  GreetingComponent.prototype,
  'greetingRef',
  void 0
);
GreetingComponent = __decorate(
  [
    Component({
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
  ],
  GreetingComponent
);
export { GreetingComponent };
//# sourceMappingURL=greeting.component.js.map
