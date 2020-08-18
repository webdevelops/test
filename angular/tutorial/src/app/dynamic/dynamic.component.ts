import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core'
import { ModelComponent } from '../model/model.component'
import { RefDirective } from '../model/ref.directive';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent {
  @ViewChild(RefDirective) refDir: RefDirective

  constructor(
    private resolver: ComponentFactoryResolver
  ) { }

  showModal() {
    const modalFactory = this.resolver.resolveComponentFactory(ModelComponent);
    this.refDir.containerRef.clear();

    const component = this.refDir.containerRef.createComponent(modalFactory);
    component.instance.title = "Hello from child component!";
    component.instance.close.subscribe(() => {
      this.refDir.containerRef.clear();
    })
  }

}
