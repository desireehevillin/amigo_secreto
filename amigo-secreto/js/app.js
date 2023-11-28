// isso é um array e todo array vem acompanhando de length que determina até onde vai
let amigos = [];

//Adicionar o nome na lista
function adicionar (){
    let amigo = document.getElementById('nome-amigo');
        if (amigo.value == ''){
            alert('Informe o nome do amigo!');
            return;
        }
        if(amigos.includes(amigo.value)){
            alert('Nome ja adicionado!');
            return;
        }
    let lista = document.getElementById('lista-amigos');
    //adicionar item no array
    amigos.push(amigo.value);

    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigo.value = '';
}
//Sortear os nomes da lista
function sortear() {
    if (amigos.length < 4) {
        alert('Adicone pelo menos 4 amigos!');
        return;
    }
 embaralha(amigos);
 let sorteio = document.getElementById('lista-sorteio');

 for ( let i = 0; i < amigos.length; i++){

    if (i == amigos.length - 1){
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
    } else {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
    }
 }
}
//funcão pronta retirada do site
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

//função reiniciar

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}