/*const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;

//const data = new Date(0 + tresHoras - umDia);
//const data = new Date(2026, 2, 22) //A, M, D, H, M, S, MS
const data = new Date('2026-04-20 20:59:44')

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()); // Mês começa do 0 
console.log('Ano', data.getFullYear());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia da semana', data.getDay()); // 0 - domingo, 1 - segunda..... 6 - Sábado


console.log(data.toString())


*/
function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}` 
}
function formataData(data){
    //console.log(data);

    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const seg = zeroAEsquerda(data.getSeconds());
    const hora = zeroAEsquerda(data.getHours());
    const diaSemana = zeroAEsquerda(data.getDay());
    const min = zeroAEsquerda(data.getMinutes());
    return `${dia}/ ${mes}/ ${ano}  ${hora}:${min}:${seg}`;
}
const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);