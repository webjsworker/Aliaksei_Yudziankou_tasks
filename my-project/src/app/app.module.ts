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
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FindComponent } from './find/find.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { FeetbackComponent } from './feetback/feetback.component';

@NgModule({
  declarations: [
    AppComponent,
    ElemComponent,
    TextFormComponent,
    ElemsFilterPipe,
    HeaderComponent,
    NavComponent,
    AboutComponent,
    HomeComponent,
    FindComponent,
    ViewComponent,
    CreateComponent,
    FeetbackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
