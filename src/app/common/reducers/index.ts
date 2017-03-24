/*
 Import createSelector from reselect to make selection of different parts of the state fast efficient
 */
import { createSelector } from 'reselect';
/*
 Import the store logger to log all the actions to the console
 */
import {storeLogger} from "ngrx-store-logger";

/*
 Import the layout state
 */


import * as fromAccounts from "../models/accounts.reducer"
import {compose} from "@ngrx/core";
import {combineReducers} from "@ngrx/store";


export interface AppState {
  accounts: fromAccounts.State;

}

export const reducers = {
  accounts: fromAccounts.reducer,
};



const developmentReducer:Function = compose(storeLogger(), combineReducers)(reducers);


export function metaReducer(state: any, action: any) {
  return developmentReducer(state, action);
}


export const getAccountsState = (state: AppState) => state.accounts;
export const geAccountsEntitiesState = createSelector(getAccountsState, fromAccounts.getEntities);
