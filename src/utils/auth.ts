class Auth {
  static isLogined(): Promise<any> {
    // 你可以这里做请求做用户验证

    // return Promise.reject(true)
    return Promise.resolve(false);
  }
}

export default Auth;
