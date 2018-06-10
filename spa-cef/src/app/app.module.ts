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
import { CharacterCreatorRoutingComponent } from './view/character-creator/character-creator-routing/character-creator-routing.component';
import { CharacterCreatorAppearanceComponent } from './view/character-creator/character-creator-routing/elements/character-creator-appearance/character-creator-appearance.component';
import { CharacterCreatorClothesComponent } from './view/character-creator/character-creator-routing/elements/character-creator-clothes/character-creator-clothes.component';
import { CharacterCreatorCarComponent } from './view/character-creator/character-creator-routing/elements/character-creator-car/character-creator-car.component';
import { CharacterCreatorAppearanceRootsComponent } from './view/character-creator/character-creator-routing/elements/character-creator-appearance/elements/character-creator-appearance-roots/character-creator-appearance-roots.component';
import { CharacterCreatorAppearanceFeaturesComponent } from './view/character-creator/character-creator-routing/elements/character-creator-appearance/elements/character-creator-appearance-features/character-creator-appearance-features.component';
import { CharacterCreatorAppearanceMoreComponent } from './view/character-creator/character-creator-routing/elements/character-creator-appearance/elements/character-creator-appearance-more/character-creator-appearance-more.component';
import { CharacterCreatorCarModelsComponent } from './view/character-creator/character-creator-routing/elements/character-creator-car/elements/character-creator-car-models/character-creator-car-models.component';
import { GroupMenuComponent } from './view/group-menu/group-menu.component';
import { GroupMenuSummaryComponent } from './view/group-menu/elements/group-menu-summary/group-menu-summary.component';
import { GroupMenuAboutComponent } from './view/group-menu/elements/group-menu-about/group-menu-about.component';
import { GroupMenuOnlineComponent } from './view/group-menu/elements/group-menu-online/group-menu-online.component';
import { GroupMenuManagementComponent } from './view/group-menu/elements/group-menu-management/group-menu-management.component';
import { CasualJobComponent } from './view/casual-job/casual-job.component';
import { DriveThruComponent } from './view/drive-thru/drive-thru.component';
import { UrbanShopComponent } from './view/urban-shop/urban-shop.component';
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
    CharacterCreatorRoutingComponent,
    CharacterCreatorAppearanceComponent,
    CharacterCreatorClothesComponent,
    CharacterCreatorCarComponent,
    CharacterCreatorAppearanceRootsComponent,
    CharacterCreatorAppearanceFeaturesComponent,
    CharacterCreatorAppearanceMoreComponent,
    CharacterCreatorCarModelsComponent,
    GroupMenuComponent,
    GroupMenuSummaryComponent,
    GroupMenuAboutComponent,
    GroupMenuOnlineComponent,
    GroupMenuManagementComponent,
    CasualJobComponent,
    DriveThruComponent,
    UrbanShopComponent
  ],
  providers: [AccountService, CharacterService],
  bootstrap: [AppComponent],
})
export class AppModule { }
