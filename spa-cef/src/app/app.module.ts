// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CharacterSelectComponent } from './character-select/character-select.component';

// services
import { AccountService } from './service/account.service';
import { CharacterService } from './service/character.service';

@NgModule({
  imports: [

    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    CharacterSelectComponent
  ],
  providers: [AccountService, CharacterService],
  bootstrap: [AppComponent],
})
export class AppModule { }
