import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';


@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent
  ],
  imports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
