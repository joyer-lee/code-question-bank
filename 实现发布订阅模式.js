// 定义一个发布订阅对象
const pubsub = {
  subscribers: {}, // 初始化订阅者列表

  // 添加订阅者方法
  subscribe: function (eventName, callback) {
    if (!this.subscribers[eventName]) {
      this.subscribers[eventName] = [];
    }
    this.subscribers[eventName].push(callback);
  },

  // 取消订阅方法
  unsubscribe: function (eventName, callback) {
    if (this.subscribers[eventName]) {
      const index = this.subscribers[eventName].indexOf(callback);
      if (index !== -1) {
        this.subscribers[eventName].splice(index, 1);
      }
    }
  },

  // 发布消息方法
  publish: function (eventName, data) {
    if (this.subscribers[eventName]) {
      this.subscribers[eventName].forEach((callback) => {
        callback(data);
      });
    }
  },
};

// 示例代码
function foo(data) {
  console.log('foo:', data);
}

function bar(data) {
  console.log('bar:', data);
}

// 订阅 'event1' 事件
pubsub.subscribe('event1', foo);
pubsub.subscribe('event1', bar);

// 发布 'event1' 事件
pubsub.publish('event1', { name: 'Alice', age: 20 });

// 取消订阅 'event1' 事件
pubsub.unsubscribe('event1', foo);

// 再次发布 'event1' 事件
pubsub.publish('event1', { name: 'Bob', age: 25 });
