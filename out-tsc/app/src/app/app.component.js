import { Component } from '@angular/core';
import * as i0 from '@angular/core';
export class AppComponent {
  constructor() {
    this.greeting = 'World';
  }
}
AppComponent.decorators = [
  {
    type: Component,
    args: [
      {
        selector: 'app-root',
        template: 'Hello {{greeting}}!'
      }
    ]
  }
];
/** @nocollapse */
AppComponent.ctorParameters = () => [];
AppComponent.ngComponentDef = i0.ɵdefineComponent({
  type: AppComponent,
  tag: 'app-root',
  factory: function AppComponent_Factory() {
    return new AppComponent();
  },
  template: function AppComponent_Template(ctx, cm) {
    if (cm) {
      i0.ɵT(0);
    }
    i0.ɵt(0, i0.ɵb1('Hello ', ctx.greeting, '!'));
  }
});
//# sourceMappingURL=app.component.js.map
