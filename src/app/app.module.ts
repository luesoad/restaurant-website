import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
/*import { HttpClientModule } from '@angular/common/http';*/

import { AppRoutingModule } from './app-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    /*HttpClientModule,*/
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
