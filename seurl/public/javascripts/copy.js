const textInput = document.getElementById("text").value;
const copyButton = document.getElementById("copy");

copyButton.addEventListener('click', () =>{
    Document.execCommand('copy').textInput;
    copyButton.innerHTML = 'Link Copiado!'
})
    





