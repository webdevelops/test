import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core'
import { ModelComponent } from './model/model.component'
import { RefDirective } from './model/ref.directive';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(RefDirective) refDir: RefDirective;

  constructor(
    private resolver: ComponentFactoryResolver,
    private title: Title
  ) {
    const t = title.getTitle()
    console.log(t);
    // title.setTitle('New Title');
  }

  showModal() {
    const modalFactory = this.resolver.resolveComponentFactory(ModelComponent);
    this.refDir.containerRef.clear();

    const component = this.refDir.containerRef.createComponent(modalFactory);
    component.instance.title = 'Dynemic title - 2';
    component.instance.close.subscribe(() => {
      this.refDir.containerRef.clear();
    })
  }

}