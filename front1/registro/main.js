'use strict';
var blanco=document.getElementById('Blanco')
var morado=document.getElementById('Morado')
var verde=document.getElementById('Verde')


blanco.onclick= enviarBlanco;
morado.onclick= enviarMorado;
verde.onclick= enviarVerde;


function enviarBlanco(){
console.log(1);
var xml= new XMLHttpRequest();
xml.open("Get", "http://192.168.137.254:8080/set_color?color=1", false);
xml.send();

}

function enviarMorado(){
console.log(2);
var xml= new XMLHttpRequest();
xml.open("Get", "http://192.168.137.254:8080/set_color?color=2", false);
xml.send();

}

function enviarVerde(){
console.log(3);
var xml= new XMLHttpRequest();
xml.open("Get", "http://192.168.137.254:8080/set_color?color=3", false);
xml.send();

}

function enviarIntensidad(){


console.log(document.getElementById("intensidad").value);
var xml= new XMLHttpRequest();
xml.open("Get", "http://192.168.137.254:8080/set_intensity?intensity="+intensidad.value, false);
xml.send();

}