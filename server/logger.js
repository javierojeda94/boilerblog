module.exports = (request, response, next) => {
  let start = +new Date();
  let stream = process.stdout;
  let url = request.url;
  let method = request.method;

  response.on('finish', () => {
    let duration = +new Date() - start;
    let message = `${method} ${url} - ${duration}ms\n`;
    stream.write(message);
  });
  next();
}
