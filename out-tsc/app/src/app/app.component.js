import { Component } from '@angular/core';
import * as i0 from '@angular/core';
import * as i1 from './greeting/greeting.component';
var _c0 = ['name', 'World'];
export class AppComponent {}
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
      i0.ɵE(0, i1.GreetingComponent, _c0);
      i0.ɵe();
    }
    i0.ɵp(0, 'name', i0.ɵb('World'));
    i1.GreetingComponent.ngComponentDef.h(1, 0);
    i0.ɵr(1, 0);
  }
});
//# sourceMappingURL=app.component.js.map
