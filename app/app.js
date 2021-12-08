const socket = io('ws://localhost:8080');

socket.on('message', text => {

    texte = text.split(':')

    const el = document.createElement('p');
    el.innerHTML = `${texte[0].bold()} : ${texte[1]}`;
    document.querySelector('div').appendChild(el)

});

document.querySelector('button').onclick = () => {

    const text = document.querySelector('input').value;
    socket.emit('message', text)
    document.querySelector('input').value = ''
}