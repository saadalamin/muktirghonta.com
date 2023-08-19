const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const http = require("http");

const server = http.createServer(function (req, res) {
 res.writeHead(200, { "Content-Type": "text/plain" });
 const message = "It works!\n",
  version = "NodeJS " + process.versions.node + "\n",
  response = [message, version].join("\n");
 res.end(response);
});
server.listen();

const app = express();
//app.use(cors());

//app.use(express.static("public"));

//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());

//app.use("/api/achieve", require("./api/achieve"));

app.get("/", (req, res) => {
 console.log(`Server is running on port ${PORT}`);
 res.send(`Server is running on port ${PORT}`);
});
