import { NgModule } from '@angular/core';

import { LogoutComponent } from './logout.component';
import { SharedModule } from '../shared';
import { LogoutRoutingModule } from './logout-routing.module';

@NgModule({
  imports: [
    SharedModule,
    LogoutRoutingModule,
  ],
  declarations: [
    LogoutComponent,
  ],
  providers: []
})

export class LogoutModule {}
