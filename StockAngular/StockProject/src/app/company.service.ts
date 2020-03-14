import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './company';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  
  private baseUrl='http://localhost:8020/Company/Company'
  getCompanylist:any;

  constructor(private http:HttpClient) { }
  getAllcompany():Observable<any>{
    return this.http.get<any>(this.baseUrl+'/getAllcompany');
  }
  saveCompany(company:Company):Observable<Company>{
    return this.http.post<Company>(this.baseUrl+'/saveCompany',company);
  }
  updateCompany(companyname:String,value:Company):Observable<Company>{
    return this.http.put<Company>(this.baseUrl+'/updateCompany/{companyname}',companyname);
   }
   find(companyname:String):Observable<Company>{
    return this.http.get<Company>(this.baseUrl+'/find/'+companyname);
  }
   deleteCompany(companyname:String):Observable<any>{
   return  this.http.delete<Company>(this.baseUrl+'/deleteCompany/'+companyname);
    
   }

 
}
