import jwtDecode from "jwt-decode";
import { api } from "./api";

const USER_KEY = "@user";

export const signIn = (user) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));

  //setando o token como padrão em todas as requisições
  api.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
};

export const signOut = () => {
  localStorage.removeItem(USER_KEY);

  api.defaults.headers.common["Authorization"] = undefined;
};

export const getUser = () => {
  const { user } = JSON.parse(localStorage.getItem(USER_KEY));

  return user;
};

export const setUser = (user) => {
  const userLocal = JSON.parse(localStorage.getItem(USER_KEY));

  userLocal.userLocal = user;

  localStorage.setItem(USER_KEY, JSON.stringify(userLocal));
};

export const isSignedIn = () => {
  //recupero o user do  localStorange
  const user = JSON.parse(localStorage.getItem(USER_KEY));

  if (user && user.token) {
    //decodifico o token
    const jwtDecoded = jwtDecode(user.token);

    //pega a hora atual do sistema e coverte em segundos
    const nowTime = (Date.now() / 1000) | 0;

    //verifica se a data de expiração do token é menor que a data atual
    if (jwtDecoded.exp < nowTime) {
      //se form meno, faz logout
      return signOut();
    }

    //seta o token nas próximas requisições
    api.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
    return true;
  }

  return false;
};
