import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatIconModule} from "@angular/material";
import { CreateBookComponent } from '../create-book/create-book.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatIconModule
  ],
  declarations: [],
    exports: [
      BrowserAnimationsModule,
      MatCardModule,
      MatButtonModule,
      MatDialogModule,
      MatInputModule,
      FormsModule,
      MatIconModule
  ]
})
export class MaterialHelperModule { }
