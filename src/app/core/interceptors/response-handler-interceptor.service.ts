import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class ResponseHandlerInterceptorService implements HttpInterceptor {

  constructor(private toastr: ToastrService, private spinner: NgxSpinnerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req) {
      this.spinner.show();
    }

    return next.handle(req).pipe(tap((success) => {



      if (success instanceof HttpResponse) {
        // console.log('SUCCESS', success);

        if (success.url.endsWith('signup')) {
          this.spinner.show();
          let message = success.body.message;
          this.toastr.success(message, 'Success');
          setTimeout(() => {
            this.spinner.hide();
          }, 2000);
        }


        if (success.url.endsWith('signin')) {
          this.spinner.show();
          let userName = success.body.nickname;
          let message = success.body.message;

          this.toastr.success(`Hello, ${userName}! ${message}`, 'Success');

          setTimeout(() => {
            this.spinner.hide();
          }, 2000)

        }

        if (success.url.endsWith('edit')) {
          this.spinner.show();
          let message = success.body.message;
          this.toastr.success(message, 'Success');
          setTimeout(() => {
            this.spinner.hide();
          }, 2000);
        }

      }

    }), catchError((err) => {

      if (err.url.endsWith('signin')) {
        this.toastr.error(err.error.message, 'Error', { timeOut: 5000 });
      }

      this.toastr.error(err.error.errors[0]['msg'], 'Error', { timeOut: 5000 });
      // console.log("ERROR", err);

      throw err;
    }));

  }
}

