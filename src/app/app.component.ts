import { Component, HostListener, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';
import { Store } from '@ngrx/store';
import { CookiePreferencesComponent } from './components/cookies/cookie-preferences/cookie-preferences.component';
import { IUser } from './models/user/user';
import { EUserRoles } from './models/user/user-roles';
import { userSelectors } from './state/user/user.selectors';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user$ = this.store.select(userSelectors.currentUser).pipe(takeUntilDestroyed());

  @HostListener('mousemove')
  detectUserInput() {
    const isActivityResumed = AuthService.SetUserIsActive();
    
    if(isActivityResumed) {
      this.authService.refresh().subscribe();
    }
  }

  constructor(
    private updates: SwUpdate,
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private store: Store
  ) {
    AuthService.SetUserIsActive();
  }

  ngOnInit() {
    CookiePreferencesComponent.Init();

    this.updates.versionUpdates.subscribe(event => {
      if(event.type === 'VERSION_READY') {
        this.snackBar.open('Update available', 'Refresh').onAction().subscribe(() => {
          this.updates.activateUpdate().then(() => {
            document.location.reload();
          });
        });
      }
    });
  }

  showBottomBar(user: IUser) {
    return !!user;
  }
}
