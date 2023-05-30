const caixaDialogo = document.getElementById("caixaDialogo")
const form = document.getElementById("formulario")
const caixaResultado = document.getElementById("resultado")
const iframeBody = $("#iframev").contents().find("body");
const importBootstrap = '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"> <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>'

form.addEventListener("submit", event=>{
    console.log("função funcionando")
event.preventDefault();
console.log(caixaDialogo.value)
//caixaResultado.innerHTML = caixaDialogo.value;
iframeBody.html(importBootstrap + caixaDialogo.value)
})