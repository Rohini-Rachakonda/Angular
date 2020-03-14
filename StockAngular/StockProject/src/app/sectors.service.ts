import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sectors } from './sectors';

@Injectable({
  providedIn: 'root'
})
export class SectorsService {
  private baseUrl='http://localhost:8020/Sector/sectors'
  constructor(private http:HttpClient) { }
  getAllsectors():Observable<any>{
    return this.http.get<any>(this.baseUrl+'/getAllsectors');
  }
  saveSectors(sectors:Sectors):Observable<Sectors>{
    return this.http.post<Sectors>(this.baseUrl+'/saveSectors',sectors);
  }
  updateSectors(id:number,value:Sectors):Observable<Sectors>{
    return this.http.put<Sectors>(this.baseUrl+'/updateSectors/{id}',id);
   }
   find(id:number):Observable<Sectors>{
    return this.http.get<Sectors>(this.baseUrl+'/find/'+id);
  }
   deleteSectors(id:number){
    return this.http.delete<Sectors>(this.baseUrl+'/deleteSectors/'+id);
   }

}
