// mopdules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { LoginPanelComponent } from "./view/login-panel/login-panel.component";
import { CharacterSelectorComponent } from "./view/character-selector/character-selector.component";
import { CasualJobComponent } from './view/casual-job/casual-job.component';
import { UrbanShopComponent } from './view/urban-shop/urban-shop.component';
import { DriveThruComponent } from './view/drive-thru/drive-thru.component';
import { BankMenuComponent } from './view/bank-menu/bank-menu.component';
// character-creator
import { CharacterCreatorComponent } from './view/character-creator/character-creator.component';
import { CharacterCreatorRoutingComponent } from './view/character-creator/character-creator-routing/character-creator-routing.component';
import { CharacterCreatorClothesComponent } from './view/character-creator/character-creator-routing/elements/character-creator-clothes/character-creator-clothes.component';
import { CharacterCreatorCarComponent } from './view/character-creator/character-creator-routing/elements/character-creator-car/character-creator-car.component';
import { CharacterCreatorCarModelsComponent } from './view/character-creator/character-creator-routing/elements/character-creator-car/elements/character-creator-car-models/character-creator-car-models.component';
import { CharacterCreatorAppearanceComponent } from './view/character-creator/character-creator-routing/elements/character-creator-appearance/character-creator-appearance.component';
import { CharacterCreatorAppearanceRootsComponent } from './view/character-creator/character-creator-routing/elements/character-creator-appearance/elements/character-creator-appearance-roots/character-creator-appearance-roots.component';
import { CharacterCreatorAppearanceMoreComponent } from './view/character-creator/character-creator-routing/elements/character-creator-appearance/elements/character-creator-appearance-more/character-creator-appearance-more.component';
import { CharacterCreatorAppearanceFeaturesComponent } from './view/character-creator/character-creator-routing/elements/character-creator-appearance/elements/character-creator-appearance-features/character-creator-appearance-features.component';
// group-menu
import { GroupMenuComponent } from './view/group-menu/group-menu.component';
import { GroupMenuSummaryComponent } from './view/group-menu/elements/group-menu-summary/group-menu-summary.component';
import { GroupMenuAboutComponent } from './view/group-menu/elements/group-menu-about/group-menu-about.component';
import { GroupMenuOnlineComponent } from './view/group-menu/elements/group-menu-online/group-menu-online.component';
import { GroupMenuManagementComponent } from './view/group-menu/elements/group-menu-management/group-menu-management.component';


const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginPanelComponent },
    { path: 'characterselector', component: CharacterSelectorComponent },
    { path: 'charactercreator/menu', component: CharacterCreatorComponent },
    {
      path: 'charactercreator', component: CharacterCreatorRoutingComponent, children:
      [
        { path: '', redirectTo: '/charactercreator/menu', pathMatch: 'full' },
        { path: 'appearance', component: CharacterCreatorAppearanceComponent },
          { path: 'appearance/roots', component: CharacterCreatorAppearanceRootsComponent },
          { path: 'appearance/features', component: CharacterCreatorAppearanceFeaturesComponent },
          { path: 'appearance/more', component: CharacterCreatorAppearanceMoreComponent },
        { path: 'clothes', component: CharacterCreatorClothesComponent },
        { path: 'car', component: CharacterCreatorCarComponent },
          {path: 'car/models', component: CharacterCreatorCarModelsComponent }
      ]
    },
    {
      path: 'groupmenu', component: GroupMenuComponent, children:
      [
        { path: '', component: GroupMenuSummaryComponent },
        { path: 'about', component: GroupMenuAboutComponent },
        { path: 'online', component: GroupMenuOnlineComponent },
        { path: 'management', component: GroupMenuManagementComponent }
      ]
    },
    { path: 'casualjob', component: CasualJobComponent },
    { path: 'drivethru', component: DriveThruComponent },
    { path: 'urbanshop', component: UrbanShopComponent },
    { path: 'bankmenu', component: BankMenuComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
