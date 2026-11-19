import { Component } from '@angular/core';

@Component({
  selector: 'app-settings-page',
  standalone: true,
  imports: [],
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.scss'
})
export class SettingsPageComponent {


  theme = '';
  player = '';
  size = '';


  themeFrames: Record<string, string> = {
    'Code vibes': './assets/img/Frame 629.png',
    'Gaming': './assets/img/theme gaming.png',
    'DA Projects': './assets/img/theme Visual.png',
    'Foods theme': './assets/img/theme food.png',
  };

  log() {
    console.log("hallo")

  }
}
