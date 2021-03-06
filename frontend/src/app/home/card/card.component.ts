import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: any;
  @Output() onDetails = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  details(id) {
    this.onDetails.emit(id);
  }

}
