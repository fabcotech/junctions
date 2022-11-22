import http from 'http';

export const dummyServer = ({ ip, port }: { ip: string; port: number }) => {
  const requestListener: http.RequestListener = function (req, res) {
    res.writeHead(200);
    res.end('<html><body>Hello world !</body></html>');
  };
  const server = http.createServer(requestListener);
  server.listen(port, () => {
    console.log(`Server is running on http://${ip}:${port}`);
  });
};
