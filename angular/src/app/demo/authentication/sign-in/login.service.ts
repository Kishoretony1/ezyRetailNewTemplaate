import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  private _url: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  /************Login Service**************/
  postlogin(username:String, password:String): Observable<{}> {
    // let headers = new Headers();
    // headers.append("Content-Type", "application/json");
    // headers.append("Authorization", "Basic " + btoa(username + ":" + password));

    // let headeroptions = new RequestOptions({ headers: headers });
    let bodycontent = {
        "userEmail": username,
        "password": password
    };
    return this.http.post(this._url + "cms/login", bodycontent).pipe(map(response => response), catchError(this.handleerror));
  }
  private handleerror(error: Response | any) {
    return throwError(error);
  }
}
