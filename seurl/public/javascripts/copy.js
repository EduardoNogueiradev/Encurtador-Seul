const textInput = document.getElementById("text");
const copyButton = document.getElementById("copy");

copyButton.addEventListener('click', () =>{
  textInput.select();
  textInput.setSelectionRange(0, 99999)
  document.execCommand('copy');
  copyButton.innerHTML = 'Link Copiado!'
})






