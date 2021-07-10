import { NgModule } from '@angular/core';

import { ProductComponent } from './product.component';
import { SharedModule } from '../shared';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ProductRoutingModule,
  ],
  declarations: [
    ProductComponent,
  ],
  providers: []
})

export class ProductModule {}
