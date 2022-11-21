import http from 'http';

export const dummyServer = () => {
  const requestListener: http.RequestListener = function (req, res) {
    res.writeHead(200);
    res.end('<html><body>Hello world !</body></html>');
  };
  const server = http.createServer(requestListener);
  server.listen(3001, () => {
    console.log(`Server is running on http://127.0.0.1:${3001}`);
  });
};
