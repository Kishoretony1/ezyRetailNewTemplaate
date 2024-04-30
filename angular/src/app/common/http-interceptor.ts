import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { AuthService } from "./auth.service";



@Injectable({
    providedIn : "root"
})
export class customHttpInterceptor implements HttpInterceptor{
    constructor(private auth  : AuthService){

    }
    intercept(req : HttpRequest<any>, next : HttpHandler):Observable<HttpEvent<any>>{
        let isLoggedIn : boolean = false;
    //     req = req.clone({
    //         // withCredentials : true,
    //          setHeaders: {
    //     'Content-Type' : 'application/json',
    //     'Bearer' : String(localStorage.getItem("access_token"))
    //   }
    //     })
          if (req.body instanceof FormData) 
      {
        req =  req.clone({
           setHeaders:{
          // 'Content-Type' : 'multipart/form-data',
          'Bearer' : String(localStorage.getItem("access_token")),
          'Accept-Language': 'en'
        }
          });
      }
       else{
        req =  req.clone({
          setHeaders:{
        'Content-Type': 'application/json',
        'Accept-Language': 'en',
        'Bearer' : String(localStorage.getItem("access_token")),
        'Authorization': 'Bearer '+String(localStorage.getItem("access_token")),
        ...(req.url.endsWith('/cms/promotion')|| req.url.endsWith('cms/create/merchant')) && {'target':'cms'}
      }

         });
          }

        isLoggedIn =    this.auth.isLoggedIn();
        return next.handle(req).pipe(tap((event:HttpEvent<any>)=>{
          if(event instanceof HttpResponse){

          }
        },
        (errorResponse : any) => {
            if(errorResponse instanceof HttpErrorResponse){
                if(errorResponse.status === 401 && !this.auth.isLoggedIn()){
                    console.log("token expired, redirecting to login page")
                    this.auth.logout();

                }
            }
        }
        
        ))


    }
}