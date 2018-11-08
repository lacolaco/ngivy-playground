import { Component } from '@angular/core';
import { SomeService } from './some.service';
import * as i0 from '@angular/core';
import * as i1 from './greeting/greeting.component';
const _c0 = [1, 'name'];
export class AppComponent {
  constructor(some) {
    this.some = some;
    this.name = 'World';
  }
}
AppComponent.ngComponentDef = i0.ɵdefineComponent({
  type: AppComponent,
  selectors: [['app-root']],
  factory: function AppComponent_Factory(t) {
    return new (t || AppComponent)(i0.ɵdirectiveInject(SomeService));
  },
  consts: 2,
  vars: 1,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵEC(0);
      i0.ɵelement(1, 'app-greeting', _c0);
      i0.ɵeC();
    }
    if (rf & 2) {
      i0.ɵelementProperty(1, 'name', i0.ɵbind(ctx.name));
    }
  },
  directives: [i1.GreetingComponent]
});
/*@__PURE__*/ i0.ɵsetClassMetadata(
  AppComponent,
  [
    {
      type: Component,
      args: [
        {
          selector: 'app-root',
          templateUrl: 'app.component.html'
        }
      ]
    }
  ],
  [
    {
      type: SomeService
    }
  ],
  null
);
//# sourceMappingURL=app.component.js.map
