import { Component } from '@angular/core';
import { DirectComponent } from './direct.component';
import { SomeService } from './some.service';
import * as i0 from '@angular/core';
import * as i1 from './some.service';
import * as i2 from './greeting/greeting.component';
import * as i3 from '@angular/common';
const _c0 = [3, 'name'];
const _c1 = [4, 'ngFor', 'ngForOf'];
const _c2 = [3, 'ngComponentOutlet'];
function AppComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, 'div');
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r1);
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
AppComponent.ngFactoryDef = function AppComponent_Factory(t) {
  return new (t || AppComponent)(i0.ɵɵdirectiveInject(i1.SomeService));
};
AppComponent.ngComponentDef = i0.ɵɵdefineComponent({
  type: AppComponent,
  selectors: [['app-root']],
  consts: 4,
  vars: 3,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵelementContainerStart(0);
      i0.ɵɵelement(1, 'app-greeting', _c0);
      i0.ɵɵelementContainerEnd();
      i0.ɵɵtemplate(
        2,
        AppComponent_ng_container_2_Template,
        3,
        1,
        'ng-container',
        _c1
      );
      i0.ɵɵelement(3, 'div', _c2);
    }
    if (rf & 2) {
      i0.ɵɵadvance(1);
      i0.ɵɵproperty('name', ctx.name);
      i0.ɵɵadvance(1);
      i0.ɵɵproperty('ngForOf', ctx.items);
      i0.ɵɵadvance(1);
      i0.ɵɵproperty('ngComponentOutlet', ctx.dynamicComponent);
    }
  },
  directives: [i2.GreetingComponent, i3.NgForOf, i3.NgComponentOutlet],
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
    return [{ type: i1.SomeService }];
  },
  null
);
//# sourceMappingURL=app.component.js.map
