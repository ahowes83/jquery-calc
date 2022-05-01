const express = require('express');
const app = express();
const router = express.Router();
const history = require('./modules/calcHistory')


app.use(express.static('./server/public'));
//app.use('/history', history);
app.use(router);

const port = 5001;

app.listen(port, () => {
  console.log("Surf's Up", port);
});