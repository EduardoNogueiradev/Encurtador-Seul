const button = document.getElementById('delay');
const endereco = document.getElementById('link');
const redireciona = document.getElementById('url').innerHTML;

button.addEventListener('click', () =>{
    button.disabled = true;
    const valor = [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ,0]    

    for( i = 0; i <= 10 ; i ++){
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
