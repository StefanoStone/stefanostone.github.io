import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { PublicationsComponent } from './pages/publications/publications.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { LoaderComponent } from './pages/loader/loader.component';
import { DottedListElementComponent } from './components/dotted-list-element/dotted-list-element.component';
import { ParagraphTitleComponent } from './components/paragraph-title/paragraph-title.component';
import { PaperListElementComponent } from './components/paper-list-element/paper-list-element.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ResumeComponent,
    PublicationsComponent,
    ContactsComponent,
    LoaderComponent,
    DottedListElementComponent,
    ParagraphTitleComponent,
    PaperListElementComponent
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
