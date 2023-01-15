import { UserTypes } from '@models/user.interface';

export interface AuthDataType {
  user: Pick<UserTypes, 'id' | 'email'> | null;
  accessToken: string;
}
