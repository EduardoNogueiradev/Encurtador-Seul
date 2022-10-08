const textInput = document.getElementById("text").value;
const copyButton = document.getElementById("copy");

copyButton.addEventListener('click', () =>{
    document.execCommand('copy').textInput;
    copyButton.innerHTML = 'Link Copiado!'
})
    





