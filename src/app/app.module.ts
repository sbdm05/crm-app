import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule} from '@angular/common/http'
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [
{ provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
