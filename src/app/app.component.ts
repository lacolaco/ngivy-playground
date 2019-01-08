import { Component } from '@angular/core';
import { SomeService } from './some.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  name = 'World';

  items = new Array(5).fill(null).map((_, i) => i + 1);

  constructor(private some: SomeService) {}
}
