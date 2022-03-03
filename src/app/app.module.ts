import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts'; //This is the third party library that's giving error in SSR mode
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    NgApexchartsModule //Third Party library gives error in Angular Universal by simply importing it here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
