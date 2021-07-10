import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { GroupRoutingModule } from './group-routing.module';
import { GroupComponent } from './group.component';

@NgModule({
  imports: [
    SharedModule,
    GroupRoutingModule,
  ],
  declarations: [
    GroupComponent,
  ],
  providers: []
})

export class GroupModule {}
