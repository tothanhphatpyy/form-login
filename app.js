const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()) ;

//ejs
app.set('view engine','ejs');
app.set('views','./pages');

app.get('/', (req, res) => {
    res.redirect('/dang-ky')
});

let arrUser = [
    {
        username: "phat", 
        password: "123"
    }
];

app.get('/dang-ky', (req, res) => {
    res.render('register', {arrUser});
})

app.post('/dang-ky', (req, res ) =>{
    const { username, password } = req.body;

    let isTrung = false;

    arrUser.forEach(item => {
        if(item.username == username){
            isTrung = true;
            
        } 
    })

    if(isTrung == true){
        return res.json({error: true, message: "USERNAME DA TON TAIIIIIII"})
    }else{
        arrUser.push({ username, password })
        return res.json(arrUser);
    }
})

app.listen(9999, () =>
      console.log('Server start port 9999')
);