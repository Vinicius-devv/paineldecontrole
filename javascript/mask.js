
function showpassword() {

    var Inputpass = document.getElementById("password")
    var showpwd = document.getElementById("show-pwd")

    if (Inputpass.type === 'password') {

        Inputpass.setAttribute('type', 'text')
        showpwd.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')

    } else {

        Inputpass.setAttribute('type', 'password')
        showpwd.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')

    }
}