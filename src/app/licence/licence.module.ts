import { NgModule } from '@angular/core';

import { LicenceComponent } from './licence.component';
import { SharedModule } from '../shared';
import { LicenceRoutingModule } from './licence-routing.module';

@NgModule({
  imports: [
    SharedModule,
    LicenceRoutingModule,
  ],
  declarations: [
    LicenceComponent,
  ],
  providers: []
})

export class LicenceModule {}
