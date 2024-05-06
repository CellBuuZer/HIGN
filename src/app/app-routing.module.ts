import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MentalStateExamsListComponent} from "./nursing/components/mental-state-exams-list/mental-state-exams-list.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {HomeComponent} from "./public/pages/home/home.component";

const routes: Routes = [
  { path: 'nursing/mental-state-exams', component: MentalStateExamsListComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
