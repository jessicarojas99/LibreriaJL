import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import { MyValidations } from 'src/app/utils/my-validations';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.styl']
})
export class RegistroComponent implements OnInit {

  form:FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.buildForm();
   }

  ngOnInit(): void {
  }

  private buildForm(){
    this.form= this.formBuilder.group({
      name:['',[Validators.required,Validators.minLength(3),Validators.maxLength(18)]],
      email: ['',[Validators.required, Validators.email],MyValidations.validateEmail(this.userService)],
      password:['',[Validators.required,Validators.minLength(5),]],
      confirmarpassword:['',Validators.required,MyValidations.validatePassword(this.userService) ],       
    });
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
  get nameField(){
    return this.form.get('name');
  }

  get nameFieldIsValid(){
    return this.nameField.touched && this.nameField.valid;
  }
  get nameFieldIsInvalid(){
    return this.nameField.touched && this.nameField.invalid;
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
  get confirmarpasswordField(){
    return this.form.get('confirmarpassword');
  }
  get confirmarpasswordFieldIsValid(){
    return this.confirmarpasswordField.touched && this.confirmarpasswordField.valid;
  }
  get confirmarpasswordFieldIsInvalid(){
    return this.confirmarpasswordField.touched && this.confirmarpasswordField.invalid;
  }
}
