import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdviceBoxModule } from './components/advice-box/advice-box.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AdviceBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
