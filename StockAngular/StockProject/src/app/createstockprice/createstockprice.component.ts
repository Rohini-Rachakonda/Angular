import { Component, OnInit } from '@angular/core';
import { StockpriceService } from '../stockprice.service';
import { Stockprice } from '../stockprice';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createstockprice',
  templateUrl: './createstockprice.component.html',
  styleUrls: ['./createstockprice.component.css']
})
export class CreatestockpriceComponent implements OnInit {
  selectedFiles: any;

  constructor(private router:Router,private stockpriceservice:StockpriceService) { }
  stockprice: Stockprice= new Stockprice();
  submitted = false;
  message:String="Stock Price";
  ngOnInit() {
    var stockexchange = window.localStorage.getItem("edit-stockexchange");
    if (stockexchange != null && stockexchange != "") {
   
   this.message = "Update StockPrice";
   this.stockpriceservice.find(stockexchange)
   .subscribe(data => {
   this.stockprice = data; this.stockpricesaveform.setValue(this.stockprice)
    });
     
    this.submitted=false;
  }
}
selectFile(event) {

  const file = event.target.files.item(0);

  if (file.type.match('image.*')) {

   var size = event.target.files[0].size;

   if(size > 1000000)

   {

     alert("size must not exceeds 1 MB");

     this.stockpricesaveform.get('profileImage').setValue("");

   }

   else

   {

    this.selectedFiles = event.target.files;

   }

  } else {

   alert('invalid format!');

  }

 }



    stockpricesaveform = new FormGroup({
    companycode: new FormControl('', [Validators.required]),
    stockexchange: new FormControl('', [Validators.required]),
    currentprice: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    time:new FormControl('', [Validators.required]),
    uploadfile:new FormControl('', [Validators.required]),
   }) ;
  saveStockPrice(savestockprice1){

    this.stockprice=new Stockprice();
    this.stockprice.companycode=this.stockpricesaveform.get('companycode').value;
    this.stockprice.stockexchange=this.stockpricesaveform.get('stockexchange').value;
    this.stockprice.currentprice=this.stockpricesaveform.get('currentprice').value;
    this.stockprice.date=this.stockpricesaveform.get('date').value;
    this.stockprice.time=this.stockpricesaveform.get('time').value;
    this.stockprice.uploadfile=this.stockpricesaveform.get('uploadfile').value;
    this.submitted=true;
    this.save();
    }
  
   save(){
     this.stockpriceservice.saveStockPrice(this.stockprice).subscribe(data=>console.log(data), error=>console.log(console.error()));
     this.stockprice=new Stockprice();
     window.localStorage.removeItem("edit-stockexchange");
     this.router.navigate(['home'])
  }
   sectorsaveForm(){
    this.submitted=false;
    this.stockpricesaveform.reset();
   }

 
}
