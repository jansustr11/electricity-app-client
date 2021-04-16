import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { selectIsLoading } from 'src/app/app/data-source/data-source.selectors';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
    let component: LoginFormComponent;
    let fixture: ComponentFixture<LoginFormComponent>;
    let store: MockStore<unknown>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LoginFormComponent],
            providers: [provideMockStore()]
        }).compileComponents();

        store = TestBed.inject<MockStore<unknown>>(MockStore);
        store.overrideSelector(selectIsLoading, false);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
