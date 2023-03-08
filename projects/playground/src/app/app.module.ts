import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppComponentInscription } from './inscription.component';
import { BannedEmailDirective } from './banned-email.directive';
import { UniqueEmailDirective } from './unique-email.directive';
import { ConfirmPasswordDirective } from './confirm-password.directive';
import { ColorPickerComponent } from './color-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    AppComponentInscription,
    BannedEmailDirective,
    UniqueEmailDirective,
    ConfirmPasswordDirective,
    ColorPickerComponent,
    
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
