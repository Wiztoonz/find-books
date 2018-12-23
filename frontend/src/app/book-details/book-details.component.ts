import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  public id: string;
  constructor(private activateRoute: ActivatedRoute, private api: AppService) {
      this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.api.getBook(this.id).subscribe(res => console.log(res));
  }

}
