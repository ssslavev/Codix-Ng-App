import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ResponseHandlerInterceptorService implements HttpInterceptor {

  constructor(private toastr: ToastrService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(tap((success) => {
      if (success instanceof HttpResponse) {
        //console.log('SUCCESS', success);

        if (success.url.endsWith('signup')) {
          let message = success.body.message;
          this.toastr.success(message, "Success");
        }


        if (success.url.endsWith('signin')) {

          let userName = success.body.nickname;
          let message = success.body.message;

          this.toastr.success(`Hello, ${userName}! ${message}`, "Success");
        }

        if (success.url.endsWith('user')) {
          let message = success.body.message;
          this.toastr.success(message, "Success");
        }
      }
    }), catchError((err) => {

      if (err.url.endsWith('signin')) {
        this.toastr.error(err.error.message, "Error", { timeOut: 5000 });
      }

      this.toastr.error(err.error.errors[0]['msg'], 'Error', { timeOut: 5000 });
      //console.log("ERROR", err);

      throw err;
    }))
  };
}

