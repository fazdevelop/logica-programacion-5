const numAleatorio = parseInt(Math.floor(Math.random() * 101));
console.log(numAleatorio);

function adivinar () {
    const num = parseInt(document.getElementById('numero').value);

    const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    const appendAlert = (message, type) => {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible" role="alert">`,
            `   <div>${message}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('')
alertPlaceholder.append(wrapper)
    }


    if (num === numAleatorio) {
        appendAlert(`Felicidades !!! el numero era ${numAleatorio}`, 'success');
    } else if (num > numAleatorio) {
        appendAlert(`${num} | Intenta un numero mas bajo`, 'danger')
    } else {
        appendAlert(`${num} | Intenta un numero mas alto`, 'danger')
    }
}
