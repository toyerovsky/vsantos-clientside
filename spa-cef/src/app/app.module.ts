// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { LoginPanelComponent } from "./view/login-panel/login-panel.component";
import { CharacterSelectorComponent } from "./view/character-selector/character-selector.component";

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
    LoginPanelComponent,
    CharacterSelectorComponent
  ],
  providers: [AccountService, CharacterService],
  bootstrap: [AppComponent],
})
export class AppModule { }
