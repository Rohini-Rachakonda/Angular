import { Component, OnInit } from '@angular/core';
import { StockpriceService } from '../stockprice.service';
import { Observable } from 'rxjs';
import { Stockprice } from '../stockprice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stockpricelist',
  templateUrl: './stockpricelist.component.html',
  styleUrls: ['./stockpricelist.component.css']
})
export class StockpricelistComponent implements OnInit {

  constructor(private router:Router,private stockpriceservice:StockpriceService) { }
  stockpricelist:Observable<any[]>
  ngOnInit() {
    this.stockpriceservice.getAllStockPrice().subscribe(data=>{
      this.stockpricelist=data;
    })
  }
  deleteStockPrice(stockprice:Stockprice){
    this.stockpriceservice.deleteStockPrice(stockprice.stockexchange).subscribe(data=>{
      this.stockpriceservice.getAllStockPrice().subscribe(data=>{this.stockpricelist=data;});
    });
  }
  updateStockPrice(stockprice:Stockprice)
  {
    window.localStorage.removeItem("edit-stockexchange");
    window.localStorage.setItem("edit-stockexchange", stockprice.stockexchange.toString());
    this.router.navigate(['CreateStockPrice']);
  }
}
