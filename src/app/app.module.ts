import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {StoreModule} from "@ngrx/store";
import { AppComponent } from './app.component';
import {AngularIndexedDB} from "angular2-indexeddb";
import {AccountsEffects} from "./common/models/accounts.effects";
import {EffectsModule} from "@ngrx/effects";
import {AccountsService} from "./common/models/accounts.service";
import {metaReducer} from "./common/reducers/index";

import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    NgxDatatableModule,
    EffectsModule.run(AccountsEffects),
    StoreModule.provideStore(metaReducer)
  ],
  providers: [AngularIndexedDB, AccountsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
