import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPComponent } from './componentes/pagina-p/pagina-p.component';
import { PaginaSComponent } from './componentes/pagina-s/pagina-s.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaPComponent,
    PaginaSComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
