
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-login-module-default',
  templateUrl: './login-module-default.component.html',
  styleUrl: './login-module-default.component.scss'
})
export class LoginModuleDefaultComponent implements OnInit {

  page: string = 'login'

  constructor(private actRoute: ActivatedRoute ) {
  }

  ngOnInit(): void {
    let sub: Subscription = this.actRoute.params.subscribe(
      (data: any) => { if (data) { this.page = data.values as string } },
      (error) => console.log(error),
      () => sub.unsubscribe()
    )
  }


}
