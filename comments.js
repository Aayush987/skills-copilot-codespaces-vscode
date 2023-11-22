// create web server with express
// 1. require express
const express = require("express");
// 2. create a web server with express
const app = express();
// 3. create a port number
const PORT = 3000;
// 4. create a route
app.get("/", (req, res) => {
  res.send("Hello from Express");
});
// 5. listen to the port
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
// 6. run the server
// node comments.js
// 7. open browser
// http://localhost:3000
// 8. ctrl + c to stop the server
