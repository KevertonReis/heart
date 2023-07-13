let txt = document.querySelector("p.txt-love")

txt.addEventListener("click", mudatexto)
txt.addEventListener("mouseout", voltatexto)

function mudatexto() {
    txt.innerText = "meu amor"   
}

function voltatexto() {
    txt.innerText = "te amo"
}

