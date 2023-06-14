/**
 * 
 * 
 * 
 */
// 主题对象
class Subject {
  constructor() {
    this.observers = []; // 存储观察者
  }

  // 添加观察者
  addObserver(observer) {
    this.observers.push(observer);
  }

  // 移除观察者
  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  // 通知所有观察者
  notifyAll() {
    this.observers.forEach((observer) => {
      observer.update();
    });
  }
}

// 观察者对象
class Observer {
  constructor() {}

  // 更新方法
  update() {
    console.log('Observer updated');
  }
}

// 创建主题对象和观察者对象
const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

// 添加观察者
subject.addObserver(observer1);
subject.addObserver(observer2);

// 通知所有观察者
subject.notifyAll(); // 输出: Observer updated, Observer updated

// 移除观察者
subject.removeObserver(observer1);

// 通知所有观察者
subject.notifyAll(); // 输出: Observer updated
