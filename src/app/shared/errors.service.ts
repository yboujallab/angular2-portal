import { Injectable }    from '@angular/core';
import { HTTP_UNAUTHORIZED_STATUS } from '../objects/http.status.codes';


@Injectable()
export class ErrorsUtilService {


constructor() {
 }

getAuthenticationErrorMsg(error) : string
{

if (error.status == HTTP_UNAUTHORIZED_STATUS )
      return error.json().AuthenticationException;

return "";
}


}
