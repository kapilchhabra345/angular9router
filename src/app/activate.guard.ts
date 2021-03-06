import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate {

constructor(private userservice:UserService,private router:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return true;
    if(this.userservice.isAdminRights())
    {
      return true;
    }
    else
    {
      alert("You don't have permission to view this page , redirecting to home");
      this.router.navigate(['Home']);
    }
  }
  
}
