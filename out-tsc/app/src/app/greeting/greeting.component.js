import { Component, Input } from '@angular/core';
import * as i0 from '@angular/core';
export class GreetingComponent {
  foo() {}
}
/** @nocollapse */
GreetingComponent.ctorParameters = () => [];
GreetingComponent.propDecorators = {
  name: [{ type: Input }]
};
GreetingComponent.ngComponentDef = i0.ɵdefineComponent({
  type: GreetingComponent,
  tag: 'app-greeting',
  factory: function GreetingComponent_Factory() {
    return new GreetingComponent();
  },
  template: function GreetingComponent_Template(ctx, cm) {
    if (cm) {
      i0.ɵT(0);
    }
    i0.ɵt(0, i0.ɵi1('Hello ', ctx.name, '!'));
  },
  inputs: { name: 'name' }
});
//# sourceMappingURL=greeting.component.js.map
