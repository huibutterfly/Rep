import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.Component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from 'ng2-ckeditor';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DragulaService, DragulaModule } from 'ng2-dragula/ng2-dragula';
import {PropagandaModule} from './propaganda/propaganda.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    CKEditorModule,
    HttpClientModule,
    DragulaModule,
    PropagandaModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  providers: [
    DragulaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
