import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  selectedFiles: FileList;

  constructor(private router:Router,private userservice:UserService) { }
  user:User=new User();
  submitted=false;
  message:String="Registration";
 
  ngOnInit() {
    var userid = window.localStorage.getItem("edit-id");
    if (userid != null && userid != "") {
   
       this.message = "Update";
   this.userservice.find(parseInt(userid))
   .subscribe(data => {
   this.user = data; this.usersaveform.setValue(this.user)
    });
     }
    this.submitted=false;
  
  }
  selectFile(event) {

    const file = event.target.files.item(0);
  
    if (file.type.match('image.*')) {
  
     var size = event.target.files[0].size;
  
     if(size > 1000000)
  
     {
  
       alert("size must not exceeds 1 MB");
  
       this.usersaveform.get('profileImage').setValue("");
  
     }
  
     else
  
     {
  
      this.selectedFiles = event.target.files;
  
     }
  
    } else {
  
     alert('invalid format!');
  
    }
  
   }
  
  
  usersaveform=new FormGroup({

    id:new FormControl('',[Validators.required]),
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
   usertype:new FormControl(),
    email:new FormControl('',[Validators.required, Validators.email]),
    mobilenumber:new FormControl('',[Validators.required,  Validators.minLength(10),Validators.maxLength(10),]),
   confirmed:new FormControl(),
   profileImage:new FormControl()
  
   })
   saveUser(saveUser){
  
  
    this.user=new User();
    this.user.id=this.usersaveform.get('id').value;
    console.log(this.user.id)
    this.user.username=this.usersaveform.get('username').value;
    this.user.password=this.usersaveform.get('password').value;
    this.user.usertype='user';
    this.user.email=this.usersaveform.get('email').value;
    this.user.mobilenumber=this.usersaveform.get('mobilenumber').value;
    this.user.confirmed='no';
    this.user.profileImage=this.usersaveform.get('profileImage').value;
    this.submitted=true;
    this.save();
    
  
   }
  
   save(){
    this.userservice.saveUser(this.user).subscribe(data=>console.log(data), error=>console.log(error));
    this.user=new User();
 
    window.localStorage.removeItem("edit-id");
    this.router.navigate(['Login'])
 
  
   }
   usersaveForm(){
    this.submitted=false;
    this.usersaveform.reset();
  }

}
