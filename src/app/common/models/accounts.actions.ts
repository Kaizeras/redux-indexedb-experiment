
import {Action} from "@ngrx/store";
export const AccountActionTypes =  {
  LOAD: '[Accounts] load accounts',
  LOAD_SUCCESS: '[Accounts] load accounts successful',
  LOAD_FAILURE: '[Accounts] load accounts failure',
  GET: '[Accounts] get from db',
  GET_SUCCESS: '[Accounts] get from db success'
};



export class LoadAccountsAction implements Action {
  type = AccountActionTypes.LOAD;
  constructor() {}
}

export class LoadAccountsFailedAction implements Action {
  type = AccountActionTypes.LOAD_FAILURE;

  constructor() {
  }
}

export class LoadAccountsSuccessAction implements Action {
  type = AccountActionTypes.LOAD_SUCCESS;

  constructor() {
  }
}


export class GetAccountsAction implements Action {
  type = AccountActionTypes.GET;

  constructor() {
  }
}

export class GetAccountsSuccessAction implements Action {
  type = AccountActionTypes.GET_SUCCESS;

  constructor(public payload:any) {
  }
}


export type AccountsActions =
  LoadAccountsAction|
  LoadAccountsFailedAction|
  LoadAccountsSuccessAction|
  GetAccountsAction |
    GetAccountsSuccessAction
