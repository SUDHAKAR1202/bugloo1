import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Login } from '../modals/login';
import { Register} from '../modals/register';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  Haveaccess(){
 var loggintoken=sessionStorage.getItem('token')||'';
var _extractedtoken=loggintoken.split('.')[1];
var _atobdata=window.atob(_extractedtoken);
var _finaldata=JSON.parse(_atobdata);
console.log(_finaldata.userName);
if(_finaldata.userName=='admin')
{ return true;
}
else{
  alert('You are not Authorized User');
  return false;
}
  }

  verifyRegister(login: Register) {
    return this.http.post(`${environment.API_URL}/api/logins/Registration`, login).pipe(
      tap((data: any) => { 
        sessionStorage.setItem('username',data.response[0].username)

        sessionStorage.setItem('emailid',data.response[0].emailid)
        sessionStorage.setItem('password', data.response[0].password)
        if (data.authenticated) {
          sessionStorage.setItem('userObj', JSON.stringify(data.user))
        }
      }),
      catchError(this.handleError)
    )
  }

  verifyLogin(login: Login) {
    
    return this.http.post(`${environment.API_URL}/api/logins/verify`, login).pipe(
      tap((data: any) => { 
        sessionStorage.setItem('loginId',data.response[0].loginid)
        sessionStorage.setItem('password', data.response[0].password)
        if (data.authenticated) {
          sessionStorage.setItem('userObj', JSON.stringify(data.user))
        }
      }),
      catchError(this.handleError)
    )
  }
  


   
  


  private handleError(err: HttpErrorResponse): Observable<any> {
    let errMsg = ''
    if (err.error instanceof Error) {
      console.log('An error occurred:', err.error.message);
      errMsg = err.error.message
    }
    else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(`Backend returned code ${err.status}`);
      errMsg = err.error.status;
    }
    return throwError(errMsg)
  }


}
