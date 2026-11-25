import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {


  theme = '';
  player = '';
  size = '';


  constructor() { }
}
