import { Injectable } from '@angular/core';
import * as i0 from '@angular/core';
export class SomeService {
  constructor() {}
}
SomeService.ngInjectableDef = i0.defineInjectable({
  token: SomeService,
  factory: function SomeService_Factory(t) {
    return new (t || SomeService)();
  },
  providedIn: 'root'
});
/*@__PURE__*/ i0.ɵsetClassMetadata(
  SomeService,
  [
    {
      type: Injectable,
      args: [
        {
          providedIn: 'root'
        }
      ]
    }
  ],
  [],
  null
);
//# sourceMappingURL=some.service.js.map
