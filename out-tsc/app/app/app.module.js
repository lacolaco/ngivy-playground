import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import * as i0 from '@angular/core';
import * as i1 from '@angular/common';
export class AppModule {}
AppModule.ngModuleDef = i0.ɵdefineNgModule({
  type: AppModule,
  bootstrap: [AppComponent],
  declarations: [AppComponent, GreetingComponent],
  imports: [BrowserModule],
});
AppModule.ngInjectorDef = i0.defineInjector({
  factory: function AppModule_Factory(t) {
    return new (t || AppModule)();
  },
  providers: [],
  imports: [[BrowserModule]],
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
          bootstrap: [AppComponent],
        },
      ],
    },
  ],
  null,
  null,
);
i0.ɵsetComponentScope(
  GreetingComponent,
  [
    AppComponent,
    GreetingComponent,
    i1.NgClass,
    i1.NgComponentOutlet,
    i1.NgForOf,
    i1.NgIf,
    i1.NgTemplateOutlet,
    i1.NgStyle,
    i1.NgSwitch,
    i1.NgSwitchCase,
    i1.NgSwitchDefault,
    i1.NgPlural,
    i1.NgPluralCase,
  ],
  [
    i1.AsyncPipe,
    i1.UpperCasePipe,
    i1.LowerCasePipe,
    i1.JsonPipe,
    i1.SlicePipe,
    i1.DecimalPipe,
    i1.PercentPipe,
    i1.TitleCasePipe,
    i1.CurrencyPipe,
    i1.DatePipe,
    i1.I18nPluralPipe,
    i1.I18nSelectPipe,
    i1.KeyValuePipe,
  ],
);
//# sourceMappingURL=app.module.js.map
