import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ResponseHandlerInterceptorService } from './interceptors/response-handler-interceptor.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: ResponseHandlerInterceptorService, multi: true }]
})
export class CoreModule { }
