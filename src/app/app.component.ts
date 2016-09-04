import {Component} from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user = {};

  constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => console.log(auth));
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
