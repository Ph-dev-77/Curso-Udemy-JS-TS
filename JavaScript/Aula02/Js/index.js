const numero = Number(prompt('Digite seu numero: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto')

numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada ${numero ** 0.5} </p>`;
texto.innerHTML += `<p>${numero} é inteiro ${Number.isInteger(numero)} </p>`;
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)} </p>`;
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)} </p>`;
texto.innerHTML += `<p>Arredondado para baixo: ${numero.tofixed(2)} </p>`;
