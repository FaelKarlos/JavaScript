//Anagramas
//Função que compara se duas palavras são anagramas 

function compare (a, b) {
//Métodod slpit() permite a divisão/separação de strings.
// Já o método sort() permite separar strings em um vetor de ordem crescente.
  y = a.split("").sort();
  z = b.split("").sort();// Ao utilizar os dois juntos estamos separando a 
  //string de entrada e salvando em um vetor de strings ordenado

// Neste for() defini-se que irá incrementar o total/tamanho da string a aqui tratada como 
//vetor y.
  for (i=0; i<y.length; i++) {

    if(y.length===z.length) {// Este IF indica que se o tamanho do vetor y for exatamente igual ao vetor z
    	//então entra para a condição abaixo onde compara cada string dentro dos vedores.
      if (y[i]===z[i]){// Se o vetor possuir todas as strings armazenadas nele exatamente igual ao outro 
      	// vetor em comparação, então entra nesta condição A e B são anagramas, para o FOR().
        console.log(a + " and " + b + " are anagrams!");
        break;
      }
      else {//Se não A e B não são anagramas, para o FOR().
        console.log(a + " and " + b + " are not anagrams.");
        break;
      }
    }
    else {//Se o vetor y e o vetor z possuirem tamanhos diferentes não são anagramas.
      console.log(a + " has a different amount of letters than " + b);
    }
    break;
  }

}

compare("mary", "arms");

function anagrama(a, b){
	x= a.split("").sort().join("");
	y= b.split("").sort().join("");
	for(i =0; i<x.length;i++){
		if (x.length===y.length) {
		 if (x===y) {
      console.log(true);
      break;
		  }else{
          console.log(false);
          break;
		    }
	  }else{
      console.log(false);
      break;
		    }
  }
}

anagrama("AABA","BAAA");

function numMaior(a, b){

for (var i = 0; i < b.length; i++) {
	if(a[i]>b[i]){
		return a[i];
	}else{
		return b[i];
	}
}

}

numMaior('3,2,5,9','12,1,1,1');