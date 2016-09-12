import {Injectable} from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';

@Injectable()
export class AuthService {

  constructor(public af: AngularFire) {
    console.log(af);
  }

  public login() {
    return this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    });

  }

  public getAuth() {
    return this.af.auth;
  }

}
