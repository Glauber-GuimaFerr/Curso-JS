const timer = document.querySelector('#timer')

const tmpini = Date.now()

const contador = () => {
    const tmpatual = Date.now() 
    let cont = tmpatual - tmpini
    let seg = Math.floor(cont/1000)
    timer.innerHTML = converter(seg)
}

const converter = (seg) => {
    let hora = Math.floor(seg/3600)
    let resto = seg % 3600
    let minuto = Math.floor(resto/60)
    let segundo = Math.floor(resto % 60)
    hora = hora < 10 ? '0' + hora:hora
    minuto = minuto < 10 ? '0' + minuto:minuto
    segundo = segundo < 10 ? '0' + segundo: segundo
    let form = `${hora}:${minuto}:${segundo}`
    return form
}

setInterval(contador, 1000)