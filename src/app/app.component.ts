import {Component, OnInit} from '@angular/core';
import * as fromRoot from './common/reducers/index';
import * as accounts from './common/models/accounts.actions';
import {Store} from "@ngrx/store";
import {AppState} from "./common/reducers/index";
import {LoadAccountsAction} from "./common/models/accounts.actions";
import {Observable} from "rxjs";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  timeout: any;
  title = 'app works!';
  public accounts$:Observable<any>;
  public columns:any = [
    {name: '_id'},
    {name: 'guid'},
    {name:'isActive'},
    {name:'balance'},
    {name: 'picture'},
    {name: 'age'},
    {name:'eyeColor'},
    {name:'gender'},
    {name:'company'},
    {name: 'email'},
    {name: 'phone'},
  ];

  constructor(private store: Store<fromRoot.AppState>) {
      this.accounts$ = this.store.select(fromRoot.geAccountsEntitiesState);



  }



  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }

  ngOnInit() {
  }

  loadData() {
    this.store.dispatch(new accounts.LoadAccountsAction());
  }

  getData() {
    this.store.dispatch(new accounts.GetAccountsAction());
  }
}

//
// "_id": "58d3faec38f8bbed70ec73ef",
//   "index": 0,
//   "guid": "c6d1c55f-eecb-4399-ab0b-9b459cd9f608",
//   "isActive": true,
//   "balance": "$3,185.12",
//   "picture": "http://placehold.it/32x32",
//   "age": 24,
//   "eyeColor": "blue",
//   "name": "Angeline Ellis",
//   "gender": "female",
//   "company": "ISOSWITCH",
//   "email": "angelineellis@isoswitch.com",
//   "phone": "+1 (856) 407-3401",
//   "address": "528 Plymouth Street, Salix, Connecticut, 2236",
//   "about": "Voluptate elit enim magna dolore nulla aute. Cillum sunt Lorem sunt dolore. Labore nostrud laborum nostrud ex in cillum anim irure veniam sit consectetur labore eiusmod. Aliqua quis non tempor pariatur. Laborum elit commodo non irure deserunt aliquip dolor labore commodo sint. Laboris magna elit laboris cillum laborum est ipsum veniam nulla. Aliquip eiusmod excepteur veniam officia aliquip ex.\r\n",
//   "registered": "2014-06-26T08:48:13 -03:00",
//   "latitude": 11.899032,
//   "longitude": -60.84688,
