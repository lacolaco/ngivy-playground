import { Component } from '@angular/core';
import * as i0 from '@angular/core';
var AppComponent = /** @class */ (function() {
  function AppComponent() {
    this.greeting = 'World';
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
  AppComponent.ctorParameters = function() {
    return [];
  };
  AppComponent.ngComponentDef = i0.ɵdefineComponent({
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
  return AppComponent;
})();
export { AppComponent };
//# sourceMappingURL=app.component.js.map
