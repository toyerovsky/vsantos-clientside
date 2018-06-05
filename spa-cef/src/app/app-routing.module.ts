// mopdules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { LoginPanelComponent } from "./view/login-panel/login-panel.component";
import { CharacterSelectorComponent } from "./view/character-selector/character-selector.component";
// character creator
import { CharacterCreatorAppearanceComponent } from "./view/character-creator/elements/character-creator-appearance/character-creator-appearance.component";
import { CharacterCreatorMenuComponent } from "./view/character-creator/elements/character-creator-menu/character-creator-menu.component";
import { CharacterCreatorComponent } from "./view/character-creator/character-creator.component";
import { CharacterCreatorAppearanceRootsComponent } from './view/character-creator/elements/character-creator-appearance/character-creator-appearance-roots/character-creator-appearance-roots.component';
import { CharacterCreatorFeaturesComponent } from './view/character-creator/elements/character-creator-appearance/character-creator-features/character-creator-features.component';
import { CharacterCreatorMoreAppearanceComponent } from './view/character-creator/elements/character-creator-appearance/character-creator-more-appearance/character-creator-more-appearance.component';
import { CharacterCreatorClothesComponent } from './view/character-creator/elements/character-creator-clothes/character-creator-clothes.component';
import { CharacterCreatorCarComponent } from './view/character-creator/elements/character-creator-car/character-creator-car.component';
import { CharacterCreatorCarModelsComponent } from "./view/character-creator/elements/character-creator-car/character-creator-car-models/character-creator-car-models.component";
import { CharacterCreatorInfoComponent } from "./view/character-creator/elements/character-creator-info/character-creator-info.component";

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginPanelComponent },
    { path: 'characterselector', component: CharacterSelectorComponent },
    {
        path: 'charactercreator', component: CharacterCreatorComponent, children: [
            { path: '', component: CharacterCreatorMenuComponent },
            { path: 'info', component: CharacterCreatorInfoComponent },
            { path: 'appearance', component: CharacterCreatorAppearanceComponent },
            { path: 'roots', component: CharacterCreatorAppearanceRootsComponent },
            { path: 'features', component: CharacterCreatorFeaturesComponent },
            { path: 'moreappearance', component: CharacterCreatorMoreAppearanceComponent },
            { path: 'clothes', component: CharacterCreatorClothesComponent },
            { path: 'car', component: CharacterCreatorCarComponent },
            { path: 'carmodels', component: CharacterCreatorCarModelsComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
