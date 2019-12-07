const express = require('express');
const mysql = require('mysql');
const app = express();
var path = require('path');
var faker = require('faker')
//var bodyParser = require('body-parser')
//var expressLayouts = require('express-ejs-layouts')

//permite usar o js no backend via <script>
app.use(express.static(path.join('public')));  //Para rotas estáticas arquivos html
app.set('view engine', 'ejs')    // Setamos que nossa engine será o ejs
//app.use(bodyParser.urlencoded()) // Com essa configuração, vamos conseguir parsear o corpo das requisições
 
/*

 const con = mysql.createConnection({
     host: '127.0.0.1',
     user: 'root',
     password: '',
     database: 'bilhetagem_01'
 })
 con.connect(function(err) {
     if (err) throw err;
     console.log("Connected!");

 });

 */

//criação de rotas modo backend
const port=9000;

app.get('/',function(req, res){
    res.send("olá página principal");
})

app.get('/arn', (req, res) => {
    res.render('\ARN')
  })

  router.post('/arn', function(req, res, next) {  

    var item = {  
      nome: req.body.nome,  
      email: req.body.email,  
      telefone: req.body.telefone  
    };  
    var data = new Contatos(item);  
    data.save();  
     
    res.redirect('/');  
   });

app.get('/102S',function(req, res){
    res.sendFile(__dirname + "/102S.html");
})

app.get('/104S',function(req, res){
    res.sendFile(__dirname + "/104S.html");
})

app.get('/106S',function(req, res){
    res.sendFile(__dirname + "/106S.html");
})

app.get('/108S',function(req, res){
    res.sendFile(__dirname + "/108S.html");
})

app.get('/110S',function(req, res){
    res.sendFile(__dirname + "/110S.html");
})

app.get('/112S',function(req, res){
    res.sendFile(__dirname + "/112S.html");
})

app.get('/114S',function(req, res){
    res.sendFile(__dirname + "/114S.html");
})

app.get('/ADM',function(req, res){
    res.sendFile(__dirname + "/ADM.html");
})

/*
app.get('/ARN',function(req, res){
    res.sendFile(__dirname + "/ARN.html");
})
*/

app.get('/CEC',function(req, res){
    res.sendFile(__dirname + "/CEC.html");
})

app.get('/CEI',function(req, res){
    res.sendFile(__dirname + "/CEI.html");
})

app.get('/CEN',function(req, res){
    res.sendFile(__dirname + "/CEN.html");
})

app.get('/CES',function(req, res){
    res.sendFile(__dirname + "/CES.html");
})

app.get('/CLA',function(req, res){
    res.sendFile(__dirname + "/CLA.html");
})

app.get('/COM',function(req, res){
    res.sendFile(__dirname + "/COM.html");
})

app.get('/CTL',function(req, res){
    res.sendFile(__dirname + "/CTL.html");
})

app.get('/EPQ',function(req, res){
    res.sendFile(__dirname + "/EPQ.html");
})

app.get('/FEI',function(req, res){
    res.sendFile(__dirname + "/FEI.html");
})

app.get('/GAL',function(req, res){
    res.sendFile(__dirname + "/GAL.html");
})

app.get('/FUR',function(req, res){
    res.sendFile(__dirname + "/FUR.html");
})

app.get('/GBA',function(req, res){
    res.sendFile(__dirname + "/GBA.html");
})

app.get('/GUA',function(req, res){
    res.sendFile(__dirname + "/GUA.html");
})

app.get('/ONO',function(req, res){
    res.sendFile(__dirname + "/ONO.html");
})

app.get('/REL',function(req, res){
    res.sendFile(__dirname + "/REL.html");
})

app.get('/SAM',function(req, res){
    res.sendFile(__dirname + "/SAM.html");
})

app.get('/SAS',function(req, res){
    res.sendFile(__dirname + "/SAS.html");
})

app.get('/SHP',function(req, res){
    res.sendFile(__dirname + "/SHP.html");
})

app.get('/TAS',function(req, res){
    res.sendFile(__dirname + "/TAS.html");
})

/*const mysql = require('mysql')

const con = mysql.createConnection({
host: '127.0.0.1',
user: 'root',
password: 'camila',
database: 'bilhetagem_01'
})
con.connect(function(err) {
  if (err) throw err;
  console.log("Connectado ao mysql!");

});



    var sql = "INSERT INTO arn (a1) VALUES ('1')";

    console.log("1 record inserted i a1"); 


 */             





app.listen(port, function(req, res){
    console.log("Servidor rodando na porta 9000")
})