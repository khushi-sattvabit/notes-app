import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp({ projectId: "notes-app-fc985", appId: "1:627038235963:web:7270325ecada25a8e99b1e", storageBucket: "notes-app-fc985.firebasestorage.app", apiKey: "AIzaSyDYmzW4pOK8iXweBvuXoussc8FXclUhfFM", authDomain: "notes-app-fc985.firebaseapp.com", messagingSenderId: "627038235963", measurementId: "G-ESTQW74BQ4" })), provideFirestore(() => getFirestore())],
  bootstrap: [AppComponent],
})
export class AppModule {}
