// server.js
import http from "http";
import fs from "fs";
import path from "path";

const PORT = 403; #Enter your port here

http.createServer((req, res) => {
  const file = req.url === "/" ? "main.html" : req.url.slice(1);
  const filePath = path.join(process.cwd(), file);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("Fichier non trouvé");
    } else {
      res.writeHead(200);
      res.end(data);
    }
  });
}).listen(PORT, "0.0.0.0", () => {
  console.log(`Serveur lancé sur http://0.0.0.0:${PORT}`);
});


