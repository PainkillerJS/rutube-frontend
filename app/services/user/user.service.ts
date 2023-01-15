import axios from 'axios';

import type { UserModel } from '@models/user.interface';

const USER = '/user';

const userService = {
  async getAll() {
    return axios.get<UserModel[]>(USER);
  },

  async getById(id: number) {
    return axios.get<UserModel>(`${USER}/byId/${id}`);
  }
};

export default userService;
