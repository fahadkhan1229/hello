import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {NgxSpinnerModule} from "ngx-spinner";
import {NgxPaginationModule} from "ngx-pagination";
import {
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
} from "@angular/material";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {AutocompleteLibModule} from "angular-ng-autocomplete";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {EmailSearchComponent} from "./email-search/email-search.component";

import {HttpClientModule} from "@angular/common/http";
import {AngularFontAwesomeModule} from "angular-font-awesome";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    EmailSearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    NgxSpinnerModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    AutocompleteLibModule,
    NgbModule.forRoot(),
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
