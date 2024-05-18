import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
  provideAnimationsAsync(), importProvidersFrom(provideFirebaseApp(() => initializeApp({
    "projectId": "web-projekt-fa8c1", "appId": "1:641392570973:web:b87723ded283cd540693b4",
    "storageBucket": "web-projekt-fa8c1.appspot.com", "apiKey": "AIzaSyARIZ0zi5Zyp3v4dQYUlbF_S9QGtlVp-50", "authDomain": "web-projekt-fa8c1.firebaseapp.com",
     "messagingSenderId": "641392570973", "measurementId": "G-XRVT4K2P1R"
  }))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideStorage(() => getStorage())),

]
};
