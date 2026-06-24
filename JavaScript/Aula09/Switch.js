function getDiaDaSemana(diaDaSemana) {
    let diaDaSemanaTexto;

    switch (diaDaSemana) {
        case 0:
            diaDaSemanaTexto = 'Domingo';
            return diaDaSemanaTexto;
        case 1:
            diaDaSemanaTexto = 'Segunda';
            return diaDaSemanaTexto;
        case 2:
            diaDaSemanaTexto = 'Terça';
            return diaDaSemanaTexto;
        case 3:
            diaDaSemanaTexto = 'Quarta';
            return diaDaSemanaTexto;
        case 4:
            diaDaSemanaTexto = 'Quinta';
            return diaDaSemanaTexto;
        case 5:
            diaDaSemanaTexto = 'Sexta';
            return diaDaSemanaTexto; 
        case 6:
            diaDaSemanaTexto = 'Sábado';
            return diaDaSemanaTexto; 
        default:
            diaDaSemanaTexto = '';
            return diaDaSemanatexto ;
    }

}



const data = new Date('2026-06-20 00:00:00');
let diaDaSemana = data.getDay();
const diaDaSemanaTexto = getDiaDaSemana(diaDaSemana);


console.log(diaDaSemana, diaDaSemanaTexto)

