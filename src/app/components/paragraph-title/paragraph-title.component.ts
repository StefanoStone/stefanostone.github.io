import {Component, Input} from '@angular/core';

@Component({
  selector: 'paragraph-title',
  templateUrl: './paragraph-title.component.html',
  styleUrls: ['./paragraph-title.component.scss']
})
export class ParagraphTitleComponent {

  @Input() content: string;

  constructor() {
    this.content = 'Default content';
  }
}
