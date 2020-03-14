import { Component, OnInit } from '@angular/core';
import { SectorsService } from '../sectors.service';
import { Sectors } from '../sectors';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createsector',
  templateUrl: './createsector.component.html',
  styleUrls: ['./createsector.component.css']
})
export class CreatesectorComponent implements OnInit {

  constructor(private router:Router,private sectorsservice:SectorsService) { }
  sectors: Sectors= new Sectors();
  submitted = false;
  message:String="Sector";
 
  ngOnInit() {
    var sectorid = window.localStorage.getItem("edit-id");
    if (sectorid != null && sectorid != "") {
   
       this.message = "Update Sector";
   this.sectorsservice.find(parseInt(sectorid))
   .subscribe(data => {
   this.sectors= data;
    this.sectorsaveform.setValue(this.sectors)
    });
     }
    this.submitted=false;
  }
    sectorsaveform = new FormGroup({
    id: new FormControl('', [Validators.required]),
    sectorname: new FormControl('', [Validators.required]),
    brief: new FormControl('', [Validators.required]),
    
  })
  saveSectors(savesectors){

    this.sectors=new Sectors();
    this.sectors.id=this.sectorsaveform.get('id').value;
    this.sectors.sectorname=this.sectorsaveform.get('sectorname').value;
    this.sectors.brief=this.sectorsaveform.get('brief').value;
    this.submitted=true;
    this.save();
    }
  
   save(){
     this.sectorsservice.saveSectors(this.sectors).subscribe(data=>console.log(data), error=>console.log(console.error()));
     this.sectors=new Sectors();
     window.localStorage.removeItem("edit-id");
     this.router.navigate(['home'])
  
  
   }
   sectorsaveForm(){
    this.submitted=false;
    this.sectorsaveform.reset();
  }



 
}
