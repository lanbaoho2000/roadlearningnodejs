// OS
const os = require("os");

// info about current user
const user = os.userInfo();

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

// Path
const path = require("path");

const filePath = path.join("/content", "subfolder", "test.txt");

const base = path.basename(filePath);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");

// FS
const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = data;
    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first}, ${second}`,
      (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(data);
      }
    );
  });
});

// http
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to our home page");
  } else if (req.url === "/about") {
    res.write("Here is our short story");
  } else
    res.end(
      `<h1>Oops!<p>We can't seem to find the page you are looking for</p></h1>`
    );
});
server.listen(5000);
