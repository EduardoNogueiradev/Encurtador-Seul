const textInput = document.getElementById("text").value;
const copyButton = document.getElementById("copy");

copyButton.addEventListener('click', () =>{
    navigator.clipboard.writeText(textInput)
    copyButton.innerHTML = 'Link Copiado!'
})
    





