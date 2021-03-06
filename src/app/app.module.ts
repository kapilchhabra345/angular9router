import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ActivateGuard } from './activate.guard';
import { UserService } from './user.service';
import { HomeComponent } from './home/home.component';
import { Approutes } from './Routing';
import { MerchantComponent } from './merchant/merchant.component';
import { DeactivateGuard } from './deactivate.guard';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    MerchantComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Approutes)
  ],
  providers: [ActivateGuard,UserService,DeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
