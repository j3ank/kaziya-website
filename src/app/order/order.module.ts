import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OrderComponent } from './order.component';
import { SharedModule } from '../shared';
import { OrderRoutingModule } from './order-routing.module';

@NgModule({
  imports: [
    SharedModule,
    OrderRoutingModule,
  ],
  declarations: [
    OrderComponent,
  ],
  providers: []
})
export class OrderModule {}
