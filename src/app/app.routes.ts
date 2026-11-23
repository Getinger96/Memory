import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { GameCodeVibesComponent } from './game-code-vibes/game-code-vibes.component';

export const routes: Routes = [


    {
        path:'',
        component: HomepageComponent
    },
    {
        path:'settings',
        component: SettingsPageComponent
    },
     {
        path:'codeVibes',
        component: GameCodeVibesComponent
    },




];
