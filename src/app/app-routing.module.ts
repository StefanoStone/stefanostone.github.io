import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./pages/about/about.component";
import {ContactsComponent} from "./pages/contacts/contacts.component";
import {PublicationsComponent} from "./pages/publications/publications.component";
import {ResumeComponent} from "./pages/resume/resume.component";
import {LoaderComponent} from "./pages/loader/loader.component";

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'loading', component: LoaderComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: '**', redirectTo: '/about', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
