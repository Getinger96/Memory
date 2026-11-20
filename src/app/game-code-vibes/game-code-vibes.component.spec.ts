import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCodeVibesComponent } from './game-code-vibes.component';

describe('GameCodeVibesComponent', () => {
  let component: GameCodeVibesComponent;
  let fixture: ComponentFixture<GameCodeVibesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameCodeVibesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameCodeVibesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
