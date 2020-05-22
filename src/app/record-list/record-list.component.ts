import {Component, Input, OnInit} from '@angular/core';
import {Record} from '../record';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {

  @Input() records: Record[];

  @Output() removeEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
