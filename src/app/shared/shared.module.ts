import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ListErrorsComponent } from './list-errors/list-errors.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
  ],
  declarations: [ListErrorsComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    ListErrorsComponent,
  ],
})
export class SharedModule {}
