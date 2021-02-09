import { ApiService } from './../api.service';
import gql from 'graphql-tag';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MustMatch } from './must-match.validator';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  postForm: any;
  token: any;
  submitted: any;
  error: any;
  message: any;
  constructor(private formBuilder: FormBuilder, private api: ApiService, private route: ActivatedRoute, ) {

  }

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      password: ["", [Validators.required]],
      confirm: ["", [Validators.required]],
    }, {
        validator: MustMatch('password', 'confirm')
      });

    this.route.paramMap.subscribe((param: any) => {
      this.token = param.params.token;

    })
  }
  get f() { return this.postForm.controls; }

  onSubmit() {
    console.log(this.token);

    this.submitted = true;
    if (this.postForm.invalid) {
      return;
    }
    // console.log("valid");
    let query = gql`
mutation changePassword(
  $token: String!
  $password: String!){
    changePassword(token: $token, password: $password) {
      id
    }
    }
  `;
    this.api.postData(query, { token: this.token, password: this.postForm.value.password }).subscribe(result => {

      if (!result.data['changeAgentPassword']) {
        // this.error = result.errors[0].message;
        // this.spinner= false;
        // this.toastr.error(result.errors[0].message, "Error")
        this.error = result.errors[0].message
        return
      } else {


        // this.toastr.success("Password Changed Successfully, Login to continue", "Success")
        // this.router.navigate(['/authentication/page-login'])
        this.message = "Password Changed Successfully"

      }

    })


    // this.router.navigate(['/authentication/page-login']);
  }


}
