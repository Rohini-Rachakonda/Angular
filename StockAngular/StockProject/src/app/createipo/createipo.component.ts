import { Component, OnInit } from '@angular/core';
import { IpoService } from '../ipo.service';
import { Ipo } from '../ipo';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-createipo',
  templateUrl: './createipo.component.html',
  styleUrls: ['./createipo.component.css']
})
export class CreateipoComponent implements OnInit {
  

  constructor(private router:Router,private iposervice:IpoService) { }
  ipo: Ipo= new Ipo();
  submitted = false;
  message:String="IPO";
  
  ngOnInit() {

    var ipoid = window.localStorage.getItem("edit-id");
 if (ipoid != null && ipoid != "") {

    this.message = "Update IPO";
this.iposervice.find(parseInt(ipoid))
.subscribe(data => {
this.ipo = data; this.iposaveform.setValue(this.ipo)
 });
  }
    this.submitted=false;
  }
    iposaveform = new FormGroup({
    id: new FormControl('', [Validators.required]),
    companyname: new FormControl('', [Validators.required]),
    stockexchange: new FormControl('', [Validators.required]),
    pricepershare: new FormControl('', [Validators.required]),
    numofshares: new FormControl('', [Validators.required]),
    openDateTime: new FormControl('', [Validators.required]),
    remarks: new FormControl('', [Validators.required])
  })
  saveIPO(saveipo){

    this.ipo=new Ipo();
    this.ipo.id=this.iposaveform.get('id').value;
    this.ipo.companyname=this.iposaveform.get('companyname').value;
    this.ipo.stockexchange=this.iposaveform.get('stockexchange').value;
    this.ipo.pricepershare=this.iposaveform.get('pricepershare').value;
    this.ipo.numofshares=this.iposaveform.get('numofshares').value;
    this.ipo.openDateTime=this.iposaveform.get('openDateTime').value;
    this.ipo.remarks=this.iposaveform.get('remarks').value;
    this.submitted=true;
    this.save();
    }
  
   save(){
     this.iposervice.saveIPO(this.ipo).subscribe(data=>console.log(data), error=>console.log(error));
     this.ipo=new Ipo();
     window.localStorage.removeItem("edit-id");
     this.router.navigate(['home'])
  
   }
   iposaveForm(){
     this.submitted=false;
     this.iposaveform.reset();
   }

}
