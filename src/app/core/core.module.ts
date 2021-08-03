import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ApiService,
  LocalStorageService,
  ToDoService,
} from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ApiService,
    LocalStorageService,
    ToDoService,
  ],
  declarations: []
})

export class CoreModule { }
