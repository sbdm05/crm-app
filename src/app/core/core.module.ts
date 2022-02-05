import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui/ui.module';
import { TemplatesModule } from '../templates/templates.module';
import { IconsModule } from '../icons/icons.module';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { LoginModule } from '../login/login.module';


@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule, 
    RouterModule
  ], 
  exports : [
    HeaderComponent,
    NavComponent,
    FooterComponent,
    UiModule, 
    TemplatesModule,  
    IconsModule, 
    LoginModule
  ]
})
export class CoreModule { }
