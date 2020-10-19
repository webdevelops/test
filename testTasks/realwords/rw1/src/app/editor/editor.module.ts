import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { EditorComponent } from './editor.component';
import { EditorRoutingModule } from './editot-routing.module';
import { EditableArticleResolver } from './editable-article.resolver.service';

@NgModule({
  imports: [
    SharedModule,
    EditorRoutingModule
  ],
  declarations: [EditorComponent],
  providers: [EditableArticleResolver]
})
export class EditorModule {}