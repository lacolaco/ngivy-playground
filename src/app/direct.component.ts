import * as ng from '@angular/core';
import { html, render, TemplateResult } from 'lit-html';

type LitComponent = {
  getTemplate(): TemplateResult;
};

function createLitNgComponent<T extends LitComponent>(
  ComponentType: ng.Type<T>,
  selector: string,
): ng.Type<T> {
  (ComponentType as any)['ngComponentDef'] = ng.ɵdefineComponent({
    type: ComponentType,
    selectors: [[selector]],
    factory: t => new (t || ComponentType)(),
    consts: 1,
    vars: 0,
    template: (_, ctx) => {
      render(ctx.getTemplate(), ng.ɵgetHostElement(ctx));
    },
  });
  return ComponentType;
}

export class MyComponent implements LitComponent {
  name: string;

  getTemplate() {
    return html`
      <div>${this.name}</div>
      <input
        .value=${this.name}
        @input=${event => (this.name = event.target.value)}
      />
    `;
  }
}

export default createLitNgComponent(MyComponent, 'my-component');
