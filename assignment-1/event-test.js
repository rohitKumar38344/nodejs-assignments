const MyEvent = require("events");

class MyEventEmitter extends MyEvent {}

const myEventEmitter = new MyEventEmitter();
//with event listener
// myEventEmitter.on("event", () => {
//   console.log("event called");
// });

//without event listener
myEventEmitter.on("event"); // Output: event called

myEventEmitter.emit("event"); // Error:The "listener" argument must be of type function. Received undefined
