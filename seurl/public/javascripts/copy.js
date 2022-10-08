const textInput = document.getElementById("text").value;
const copyButton = document.getElementById("copy");

copyButton.addEventListener('click', () =>{
    textInput.Document.execCommand('copy');
    copyButton.innerHTML = 'Link Copiado!'
})
    





