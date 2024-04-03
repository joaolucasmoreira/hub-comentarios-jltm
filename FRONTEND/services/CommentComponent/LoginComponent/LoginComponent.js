import { setInputComment } from "../../../Comment/CommentComponent.js";
import { User } from "../../../models/user.model.js";
import { LoginService } from "../../../services/login.services.js";

const getLoginInputs = () => {
  return {
    username: document.getElementById("username"),
    password: document.getElementById("password"),
  };
};

const setElementsDataList = (firstname, lastname, username, password) => {
  const receiveDataList = document.getElementsByTagName("td");
  let hidePassword = "";

  for (let i = 0; i < password.length; i++) {
    hidePassword += "*";
  }

  receiveDataList[0].innerHTML = firstname;
  receiveDataList[1].innerHTML = lastname;
  receiveDataList[2].innerHTML = username;
  receiveDataList[3].innerHTML = hidePassword;
};

const logout = () => {
  const newCommentTag = document.getElementById("form-comment");
  const loginTag = document.getElementById("login-form");
  const dataUser = document.getElementById("dataUser");
  const navTag = document.getElementById("nav-bar");
  const inputUsername = document.getElementById("username")
  const inputPassword = document.getElementById("password")
   
  if (newCommentTag.classList.contains("disabled")) {
    dataUser.classList.add("disabled");
  } else {
    newCommentTag.classList.add("disabled");
  }
  
  loginTag.classList.remove("disabled");
  navTag.classList.add("disabled");

  inputUsername.value = ''
  inputPassword.value = ''

  setElementsDataList("","","","")

}

const handleShowHide = () => {
  const newCommentTag = document.getElementById("form-comment");
  const loginTag = document.getElementById("login-form");
  const navTag = document.getElementById("nav-bar");

  if (newCommentTag.classList.contains("disabled")) {
    newCommentTag.classList.remove("disabled");
    navTag.classList.remove("disabled");
    loginTag.classList.add("disabled");
  } else {
    newCommentTag.classList.add("disabled");
    navTag.classList.add("disabled");
    loginTag.classList.remove("disabled");
  }
};

const showDataList = () => {
  const loginTag = document.getElementById("form-comment");
  const dataUser = document.getElementById("dataUser");

  if (dataUser.classList.contains("disabled")) {
    loginTag.classList.add("disabled");
    dataUser.classList.remove("disabled");
  } else {
    loginTag.classList.remove("disabled");
    dataUser.classList.add("disabled");
  }
};

const showUserData = () => {
  const listener = document.getElementById("listData");
  listener.addEventListener("click", showDataList);
  const listenerButton = document.getElementById("backButton")
  listenerButton.addEventListener("click", showDataList);
};

const showLoginForm = () => {
  const listener = document.getElementById("outLogin")
  listener.addEventListener("click", logout);
}

const handleLogin = (event) => {
  event.preventDefault();
  const { username, password } = getLoginInputs();

  const user = new User(null, username.value, password.value);

  LoginService.apiAuthUser(user)
    .then((result) => {
      console.log(result);
      console.log(user.getPassword());
      setElementsDataList(
        result.firstname,
        result.lastname,
        result.username,
        user.getPassword()
      );
      user.setId(result.id);
      user.setPassword(null);
      user.setFirstName(result.firstname);
      user.setLastName(result.lastname);

      handleShowHide();
      showLoginForm()

      setInputComment(`${result.firstname} ${result.lastname}`);
    })
    .catch((error) => {
      alert(`Login inválido. Erro:${error.message}`);
    });
  showUserData();

  console.log(user);
};

const LoginComponent = {
  run: () => {
    const formLogin = document.getElementById("formLogin");
    formLogin.addEventListener("submit", handleLogin);
  },
};

export { LoginComponent };
