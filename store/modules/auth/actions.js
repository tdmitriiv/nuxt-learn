export default {
  auth(context, authData) {
    const authUrl = authData.isLogin
      ? `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${process.env.fbAPIKey}`
      : `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${process.env.fbAPIKey}`;
    return this.$axios
      .$post(authUrl, {
        token: "",
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
      .then(result => {
        context.commit("setToken", result.idToken);
        console.log(result);
      })
      .catch(error => {
        console.error(error);
      });
  }
};
