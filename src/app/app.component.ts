import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 'Hello {{greeting}}!',
})
export class AppComponent {
  greeting = 'World';
}
