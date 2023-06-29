const form = document.getElementById('form-html');
const campoB = document.getElementById('campo-b');
let formEhValido = false;

function validaValor() {
    return parseInt(document.getElementById('campo-a').value) < parseInt(document.getElementById('campo-b').value);
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const campoA = document.getElementById('campo-a');
    const mensagemSucesso = `O número <b>${campoB.value}</b> é maior que o número <b>${campoA.value}`;

    formEhValido = validaValor();
    if (formEhValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        campoA.value = '';
        campoB.value = '';
        alert('Tudo certo! Seu formulário está válido.')
    } else {
        campoB.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
        alert('Algo está errado! Seu formulário está inválido.')
    }
})

campoB.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEhValido = validaValor(e.target.value);

    if (!formEhValido) {
        campoB.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        campoB.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
})