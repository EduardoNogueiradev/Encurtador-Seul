const button = document.getElementById('delay');
const endereco = document.getElementById('link');
const redireciona = document.getElementById('url').innerHTML;
const captcha = document.getElementById('recaptcha');

function recaptchaVerify() {
    button.classList.toggle('on');
    captcha.classList.toggle('off');
}

button.addEventListener('click', () =>{
    button.disabled = true;
    const valor = [ 5, 4, 3, 2, 1 ,0]    

    for( i = 0; i <= 5 ; i ++){
        setTimeout(function(i) {
            
            button.innerHTML = valor[i];

            if(button.innerHTML == 0){
                const buttonLink = document.getElementById('button-link');
                buttonLink.classList.toggle('on');
                button.classList.toggle('off');
                button.classList.remove('on');

                endereco.href = redireciona;
            }
            
        }, i * 1000, i);       
    }

})
