import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { routes } from './app.routes';
import { reconcileInterceptor } from './core/interceptors/reconcile.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [

    provideBrowserGlobalErrorListeners(),

    provideRouter(routes),

    provideClientHydration(withEventReplay()),

    provideHttpClient(
      withFetch(),
      withInterceptors([reconcileInterceptor])
    )

  ]
};