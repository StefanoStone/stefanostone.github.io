import { Component } from '@angular/core';
import {DottedListElementComponent} from "../dotted-list-element/dotted-list-element.component";

@Component({
  selector: 'paper-list-element',
  templateUrl: './paper-list-element.component.html',
  styleUrls: ['./paper-list-element.component.scss']
})
export class PaperListElementComponent extends DottedListElementComponent {

  getFilePath(): string {
    return this.element.pdf_path || this.element.local_path || '';
  }
}
