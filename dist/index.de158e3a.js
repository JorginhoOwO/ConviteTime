const dataDoEvento = new Date("sep 06 2023 21:00:00");
const timeStampDoEvento = dataDoEvento.getTime();
const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
    const dia = 86400000;
    const hora = 3600000;
    const min = 60000;
    const diasAteOEvento = Math.floor(distanciaAteOEvento / dia);
    const horasAteOEvento = Math.floor(distanciaAteOEvento % dia / hora);
    const minutosAteOEvento = Math.floor(distanciaAteOEvento % hora / min);
    const segundosAteOEvento = Math.floor(distanciaAteOEvento % min / 1000);
    console.log(diasAteOEvento);
    console.log(horasAteOEvento);
    console.log(minutosAteOEvento);
    console.log(segundosAteOEvento);
    document.getElementById("contime").innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
}, 1000);

//# sourceMappingURL=index.de158e3a.js.map
