import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CounterSampleComponent} from './counter-sample.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('CounterSampleComponent', () => {
  let component: CounterSampleComponent;
  let fixture: ComponentFixture<CounterSampleComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterSampleComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment/decrement value', () => {
    fixture.componentInstance.increment();
    expect(fixture.componentInstance.value).toEqual(1);
    fixture.componentInstance.decrement();
    expect(fixture.componentInstance.value).toEqual(0);
  });

  it('should increment in HTML', () => {
    debugElement.query(By.css('button.increment')).triggerEventHandler('click', null);
    fixture.detectChanges();
    const value = debugElement.query(By.css('h1')).nativeElement.innerText;
    expect(value).toEqual('1');
  });

  it('should decrement in HTML', () => {
    debugElement.query(By.css('button.decrement')).triggerEventHandler('click', null);
    fixture.detectChanges();
    const value = debugElement.query(By.css('h1')).nativeElement.innerText;
    expect(value).toEqual('0');
  });

  it('should stop at 0 and show minimum message', () => {
    debugElement.query(By.css('button.decrement')).triggerEventHandler('click', null);
    fixture.detectChanges();
    const message = debugElement.query(By.css('p.message')).nativeElement.innerText;
    expect(fixture.componentInstance.value).toEqual(0);
    expect(message).toContain('Minimum');
  });

  it('should stop at 15 and show maximum message', () => {
    fixture.componentInstance.value = 15;
    debugElement.query(By.css('button.increment')).triggerEventHandler('click', null);
    fixture.detectChanges();
    const message = debugElement.query(By.css('p.message')).nativeElement.innerText;
    expect(fixture.componentInstance.value).toEqual(15);
    expect(message).toContain('Maximum');
  });

});
