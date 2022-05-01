const express = require('express');
const router = express.Router();
let history = [];
module.exports = [];

router.get( '/', (req, res)=>{
  console.log( '/pets GET' );
  res.send( calcHistory );
})
