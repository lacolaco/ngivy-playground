import {
  Component,
  ComponentFactoryResolver,
  Injector,
  Type,
} from '@angular/core';
import DirectComponent from './direct.component';
import { SomeService } from './some.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  name = 'World';

  items = new Array(5).fill(null).map((_, i) => i + 1);

  dynamicComponent: Type<any> = null;

  constructor(private some: SomeService) {}

  ngOnInit() {
    this.dynamicComponent = DirectComponent;
  }
}
