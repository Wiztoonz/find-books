import { Component, OnInit } from '@angular/core';
import {data} from "../mock-data";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public cards = data.cards;
  constructor(private router: Router) { }

  ngOnInit() {
  }

   details($event) {
      this.router.navigate(['book/', $event]);
   }

}
