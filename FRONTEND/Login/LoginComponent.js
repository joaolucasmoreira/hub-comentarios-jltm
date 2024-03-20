import { User } from "../Comment/models/user.model.js";
import { LoginService } from "../services/login.services.js";

const getLoginInputs = () => {
  return {
    username: document.getElementById("username"),
    password: document.getElementById("password"),
  };
};

const handleShowHide = () => {
  const newCommentTag = document.getElementById("form-comment");
  const loginTag = document.getElementById("login-form");

  if (newCommentTag.classList.contains("disabled")) {
    newCommentTag.classList.remove("disabled");
    loginTag.classList.add("disabled");
  } else {
    newCommentTag.classList.add("disabled");
    loginTag.classList.remove("disabled");
  }
};

const handleLogin = (event) => {
  event.preventDefault();
  const { username, password } = getLoginInputs();

  const user = new User(null, username.value, password.value);

  LoginService.apiAuthUser(user)
    .then((result) => {
      console.log(result);
      user.setId(result.id);
      user.setPassword(null)
      user.setFirstName(result.firstName);
      user.setlastname(result.lastName);
      handleShowHide();
    })
    .catch(`Login inválido. Erro:${error.message}`);

  console.log(user);

  handleShowHide();
};

const LoginComponent = {
  run: () => {
    const formLogin = document.getElementById("formLogin");
    formLogin.addEventListener("submit", handleLogin);
  },
};

export { LoginComponent };
