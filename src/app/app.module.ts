import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { AboutUsModule } from './about-us/about-us.module';
import { ContactModule } from './contact/contact.module';
import { GroupModule } from './group/group.module';
import { ImprintModule } from './imprint/imprint.module';
import { LicenceModule } from './licence/licence.module';
import { LogoutRoutingModule } from './logout/logout-routing.module';
import { OrderRoutingModule } from './order/order-routing.module';
import { ProductRoutingModule } from './product/product-routing.module';
import { ProfileRoutingModule } from './profile/profile-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HomeModule,
    AuthModule,
    AboutUsModule,
    ContactModule,
    GroupModule,
    ImprintModule,
    AppRoutingModule,
    LicenceModule,
    LogoutRoutingModule,
    OrderRoutingModule,
    ProductRoutingModule,
    ProfileRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
