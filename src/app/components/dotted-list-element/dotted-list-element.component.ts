import {Component, Input} from '@angular/core';
import {ListItem} from "../../models/ListItem";

@Component({
  selector: 'dotted-list-element',
  templateUrl: './dotted-list-element.component.html',
  styleUrls: ['./dotted-list-element.component.scss']
})
export class DottedListElementComponent {

    @Input() element: ListItem;

    constructor() {
      this.element = {
        title: "Title",
        subtitle: "Subtitle",
        description: "Description"
      }
    }
}
