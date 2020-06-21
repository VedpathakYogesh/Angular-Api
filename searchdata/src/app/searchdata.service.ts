import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';    
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchdataService {
  Url: string; 
  constructor(private http : HttpClient) { 
  }
  searhhdata(model : any){  
    debugger;    
   return this.http.post<any>('https://localhost:44326/api/Searchdata/search',model);    
  }
  showdata(){  
    debugger;    
   return this.http.get<any>('https://localhost:44326/api/Searchdata/showdata');    
  }  
}
