const caixa1 = document.querySelector('#caixa1')
const btn_c = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelectorAll('#c1_2')

console.log(caixa1.hasChildNodes())
console.log(btn_c[0].hasChildNodes())
console.log(btn_c[0].childNodes)

console.log(btn_c[0].children.length > 0 ? 'Possui filhos' : 'NÃO possui filhos')

console.log(caixa1.children[1].innerHTML = 'TESTE')

console.log(c1_2.parentNode.parentNode.children[4])

//hasChildNodes retorna true se o elemento possuir filhos
//childNodes retorna o tipo da Node List
//firstChild e lastChild só retornam o tipo do elemento
//parentNode retorna o pai do elemento