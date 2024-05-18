import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../Interfaces/User';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {


  cityArray: Array<string> = ['Budapest', 'Szeged', 'Pécs'];
  loading:boolean ;

  registerGroup: FormGroup = new FormGroup({
    name: new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
    }),
    email: new FormControl('', [Validators.email, Validators.required]),
    phoneNum: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    rePassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    city: new FormControl(null, Validators.required),
  })

  constructor(private userService: UserService, private router: Router) {
    this.loading= false;
   }


  createActualUser(id: string): User {
    let helperObject: User = {
      userId: id,
      name: {
        firstname: this.registerGroup.get('name')?.get('firstName')?.value,
        lastname: this.registerGroup.get('name')?.get('lastName')?.value,
      },
      email: this.registerGroup.get('email')?.value,
      phoneNum: this.registerGroup.get('phoneNum')?.value,
      city: this.registerGroup.get('city')?.value,
      permission:'user',
    }
    return helperObject;
  }

  registerFunction() {
    if (this.registerGroup.valid) {
      if (this.registerGroup.get('password')?.value === this.registerGroup.get('rePassword')?.value) {
        this.loading=true;
        this.userService.signUp(this.registerGroup.get('email')?.value, this.registerGroup.get('password')?.value).then(
          data => {
            if (data.user?.uid) {
              this.userService.createUser(this.createActualUser(data.user?.uid)).then(
                user2 => {
                  if(data.user?.uid){
                    this.userService.createCartForUser(data.user.uid).then(
                      cart => console.log('Succesfull')
                    )
                  }
                },
                error => console.error(error),
              )
              this.router.navigateByUrl('/login-signup/login')
            }

          }, error => console.log('The error message is : ' + error)
        )
      }
    }
  }

}
