import { NgModule } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts'; //If I import the third party library here but not in app.module.ts file, it won't work.
import { AppModule } from './app.module';

@NgModule({
  imports: [AppModule, NgApexchartsModule]
})
