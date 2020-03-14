import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserlistComponent } from './userlist/userlist.component';
import { CreatecompanyComponent } from './createcompany/createcompany.component';
import { CompanylistComponent } from './companylist/companylist.component';
import { CreateipoComponent } from './createipo/createipo.component';
import { IpolistComponent } from './ipolist/ipolist.component';
import { CreatesectorComponent } from './createsector/createsector.component';
import { SectorlistComponent } from './sectorlist/sectorlist.component';
import { CreatestockexchangeComponent } from './createstockexchange/createstockexchange.component';
import { StockexchangelistComponent } from './stockexchangelist/stockexchangelist.component';
import { CreatestockpriceComponent } from './createstockprice/createstockprice.component';
import { StockpricelistComponent } from './stockpricelist/stockpricelist.component';
import { UserComponent } from './user/user.component';
import {AdminComponent} from './admin/admin.component';
import { CompareCompanyComponent } from './comparecompany/comparecompany.component';
import { from } from 'rxjs';
import { HighchartsChartModule } from 'highcharts-angular';
import { HighchartsService } from './comparecompany/HighchartsService.service';
import { ImportdataComponent } from './importdata/importdata.component';






@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent,
    LoginComponent,
    UserlistComponent,
    CreatecompanyComponent,
    CompanylistComponent,
    CreateipoComponent,
    IpolistComponent,
    CreatesectorComponent,
    SectorlistComponent,
    CreatestockexchangeComponent,
    StockexchangelistComponent,
    CreatestockpriceComponent,
    StockpricelistComponent,
    UserComponent,
    AdminComponent,
    CompareCompanyComponent,
    ImportdataComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HighchartsChartModule
  ],
  providers: [HighchartsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
