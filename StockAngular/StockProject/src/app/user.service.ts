import { Injectable, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs'; 
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private baseUrl='http://localhost:8020/User/UserPortal'
  getUserlist: any;
  constructor(private http:HttpClient) { }
  getAllusers():Observable<any>{
    return this.http.get<any>(this.baseUrl+'/getAllusers');
  }
  saveUser(user:User):Observable<User>{
    return this.http.post<User>(this.baseUrl+'/saveUser',user);

  }
  updateUser(id:number,value:User):Observable<User>{
    return this.http.put<User>(this.baseUrl+'/updateUser/{id}',id);
  }
   deleteUser(id:number):Observable<any>{
    return this.http.delete<User>(this.baseUrl+'/deleteUser/'+id);
     
   }
   find(id:number):Observable<User>{

    return this.http.get<User>(this.baseUrl+'/find/'+id);
  
   }
   findByUsernameAndPassword(username:String, password:String):Observable<User>{

    return this.http.get<User>(this.baseUrl+'/findByUsernameAndPassword/'+username+'/'+password);
  
   }
   uploadFile( file: File , id : number ) : Observable<any>  
   {  
     let url = this.baseUrl + "uploadImage/" + id ;  
   
     const formdata: FormData = new FormData();  
     
     formdata.append('file', file);  
    
     return this.http.post(url , formdata);  
   }  
 
}
