
//Pegar referência da img que está no banner "lençois"
let banner = document.querySelector(".banner-lencois");
//Pegar referência da img que está no banner "modal"
let modal = document.querySelector(".modal"); 

//alterndo o css por meio da função
function exibirModal(){
    let modal = document.querySelector(".modal"); 
    modal.style.display = 'block';
}
function fecharModal(){
    modal.style.display = 'none';
}

//adicionando eventos de "click"
banner.addEventListener("click",exibirModal);
modal.addEventListener("click",fecharModal);
