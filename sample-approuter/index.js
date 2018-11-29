let approuter = require("@sap/approuter");
let app = approuter();
const port = 5000;

app.beforeRequestHandler.use('/ajax', function myMiddleware(req, res, next) {
  res.end('Value from ajax!');
});

app.start({port:port}, (err) => {
    if (!err) {
        console.log(`approuter server started on port ${port}`);
    }
});
