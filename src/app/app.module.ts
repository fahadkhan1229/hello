import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { NgxPaginationModule } from "ngx-pagination";
import {
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
} from "@angular/material";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { AutocompleteLibModule } from "angular-ng-autocomplete";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    AppRoutingModule,
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
export class AppModule {}
