import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Observable } from 'rxjs';
import { Company } from '../company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companylist',
  templateUrl: './companylist.component.html',
  styleUrls: ['./companylist.component.css']
})
export class CompanylistComponent implements OnInit {
  

  constructor(private router:Router,private companyservice:CompanyService) { }
  companylist:Observable<any[]>
  ngOnInit() {
 this.companyservice.getAllcompany().subscribe(data=>{
   this.companylist=data;
 })
  }
  deleteCompany(company:Company){
    this.companyservice.deleteCompany(company.companyname).subscribe(data=>{
      this.companyservice.getAllcompany().subscribe(data=>{this.companylist=data;});
    });
  }
  updateCompany(company:Company)
  {
    window.localStorage.removeItem("edit-companyname");
    window.localStorage.setItem("edit-companyname", company.companyname.toString());
    this.router.navigate(['CreateCompany']);
  }

}
