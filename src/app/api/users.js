import { Api } from './api';

export class UserApi extends Api {
  /**
   * ....
   */
  static async regUser(data) {
    return this.post('/users/signup', data);
  }

  static async loginUser(data) {
    return this.post('/users/signin', data);
  }

  static async currentUser(token) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(config);
    const resp = this.get('./users/current', config);
    console.log(resp);
    return resp;
  }
}