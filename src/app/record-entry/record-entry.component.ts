import { Component, OnInit } from '@angular/core';
import { Record } from '../record';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-record-entry',
  templateUrl: './record-entry.component.html',
  styleUrls: ['./record-entry.component.css']
})
export class RecordEntryComponent implements OnInit {

  @Output() submitEvent = new EventEmitter();

  constructor() { }

  model = {} as Record;

  ngOnInit(): void {
  }

  onSubmit(): void {
    const currentData = Object.assign({}, this.model);
    this.submitEvent.emit(currentData);
  }

}
