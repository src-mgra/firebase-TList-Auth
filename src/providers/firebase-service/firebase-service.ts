import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FirebaseServiceProvider {
  constructor(public afd: AngularFireDatabase) {

  }

  getToDoItems() {
    return this.afd.list('/ToDoItems/');
  }

  addItem(name) {
    var postid: String;
    var pstr: any;

    postid = this.afd.list('/ToDoItems/').push(name).toString();
    pstr = postid.split('/');
    postid = pstr[4];
    //this.afd.list('/ToDoItems/').push(postid);
    console.log('--> '+postid);
    return postid;
  }

  removeItem(id) {
    this.afd.list('/ToDoItems/').remove(id);
  }

}
