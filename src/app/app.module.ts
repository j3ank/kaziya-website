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
import { LicensesModule } from './licenses/licenses.module';
import { LogoutRoutingModule } from './logout/logout-routing.module';
import { OrderRoutingModule } from './order/order-routing.module';
import { ProductRoutingModule } from './product/product-routing.module';
import { ProfileRoutingModule } from './profile/profile-routing.module';
import { FooterComponent, HeaderComponent } from './shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToDoModule } from "./to-do/to-do.module";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
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
    LicensesModule,
    LogoutRoutingModule,
    OrderRoutingModule,
    ProductRoutingModule,
    ProfileRoutingModule,
    ToDoModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
