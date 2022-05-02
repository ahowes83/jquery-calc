const express = require('express');
const router = express.Router();
let history = [];

router.get( '/', (req, res)=>{
  console.log( '/calc GET' );
  res.send( history );
})

router.post('/', (req, res)=>{
  console.log('/calc POST:', req.body);
  history.push(req.body);
  res.sendStatus(200);
});

module.exports = router;