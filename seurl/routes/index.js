var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

function generateCode(){
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}


router.post('/new', (req, res, next) =>{
  const url = req.body.url;
  const code = generateCode();
  res.send('http://localhost:3000/' + code);
})

module.exports = router;
