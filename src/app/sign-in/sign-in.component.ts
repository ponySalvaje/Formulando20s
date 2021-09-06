import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public emailLogin: string = "";
  public passwordLogin: string = "";

  public emailRegister: string = "";
  public passwordRegister: string = "";

  constructor(
    private _router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  registerUser(): void {
  }

  loginUser(): void {
  }



}
