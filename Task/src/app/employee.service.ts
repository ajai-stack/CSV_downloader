import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiURL="http://localhost:3400"
  constructor(private http:HttpClient) { }

  
  postdata(data:any){
    const headers= {headers:new HttpHeaders ({"content-type":"application/json"})}
return this.http.post<any>(this.apiURL+'/api/register/create',data,headers)
  }

  getregister(){
    const headers={headers:new HttpHeaders({"content-type":"application/json"})}
    return this.http.get<any>(this.apiURL+'/api/register/retrieve',headers)
  }
}
