import { Component, OnInit } from '@angular/core';
import { SectorsService } from '../sectors.service';
import { Observable } from 'rxjs';
import { Sectors } from '../sectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sectorlist',
  templateUrl: './sectorlist.component.html',
  styleUrls: ['./sectorlist.component.css']
})
export class SectorlistComponent implements OnInit {

  constructor(private router:Router,private sectorservice:SectorsService) { }
  sectorlist:Observable<any[]>
  ngOnInit() {
    this.sectorservice.getAllsectors().subscribe(data=>{
      this.sectorlist=data;
    })
  }
  deleteSectors(sectors:Sectors){
    this.sectorservice.deleteSectors(sectors.id).subscribe(data=>{
      this.sectorservice.getAllsectors().subscribe(data=>{this.sectorlist=data;});
    });
  }
    updateSectors(sectors:Sectors)
    {
      window.localStorage.removeItem("edit-id");
      window.localStorage.setItem("edit-id", sectors.id.toString());
      this.router.navigate(['CreateSector']);
    }
  }



