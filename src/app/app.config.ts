import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import{provideHttpClient} from '@angular/common/http';

//ajout des imports de firebase et firestore

import {provideFirebaseApp, initializeApp} from '@angular/fire/app';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {firebaseConfig} from './shared/constants/Firebase.config';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),

    //Ajout des services firebase
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
  ],
};
