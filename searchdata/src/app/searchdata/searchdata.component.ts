import { Component, OnInit } from '@angular/core';
import { SearchdataService } from '../searchdata.service';

@Component({
  selector: 'app-searchdata',
  templateUrl: './searchdata.component.html',
  styleUrls: ['./searchdata.component.css']
})
export class SearchdataComponent implements OnInit {

  constructor(private searchdataService:SearchdataService) { }
  model : any={};    
  emp:any;  

  ngOnInit(): void {
    this.showdata();
  }
  showdata()
  {
    this.searchdataService.showdata().subscribe((res:any)=> {
      this.emp=res;
      console.log(this.emp);
    })
  }
  searchdata() {  
    debugger;  
     this.searchdataService.searhhdata(this.model).subscribe((res: any) => {  
             
         this.emp=res;   
         console.log(this.emp);   
     })  
   }  

}
