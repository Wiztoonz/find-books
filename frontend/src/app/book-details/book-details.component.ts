import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  public id: string;
  constructor(private activateRoute: ActivatedRoute) {
      this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
  }

}
