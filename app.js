const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()) ;

//ejs
app.set('view engine','ejs');
app.set('views','./pages');

app.get('/home', (req, res) => {

});

app.get('/dang-ky', (req, res) => {
    res.render('register');
})
app.post('/dang-ky-1', (req, res ) =>{
    const { username, password } = req.body;
    res.json({username, password});
    
})

app.listen(9999, () =>
      console.log('Server start port 9999')
);