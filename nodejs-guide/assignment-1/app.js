const { createServer } = require("http");

const server = createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<h1>Hello there!<h1>");
    res.write("<ul> <li> User 1</li> <li> User 2</li></ul>");
    res.write(
      "<form action='/create-user' method='POST'><input name='username' type='text'/></form>"
    );
    res.write("</html>");
    return res.end();
  } else if (method === "POST" && url === "/create-user") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  } else {
  }
});

server.listen(3000);
