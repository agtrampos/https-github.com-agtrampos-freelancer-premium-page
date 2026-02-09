const http = require("http");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT ? Number(process.env.PORT) : 5173;
const root = __dirname;

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".json": "application/json; charset=utf-8",
};

function safeJoin(base, target) {
  const targetPath = path.posix.normalize(target).replace(/^(\.\.[/\\])+/, "");
  return path.join(base, targetPath);
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  let pathname = url.pathname === "/" ? "/index.html" : url.pathname;
  const filePath = safeJoin(root, pathname);
  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.end("Not Found");
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    const type = types[ext] || "application/octet-stream";
    res.statusCode = 200;
    res.setHeader("Content-Type", type);
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
}); 
