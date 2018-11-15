import Counter from "./Counter.js";
import Timer from "./store.js";
class Stores {
  constructor() {
    this.counte = new Counter();
    this.timer = new Timer();
  }
}

export default new Stores();