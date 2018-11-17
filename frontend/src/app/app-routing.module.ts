import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {BookDetailsComponent} from "./book-details/book-details.component";

const routes: Routes = [
 { path: '', component: HomeComponent, pathMatch: 'full' },
 { path: 'book/:id', component: BookDetailsComponent, pathMatch: 'full' },
 { path: '**', component: HomeComponent }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
