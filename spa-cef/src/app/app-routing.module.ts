// mopdules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { LoginPanelComponent } from "./view/login-panel/login-panel.component";
import { CharacterSelectorComponent } from "./view/character-selector/character-selector.component";

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginPanelComponent },
    { path: 'characterselect', component: CharacterSelectorComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
