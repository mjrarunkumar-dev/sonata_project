import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

export const reconcileInterceptor: HttpInterceptorFn = (req, next) => {

  if (req.url.includes('/api/reconcile')) {

    const success = Math.random() > 0.2;

    if (success) {
      return of(
        new HttpResponse({
          status: 200,
          body: { ok: true }
        })
      ).pipe(delay(3000));
    } else {
      return throwError(() => new Error('Reconciliation Failed'))
        .pipe(delay(3000));
    }
  }

  return next(req);
};