import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import * as fromShared from './shared';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommerceManagerComponent } from './commerce-manager/commerce-manager.component';
import { ProductListComponent } from './commerce-manager/product-list/product-list.component';
import { ProductNewComponent } from './commerce-manager/product-new/product-new.component';
import { ProductDetailsComponent } from './commerce-manager/product-details/product-details.component';
import { ProductUpdateComponent } from './commerce-manager/product-update/product-update.component';
import { TitleizePipe } from './shared/pipes/titleize.pipe';

@NgModule({
  declarations: [
    ...fromShared.declarations,
    AppComponent,
    CommerceManagerComponent,
    ProductListComponent,
    ProductNewComponent,
    ProductDetailsComponent,
    ProductUpdateComponent,
    TitleizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ...fromShared.providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
