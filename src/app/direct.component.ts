import * as ng from '@angular/core';

export class DirectComponent {
  show = true;

  static ngFactoryDef = t => {
    return new (t || DirectComponent)();
  };
  static ngComponentDef = ng.ɵɵdefineComponent({
    type: DirectComponent,
    selectors: [['app-direct']],
    consts: 3,
    vars: 1,
    template: (rf, ctx) => {
      if (rf & ng.ɵRenderFlags.Create) {
        ng.ɵɵelementContainerStart(0);
        ng.ɵɵelementStart(1, 'div');
        ng.ɵɵtext(2);
        ng.ɵɵelementEnd();
        ng.ɵɵelementContainerEnd();
      }
      if (rf & ng.ɵRenderFlags.Update) {
        ng.ɵɵadvance(2);
        if (ctx.show) {
          ng.ɵɵtextInterpolate('Hello');
        } else {
          ng.ɵɵtextInterpolate('');
        }
      }
    }
  });
}
