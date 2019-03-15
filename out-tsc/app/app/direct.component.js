import * as ng from '@angular/core';
export class DirectComponent {
  constructor() {
    this.show = true;
  }
}
DirectComponent.ngComponentDef = ng.ɵdefineComponent({
  type: DirectComponent,
  selectors: [['app-direct']],
  factory: t => new (t || DirectComponent)(),
  consts: 3,
  vars: 0,
  template: (rf, ctx) => {
    if (rf & 1 /* Create */) {
      ng.ɵelementContainerStart(0);
      ng.ɵelementStart(1, 'div');
      ng.ɵtext(2);
      ng.ɵelementEnd();
      ng.ɵelementContainerEnd();
    }
    if (rf & 2 /* Update */) {
      if (ctx.show) {
        ng.ɵtextBinding(2, 'Hello');
      } else {
        ng.ɵtextBinding(2, '');
      }
    }
  },
});
//# sourceMappingURL=direct.component.js.map
