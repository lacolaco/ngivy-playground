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
import { Component } from '@angular/core';
import * as i0 from '@angular/core';
import * as i1 from './greeting/greeting.component';
var _c0 = ['name', 'World'];
let AppComponent = class AppComponent {};
AppComponent.ngComponentDef = i0.ɵdefineComponent({
  type: AppComponent,
  selectors: [['app-root']],
  factory: function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  },
  features: [i0.ɵPublicFeature],
  consts: 2,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵEC(0);
      i0.ɵelement(1, 'app-greeting', _c0);
      i0.ɵeC();
    }
  },
  directives: [i1.GreetingComponent],
  animations: []
});
AppComponent = __decorate(
  [
    Component({
      selector: 'app-root',
      templateUrl: 'app.component.html'
    })
  ],
  AppComponent
);
export { AppComponent };
//# sourceMappingURL=app.component.js.map
