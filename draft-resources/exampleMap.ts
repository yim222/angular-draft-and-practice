import { Subscriber } from '../Subscriber';
export function map(project, thisArg) { //this is the exported function that we are using inside the code
  return function mapOperation(source) {//From where came this source param?
    if (typeof project !== 'function') {
      throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
    }
    return source.lift(new MapOperator(project, thisArg));
  };
}
export class MapOperator {//this is the operator that we used U here - try to see what is source maybe it's something buidl. It should be the observable

  constructor(project, thisArg) {
    this.project = project;//this is the function project(like process ) that we insert
    this.thisArg = thisArg;//This is the optional arg that we can pass(for what ? don't remember) --> It's for using it inside map as "this"
    //but notice that it will work only on classic function, not on arrow=> function, which is always refer to the global this.
  }
  call(subscriber, source) {
    return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
  }
}
class MapSubscriber extends Subscriber {
  constructor(destination, project, thisArg) {
    super(destination);
    this.project = project;
    this.count = 0;
    this.thisArg = thisArg || this;
  }
  _next(value) {
    let result;
    try {
      result = this.project.call(this.thisArg, value, this.count++);
    }
    catch (err) {
      this.destination.error(err);
      return;
    }
    this.destination.next(result);
  }
}
//# sourceMappingURL=map.js.map
