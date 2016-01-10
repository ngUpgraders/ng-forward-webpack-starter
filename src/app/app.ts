/*
 * Angular 2 decorators and services
 */
import {Component} from 'ng-forward/cjs';

/*
 * App Component
 * Top Level Component
 */
@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'app'
  selector: 'app', // <app></app>
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: `
  <header>
    <h1>{{app.title}}</h1>
  </header>

  <main>
    Todo List

    <div>
      <input type="text" ng-keyup="app.addElement($event)" autofocus>
    </div>
    <ul>
      <li ng-repeat="element in app.list">{{element}}</li>
    </ul>
  </main>
  `
})
export class App {
  // These are member type
  title: string;
  list: string[];

  constructor() {
    this.title = 'ng-forward with Angular 1.x';
    this.list = ['Study', 'Work', 'Party'];
  }

  addElement($event): void {
    $event.preventDefault();

    if ($event.keyCode === 13) {
      this.list.push($event.target.value);
      $event.target.value = '';
    }
  }
}
