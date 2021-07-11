import { NgModule } from '@angular/core';

import { LicensesComponent } from './licenses.component';
import { SharedModule } from '../shared';
import { LicensesRoutingModule } from './licenses-routing.module';

@NgModule({
  imports: [
    SharedModule,
    LicensesRoutingModule,
  ],
  declarations: [
    LicensesComponent,
  ],
  providers: []
})

export class LicensesModule {}
