import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stockprice } from './stockprice';

@Injectable({
  providedIn: 'root'
})
export class StockpriceService {

  private baseUrl='http://localhost:8020/StockPrice/stockprice'
    
  constructor(private http:HttpClient) { }
  getAllStockPrice():Observable<any>{
    return this.http.get<any>(this.baseUrl+'/getAllStockPrice');
  }
  saveStockPrice(stockprice:Stockprice):Observable<Stockprice>{
    return this.http.post<Stockprice>(this.baseUrl+'/saveStockPrice',stockprice);
  }
  updateStockPrice(stockexchange:String,value:Stockprice):Observable<Stockprice>{
    return this.http.put<Stockprice>(this.baseUrl+'/updateStockPrice/{stockexchange}',stockexchange);
   }

  find(stockexchange:String):Observable<Stockprice>{
    return this.http.get<Stockprice>(this.baseUrl+'/find/'+stockexchange);
  }

   deleteStockPrice(stockexchange:String):Observable<any>{
    return this.http.delete<Stockprice>(this.baseUrl+'/deletestockprice/'+stockexchange);
        }
        getmultiplelinechart(): Observable<any> {

          return this.http.get(`${this.baseUrl}`+'/multiplelinechart');
        
         }
        
         uploadFile(file: File, stockexchange: String): Observable<any> {
        
          let url = this.baseUrl + "uploadfile/" + stockexchange;
        
          const formdata: FormData = new FormData();
        
          formdata.append('file', file);
        
          return this.http.post(url, formdata);
        
        
        
         }
}
