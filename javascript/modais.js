function editarmodal() {

    const modal = document.getElementById("modal-edit")

    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {

        if (e.target.id == 'edit-save') {

            modal.classList.remove("abrir")
        }
    })
}

function newprod() {

    const enviar = document.getElementById("new-prod")

    enviar.classList.add('abrir')

    modal.addEventListener('clicker', (e) => {

        if (e.target.id == "submit") {

            enviar.classList.remove('abrir')

        }
    })
}


function cog() {

    const enviar = document.getElementById("cog")

    enviar.classList.add('abrir')

    modal.addEventListener('clicker', (e) => {

        if (e.target.id == "edit-save") {

            enviar.classList.remove('abrir')

        }
    })
}