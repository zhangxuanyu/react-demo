import { extendObservable, computed } from 'mobx';

 class Counter {
  constructor() {
    extendObservable(this, {
      count: 0
    });
  }

  increment() {
    console.log(this.count)
    this.count++;

  }

  decrement() {
    this.count--;
  }
}

var counte = new Counter()
export default counte;
