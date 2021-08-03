import { NgModule } from '@angular/core';

import { ToDoComponent } from './to-do.component';
import { SharedModule } from '../shared';
import { ToDoRoutingModule } from './to-do-routing.module';
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoFormComponent } from './to-do-form/to-do-form.component';

@NgModule({
  imports: [
    SharedModule,
    ToDoRoutingModule,
    MatChipsModule,
    MatIconModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatButtonModule,
  ],
  declarations: [
    ToDoComponent,
    ToDoListComponent,
    ToDoFormComponent,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'de-DE' }]

})

export class ToDoModule {}
