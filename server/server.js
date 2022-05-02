const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const history = require('./modules/calcHistory')


app.use(express.static('./server/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use( '/calcHistory', history);

const port = 5001;

app.listen(port, () => {
  console.log("Surf's Up", port);
});