import { Component } from '@angular/core';
import * as i0 from '@angular/core';
import * as i1 from './greeting/greeting.component';
var _c0 = ['name', 'World'];
export class AppComponent {}
AppComponent.ngComponentDef = i0.ɵdefineComponent({
  type: AppComponent,
  selectors: [['app-root']],
  factory: function AppComponent_Factory() {
    return new AppComponent();
  },
  template: function AppComponent_Template(ctx, cm) {
    if (cm) {
      i0.ɵE(0, 'app-greeting', _c0);
      i0.ɵe();
    }
    i0.ɵp(0, 'name', i0.ɵb('World'));
  },
  directives: [i1.GreetingComponent]
});
//# sourceMappingURL=app.component.js.map
