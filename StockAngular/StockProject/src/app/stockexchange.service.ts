import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stockexchange } from './stockexchange';

@Injectable({
  providedIn: 'root'
})
export class StockexchangeService {
  private baseUrl='http://localhost:8020/StockExchange/stockexchange'
  constructor(private http:HttpClient) { }
  getAllStockExchange():Observable<any>{
    return this.http.get<any>(this.baseUrl+'/getAllStockExchange');
  }
  saveStockExchange(stockexchange:Stockexchange):Observable<Stockexchange>{
    return this.http.post<Stockexchange>(this.baseUrl+'/saveStockExchange',stockexchange);
  }
  updateStockExchange(id:number,value:Stockexchange):Observable<Stockexchange>{
    return this.http.put<Stockexchange>(this.baseUrl+'/updateStockExchange/{id}', value);
   }
   find(id:number):Observable<Stockexchange>{
    return this.http.get<Stockexchange>(this.baseUrl+'/find/'+id);
  }
   deleteStockExchange(id:number):Observable<any>{
    return this.http.delete<Stockexchange>(this.baseUrl+'/deletestockexchange/'+id);
     
   }


  
}
