import { Component, HostBinding } from '@angular/core';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import "devextreme/localization/globalize/number";
import "devextreme/localization/globalize/date";
import "devextreme/localization/globalize/currency";
import "devextreme/localization/globalize/message";
import esMessages from 'devextreme/localization/messages/es.json';
import supplemental from "devextreme-cldr-data/supplemental.json";
import esCldrData from "devextreme-cldr-data/es.json";
import Globalize from "globalize";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  }

  constructor(private authService: AuthService, private screen: ScreenService, public appInfo: AppInfoService) {
    Globalize.load(supplemental, esCldrData);
    Globalize.loadMessages(esMessages);
    Globalize.locale("es");
  }

  isAuthenticated() {
    return this.authService.loggedIn;
  }
}
