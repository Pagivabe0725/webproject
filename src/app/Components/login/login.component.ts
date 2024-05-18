import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginGroup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });
  loading:boolean;

  constructor(private userService: UserService, private router: Router) { 
    this.loading=false;
  }

  login() {
    if (this.loginGroup.valid) {
      this.loading=true;
      this.userService.login(this.loginGroup.get('email')?.value, this.loginGroup.get('password')?.value).then(
        data => {
          if (data.user) {
            let sub : Subscription = this.userService.getUserById(data.user.uid).subscribe(
              userInfo => {
                localStorage.setItem('user',JSON.stringify(userInfo))
                sub.unsubscribe()
              },
              error => console.error(error),
              
            )
            //localStorage.setItem('user',data.user.uid);
            this.router.navigateByUrl(`/shop/${data.user.uid}`);
          }
        },
        error => {
          console.error('The error message is : ' + error);
          this.loading=false;
        }
      )
    }
  }

}
