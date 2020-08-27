import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import { MyValidations } from 'src/app/utils/my-validations';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.buildForm();
   }

  ngOnInit(): void {
  }
  private buildForm(){
    this.form= this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],    
    });
  

    // this.form.valueChanges.pipe(debounceTime(500))
    // this.form.valueChanges.subscribe(value=>console.log(value));
  }
      save(event: Event){
        event.preventDefault();
        if(this.form.valid){
          const value = this.form.value;
          console.log(value);
        }
        else{
          this.form.markAllAsTouched();
        }       
      }
      get emailField(){
        return this.form.get('email');
      }

      get emailFieldIsValid(){
        return this.emailField.touched && this.emailField.valid;
      }
      get emailFieldIsInvalid(){
        return this.emailField.touched && this.emailField.invalid;
      }
      
      get passwordField(){
        return this.form.get('password');
      }
      get passwordFieldIsValid(){
        return this.passwordField.touched && this.passwordField.valid;
      }
      get passwordFieldIsInvalid(){
        return this.passwordField.touched && this.passwordField.invalid;
      }
}
