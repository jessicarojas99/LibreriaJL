import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  checkEmail(email:string)
  {
    return of({ isEmailAviable: email !== 'usuario@gmail.com'})
    .pipe(
      delay(500)
    );
  }

  checkPassword(password: string){
    return of({ PasswordCorrect: password == 'usuario1234'})
    .pipe( delay(500));
  }

  

}
