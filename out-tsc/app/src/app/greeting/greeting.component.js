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
import { Component, Input } from '@angular/core';
import * as i0 from '@angular/core';
var _c0 = ['greeting', 1, 'greeting', true];
let GreetingComponent = class GreetingComponent {
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
  features: [i0.ɵPublicFeature, i0.ɵNgOnChangesFeature],
  consts: 2,
  vars: 1,
  template: function GreetingComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵelementStart(0, 'div');
      i0.ɵelementStyling(_c0);
      i0.ɵtext(1);
      i0.ɵelementEnd();
    }
    if (rf & 2) {
      i0.ɵtextBinding(1, i0.ɵinterpolation1('Hello ', ctx.greetingName, '!'));
    }
  },
  styles: [
    '.greeting[_ngcontent-%COMP%] {\n        font-weight: bold;\n      }'
  ]
});
__decorate(
  [Input('name'), __metadata('design:type', String)],
  GreetingComponent.prototype,
  'greetingName',
  void 0
);
GreetingComponent = __decorate(
  [
    Component({
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
  ],
  GreetingComponent
);
export { GreetingComponent };
//# sourceMappingURL=greeting.component.js.map
