import {Component} from '@angular/core';
import {AuthService} from './auth.service';


@Component({
  selector: 'app-root',
  providers: [AuthService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public user = {};

  constructor(public authService: AuthService) {
    this.authService = authService;
    this.subscribeUserAuth();
  }

  private subscribeUserAuth() {
    this.authService.getAuth().subscribe(
      authData => {
        // noinspection TypeScriptUnresolvedVariable
        this.user = {
          name: authData.google.displayName,
          id: authData.google.uid,
          email: authData.google.email,
          avatar: authData.google.photoURL,
        };
      }
    );
  }


  public login(): void {
    this.authService.login();
  }

  public logout(): void {

  }

}
