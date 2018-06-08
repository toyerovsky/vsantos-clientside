// modules
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountService } from './service/account.service';
import { CharacterService } from './service/character.service';
import { CharacterSelectorComponent } from './view/character-selector/character-selector.component';
import { LoginPanelComponent } from './view/login-panel/login-panel.component';
import { CharacterCreatorComponent } from './view/character-creator/character-creator.component';
import { CharacterCreatorMenuComponent } from './view/character-creator/elements/character-creator-menu/character-creator-menu.component';
import { CharacterCreatorAppearanceComponent } from './view/character-creator/elements/character-creator-appearance/character-creator-appearance.component';
import { CharacterCreatorAppearanceRootsComponent } from './view/character-creator/elements/character-creator-appearance/character-creator-appearance-roots/character-creator-appearance-roots.component';
import { CharacterCreatorFeaturesComponent } from './view/character-creator/elements/character-creator-appearance/character-creator-features/character-creator-features.component';
import { CharacterCreatorMoreAppearanceComponent } from './view/character-creator/elements/character-creator-appearance/character-creator-more-appearance/character-creator-more-appearance.component';
import { CharacterCreatorClothesComponent } from './view/character-creator/elements/character-creator-clothes/character-creator-clothes.component';
import { CharacterCreatorCarComponent } from './view/character-creator/elements/character-creator-car/character-creator-car.component';
import { CharacterCreatorCarModelsComponent } from './view/character-creator/elements/character-creator-car/character-creator-car-models/character-creator-car-models.component';
import { CharacterCreatorInfoComponent } from './view/character-creator/elements/character-creator-info/character-creator-info.component';
// components
// services
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
    CharacterSelectorComponent,
    CharacterCreatorComponent,
    CharacterCreatorMenuComponent,
    CharacterCreatorAppearanceComponent,
    CharacterCreatorAppearanceRootsComponent,
    CharacterCreatorFeaturesComponent,
    CharacterCreatorMoreAppearanceComponent,
    CharacterCreatorClothesComponent,
    CharacterCreatorCarComponent,
    CharacterCreatorCarModelsComponent,
    CharacterCreatorInfoComponent,
    CharacterCreatorInfoComponent
  ],
  providers: [AccountService, CharacterService],
  bootstrap: [AppComponent],
})
export class AppModule { }
