//import * as logic from '/modules/logic.js');

const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const history = require('./modules/calcHistory');
//const logic = require('./modules/logic');

app.use(express.static('./server/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use( '/calcHistory', history);
//app.get('/calc', function (req, res) {
 // res.send(logic.calculate());
//});

const port = 5001;

app.listen(port, () => {
  console.log("Surf's Up", port);
});