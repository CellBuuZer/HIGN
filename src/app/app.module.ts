import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MentalStateExamsListComponent } from './nursing/components/mental-state-exams-list/mental-state-exams-list.component';
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor, MatButton} from "@angular/material/button";
import {
  MatCard,
  MatCardAvatar,
  MatCardContent, MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { HomeComponent } from './public/pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MentalStateExamsListComponent,
    PageNotFoundComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbar,
    MatAnchor,
    MatCardContent,
    MatCardSubtitle,
    MatCardTitle,
    MatCardImage,
    MatCardAvatar,
    MatCardHeader,
    MatCard,
    HttpClientModule,
    MatButton
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
