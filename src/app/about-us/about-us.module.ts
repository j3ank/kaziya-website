import { NgModule } from '@angular/core';

import { AboutUsComponent } from './about-us.component';
import { SharedModule } from '../shared';
import { AboutUsRoutingModule } from './about-us-routing.module';

@NgModule({
  imports: [
    SharedModule,
    AboutUsRoutingModule,
  ],
  declarations: [
    AboutUsComponent,
  ],
  providers: []
})

export class AboutUsModule {}
