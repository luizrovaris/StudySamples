import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TruncateModule } from 'ng2-truncate';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterUserComponent } from './user/register/register.user.component';
import { RouteGuards } from './authorization/route.guards';
import { UserService } from './services/user/user.service';
import { ProductService } from './services/product/product.service';
import { ProductSearchComponent } from './product/search/product.search.component';
import { StoreSearchComponent } from './store/search/store.search.component';
import { StoreProductComponent } from './store/product/store.product.component';
import { StorePurchaseComponent } from './store/purchase/store.purchase.component';
import { PurchaseOrderService } from './services/purchase-order/purchase-order.service';
import { StorePurchaseCompletedComponent } from './store/purchase/completed/store.purchase.completed.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ProductComponent,
    LoginComponent,
    RegisterUserComponent,
    ProductSearchComponent,
    StoreSearchComponent,
    StoreProductComponent,
    StorePurchaseComponent,
    StorePurchaseCompletedComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    TruncateModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'product', component: ProductComponent, canActivate: [RouteGuards]},
      { path: 'login', component: LoginComponent },
      { path: 'register-user', component: RegisterUserComponent },
      { path: 'product-search', component: ProductSearchComponent, canActivate: [RouteGuards] },
      { path: 'store-product', component: StoreProductComponent },
      { path: 'store-purchase', component: StorePurchaseComponent, canActivate: [RouteGuards] },
      { path: 'purchase-completed', component: StorePurchaseCompletedComponent, canActivate: [RouteGuards]}
    ])
  ],
  providers: [UserService, ProductService, PurchaseOrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
