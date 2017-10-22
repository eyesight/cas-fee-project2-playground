import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService, AuthenticationService } from '../_services/index';

@Component({
  selector: 'app-login-test',
  templateUrl: './login-test.component.html',
  styleUrls: ['./login-test.component.scss']
})
export class LoginTestComponent implements OnInit {
  public model: any = {};
  public loading = false;
  public returnUrl: string;
  public loginForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private fb: FormBuilder) { }

  public ngOnInit():void {
    this.loginForm = this.fb.group(
      {formUsername: ['', [Validators.required, Validators.minLength(3)]],
       formPassword: ['', [Validators.required, Validators.minLength(8)]]
      }
    );


    console.log(this.loginForm.controls.formPassword.errors);
  }

  public login():void{
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
