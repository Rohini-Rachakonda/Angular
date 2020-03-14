import { Component, OnInit } from '@angular/core';
import { StockexchangeService } from '../stockexchange.service';
import { Stockexchange } from '../stockexchange';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createstockexchange',
  templateUrl: './createstockexchange.component.html',
  styleUrls: ['./createstockexchange.component.css']
})
export class CreatestockexchangeComponent implements OnInit {
  constructor(private router:Router,private stockexchangeservice:StockexchangeService) { }
  stockexchange: Stockexchange= new Stockexchange();
  submitted = false;
  message:String="Stock Exchange";
  ngOnInit() {
    var stockexchangeid = window.localStorage.getItem("edit-id");
    if (stockexchangeid != null && stockexchangeid != "") {
      this.message = "Update Stock Exchange";
     
   this.stockexchangeservice.find(parseInt(stockexchangeid))
   .subscribe(data => {
   this.stockexchange = data;
    this.stockexchangesaveform.setValue(this.stockexchange)
    });
     }
    this.submitted=false;
  }
    stockexchangesaveform = new FormGroup({
    id: new FormControl('', [Validators.required]),
    stockexchange: new FormControl('', [Validators.required]),
    brief: new FormControl('', [Validators.required]),
    contactaddress: new FormControl('', [Validators.required]),
    remarks: new FormControl('', [Validators.required]),
  })
  saveStockExchange(savestockexchange){

    this.stockexchange=new Stockexchange();
    this.stockexchange.id=this.stockexchangesaveform.get('id').value;
    this.stockexchange.stockexchange=this.stockexchangesaveform.get('stockexchange').value;
    this.stockexchange.brief=this.stockexchangesaveform.get('brief').value;
    this.stockexchange.contactaddress=this.stockexchangesaveform.get('contactaddress').value;
    this.stockexchange.remarks=this.stockexchangesaveform.get('remarks').value;

    this.submitted=true;
    this.save();
    }
  
   save(){
     this.stockexchangeservice.saveStockExchange(this.stockexchange).subscribe(data=>console.log(data), error=>console.log(console.error()));
     this.stockexchange=new Stockexchange();
     window.localStorage.removeItem("edit-id");
     this.router.navigate(['home'])
  
   }
   stockexchangesaveForm(){
    this.submitted=false;
    this.stockexchangesaveform.reset();
  }

}
