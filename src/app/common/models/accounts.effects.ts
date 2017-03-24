
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import {Injectable} from "@angular/core";
import * as accounts from "./accounts.actions";
import {Actions, Effect} from "@ngrx/effects";

import {AccountsService} from "./accounts.service";
import {LoadAccountsSuccessAction} from "./accounts.actions";
import {LoadAccountsFailedAction} from "./accounts.actions";
import {GetAccountsSuccessAction} from "./accounts.actions";



@Injectable()
export class AccountsEffects {
  constructor(
    private _actions: Actions,
    private _service: AccountsService
  ) { }



  @Effect() loadAccounts$ = this._actions.ofType(accounts.AccountActionTypes.LOAD)
    .switchMap(() => this._service.loadAccounts()
      .map(() => {
        return new LoadAccountsSuccessAction();
      })
    .catch(() => Observable.of( new LoadAccountsFailedAction)));


  @Effect() getAccounts$ = this._actions.ofType(accounts.AccountActionTypes.GET)
    .switchMap(() => this._service.getAccounts()
      .then((data) => {
        return new GetAccountsSuccessAction(data);
      })
      .catch(() => Observable.of( new LoadAccountsFailedAction)));










}
