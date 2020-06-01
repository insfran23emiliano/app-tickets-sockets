var socket = io();

var searchParams = new URLSearchParams(window.location.search );//ie no soportado

console.log(searchParams.has('escritorio'));//boolean si exite la propiedad escritorio

if(!searchParams.has('escritorio')){
    window.location = 'index.html';

    throw new Error('El escritorio es necesario.');
}

var escritorio = searchParams.get('escritorio');
var label = $('small');
console.log('escritorio',escritorio);

$('h1').text('Escritorio '+ escritorio);

$('button').on('click',()=>{
    socket.emit('atenderTicket',{escritorio: escritorio}, function(res){
        console.log('=>',res);
        if(res === 'No hay ticket'){
            label.text(res);
            return
        };

        label.text('Ticket'+ res.numero);
    });
})
