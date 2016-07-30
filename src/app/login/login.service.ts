import { Injectable }    from '@angular/core';
import { Headers, Http  } from '@angular/http';
import { User } from './user';
import { Token } from '../objects/token';
import { SignInEndPoint } from '../objects/end.point.uris';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
private loggedIn = false;
redirectUrl: string;
token : Token;

constructor(private http: Http) {
     this.loggedIn = !!localStorage.getItem('auth_token');

 }

authenticate(user) {
  var headers = new Headers();
  var res ;
  headers.append('Content-Type', 'application/json');
  headers.append('Accept-Language', 'en');
  headers.append('api_key', 'THIS_IS_THE_API_KEY_OF_THE_MOBILE_APP');

  return this.http
     .post(SignInEndPoint, JSON.stringify(user), {headers: headers})
     .toPromise()
     .then(response => {
          localStorage.setItem('auth_token', response.json().access_token);
          this.loggedIn = true;
      } )
     .catch(this.handleError);
}

private handleError(error: any) {
    return Promise.reject(error);
}

logout() {
   localStorage.removeItem('auth_token');
   this.loggedIn = false;
 }

 isLoggedIn() {
  return this.loggedIn;
}

}
