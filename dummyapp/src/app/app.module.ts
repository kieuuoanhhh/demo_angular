import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextcomponentComponent } from './textcomponent/textcomponent.component';
import { ImagecomponentComponent } from './imagecomponent/imagecomponent.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { EmpInfoComponent } from './emp-info/emp-info.component';

@NgModule({
  declarations: [
    AppComponent,
    TextcomponentComponent,
    ImagecomponentComponent,
    FormComponentComponent,
    EmpInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
