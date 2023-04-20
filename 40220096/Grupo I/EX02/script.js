//Victoria Valentina da Costa Martinez N° 40220096
const tabelaClass = [
    {   nome: 'maria',
        pontos: 9, 
        nivel: 1
    },
    {
        nome: 'carlos',
        pontos: 7,
        nivel: 1
    },
    {
        nome: 'joao',
        pontos: 12,
        nivel: 2
    },
    {
        nome: 'Patricia',
        pontos: 14,
        nivel: 2
    }
]

function listaNivel(nivel){
    const listaJogadores = [];
    for (let jogadores of tabelaClass){
        if (jogadores.nivel == nivel){
            listaJogadores.push(jogadores.nome)
        }
    }
    return alert(`jogadores no nivel ${nivel}: ${listaJogadores}`)
}
listaNivel(1)

function somaPontos(nivel){
    let pontosJogadores = 0;
    for (let jogadores of tabelaClass){
        if (jogadores.nivel == nivel){
            pontosJogadores += +jogadores.pontos
        }
    }
    return alert(`total pontos no nivel ${nivel}: ${pontosJogadores}`) 
}
somaPontos(1)