export const signIn = (user) => {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  
}