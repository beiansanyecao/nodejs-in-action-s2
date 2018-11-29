// index.js

const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const Article = require('./db').Article;
const read = require('node-readability');
const JSON = require('circular-json');
const app = express();
const port = process.env.PORT || 3000;

app.set('port', port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/articles', (req, res, next) => {

    Article.all((err, articles) => {
        if (err) return next(err);
        res.send(articles);
    })

});

app.get('/articles/:id', (req, res, next) => {

    const id = req.params.id;

    Article.find(id, (err, article) => {
        if (err) return next(err);
        console.log(article);
        res.send(article);        
    })
    
});

app.post('/articles', (req, res, next) => {
   
    const url = req.body.url;

    read(url, (err, result) => {

        if (err || !result) 
            res.status(500).send('Error downloading article');


        Article.create(
          { title: result.title, content: result.content },
          (err, article) => {
            if (err) return next(err);
            console.log(article);
            res.send('OK');

            console.log('OK');
          }
        );

    });

});

app.delete('/articles/:id', (req, res, next) => {
    const id = req.params.id;

    Article.delete(id, (err) => {
        if (err) return err;
        res.send({ message: 'Deleted' });
    })
});

app.listen(app.get('port'), () => {
    console.log(`App started on port: ${app.get('port')}`);
});

module.exports = app;

