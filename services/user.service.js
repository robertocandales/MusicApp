function login(username, password) {
    // firebase logig

    return ((password === 'qwerty') ? {user: 'John Mayer'} : false);
}

export const user_service = {
  login,
};
