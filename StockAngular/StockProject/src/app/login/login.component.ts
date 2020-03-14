import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userNew:User=new User();
  constructor(private router: Router, private userservice:UserService) { }
user :User=new User();
submitted=false;
  ngOnInit() {
  }
  usersaveform=new FormGroup({

   // id:new FormControl('',[Validators.required]),
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required, Validators.minLength(5)]),
    //usertype:new FormControl('',[Validators.required]),
   // email:new FormControl('',[Validators.required, Validators.email]),
   // mobilenumber:new FormControl('',[Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
    //confirmed:new FormControl('',[Validators.required])
  
   })
   saveUser(saveUser){

    this.user=new User();
   // this.user.id=this.usersaveform.get('id').value;
    this.user.username=this.usersaveform.get('username').value;
    this.user.password=this.usersaveform.get('password').value;
    this.userservice.findByUsernameAndPassword(this.user.username, this.user.password).subscribe(data =>{

      this.userNew=data;
    
      if(this.userNew!=null && this.userNew.usertype=='admin'){
    
       this.router.navigate(['Admin']);
    
      }
    
      else if(this.userNew!=null && this.userNew.usertype=='user'){
    
       this.router.navigate(['User']);
    
      }
    
      else{
    
       alert("invalid Details");
    
       // this.router.navigate(['login-page']);
    
      }
    
     },
    
       error => console.log(console.error()));
    
     }
    
    
  
   }
  
 
