import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ipo } from './ipo';

@Injectable({
  providedIn: 'root'
})
export class IpoService {
  private baseUrl='http://localhost:8020/IPO/ipo'
    
    constructor(private http:HttpClient) { }
    getAllipo():Observable<any>{
      return this.http.get<any>(this.baseUrl+'/getAllipo');
    }
    saveIPO(ipo:Ipo):Observable<Ipo>{
      return this.http.post<Ipo>(this.baseUrl+'/saveIPO',ipo);
    }
    updateIPO(id:number,value:Ipo):Observable<Ipo>{
      return this.http.put<Ipo>(this.baseUrl+'/updateIPO/{id}',id);
     }
     find(id:number):Observable<any>{
       return this.http.get<any>(this.baseUrl+'/find/'+id);
     }
     deleteIPO(id:number):Observable<any>{
      return  this.http.delete<Ipo>(this.baseUrl+'/deleteIPO/'+id);
      }

  }
  
