alert('Olá Mundo');
let numeroMaximo = 10;
let NumeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(NumeroSecreto);
let chute;
let Tentativas = 1;

// while significa enquanto
while(chute != NumeroSecreto) {
    chute = prompt(`Escolha um Número entre 1 e ${numeroMaximo}`);
// if significa se chute for igual ao numero secreto
    if (NumeroSecreto == chute) {
       break;
    } else {
        if(chute > NumeroSecreto) {
            alert(`O numero secreto e menor que ${chute}`);
        }else {
            alert(`O nuemro secreto e maior que ${chute}`);
        }
        //Tentativas = Tentativas + 1;
        Tentativas++;
    } 
}

let palavratentaiva = Tentativas > 1 ? 'Tentativas' : 'tentativa'
alert(`Isso ai voce descobriu o nuemro secreto ${NumeroSecreto} com ${Tentativas} ${palavratentaiva}`);

//   if(Tentativas > 1){
//        alert(`Isso ai voce descobriu o nuemro secreto ${NumeroSecreto} com ${Tentativas} tentativas`);
//   }else{
//      alert(`Isso ai voce descobriu o nuemro secreto ${NumeroSecreto} com ${Tentativas} tentativa`)
// }
