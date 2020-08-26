import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { LocalStorageService } from './services/local-storage/local-storage.service';
import { INIT_FLAG } from './services/local-storage/local-storage.namespace';

@Injectable({
  providedIn: 'root'
})
export class InitGuardGuard implements CanActivate {
  constructor(
    private store: LocalStorageService,
    private router: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const init = this.store.get(INIT_FLAG);
      if (state.url.includes('setup') && init) {
        this.router.navigateByUrl('/main');
        return false;
      }
      if (!state.url.includes('setup') && !init) {
        this.router.navigateByUrl('/setup');
        return false;
      }
      return true;
  }
}

