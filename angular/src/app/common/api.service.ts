import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable,throwError} from 'rxjs';
import { map,catchError } from 'rxjs/operators';
import { environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
  })

export class ApiService {

    private URL: string = environment.apiUrl;
    private data: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    data$: Observable<any> = this.data.asObservable();
    requestOptions: Object = {
      headers: new HttpHeaders().append('Bearer', String(localStorage.getItem("access_token"))),
      responseType: 'text'
    }
    constructor(private http:HttpClient) { }

    get(ext : String):Observable<{}>{
        return this.http.get(this.URL + ext).pipe(map(response => response ), catchError(this.handleerror));
      }
      private handleerror(error: Response | any) {
        if(error && error.error){
          error.statusText = error.error.message;
        }
        return throwError(error);
      }
     post(ext : String, input : any): Observable<{}>{
      return this.http.post(this.URL + ext, input).pipe(map(response => response), catchError(this.handleerror));
     }
    put(ext : String, input : any): Observable<{}>{
      return this.http.put(this.URL + ext, input).pipe(map(response => response), catchError(this.handleerror));
     }
    setData(newData : any) {
      this.data.next(newData);
    }
    delete(ext : String): Observable<{}>{
      return this.http.delete(this.URL + ext).pipe(map(response => response), catchError(this.handleerror));
     }
     getFullUrl(ext : any):Observable<{}>{
      return this.http.get(ext).pipe(map(response => response ), catchError(this.handleerror));
    }
    getlocalstorageId(){
      let storage : any = localStorage.getItem('id_user');
      return JSON.parse(storage)
    }

}
