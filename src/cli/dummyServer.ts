import http from 'http';
import fs from 'fs';
import path from 'path';

export const dummyServer = ({
  ip,
  port,
  file,
}: {
  file: string;
  ip: string;
  port: number;
}) => {
  const requestListener: http.RequestListener = function (req, res) {
    res.writeHead(200);
    res.end(fs.readFileSync(path.join(file), 'utf8'));
  };
  const server = http.createServer(requestListener);
  server.listen(port, () => {
    console.log(`Server is running on http://${ip}:${port}`);
    console.log('Serving file', file);
  });
};
