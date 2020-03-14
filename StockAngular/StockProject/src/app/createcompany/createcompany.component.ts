import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../company';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createcompany',
  templateUrl: './createcompany.component.html',
  styleUrls: ['./createcompany.component.css']
})
export class CreatecompanyComponent implements OnInit {

  constructor(private router:Router,private companyservice: CompanyService) { }
  company: Company = new Company();
  submitted = false;
  message:String="Create Company";
 
  ngOnInit() {
    var companyname = window.localStorage.getItem("edit-companyname");
 if (companyname != null && companyname != "") {

    this.message = "Update Company Details";
this.companyservice.find(companyname)
.subscribe(data => {
this.company = data;
 this.companysaveform.setValue(this.company)
 });
  }
    this.submitted = false;
  }
  companysaveform = new FormGroup({
    companyname: new FormControl('', [Validators.required]),
    turnover: new FormControl('', [Validators.required]),
    ceo: new FormControl('', [Validators.required]),
    boardofdirectors: new FormControl('', [Validators.required]),
    listedinstockexchange: new FormControl('', [Validators.required]),
    sector: new FormControl('', [Validators.required]),
    brief: new FormControl('', [Validators.required]),
    stockcode: new FormControl('', [Validators.required])
  })
  saveCompany(savecompany){

    this.company=new Company();
    this.company.companyname=this.companysaveform.get('companyname').value;
    this.company.turnover=this.companysaveform.get('turnover').value;
    this.company.ceo=this.companysaveform.get('ceo').value;
    this.company.boardofdirectors=this.companysaveform.get('boardofdirectors').value;
    this.company.listedinstockexchange=this.companysaveform.get('listedinstockexchange').value;
    this.company.sector=this.companysaveform.get('sector').value;
    this.company.brief=this.companysaveform.get('brief').value;
    this.company.stockcode=this.companysaveform.get('stockcode').value;
    this.submitted=true;
    this.save();
    }
  
   save(){
     this.companyservice.saveCompany(this.company).subscribe(data=>console.log(data), error=>console.log(console.error()));
     this.company=new Company();
     window.localStorage.removeItem("edit-companyname");
     this.router.navigate(['home'])
   }
   companysaveForm(){
    this.submitted=false;
    this.companysaveform.reset();
   }
}
