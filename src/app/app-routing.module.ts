import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./pages/about/about.component";
import {ContactsComponent} from "./pages/contacts/contacts.component";
import {EducationComponent} from "./pages/education/education.component";
import {ResumeComponent} from "./pages/resume/resume.component";
import {LoaderComponent} from "./pages/loader/loader.component";

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'education', component: EducationComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'loading', component: LoaderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
