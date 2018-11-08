import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import * as i0 from '@angular/core';
export class AppModule {}
AppModule.ngModuleDef = i0.ɵdefineNgModule({
  type: AppModule,
  bootstrap: [AppComponent],
  declarations: [AppComponent, GreetingComponent],
  imports: [],
  exports: []
});
AppModule.ngInjectorDef = i0.defineInjector({
  factory: function AppModule_Factory(t) {
    return new (t || AppModule)();
  },
  providers: [],
  imports: [[]]
});
/*@__PURE__*/ i0.ɵsetClassMetadata(
  AppModule,
  [
    {
      type: NgModule,
      args: [
        {
          declarations: [AppComponent, GreetingComponent],
          imports: [],
          providers: [],
          bootstrap: [AppComponent]
        }
      ]
    }
  ],
  null,
  null
);
//# sourceMappingURL=app.module.js.map
