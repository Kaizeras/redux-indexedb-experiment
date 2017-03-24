/**
 * Created by svet on 3/20/2017.
 */
import {Injectable, Inject} from '@angular/core';
import {Response, Http, Headers, RequestOptions} from "@angular/http";
import 'rxjs/Rx';


import {AngularIndexedDB} from "angular2-indexeddb";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AccountsService {
  public db =  new AngularIndexedDB('indDb', 1);
  private worker:Worker;


  constructor(private http: Http){

    this.db.createStore(1, (evt) => {
      let objectStore = evt.currentTarget.result.createObjectStore('accounts', { keyPath: "_id", autoIncrement: true });
      objectStore.createIndex("_id", "_id", { unique: true });

    });

  }

  loadAccounts() {

    return this.http.get('http://localhost:3000/accounts').map((res:Response) => {
        let data = res.json();
        for (let i in data) {
          this.db.add('accounts', data[i]).then(() => {
          }, (error) => {
            console.log(error);
          });
        }
      })

  }

  getAccounts() {
    return this.db.getAll('accounts').then((data) => {
      return data
    }, (error) => {

    });
  }





}
