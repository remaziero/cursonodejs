

var hostname = "m15.cloudmqtt.com";
var port = 32079;
var clientId = "mdf_arn";
clientId += new Date().getUTCMilliseconds();;
var username = "hpmfjdbn";
var password = "4pZSyx7WtWon";
var subscription = "METRO_DF/+/ARN";

mqttClient = new Paho.MQTT.Client(hostname, port, clientId);
mqttClient.onMessageArrived = MessageArrived;
mqttClient.onConnectionLost = ConnectionLost;
Connect();

function Connect() {
    mqttClient.connect({
        onSuccess: Connected,
        onFailure: ConnectionFailed,
        keepAliveInterval: 10,
        userName: username,
        useSSL: true,
        password: password
    });
}

function Connected() {
    console.log("Broker MQTT Conectado");
    mqttClient.subscribe(subscription);
}

function ConnectionFailed(res) {
    console.log("Conexão ao Broker MQTT falhou:" + res.errorMessage);
}

function ConnectionLost(res) {
    if (res.errorCode != 0) {
        console.log("Conexão perdida:" + res.errorMessage);
        Connect();
    }
}



//VARIÁVEIS PARA ARMAZENAMENTO TEMPORÁRIO DE DETECÇÃO DE PASSAGEM COM SENTIDO E POSSIBILITAR VIA JS APRESENTAR NA TELA
var e_a = [0,0,0,0,0,0,0,0];
var s_a = [0,0,0,0,0,0,0,0];
var e_b = [0,0,0,0,0,0,0,0];
var s_b = [0,0,0,0,0,0,0,0];
var e_c = [0,0,0,0];
var s_c = [0,0,0,0];


//MENSAGEM DO DIA NO ALTO DA TELA
dayName = new Array("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")
monName = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro")
now = new Date
document.write("<h1> Hoje é " + dayName[now.getDay()] + ", " + now.getDate() + " de " + monName[now.getMonth()] + " de " + now.getFullYear() + ". </h1>")


//ATUALIZAÇÃO DOS CAMPOS DA TELA VIA JAVASCRIPT E TRANSFERENCIA DAS DETEÇÕES DE PASSAGEM COM SENTIDO PARA O BANCO MYSQL

function MessageArrived(message) {
    console.log(message.destinationName + " : " + message.payloadString);
    var topico = message.destinationName;
    var stopic = topico.split("/");
    

    for(h=1; h<9; h++){
        
    if (stopic[1] === 'a'+h) {
        if (message.payloadString == '1') {
                displayClass = "on";
                e_a[h-1] = e_a[h-1]+1;
                document.getElementById('a'+h).innerHTML=e_a[h-1];   
            }  
       else if (message.payloadString == '0') {
                displayClass = "off";
                s_a[h-1] = s_a[h-1]+1;
                document.getElementById('e'+h).innerHTML=s_a[h-1];                     
            }
        } 
    if (stopic[1] === 'b'+h) {
        if (message.payloadString == '1') {
                displayClass = "on";
                e_b[h-1] = e_b[h-1]+1;
                document.getElementById('b'+h).innerHTML=e_b[h-1];                      
            } 
       else if (message.payloadString == '0') {
                displayClass = "off";
                s_b[h-1] = s_b[h-1]+1;
                document.getElementById('d'+h).innerHTML=s_b[h-1];                     
            }
        }
    if (stopic[1] === 'c'+h && ('c'+h)<='c4') {
        if (message.payloadString == '1') {
                displayClass = "on";
                e_c[h-1] = e_c[h-1]+1;
                document.getElementById('c'+h).innerHTML=e_c[h-1];                      
            } 
       else if (message.payloadString == '0') {
                displayClass = "off";
                s_c[h-1] = s_c[h-1]+1;
                document.getElementById('c'+(h+4)).innerHTML=s_c[h-1];                     
            }
        }
 
        
        var topic = message.destinationName.split('/');
        if (topic.length == 3) {
            var ioname = topic[1];
            if (message.payloadString == '1')
            UpdateElement(ioname, displayClass);   
            else if (message.payloadString == '0'){
                if(ioname = topic[1]=='a'+h) {
                    ioname='e'+h;
                    UpdateElement(ioname, displayClass);
                }
                else if(ioname = topic[1]=='b'+h) {
                    ioname='d'+h;
                    UpdateElement(ioname, displayClass);
                }
                else if(ioname = topic[1]=='c'+h) {
                    ioname='c'+(h+4);
                    UpdateElement(ioname, displayClass);
                }
            }           
        }    
    }
    


    //esse comando deve ser emitido por todas as estações as 03, 04 e 05 horas da manhã pelo campo e pelo servidor
        if (stopic[1] == "reset") {
        if (message.payloadString == "RESET") {
            displayClass = "unknown";
            for(var h=1; h<9; h++) { 
                ioname='a'+h
                document.getElementById(ioname).innerHTML=null; 
                UpdateElement(ioname, displayClass);
            }
            for(var h=1; h<9; h++)  { 
                ioname='b'+h
                document.getElementById(ioname).innerHTML=null;
                UpdateElement(ioname, displayClass);
            }
            for(var h=1; h<9; h++)  {
                ioname='c'+h
                document.getElementById(ioname).innerHTML=null;
                UpdateElement(ioname, displayClass);
            }
            for(var h=1; h<9; h++)  {
                ioname='d'+h
                document.getElementById(ioname).innerHTML=null;
                UpdateElement(ioname, displayClass);
            }
            for(var h=1; h<9; h++)  {
                ioname='e'+h
                document.getElementById(ioname).innerHTML=null;
                UpdateElement(ioname, displayClass);
            }
        }       
    }     
}
