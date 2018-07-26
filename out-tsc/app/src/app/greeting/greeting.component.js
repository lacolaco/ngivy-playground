import { Component, Input } from '@angular/core';
import * as i0 from '@angular/core';
var _c0 = ['class', 'greeting'];
export class GreetingComponent {
  foo() {}
  ngOnInit() {}
  ngAfterViewInit() {}
  ngOnDestroy() {}
  ngOnChanges(changes) {}
}
GreetingComponent.propDecorators = {
  greetingName: [{ type: Input, args: ['name'] }]
};
GreetingComponent.ngComponentDef = i0.ɵdefineComponent({
  type: GreetingComponent,
  selectors: [['app-greeting']],
  factory: function GreetingComponent_Factory() {
    return new GreetingComponent();
  },
  inputs: { greetingName: 'name' },
  features: [i0.ɵNgOnChangesFeature(GreetingComponent)],
  template: function GreetingComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵE(0, 'div', _c0);
      i0.ɵT(1);
      i0.ɵe();
    }
    if (rf & 2) {
      i0.ɵt(1, i0.ɵi1('Hello ', ctx.greetingName, '!'));
    }
  }
});
//# sourceMappingURL=greeting.component.js.map
