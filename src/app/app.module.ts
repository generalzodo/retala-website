import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
@NgModule({
  declarations: [
    AppComponent,
    FaqComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    TermsComponent,
    PrivacyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
