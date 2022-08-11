import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOneArticleComponent } from './show-one-article.component';

describe('ShowOneArticleComponent', () => {
  let component: ShowOneArticleComponent;
  let fixture: ComponentFixture<ShowOneArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOneArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOneArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
