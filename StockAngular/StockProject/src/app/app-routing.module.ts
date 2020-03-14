import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
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
import { ImportdataComponent } from './importdata/importdata.component';




const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"Registration",component:RegistrationComponent},
  {path:"Login",component:LoginComponent},
  {path:"UserList",component:UserlistComponent},
  {path:"CreateCompany",component:CreatecompanyComponent},
  {path:"CompanyList",component:CompanylistComponent},
  {path:"CreateIPO",component:CreateipoComponent},
  {path:"IpoList",component:IpolistComponent},
  {path:"CreateSector",component:CreatesectorComponent},
  {path:"SectorList",component:SectorlistComponent},
  {path:"CreateStockExchange",component:CreatestockexchangeComponent},
  {path:"StockExchangeList",component:StockexchangelistComponent},
  {path:"CreateStockPrice",component:CreatestockpriceComponent},
  {path:"StockPriceList",component:StockpricelistComponent},
  {path:"Admin",component:AdminComponent},
  {path:"User",component:UserComponent},
  {path:"Comparecompany",component:CompareCompanyComponent},
  {path:"ImportData",component:ImportdataComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
