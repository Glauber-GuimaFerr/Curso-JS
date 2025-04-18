import {contatos} from './bancoContatos.js'

let contato = {
    getTodosContatos: function(){
        return contatos
    },
    getContato: function(i_cont){
        return contatos[i_cont]
    },
    addContato: function(novoContato, destinoDOM){
        const cont = {
            nome: novoContato.nome,
            telefone: novoContato.telefone,
            email: novoContato.email
        }
        contatos.push(cont)

        destinoDOM.innerHTML = ""
        contatos.forEach((c) => {
            const btn_trash = document.createElement('img')
            btn_trash.setAttribute('src', './trash.png')
            btn_trash.addEventListener('click', (evt) => {
                const divToRemove = evt.target.closest('.contato');
                if (divToRemove) {
                    divToRemove.remove();
                    contatos.splice(index, 1);
                }
            })

            const div = document.createElement("div")
            div.setAttribute("class", "contato")
            const p_nome = document.createElement("p")
            p_nome.innerHTML = c.nome
            const p_telefone = document.createElement("p")
            p_telefone.innerHTML = c.telefone
            const p_email = document.createElement("p")
            p_email.innerHTML = c.email
            div.appendChild(p_nome)
            div.appendChild(p_telefone)
            div.appendChild(p_email)
            div.appendChild(btn_trash)
            destinoDOM.appendChild(div)
        })
    }
}

export default contato