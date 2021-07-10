import { NgModule } from '@angular/core';

import { ImprintComponent } from './imprint.component';
import { SharedModule } from '../shared';
import { ImprintRoutingModule } from './imprint-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ImprintRoutingModule,
  ],
  declarations: [
    ImprintComponent,
  ],
  providers: []
})

export class ImprintModule {}
