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

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, ) {

  }

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      password: ["", [Validators.required]],
      confirm: ["", [Validators.required]],
    }, {
        validator: MustMatch('password', 'confirm')
      });

    this.route.paramMap.subscribe((param: any) => {
      this.token = param.params.data;

    })
  }
  get f() { return this.postForm.controls; }

}
