import * as ng from '@angular/core';
export class DirectComponent {
  constructor() {
    this.show = true;
  }
}
DirectComponent.ngFactoryDef = t => {
  return new (t || DirectComponent)();
};
DirectComponent.ngComponentDef = ng.ɵɵdefineComponent({
  type: DirectComponent,
  selectors: [['app-direct']],
  consts: 3,
  vars: 1,
  template: (rf, ctx) => {
    if (rf & 1 /* Create */) {
      ng.ɵɵelementContainerStart(0);
      ng.ɵɵelementStart(1, 'div');
      ng.ɵɵtext(2);
      ng.ɵɵelementEnd();
      ng.ɵɵelementContainerEnd();
    }
    if (rf & 2 /* Update */) {
      ng.ɵɵadvance(2);
      if (ctx.show) {
        ng.ɵɵtextInterpolate('Hello');
      } else {
        ng.ɵɵtextInterpolate('');
      }
    }
  }
});
//# sourceMappingURL=direct.component.js.map
