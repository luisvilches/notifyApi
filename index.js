
var notificacion = {
    icon: 'http://www.santander.cl/promociones/bitmaps/santander_facebook.jpg',
    title: 'Nespresso',
    body: '20% de descuento en máquinas de café Profesionales',
    timeClose: 15000,
    onclick: function(){
        window.open('https://mov.santander.cl/beneficios/pyme/products/nespresso','_blank')
    }
};
var notificacion2 = {
    icon: 'http://www.santander.cl/promociones/bitmaps/santander_facebook.jpg',
    title: 'Nespresso 2',
    body: '20% de descuento en máquinas de café Profesionales',
    timeClose: 15000,
    onclick: function(){
        window.open('https://mov.santander.cl/beneficios/pyme/products/nespresso','_blank')
    }
};


var n = new Notify({style:'notify',position: 'top-right'});

function click(){
    n.create(notificacion);
    console.log('oks')
}

function click2(){
    n.create(notificacion2);
    console.log('oks2')
}

var btn = document.getElementById('btn');
btn.addEventListener('click', click,true);

var btn2 = document.getElementById('btn2');
btn2.addEventListener('click', click2,true);

