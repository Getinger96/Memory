import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { GameComponent } from './game/game.component';

export const routes: Routes = [


    {
        path: '',
        component: HomepageComponent
    },
    {
        path: 'settings',
        component: SettingsPageComponent
    },
    { path: 'game', component:GameComponent },



];
