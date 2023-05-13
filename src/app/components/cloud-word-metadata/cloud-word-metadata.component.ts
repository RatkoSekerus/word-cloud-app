import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cloud-word-metadata',
  templateUrl: './cloud-word-metadata.component.html',
  styleUrls: ['./cloud-word-metadata.component.scss']
})
export class CloudWordMetadataComponent {
  private _topic:any = {};

  get isEmptyTopic(): boolean {
    return Object.keys(this.topic).length === 0;
  }

  @Input()
  set topic(value) {
    this._topic = value;
  }

  get topic() {
    return this._topic;
  }
  
}