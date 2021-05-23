import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotesComponent } from './quotes/quotes.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { QuotesDetailComponent } from './quotes-detail/quotes-detail.component'


const routes: Routes = [
  { path: 'quotes', component: QuotesComponent},
  { path: 'about', component: AboutComponent},
  { path: 'quotes/:id', component: QuotesDetailComponent},
  { path: '', redirectTo:"/quotes", pathMatch: "full"},
  { path: '**', component:NotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
