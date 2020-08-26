import { UserService } from 'src/app/services/user.service';
import { AbstractControl } from '@angular/forms';
import { map } from 'rxjs/operators';
import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export class MyValidations{
    static validateEmail(UserService: UserService){
        return(control: AbstractControl)=>{
            const value = control.value;
            return UserService.checkEmail(value)
            .pipe(
                map(response => {
                    return response.EmailCorrect ? null: {notEmailCorrect :true};
                })
            );
        };
    }


    static validatePassword(UserService: UserService){
        return(control: AbstractControl)=>{
            const value = control.value;
            return UserService.checkPassword(value)
            .pipe(
                map(response => {
                    return response.PasswordCorrect ? null: {notPasswordCorrect :true};
                })
            );
        };
    }

    


}