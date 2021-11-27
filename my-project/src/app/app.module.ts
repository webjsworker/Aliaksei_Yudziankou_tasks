import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ElemComponent } from './elem/elem.component';
import { ElemsFilterPipe } from './shared/elems-filter.pipe';
import { TextFormComponent } from './text-form/text-form.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ElemComponent,
    TextFormComponent,
    ElemsFilterPipe,
    HeaderComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
