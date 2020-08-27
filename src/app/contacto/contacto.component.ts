import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.styl']
})
export class ContactoComponent implements OnInit {
  form:FormGroup;
  constructor(private formBuilder: FormBuilder) { this.buildForm();}
  
  ngOnInit(): void {
  }

  private buildForm(){
    this.form= this.formBuilder.group({
      name:['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      asunto:['',[Validators.required]],
      message:['',[Validators.required,Validators.minLength(8),Validators.maxLength(12)]],    
    }); }

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
    get asuntoField(){
      return this.form.get('asunto');
    }

    get asuntoFieldIsValid(){
      return this.asuntoField.touched && this.asuntoField.valid;
    }
    get asuntoFieldIsInvalid(){
      return this.asuntoField.touched && this.asuntoField.invalid;
    }
    get messageField(){
      return this.form.get('message');
    }

    get messageFieldIsValid(){
      return this.messageField.touched && this.messageField.valid;
    }
    get messageFieldIsInvalid(){
      return this.messageField.touched && this.messageField.invalid;
    }
}
