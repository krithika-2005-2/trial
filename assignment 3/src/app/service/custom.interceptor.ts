import { HttpInterceptorFn } from '@angular/common/http';

export const customInterceptor: HttpInterceptorFn = (req, next) => {
  debugger;

  const myToken =localStorage.getItem('angular17token');
  if (req.url.includes('/CheckLogin')){
    return next(req);
  }
  {
    return next(req)
  }
  const cloneRequest = req.clone({
      setHeaders: {
        Authorization: 'Bearer ${myToken}'
      }
  })
  return next(cloneRequest);
};
