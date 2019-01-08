import { Component } from '@angular/core';
import { DirectComponent } from './direct.component';
import { SomeService } from './some.service';
import * as i0 from '@angular/core';
import * as i1 from './greeting/greeting.component';
import * as i2 from '@angular/common';
const _c0 = [3, 'name'];
const _c1 = ['ngFor', '', 3, 'ngForOf'];
const _c2 = [3, 'ngComponentOutlet'];
function AppComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵelementContainerStart(0);
    i0.ɵelementStart(1, 'div');
    i0.ɵtext(2);
    i0.ɵelementEnd();
    i0.ɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵtextBinding(2, i0.ɵinterpolation1('', item_r1, ''));
  }
}
export class AppComponent {
  constructor(some) {
    this.some = some;
    this.name = 'World';
    this.items = new Array(5).fill(null).map((_, i) => i + 1);
    this.dynamicComponent = null;
  }
  ngOnInit() {
    this.dynamicComponent = DirectComponent;
  }
}
AppComponent.ngComponentDef = i0.ɵdefineComponent({
  type: AppComponent,
  selectors: [['app-root']],
  factory: function AppComponent_Factory(t) {
    return new (t || AppComponent)(i0.ɵdirectiveInject(SomeService));
  },
  consts: 4,
  vars: 3,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵelementContainerStart(0);
      i0.ɵelement(1, 'app-greeting', _c0);
      i0.ɵelementContainerEnd();
      i0.ɵtemplate(
        2,
        AppComponent_ng_container_2_Template,
        3,
        1,
        'ng-container',
        _c1
      );
      i0.ɵelement(3, 'div', _c2);
    }
    if (rf & 2) {
      i0.ɵelementProperty(1, 'name', i0.ɵbind(ctx.name));
      i0.ɵelementProperty(2, 'ngForOf', i0.ɵbind(ctx.items));
      i0.ɵelementProperty(
        3,
        'ngComponentOutlet',
        i0.ɵbind(ctx.dynamicComponent)
      );
    }
  },
  directives: [i1.GreetingComponent, i2.NgForOf, i2.NgComponentOutlet],
  encapsulation: 2
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
  function() {
    return [
      {
        type: SomeService
      }
    ];
  },
  null
);
//# sourceMappingURL=app.component.js.map
