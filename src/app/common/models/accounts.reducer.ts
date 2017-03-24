/**
 * Created by svet on 3/20/2017.
 */
import * as accounts from './accounts.actions';




export interface State {
  entities:any;
  loaded:boolean;
  loading:boolean;
};

export const initialState:State = {
  entities:[],
  loaded:true,
  loading:false
};


export function reducer(state = initialState, action:accounts.AccountsActions): State {
  switch (action.type) {
    /**
     * Load all accountss
     */
    case accounts.AccountActionTypes.LOAD: {
      return Object.assign({}, state, {
        loading: true,
        loaded: false
      });
    }

    case accounts.AccountActionTypes.LOAD_SUCCESS: {

      return Object.assign({}, state, {
        loading: false,
        loaded: true,
      });

    }

    case accounts.AccountActionTypes.GET: {

      return Object.assign({}, state, {
        loading: true,
        loaded: false,
      });

    }

    case accounts.AccountActionTypes.GET_SUCCESS: {

      const data = action['payload'];
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        entities: data
      });

    }

    case accounts.AccountActionTypes.LOAD_FAILURE: {
      return Object.assign({}, state, {
        loading: false,
        loaded: true
      });
    }



    default:
      return state;
  }

}

export const getEntities = (state:State) =>  state.entities;
