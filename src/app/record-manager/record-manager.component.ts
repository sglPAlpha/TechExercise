import {Component, OnInit} from '@angular/core';
import {Record} from '../record';

@Component({
  selector: 'app-record-manager',
  templateUrl: './record-manager.component.html',
  styleUrls: ['./record-manager.component.css']
})
export class RecordManagerComponent implements OnInit {
  records = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  removeRecord(record: Record): void {
    const index = this.records.indexOf(record, 0);

    if (index > -1) {
      this.records.splice(index, 1);
    }
  }

}
