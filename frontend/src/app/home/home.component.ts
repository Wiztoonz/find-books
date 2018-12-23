import { Component, OnInit, OnDestroy } from '@angular/core';
import {data} from "../mock-data";
import {Router} from "@angular/router";
import { AppService } from 'src/app/services/app.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';
import { CreateBookComponent } from '../create-book/create-book.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public cards: any;
  public cards$: Subscription;
  constructor(private router: Router,
     private api: AppService,
     public dialog: MatDialog) { }

  ngOnInit() {
    this.cards = data.cards;
    // this.cards$ = this.api.getBooks().subscribe(res => {
    //   this.cards = res;
    // });
  }

  ngOnDestroy() {
    // this.cards$.unsubscribe();
  }

   details(id) {
      this.router.navigate(['book/', id]);
   }

   openCreateBook(): void {
    const dialogRef = this.dialog.open(CreateBookComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
