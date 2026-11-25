import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-settings-page',
  standalone: true,
  imports: [],
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.scss'
})
export class SettingsPageComponent {


  settings = inject(SettingsService);
  private router = inject(Router);

  theme = '';
  player = '';
  size = '';

  

themeRoutes: Record<string, string> = {
  'Code vibes': '/game-code-vibes',
  'Gaming': '/game-gaming',
  'DA Projects theme': '/game-da',
  'Foods theme': '/game-foods',
};


  themeFrames: Record<string, string> = {
    'Code vibes': './assets/img/Frame 629.png',
    'Gaming': './assets/img/theme gaming.png',
    'DA Projects theme': './assets/img/Theme Visual.png',
    'Foods theme': './assets/img/theme food.png',
  };

  start() {
    this.settings.theme = this.theme;
    this.settings.player = this.player;
    this.settings.size = this.size;
    this.router.navigate(['/game']);
  }
}
