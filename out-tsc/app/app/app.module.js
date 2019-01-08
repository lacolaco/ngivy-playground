import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import * as i0 from '@angular/core';
export class AppModule {}
AppModule.ngModuleDef = i0.ɵdefineNgModule({
  type: AppModule,
  bootstrap: [AppComponent],
  declarations: [AppComponent, GreetingComponent],
  imports: [BrowserModule],
  exports: []
});
AppModule.ngInjectorDef = i0.defineInjector({
  factory: function AppModule_Factory(t) {
    return new (t || AppModule)();
  },
  providers: [],
  imports: [[BrowserModule]]
});
/*@__PURE__*/ i0.ɵsetClassMetadata(
  AppModule,
  [
    {
      type: NgModule,
      args: [
        {
          declarations: [AppComponent, GreetingComponent],
          imports: [BrowserModule],
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
