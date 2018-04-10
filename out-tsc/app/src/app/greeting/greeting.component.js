import { Component, Input } from '@angular/core';
import * as i0 from '@angular/core';
export class GreetingComponent {
  foo() {}
  ngOnDestroy() {}
  ngOnChanges(changes) {}
}
/** @nocollapse */
GreetingComponent.propDecorators = {
  greetingName: [{ type: Input, args: ['name'] }]
};
GreetingComponent.ngComponentDef = i0.ɵdefineComponent({
  type: GreetingComponent,
  selectors: [['app-greeting']],
  factory: function GreetingComponent_Factory() {
    return new GreetingComponent();
  },
  template: function GreetingComponent_Template(ctx, cm) {
    if (cm) {
      i0.ɵT(0);
    }
    i0.ɵt(0, i0.ɵi1('Hello ', ctx.greetingName, '!'));
  },
  inputs: { greetingName: 'name' },
  features: [i0.ɵNgOnChangesFeature(GreetingComponent)]
});
//# sourceMappingURL=greeting.component.js.map
