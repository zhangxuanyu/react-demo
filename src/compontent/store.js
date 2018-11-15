import { observable, action } from "mobx";

// // 定义一个观察的对象
// let appState = observable({
//   timer: 10
// })

// // 定义action(动作)
// appState.resetTimer = action(() => {
//   console.log('hello word');
//   appState.timer = 0;
// });

// export default appState;

export default class Timer {
  @observable
  mytimer = {
    timer: 10
  };

  @action
  resetTime() {
    console.log("hello word");
    this.mytimer.timer = 0;
  }
}