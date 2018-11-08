import { Component } from '@angular/core';
import { SomeService } from './some.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  name = "World";

  constructor(private some: SomeService) {}

}
