const fsPromises = require("fs").promises;
const path = require("path");

// Question-1 to 5
async function task() {
  try {
    const arch_info =
      "Node.js is a JavaScript-based platform that is mainly used to create I/O-intensive web applications such as chat apps, multimedia streaming sites, etc. It is built on Google Chrome’s V8 JavaScript engine. A web application is software that runs on a server and is rendered by a client browser that accesses all of the application’s resources through the internet.";
    await fsPromises.writeFile("nodejs_architecture.txt", arch_info);

    let data = await fsPromises.readFile("nodejs_architecture.txt", "utf-8");
    console.log(data);
    const advOfNode = `
    Advantages:
    The Node.js server can efficiently handle a high number of requests by employing the use of Event Queue and Thread Pool.
    There is no need to establish multiple threads because Event Loop processes all requests one at a time, therefore a single thread is sufficient.
    The entire process of serving requests to a Node.js server consumes less memory and server resources since the requests are handled one at a time.`;

    // appending content to file
    await fsPromises.appendFile("nodejs_architecture.txt", advOfNode);
    // reading file
    data = await fsPromises.readFile("nodejs_architecture.txt", "utf-8");
    console.log("After appending data: ", data);
    // deleting a file
    await fsPromises.unlink(path.join(__dirname, "nodejs_architecture.txt"));
    console.log("File Deleted SuccessFully");
  } catch (error) {
    console.error("Error: ", error);
  }
}
task();
