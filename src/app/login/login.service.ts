import { Injectable }    from '@angular/core';
import { Headers, Http  } from '@angular/http';
import { User } from './user';
import { SignInEndPoint } from '../objects/end.point.uris';
import 'rxjs/add/operator/toPromise';
import {TranslateService} from 'ng2-translate/ng2-translate';

@Injectable()
export class LoginService {
private loggedIn = false;
redirectUrl: string;

constructor(private http: Http, private translate: TranslateService) {
     this.loggedIn = !!localStorage.getItem('auth_token');

 }

authenticate(user) {
  var headers = new Headers();
  var res ;
  headers.append('Content-Type', 'application/json');
  headers.append('Accept-Language', this.translate.currentLang);
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
