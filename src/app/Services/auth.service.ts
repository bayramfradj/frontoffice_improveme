import {KeycloakService} from 'keycloak-angular';
import {Injectable} from '@angular/core';

@Injectable(
  {providedIn: 'root'}
)
export class AuthService {
  constructor(private keycloakservice: KeycloakService) { }

  getLoggedUser(): any {
    try {
      const userDetails = this.keycloakservice.getKeycloakInstance().idTokenParsed;
      return userDetails;
    } catch (e) {
      console.log('getLoggedUser Exception', e);
      return undefined;
    }
  }

  // tslint:disable-next-line:typedef
  async getUserProfile()
  {
    const userDetails = await this.keycloakservice.loadUserProfile();

    return userDetails;
  }

  getAuthentificated(): boolean
  {
    return this.keycloakservice.getKeycloakInstance().authenticated;
  }

  logout(url: string): void{
    this.keycloakservice.logout(url);
  }

  getRoles(): string[]{
    console.log(this.keycloakservice.getUserRoles());
    return this.keycloakservice.getUserRoles();
  }

  AccountManagment(): void
  {
    this.keycloakservice.getKeycloakInstance().accountManagement().catch((e) => {
      console.log(e); });
  }

  login(): void {
    this.keycloakservice.login();
  }

  register(): void {
    this.keycloakservice.register();
  }
}
