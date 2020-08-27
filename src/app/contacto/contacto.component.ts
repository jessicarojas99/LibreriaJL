import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.styl']
})
export class ContactoComponent implements OnInit {
  form:FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
