const MyEmitter = require("events");

class MyEventEmitter extends MyEmitter {}

// Question-8   custom-event
/*
const myEmitter = new MyEventEmitter();
myEmitter.on("subscribe", (channelName) => {
  console.log(`Thanks for Subscribing to ${channelName}`);
});
*/

// Question-10    counting event listeners
const myEmitter = new MyEventEmitter();
myEmitter.on("event", () => {
  console.log(
    "The default maximum number of event listeners are: ",
    myEmitter.getMaxListeners()
  );
  myEmitter.setMaxListeners(5);
  console.log(
    "The updated maximum number of event listeners are: ",
    myEmitter.getMaxListeners()
  );
});

myEmitter.emit("event");

myEmitter.emit("subscribe", "College Wallah");
