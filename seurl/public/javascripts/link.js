const button = document.getElementById('delay');
const endereco = document.getElementById('link');
const redireciona = document.getElementById('url').innerHTML;
const captcha = document.getElementById('recaptcha');
const section = document.getElementById('cont-link');
const indicator = document.getElementById('cont');
const elementLoad = document.getElementById('load');

const loading = new IntersectionObserver( entries => {

    Array.from(entries).forEach(entry => {
        if (entry.intersectionRatio >= 1) {
            console.log("entrou")
            elementLoad.classList.toggle('off')
        }
    })

    }, {
    threshold: [0.25 , 0.5 , 0.75 , 1]
    })
    Array.from(captcha).forEach( element => {
    dashup.observe(element)
})

function recaptchaVerify() {
    button.classList.toggle('on');
    indicator.classList.toggle('on');
    section.classList.toggle('on');
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
                button.classList.toggle('off-important');
                button.classList.remove('on');

                endereco.href = redireciona;
            }
            
        }, i * 1000, i);       
    }

})
