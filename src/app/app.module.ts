import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { EducationComponent } from './pages/education/education.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { LoaderComponent } from './pages/loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ResumeComponent,
    EducationComponent,
    ContactsComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
