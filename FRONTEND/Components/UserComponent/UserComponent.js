import { StorageServices } from "../../services/localStorage.service.js";
import { randomColor } from "../../utils.js";

const loadUserData = () => {

    displayUserData(StorageServices.user.get())
}


const displayUserData = (user) => {
    const userContent = document.getElementById('user-content');
    userContent.innerHTML = ``
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
    ${iconeUsuario(randomColors().dark)}
    <div class="row d-inline-flex text-body-secondary rounded">
        <div class="col-4">
            <label class="form-label" for="user_name">Nome</label>
            <input class="form-control" type="text" name="user_name" id="user_firstname" value="${user.getFirstname()}"
                readonly>
        </div>
        <div class="col-4">
            <label class="form-label" for="user_lastname">Sobrenome</label>
            <input class="form-control" type="text" name="user_lastname" id="user_lastname"
                value="${user.getLastname()}" readonly>
        </div>
    </div>
    <div class="row d-inline-flex text-body-secondary  rounded">
        <div class="col-4">
            <label class="form-label" for="user_login">Login</label>
            <input class="form-control" type="text" name="user_login" id="user_login" value="${user.getUsername()}"
                readonly>
            </div>
        <div class="col-4">
            <label class="form-label" for="user_password">Senha</label>
            <input class="form-control" type="password" name="user_password" id="user_password"
                value="........" readonly>
        </div>
    </div>`

    userContent.appendChild(newDiv)

}

const handleShowHideUser = () => {
    const userDataTag = document.getElementById('user-data');
    const newCommentTag = document.getElementById('form-comentario');
    if (userDataTag.classList.contains('disabled')) {
        userDataTag.classList.remove('disabled');
        newCommentTag.classList.add('disabled');
        loadUserData();
    } else {
        userDataTag.classList.add('disabled');
        newCommentTag.classList.remove('disabled');
    }
}

const UserComponent = {
    run: () => {
        const btnMeusDados = document.getElementById('btnMeusDados');
        btnMeusDados.addEventListener('click', handleShowHideUser);
        const btnSairMDados = document.getElementById('btnSairMDados');
        btnSairMDados.addEventListener('click', handleShowHideUser);
    }
}

export { UserComponent }