import { api } from '@api/axios';
import type { AuthDataType } from '@services/auth/helpers/auth.helper';

const AUTH = '/auth';

const AuthService = {
  async login(email: string, password: string) {
    const response = await api.post<AuthDataType>(`${AUTH}/login`, {
      email,
      password
    });

    return response.data;
  },

  async register(email: string, password: string) {
    const response = await api.post<AuthDataType>(`${AUTH}/register`, {
      email,
      password
    });

    return response.data;
  }
};

export default AuthService;
