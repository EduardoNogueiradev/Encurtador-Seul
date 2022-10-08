const textInput = document.getElementById("text");
const copyButton = document.getElementById("copy");

copyButton.addEventListener('click', () =>{
    textInput.value.Document.execCommand('copy');
    copyButton.innerHTML = 'Link Copiado!'
})
    





