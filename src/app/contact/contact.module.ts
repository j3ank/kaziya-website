import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';

@NgModule({
  imports: [
    SharedModule,
    ContactRoutingModule,
  ],
  declarations: [
    ContactComponent,
  ],
  providers: []
})

export class ContactModule {}
