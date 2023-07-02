const form = document.getElementById('form-html');
const campoB = document.getElementById('campo-b');
let formEhValido = false;

function validaValor() {
    const campoA = document.getElementById('campo-a');
    const mensagemSucesso = document.querySelector('.success-message');
    const campoAValue = parseInt(campoA.value);
    const campoBValue = parseInt(campoB.value);

    if (campoAValue < campoBValue) {
        mensagemSucesso.style.display = 'block';
        mensagemSucesso.innerHTML = `O número <b>${campoBValue}</b> é maior que o número <b>${campoAValue}</b>`;
        return true;
    } else {
        mensagemSucesso.style.display = 'none';
        return false;
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    formEhValido = validaValor();
    if (formEhValido) {
        const campoA = document.getElementById('campo-a');
        const campoB = document.getElementById('campo-b');
        const containerMensagemSucesso = document.querySelector('.success-message');

        campoA.value = '';
        campoB.value = '';

        containerMensagemSucesso.style.display = 'block';
        alert('Tudo certo! Seu formulário está válido.')
    } else {
        campoB.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
        alert('Algo está errado! Seu formulário está inválido.');
    }
});

campoB.addEventListener('keyup', function() {
    formEhValido = validaValor();

    if (!formEhValido) {
        campoB.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        campoB.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});