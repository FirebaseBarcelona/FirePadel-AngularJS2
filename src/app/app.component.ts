import {Component} from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private user: any = {};

  constructor(public af: AngularFire) {
    this.observeLogin();
  }

  observeLogin() {
    console.log('Observe');
    this.af.auth.subscribe(user => {
      console.log(`--> ${user}`);
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  }

  public login(): void {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    });
  }

  public logout(): void {
    this.af.auth.logout();
  }
}
