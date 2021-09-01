const express = require('express');
const router = express.Router();
const fs =require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('home', { title: 'Express'});
});


/* GET about page. */
router.get('/about', (req, res) => {

  res.render('about', { name: 'Gurgen',lastname:"Mkrtchyan"});
});



//   lesson 2 expressjs (framework) create file and filecontext

router.get('/:express', function(req, res){


  const filepath = req.query.filepath;
  const filecontext = req.query.filecontext;

  if(filepath && filecontext) {
    fs.appendFileSync(filepath,filecontext)
   res.send(filepath + ` --- ` + filecontext)


  }
    //  res.render("express",{
    //  filepath:req.query.filepath,
    //  filecontext:req.query.filecontext
    // } )
  res.send(` <mark> PLEASE ENTER  --- </mark>   express?filepath=...&filecontext=... `)
});


module.exports = router;
